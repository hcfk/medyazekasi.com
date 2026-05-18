import { Mic, Play, SendHorizonal, Waves } from "lucide-react";

export function MobileMockup() {
  return (
    <div
      role="img"
      aria-label="Mobil uygulama mockup görseli. Sahadan yükleme, uygulama içi ses kaydı, YouTube bağlantısı gönderme ve toplantı kaydını metne çevirme akışını gösterir."
      className="mx-auto w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(20,33,61,0.15)]"
    >
      <div className="rounded-[2rem] bg-[linear-gradient(180deg,#effbff,#ffffff)] p-5">
        <div className="mx-auto h-1.5 w-24 rounded-full bg-slate-200" />
        <div className="mt-5 rounded-[1.5rem] bg-slate-950 p-4 text-white">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Mobil İş Oluştur</p>
          <p className="mt-2 text-lg font-semibold">Sahadan yükleyin</p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-white/8 p-3">
              <div className="flex items-center gap-3">
                <Mic className="size-4 text-cyan-200" />
                <span className="text-sm">Uygulama içi ses kaydı</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/8 p-3">
              <div className="flex items-center gap-3">
                <Play className="size-4 text-cyan-200" />
                <span className="text-sm">YouTube bağlantısı gönder</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-950">İş durumu</p>
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800">
              İşleniyor
            </span>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
            <Waves className="size-4 text-cyan-700" />
            <p className="text-sm text-slate-700">Toplantı kaydı metne çevriliyor</p>
          </div>
          <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-medium text-white">
            <SendHorizonal className="size-4" />
            Kaydı gönder
          </button>
        </div>
      </div>
    </div>
  );
}
