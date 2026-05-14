import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { CreatePost } from "@/components/create-post";
import { PostCard, type PostWithMeta } from "@/components/post-card";
import { fetchFeedPosts } from "@/lib/posts";

export const Route = createFileRoute("/_app/feed")({
  component: FeedPage,
});

function FeedPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<PostWithMeta[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user) {
      setPosts([]);
      setLoading(false);
      return;
    }

    try {
      const feedPosts = await fetchFeedPosts(user.id);
      setPosts(feedPosts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  // Realtime: refresh on any post/like/comment change
  useEffect(() => {
    const channel = supabase
      .channel("feed-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "posts" }, () => load())
      .on("postgres_changes", { event: "*", schema: "public", table: "likes" }, () => load())
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [load]);

  return (
    <div className="mx-auto max-w-2xl space-y-4 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold">Flux</h1>
        <p className="text-sm text-muted-foreground">Le pouls de SpectralFlow.</p>
      </div>
      {user ? <CreatePost onPosted={load} /> : null}
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          {user ? "Le flux est silencieux. Sois le premier à publier." : "Connecte-toi pour voir le flux et publier des posts."}
        </div>
      ) : (
        posts.map((p) => <PostCard key={p.id} post={p} onChange={load} />)
      )}
    </div>
  );
}
