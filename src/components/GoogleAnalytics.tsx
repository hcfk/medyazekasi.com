"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { consentEventName, readConsentPreferences } from "@/lib/consent";
import { trackEvent } from "@/lib/analytics";

const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
const configured = /^G-[A-Z0-9]+$/.test(gaId) && (!gtmId || /^GTM-[A-Z0-9]+$/.test(gtmId));
const denied = {
  analytics_storage: "denied", ad_storage: "denied",
  ad_user_data: "denied", ad_personalization: "denied",
};
type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  medyaConsentInitialized?: boolean;
  medyaAnalyticsLoaded?: boolean;
  [key: string]: unknown;
};

function queue() {
  const target = window as unknown as TrackingWindow;
  if (!target.medyaConsentInitialized) {
    target.dataLayer = target.dataLayer || [];
    // Google processes Arguments objects as commands, not GTM event objects.
    // eslint-disable-next-line prefer-rest-params
    target.gtag = function () { target.dataLayer!.push(arguments); };
    target.gtag("consent", "default", denied);
    target.medyaConsentInitialized = true;
  }
  return target;
}

function clearCookies() {
  const names = document.cookie.split(";").map(c => c.split("=")[0].trim()).filter(n => /^_ga(?:_|$)/.test(n));
  const parts = location.hostname.split(".");
  for (const name of names) {
    const expired = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = expired;
    for (let index = 0; index < parts.length - 1; index++) {
      document.cookie = `${expired}; Domain=${parts.slice(index).join(".")}`;
      document.cookie = `${expired}; Domain=.${parts.slice(index).join(".")}`;
    }
  }
}

function synchronize() {
  const target = queue();
  const enabled = readConsentPreferences()?.analytics === true;
  target.gtag!("consent", "update", { ...denied, analytics_storage: enabled ? "granted" : "denied" });
  target[`ga-disable-${gaId}`] = !enabled;
  if (!enabled) {
    clearCookies();
    if (target.medyaAnalyticsLoaded) location.reload();
    return false;
  }
  if (target.medyaAnalyticsLoaded) return true;
  const script = document.createElement("script");
  script.id = "medyazekasi-analytics-loader";
  script.async = true;
  if (gtmId) {
    target.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  } else {
    target.gtag!("js", new Date());
    target.gtag!("config", gaId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  }
  target.medyaAnalyticsLoaded = true;
  document.head.appendChild(script);
  return true;
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const lastPage = useRef<string | null>(null);
  useEffect(() => {
    if (!configured) return;
    const sync = () => setEnabled(synchronize());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(consentEventName, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(consentEventName, sync);
    };
  }, []);
  useEffect(() => {
    if (!enabled || !pathname || lastPage.current === pathname) return;
    lastPage.current = pathname;
    trackEvent("page_view", {
      page_path: pathname,
      page_location: window.location.origin + pathname,
      page_title: document.title,
    });
  }, [enabled, pathname]);
  return null;
}
