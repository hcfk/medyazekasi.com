import { BellRing, FileSearch, FileText, Layers3, Smartphone } from "lucide-react";

export function MockDashboard() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="rounded-[2rem] border border-white/15 bg-slate-950/90 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.26)]">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-cyan-400/18 text-cyan-200">
              <Smartphone className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Mobil yükleme</p>
              <p className="text-xs text-slate-300">Sahadan ses ve video aktarımı</p>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
              Belediye etkinlik videosu
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
              YouTube canlı yayın bağlantısı
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
              Saha röportaj ses kaydı
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white/88 p-5 shadow-[0_28px_80px_rgba(20,33,61,0.10)]">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <Layers3 className="size-4 text-cyan-700" />
              Yapay zekâ işleme kuyruğu
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Basın açıklaması", "Transkripsiyon"],
                ["Toplantı kaydı", "Özet hazırlanıyor"],
                ["Saha video paketi", "Altyazı üretiliyor"],
              ].map(([name, status]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <span>{name}</span>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-800">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <FileText className="size-4 text-cyan-700" />
              Transkript ve özet çıktısı
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-950">Toplantı Özeti</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Başkan konuşması, saha geri bildirimleri ve karar başlıkları yapay zekâ
                ile düzenlenmiş özet olarak hazır.
              </p>
            </div>
            <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-950">Çıktılar</p>
              <p className="mt-2 text-sm text-slate-600">DOCX · TXT · SRT · VTT</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <FileSearch className="size-4 text-cyan-700" />
              Aranabilir kurumsal arşiv
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Arşiv Arama
              </p>
              <p className="mt-2 text-sm text-slate-950">“Mayıs meclis oturumu ulaşım gündemi”</p>
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
                Özel kalem için yönetici özeti yayıma hazır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
