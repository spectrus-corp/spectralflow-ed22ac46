CREATE TABLE IF NOT EXISTS public.subscriptions (
  subscriber_id uuid NOT NULL,
  target_id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  PRIMARY KEY (subscriber_id, target_id),
  CHECK (subscriber_id <> target_id)
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "subs_select_all" ON public.subscriptions FOR SELECT USING (true);
CREATE POLICY "subs_insert_own" ON public.subscriptions FOR INSERT WITH CHECK (auth.uid() = subscriber_id);
CREATE POLICY "subs_delete_own" ON public.subscriptions FOR DELETE USING (auth.uid() = subscriber_id);

CREATE INDEX IF NOT EXISTS subscriptions_target_idx ON public.subscriptions (target_id);
CREATE INDEX IF NOT EXISTS subscriptions_subscriber_idx ON public.subscriptions (subscriber_id);