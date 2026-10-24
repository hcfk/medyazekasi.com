import { readConsentPreferences } from "./consent";

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (readConsentPreferences()?.analytics !== true) return;
  if (/^GTM-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GTM_ID || "")) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ...params, event: name });
    return;
  }
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params || {});
}
