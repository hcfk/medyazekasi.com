"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  consentEventName,
  createConsentPreferences,
  readConsentPreferences,
  writeConsentPreferences,
} from "@/lib/consent";

export function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    function syncConsent() {
      const storedConsent = readConsentPreferences();
      setAnalyticsEnabled(storedConsent?.analytics ?? false);
      setIsVisible(storedConsent === null);
      setShowPreferences(false);
      setIsReady(true);
    }

    syncConsent();
    window.addEventListener("storage", syncConsent);
    window.addEventListener(consentEventName, syncConsent as EventListener);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(consentEventName, syncConsent as EventListener);
    };
  }, []);

  function saveConsent(analytics: boolean) {
    const preferences = createConsentPreferences(analytics);
    writeConsentPreferences(preferences);
    setAnalyticsEnabled(analytics);
    setIsVisible(false);
    setShowPreferences(false);
  }

  if (!isReady || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 pt-2 sm:px-6 md:px-10">
      <div className="mx-auto max-w-5xl rounded-[1.7rem] border border-slate-200/90 bg-white/96 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-900">
              Çerez Tercihleri
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Analitik çerezler için onayınızı yönetebilirsiniz.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Zorunlu çerezler sitenin çalışması için kullanılır. Analitik çerezler yalnızca
              kullanım, performans ve etkileşim ölçümü için kullanılır. Daha fazla bilgi için{" "}
              <Link
                href="/cerez-politikasi"
                className="font-semibold text-cyan-900 underline underline-offset-4"
              >
                Çerez Politikası
              </Link>{" "}
              ve{" "}
              <Link
                href="/gizlilik-politikasi"
                className="font-semibold text-cyan-900 underline underline-offset-4"
              >
                Gizlilik Politikası
              </Link>{" "}
              sayfalarını inceleyin.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => saveConsent(true)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] px-6 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(16,188,212,0.18)]"
            >
              Analitiği Kabul Et
            </button>
            <button
              type="button"
              onClick={() => saveConsent(false)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900"
            >
              Reddet
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences((current) => !current)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-6 text-sm font-semibold text-slate-800"
            >
              Tercihler
            </button>
          </div>
        </div>

        {showPreferences ? (
          <div className="mt-5 grid gap-4 border-t border-slate-200 pt-5 lg:grid-cols-2">
            <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">Zorunlu Çerezler</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Sayfa güvenliği, temel gezinme ve tercih kaydı için gereklidir.
                  </p>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  Her zaman aktif
                </span>
              </div>
            </div>

            <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">Analitik Çerezler</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Google Analytics ve Microsoft Clarity ile performans, etkileşim ve
                    kullanım ölçümü için kullanılır.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((current) => !current)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                    analyticsEnabled ? "bg-cyan-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block size-5 rounded-full bg-white transition ${
                      analyticsEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-2">
              <button
                type="button"
                onClick={() => saveConsent(analyticsEnabled)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white"
              >
                Tercihleri Kaydet
              </button>
              <button
                type="button"
                onClick={() => saveConsent(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900"
              >
                Sadece Zorunlu Çerezler
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
