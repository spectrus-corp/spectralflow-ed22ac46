import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useRealtimeMessages(conversationId: string, callback: (payload: unknown) => void) {
  useEffect(() => {
    const channel = supabase
      .channel('messages-channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        callback
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);
}
