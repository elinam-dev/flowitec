'use client';

import { openCookieSettings } from '@/components/CookieConsent';

export default function CookieSettingsLink({ className }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie Settings
    </button>
  );
}
