"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

import { consentEventName, consentStorageKey, type ConsentPreferences } from "@/lib/consent";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

function hasAnalyticsConsent() {
  if (typeof window === "undefined") {
    return false;
  }

  const stored = window.localStorage.getItem(consentStorageKey);

  if (!stored) {
    return false;
  }

  try {
    const parsed = JSON.parse(stored) as ConsentPreferences;
    return parsed.analytics;
  } catch {
    return false;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [isEnabled, setIsEnabled] = useState(() => hasAnalyticsConsent());
  const skipInitialPageView = useRef(true);

  useEffect(() => {
    function syncConsent() {
      setIsEnabled(hasAnalyticsConsent());
    }

    window.addEventListener("storage", syncConsent);
    window.addEventListener(consentEventName, syncConsent as EventListener);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(consentEventName, syncConsent as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!gaId || !isEnabled || typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    if (skipInitialPageView.current) {
      skipInitialPageView.current = false;
      return;
    }

    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [isEnabled, pathname]);

  if (!gaId || !isEnabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
