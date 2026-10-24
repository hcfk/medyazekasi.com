export const consentStorageKey = "medyazekasi-cookie-consent";
export const consentEventName = "medyazekasi:cookie-consent-updated";

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

export function createConsentPreferences(
  analytics: boolean,
): ConsentPreferences {
  return {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
}

export function readConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(consentStorageKey);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return parsed?.necessary === true && typeof parsed.analytics === "boolean"
      ? parsed as ConsentPreferences : null;
  } catch {
    return null;
  }
}

export function writeConsentPreferences(preferences: ConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(consentStorageKey, JSON.stringify(preferences));
  } catch {
    // Do not load analytics when a preference cannot be read back reliably.
  }
  window.dispatchEvent(new CustomEvent(consentEventName, { detail: preferences }));
}
