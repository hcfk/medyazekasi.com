import {
  BellRing,
  FileSearch,
  FileText,
  Layers3,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

const queueItems = [
  ["Basın açıklaması", "Transkripsiyon"],
  ["Toplantı kaydı", "Özet hazırlanıyor"],
  ["Saha video paketi", "Altyazı üretiliyor"],
] as const;

export function MockDashboard() {
  return (
    <div
      role="img"
      aria-label="Web dashboard ve mobil yükleme mockup görseli. Sahadan yükleme, transkripsiyon, özetleme, altyazı üretimi ve aranabilir kurumsal arşiv akışını gösterir."
      className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,250,252,0.94))] p-3 shadow-[0_28px_70px_rgba(15,23,42,0.12)] sm:p-4 lg:p-5"
    >
      <div className="absolute left-10 top-8 h-24 w-24 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="absolute right-10 top-16 h-28 w-28 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative space-y-4">
        <div className="grid gap-4 xl:grid-cols-[16rem_4rem_minmax(0,1fr)] xl:items-stretch">
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-[0_16px_40px_rgba(20,33,61,0.10)]">
            <div className="rounded-[1.45rem] bg-[linear-gradient(180deg,#effbff,#ffffff)] p-4">
              <div className="mx-auto h-1.5 w-18 rounded-full bg-slate-200" />
              <div className="mt-4 rounded-[1.3rem] bg-slate-950 p-4 text-white">
                <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                  Sahadan Yükle
                </p>
                <p className="mt-2 text-base font-semibold">Mobil İş Oluştur</p>
                <div className="mt-3 space-y-2">
                  <div className="rounded-2xl bg-white/8 px-3 py-2.5 text-sm">
                    Ses kaydı yükleme
                  </div>
                  <div className="rounded-2xl bg-white/8 px-3 py-2.5 text-sm">
                    Video veya bağlantı gönderme
                  </div>
                </div>
              </div>
              <div className="mt-3 rounded-[1.2rem] border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-950">İş durumu</p>
                  <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-semibold text-cyan-900">
                    Kuyruğa alındı
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-2xl bg-slate-50 p-3">
                  <Smartphone className="size-4 text-cyan-700" />
                  <p className="text-sm text-slate-700">Saha kaydı merkeze aktarıldı</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex xl:h-full xl:min-h-[22rem] xl:flex-col xl:items-center xl:justify-center">
            <div className="relative flex size-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white text-cyan-700 shadow-[0_12px_28px_rgba(16,188,212,0.14)]">
              <Workflow className="size-5" />
            </div>
            <div className="mt-3 rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
              AI İşleme
            </div>
            <div className="mt-3 h-28 w-px bg-[linear-gradient(180deg,rgba(16,188,212,0),rgba(16,188,212,0.55),rgba(16,188,212,0))]" />
          </div>

          <div className="min-w-0 rounded-[1.8rem] border border-slate-200/90 bg-white/94 p-4 shadow-[0_18px_50px_rgba(20,33,61,0.07)]">
            <div className="flex flex-col gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Web Dashboard
                </p>
                <p className="mt-1 text-base font-semibold text-slate-950">
                  Kuyruk, transkript, özet ve arşiv
                </p>
              </div>
              <div className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-950">
                Operasyon görünürlüğü
              </div>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-2">
              <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <Layers3 className="size-4 text-cyan-700" />
                  AI işleme kuyruğu
                </div>
                <div className="mt-4 space-y-3">
                  {queueItems.map(([name, status]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                    >
                      <span className="line-clamp-1 min-w-0">{name}</span>
                      <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-cyan-900">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <FileText className="size-4 text-cyan-700" />
                  Transkript ve özet
                </div>
                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">Toplantı Özeti</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Başkan konuşması, saha geri bildirimleri ve karar başlıkları yapay zekâ
                    destekli özet olarak hazırlandı.
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 rounded-2xl bg-white p-4 shadow-sm">
                  {["DOCX", "TXT", "SRT", "VTT"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/92 p-4 shadow-[0_14px_40px_rgba(20,33,61,0.05)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <FileSearch className="size-4 text-cyan-700" />
              Aranabilir arşiv
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Arşiv Arama
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                &quot;Mayıs meclis oturumu ulaşım gündemi&quot;
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Kayıt, transkript ve özet aynı sonuç kümesinde bulunabilir.
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white/92 p-4 shadow-[0_14px_40px_rgba(20,33,61,0.05)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <BellRing className="size-4 text-cyan-700" />
              Bildirim ve operasyon
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                Basın birimi için yeni transkript hazırlandı.
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                Özel kalem için yönetici özeti yayına hazır.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-[1.4rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fdff,#eefbff)] px-4 py-3 text-sm font-medium text-slate-800">
          <Sparkles className="size-4 text-cyan-700" />
          Yapay zekâ işleme hattı saha içeriğini kurumsal çıktıya dönüştürür.
        </div>
      </div>
    </div>
  );
}
