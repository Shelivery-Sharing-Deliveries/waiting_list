'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init('phc_dlYjzjIRrbgIpgWuuyyoqciKQKyFTMOZ9RvZw0CmVkT', {
      api_host: 'https://eu.i.posthog.com',
      defaults: '2026-01-30',
      capture_pageview: false // Disable automatic pageview capture, as we'll capture it manually
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
