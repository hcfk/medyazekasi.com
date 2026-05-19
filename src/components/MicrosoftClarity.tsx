"use client";

import { useEffect, useRef, useState } from "react";

import { consentEventName, readConsentPreferences } from "@/lib/consent";

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

function hasAnalyticsConsent() {
  return readConsentPreferences()?.analytics ?? false;
}

export function MicrosoftClarity() {
  const [isEnabled, setIsEnabled] = useState(() => hasAnalyticsConsent());
  const isInitialized = useRef(false);

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
    if (!clarityId || !isEnabled || isInitialized.current) {
      return;
    }

    let isCancelled = false;
    const resolvedClarityId = clarityId;

    async function initClarity() {
      const { default: Clarity } = await import("@microsoft/clarity");
      if (isCancelled || isInitialized.current) {
        return;
      }
      Clarity.init(resolvedClarityId);
      isInitialized.current = true;
    }

    initClarity().catch(() => undefined);

    return () => {
      isCancelled = true;
    };
  }, [isEnabled]);

  return null;
}
