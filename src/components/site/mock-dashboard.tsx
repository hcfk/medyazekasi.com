import {
  BellRing,
  FileSearch,
  FileText,
  Layers3,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export function MockDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[48rem] overflow-hidden rounded-[2.3rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,250,252,0.92))] p-4 shadow-[0_35px_90px_rgba(15,23,42,0.14)] sm:p-5">
      <div className="absolute left-14 top-10 h-28 w-28 rounded-full bg-cyan-300/16 blur-3xl" />
      <div className="absolute right-16 top-24 h-36 w-36 rounded-full bg-blue-300/12 blur-3xl" />

      <div className="relative grid gap-4 lg:grid-cols-[0.7fr_auto_1.3fr] lg:items-center">
        <div className="mx-auto w-full max-w-[18rem]">
          <div className="relative rounded-[2.4rem] border border-slate-200 bg-white p-3 shadow-[0_22px_60px_rgba(20,33,61,0.14)]">
            <div className="rounded-[1.9rem] bg-[linear-gradient(180deg,#effbff,#ffffff)] p-4">
              <div className="mx-auto h-1.5 w-20 rounded-full bg-slate-200" />
              <div className="mt-4 rounded-[1.5rem] bg-slate-950 p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                  Sahadan Yükle
                </p>
                <p className="mt-2 text-lg font-semibold">Mobil İş Oluştur</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-white/8 px-3 py-3 text-sm">
                    Ses kaydı yükleme
                  </div>
                  <div className="rounded-2xl bg-white/8 px-3 py-3 text-sm">
                    Video veya bağlantı gönderme
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-950">İş durumu</p>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-medium text-cyan-800">
                    Kuyruğa alındı
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                  <Smartphone className="size-4 text-cyan-700" />
                  <p className="text-sm text-slate-700">Saha kaydı merkeze aktarıldı</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex lg:h-full lg:min-h-[28rem] lg:w-20 lg:flex-col lg:items-center lg:justify-center">
          <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(16,188,212,0),rgba(16,188,212,0.5),rgba(16,188,212,0))]" />
          <div className="absolute inset-y-14 left-1/2 w-24 -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full border border-cyan-200 bg-white shadow-[0_10px_25px_rgba(16,188,212,0.12)]"
              style={{ top: `${22 + index * 25}%`, width: 14, height: 14 }}
            >
              <div className="size-2 rounded-full bg-cyan-500" />
            </div>
          ))}
          <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-cyan-200 bg-white text-cyan-700 shadow-[0_14px_35px_rgba(16,188,212,0.16)]">
            <Workflow className="size-6" />
          </div>
          <div className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
            AI İşleme
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/90 bg-white/92 p-4 shadow-[0_24px_70px_rgba(20,33,61,0.08)] sm:p-5">
          <div className="flex items-center justify-between gap-4 rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Web Dashboard
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-950">
                Kuyruk, transkript, özet ve arşiv
              </p>
            </div>
            <div className="hidden rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-900 sm:block">
              Operasyon görünürlüğü
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <Layers3 className="size-4 text-cyan-700" />
                AI işleme kuyruğu
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Basın açıklaması", "Transkripsiyon"],
                  ["Toplantı kaydı", "Özet hazırlanıyor"],
                  ["Saha video paketi", "Altyazı üretiliyor"],
                ].map(([name, status]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    <span className="line-clamp-1">{name}</span>
                    <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-cyan-800">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <FileText className="size-4 text-cyan-700" />
                Transkript ve özet
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">Toplantı Özeti</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Başkan konuşması, saha geri bildirimleri ve karar başlıkları yapay zekâ
                  destekli özet olarak hazırlandı.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 rounded-2xl bg-white p-4 shadow-sm">
                {["DOCX", "TXT", "SRT", "VTT"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <FileSearch className="size-4 text-cyan-700" />
                Aranabilir arşiv
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Arşiv Arama
                </p>
                <p className="mt-2 text-sm font-medium text-slate-950">
                  &quot;Mayıs meclis oturumu ulaşım gündemi&quot;
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Kayıt, transkript ve özet aynı sonuç kümesinde bulunabilir.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <BellRing className="size-4 text-cyan-700" />
                Bildirim ve operasyon
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  Basın birimi için yeni transkript hazırlandı.
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  Özel kalem için yönetici özeti yayına hazır.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[1.4rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fdff,#eefbff)] px-4 py-3 text-sm text-slate-700">
            <Sparkles className="size-4 text-cyan-700" />
            Yapay zekâ işleme hattı saha içeriğini kurumsal çıktıya dönüştürür.
          </div>
        </div>
      </div>
    </div>
  );
}
