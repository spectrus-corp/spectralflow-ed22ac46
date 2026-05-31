ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_target_id_fkey
  FOREIGN KEY (target_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_subscriber_id_fkey
  FOREIGN KEY (subscriber_id) REFERENCES public.profiles(id) ON DELETE CASCADE;