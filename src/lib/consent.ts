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
