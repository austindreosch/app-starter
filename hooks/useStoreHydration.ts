'use client';

import { useEffect, useState } from 'react';
import { useAppStore } from '@/store';

/**
 * Hook to handle store hydration from persisted state
 * Prevents hydration mismatches between server and client
 */
export function useStoreHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Wait for store to hydrate from localStorage
    const unsubscribe = useAppStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });

    return unsubscribe;
  }, []);

  return isHydrated;
}