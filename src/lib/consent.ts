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

  const stored = window.localStorage.getItem(consentStorageKey);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as ConsentPreferences;
  } catch {
    return null;
  }
}

export function writeConsentPreferences(preferences: ConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(consentStorageKey, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent(consentEventName, { detail: preferences }));
}
