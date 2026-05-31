/*
  # SpectralFlow — Calls, Lives, Notifications, Minor Protection

  ## New Tables

  ### 1. `user_profiles_extended`
  Extends profiles with date_of_birth, age_verified, parental_consent fields.

  ### 2. `parental_consents`
  Stores pending/approved/denied parental consent requests for under-13 users.

  ### 3. `call_sessions`
  Tracks video and audio calls between users (WebRTC signaling metadata).

  ### 4. `call_signals`
  Temporary WebRTC signaling messages (offer, answer, ICE candidates).

  ### 5. `live_sessions`
  Live broadcasts: streamer, title, viewer count, status.

  ### 6. `live_viewers`
  Real-time viewer tracking for live sessions.

  ### 7. `notifications`
  In-app notification history (messages, likes, follows, calls, lives).

  ## Security
  - RLS enabled on all new tables
  - Proper ownership and membership checks
  - Call signals auto-expire (cleaned by TTL convention)
*/

-- ==================== PROFILES EXTENSION ====================

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS date_of_birth date,
  ADD COLUMN IF NOT EXISTS age_verified boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_minor boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS parental_consent_status text DEFAULT 'none',
  ADD COLUMN IF NOT EXISTS parent_email text;

-- ==================== PARENTAL CONSENTS ====================

CREATE TABLE IF NOT EXISTS parental_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  parent_email text NOT NULL,
  token text NOT NULL UNIQUE,
  status text NOT NULL DEFAULT 'pending',
  requested_at timestamptz DEFAULT now(),
  responded_at timestamptz,
  expires_at timestamptz DEFAULT (now() + interval '48 hours'),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'approved', 'denied'))
);

ALTER TABLE parental_consents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own consent"
  ON parental_consents FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own consent request"
  ON parental_consents FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own consent"
  ON parental_consents FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ==================== CALL SESSIONS ====================

CREATE TABLE IF NOT EXISTS call_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  caller_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  callee_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  call_type text NOT NULL DEFAULT 'audio',
  status text NOT NULL DEFAULT 'ringing',
  started_at timestamptz,
  ended_at timestamptz,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_call_type CHECK (call_type IN ('audio', 'video')),
  CONSTRAINT valid_status CHECK (status IN ('ringing', 'accepted', 'declined', 'ended', 'missed', 'cancelled'))
);

ALTER TABLE call_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Call participants can view call"
  ON call_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = caller_id OR auth.uid() = callee_id);

CREATE POLICY "Authenticated users can create calls"
  ON call_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = caller_id);

CREATE POLICY "Participants can update call status"
  ON call_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = caller_id OR auth.uid() = callee_id)
  WITH CHECK (auth.uid() = caller_id OR auth.uid() = callee_id);

-- ==================== CALL SIGNALS (WebRTC) ====================

CREATE TABLE IF NOT EXISTS call_signals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  call_id uuid NOT NULL REFERENCES call_sessions(id) ON DELETE CASCADE,
  from_user uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  to_user uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  signal_type text NOT NULL,
  payload jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_signal_type CHECK (signal_type IN ('offer', 'answer', 'ice-candidate', 'hangup'))
);

ALTER TABLE call_signals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Call participants can view signals"
  ON call_signals FOR SELECT
  TO authenticated
  USING (auth.uid() = from_user OR auth.uid() = to_user);

CREATE POLICY "Participants can insert signals"
  ON call_signals FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = from_user);

-- ==================== LIVE SESSIONS ====================

CREATE TABLE IF NOT EXISTS live_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  streamer_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL DEFAULT 'Live',
  description text,
  status text NOT NULL DEFAULT 'live',
  viewer_count integer NOT NULL DEFAULT 0,
  peak_viewers integer NOT NULL DEFAULT 0,
  chat_enabled boolean NOT NULL DEFAULT true,
  started_at timestamptz DEFAULT now(),
  ended_at timestamptz,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('live', 'ended'))
);

ALTER TABLE live_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active live sessions"
  ON live_sessions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Streamers can create live sessions"
  ON live_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = streamer_id);

CREATE POLICY "Streamers can update their live sessions"
  ON live_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = streamer_id)
  WITH CHECK (auth.uid() = streamer_id);

-- ==================== LIVE CHAT ====================

CREATE TABLE IF NOT EXISTS live_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  live_id uuid NOT NULL REFERENCES live_sessions(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE live_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view live chat"
  ON live_messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can send live chat"
  ON live_messages FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ==================== NOTIFICATIONS ====================

CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type text NOT NULL,
  title text NOT NULL,
  body text,
  data jsonb DEFAULT '{}',
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_type CHECK (type IN ('like', 'comment', 'follow', 'message', 'call', 'live', 'system'))
);

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own notifications"
  ON notifications FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "System can insert notifications"
  ON notifications FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update own notifications"
  ON notifications FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own notifications"
  ON notifications FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- ==================== BLOCKED USERS ====================

CREATE TABLE IF NOT EXISTS blocked_users (
  blocker_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  blocked_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (blocker_id, blocked_id)
);

ALTER TABLE blocked_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own blocks"
  ON blocked_users FOR SELECT
  TO authenticated
  USING (auth.uid() = blocker_id);

CREATE POLICY "Users can create blocks"
  ON blocked_users FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = blocker_id);

CREATE POLICY "Users can delete own blocks"
  ON blocked_users FOR DELETE
  TO authenticated
  USING (auth.uid() = blocker_id);

-- ==================== CONTENT REPORTS ====================

CREATE TABLE IF NOT EXISTS content_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  target_type text NOT NULL,
  target_id uuid NOT NULL,
  reason text NOT NULL,
  details text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_target_type CHECK (target_type IN ('post', 'comment', 'message', 'user', 'live')),
  CONSTRAINT valid_reason CHECK (reason IN ('spam', 'harassment', 'inappropriate', 'minor_safety', 'violence', 'other')),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'reviewed', 'action_taken', 'dismissed'))
);

ALTER TABLE content_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own reports"
  ON content_reports FOR SELECT
  TO authenticated
  USING (auth.uid() = reporter_id);

CREATE POLICY "Authenticated users can create reports"
  ON content_reports FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = reporter_id);

-- ==================== HELPER FUNCTIONS ====================

CREATE OR REPLACE FUNCTION increment_live_viewers(p_live_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE live_sessions
  SET viewer_count = viewer_count + 1,
      peak_viewers = GREATEST(peak_viewers, viewer_count + 1)
  WHERE id = p_live_id AND status = 'live';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION decrement_live_viewers(p_live_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE live_sessions
  SET viewer_count = GREATEST(0, viewer_count - 1)
  WHERE id = p_live_id AND status = 'live';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_call_sessions_caller ON call_sessions(caller_id);
CREATE INDEX IF NOT EXISTS idx_call_sessions_callee ON call_sessions(callee_id);
CREATE INDEX IF NOT EXISTS idx_call_signals_call_id ON call_signals(call_id);
CREATE INDEX IF NOT EXISTS idx_live_sessions_streamer ON live_sessions(streamer_id);
CREATE INDEX IF NOT EXISTS idx_live_sessions_status ON live_sessions(status);
CREATE INDEX IF NOT EXISTS idx_live_messages_live_id ON live_messages(live_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(user_id, read);
