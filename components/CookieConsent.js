'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const STORAGE_KEY = 'flowitec-cookie-consent';
const OPEN_EVENT = 'flowitec:open-cookie-settings';

function readConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked — the choice still applies for this visit
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setShowBanner(stored !== 'accepted' && stored !== 'declined');

    const open = () => setShowBanner(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (value) => {
    writeConsent(value);
    setConsent(value);
    setShowBanner(false);
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 p-4"
        >
          <div className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow-xl md:flex md:items-center md:gap-6">
            <p className="text-sm text-gray-700 mb-4 md:mb-0 md:flex-1">
              We use analytics to understand how visitors use our website and to improve its performance.
              Analytics only run if you accept. Essential site functions work either way. See our{' '}
              <Link href="/legal/privacy#cookies" className="text-primary underline">
                Privacy Policy
              </Link>{' '}
              for details.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => choose('declined')}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose('accepted')}
                className="btn primary px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
