import { supabase } from "@/integrations/supabase/client";

export interface FeedPost {
  id: string;
  user_id: string;
  content: string | null;
  youtube_url: string | null;
  created_at: string;
  profile: {
    username: string;
    display_name: string | null;
    avatar_url: string | null;
  } | null;
  likeCount: number;
  liked: boolean;
  commentCount: number;
}

export interface PublishPostPayload {
  content?: string;
  youtubeUrl?: string;
}

const EMPTY_UUID = "00000000-0000-0000-0000-000000000000";

export async function publishPost(userId: string, payload: PublishPostPayload) {
  const content = payload.content?.trim();
  const youtube_url = payload.youtubeUrl?.trim() || null;

  if (!content && !youtube_url) {
    throw new Error("Ajoute du texte ou un lien YouTube avant de publier.");
  }

  const { error } = await supabase.from("posts").insert({
    user_id: userId,
    content: content || null,
    youtube_url,
  });

  if (error) {
    throw error;
  }
}

export async function fetchFeedPosts(userId: string, limit = 50): Promise<FeedPost[]> {
  const { data: rawPosts, error: postsError } = await supabase
    .from("posts")
    .select("id,user_id,content,youtube_url,created_at,profile:profiles(username,display_name,avatar_url)")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (postsError) {
    throw postsError;
  }

  const posts = (rawPosts ?? []) as any[];
  if (posts.length === 0) {
    return [];
  }

  const ids = posts.map((post) => post.id);
  const [likesRes, commentsRes] = await Promise.all([
    supabase
      .from("likes")
      .select("post_id,user_id")
      .in("post_id", ids.length ? ids : [EMPTY_UUID]),
    supabase
      .from("comments")
      .select("post_id")
      .in("post_id", ids.length ? ids : [EMPTY_UUID]),
  ]);

  const likesByPost = new Map<string, { count: number; mine: boolean }>();
  for (const like of likesRes.data ?? []) {
    const existing = likesByPost.get(like.post_id) ?? { count: 0, mine: false };
    existing.count += 1;
    if (like.user_id === userId) existing.mine = true;
    likesByPost.set(like.post_id, existing);
  }

  const commentsByPost = new Map<string, number>();
  for (const comment of commentsRes.data ?? []) {
    commentsByPost.set(comment.post_id, (commentsByPost.get(comment.post_id) ?? 0) + 1);
  }

  return posts.map((post) => ({
    id: post.id,
    user_id: post.user_id,
    content: post.content,
    youtube_url: post.youtube_url,
    created_at: post.created_at,
    profile: post.profile as FeedPost["profile"],
    likeCount: likesByPost.get(post.id)?.count ?? 0,
    liked: likesByPost.get(post.id)?.mine ?? false,
    commentCount: commentsByPost.get(post.id) ?? 0,
  }));
}
