import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Badge } from "@/components/ui/badge";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { getAllInsights, getInsightBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const seoTitles: Record<string, string> = {
  "saha-ekipleri-mobil-ses-kaydi": "Mobil Ses Kaydı ve Transkripsiyon",
  "kamu-kurumsal-hafiza": "Kamu Kurumlarında Kurumsal Hafıza",
  "belediye-meclis-tutanagi": "Belediye Meclis Tutanağı Rehberi",
  "yapay-zeka-ile-ozetleme": "Yapay Zekâ ile Özetleme",
  "universite-ders-kaydi-transkripsiyon": "Üniversitelerde Ders Kaydı ve Transkripsiyon",
  "basin-bulteni-transkripsiyon": "Basın Bülteni ve Transkripsiyon",
  "belediye-basinyayin-otomasyon": "Belediye Basın-Yayın Otomasyonu",
  "kamu-video-altyazi-zorunlulugu": "Kamu Kurumlarında Video Altyazısı",
  "kurumsal-medya-arsivi": "Kurumsal Medya Arşivi",
  "canli-yayin-transkripsiyon": "Canlı Yayın Transkripsiyon",
  "dijital-cagda-kamu-iletisimi-medya-zekasi":
    "Dijital Çağda Kamu İletişimi ve Kurumsal Hafıza",
  "manuel-kaostan-yapay-zeka-destekli-medya-duzenine-gecis":
    "Manuel Kaostan Yapay Zekâ Destekli Medya Düzenine Geçiş",
  "medya-zekasi-operasyonel-tuzugu":
    "Medya Zekâsı Operasyonel Tüzüğü ve Medya Standartları",
  "toplanti-kaydi-transkripsiyon": "Toplantı Kaydı Transkripsiyon Sistemi",
};

const insightFaqs: Record<string, Array<{ question: string; answer: string }>> = {
  "desifre-transkripsiyon-kamu-veri-guvenligi": [
    {
      question: "Deşifre ile transkripsiyon arasındaki fark nedir?",
      answer:
        "Deşifre daha çok bir kaydın yazıya dökülmesini anlatan kullanıcı dilidir. Transkripsiyon ise bu dönüşümün manuel veya otomatik yöntemlerle yapılmasını kapsayan daha geniş bir kavramdır.",
    },
    {
      question: "Sesten metne ile videodan metne arasında fark var mı?",
      answer:
        "Temel amaç aynıdır: konuşmayı metne çevirmek. Ancak videodan metne süreçlerinde altyazı, zaman kodu ve yayın yeniden kullanımı gibi ek ihtiyaçlar daha sık ortaya çıkar.",
    },
    {
      question: "Konuşmacı tanıma neden önemli?",
      answer:
        "Çok katılımcılı kayıtlarda kimin ne söylediğini ayırmak; tutanak, özet, arşiv ve belge güvenilirliği açısından kritiktir.",
    },
    {
      question: "Belediyeler için transkripsiyon neden faydalıdır?",
      answer:
        "Meclis toplantıları, saha kayıtları, basın açıklamaları ve canlı yayınlar daha hızlı metne dökülür; aranabilir arşiv ve kurumsal hafıza daha güçlü hale gelir.",
    },
    {
      question: "Kurumsal kullanımda en önemli seçim kriteri nedir?",
      answer:
        "Doğruluk ve hız kadar veri yönetimi, yetkilendirme, arşivleme ve kurum içi kontrol ihtiyacı da belirleyicidir.",
    },
  ],
  "belediye-meclis-tutanagi": [
    {
      question: "Belediye meclis tutanağı ne zaman hazırlanmalıdır?",
      answer:
        "Belediye Meclisi Çalışma Yönetmeliği uyarınca tutanaklar bir sonraki birleşimden önce üyelere dağıtılabilecek şekilde hazırlanmalıdır.",
    },
    {
      question: "Meclis tutanağı kelimesi kelimesine mi yazılır?",
      answer:
        "Uygulamada birçok kurum özet tutanak kullanır; ancak kayıt cihazı esas alınır. Otomatik transkripsiyon hem tam metin hem de özet üretim sürecini hızlandırabilir.",
    },
    {
      question: "Otomatik transkripsiyon Türkçe meclis toplantılarında işe yarar mı?",
      answer:
        "Türkçe desteği güçlü sistemler meclis toplantılarında önemli hız avantajı sağlar. Teknik terimler ve özel isimler için editör kontrolü önerilir.",
    },
  ],
  "kamu-video-altyazi-zorunlulugu": [
    {
      question: "Kamu kurumları video içeriklerine altyazı eklemek zorunda mı?",
      answer:
        "Bu alanı tek başına düzenleyen kapsamlı bir zorunluluk her senaryoda aynı değildir; ancak erişilebilirlik standartları ve kurumsal hizmet beklentileri altyazıyı güçlü biçimde gerekli hale getirir.",
    },
    {
      question: "SRT ile VTT arasındaki fark nedir?",
      answer:
        "SRT yaygın ve platform bağımsız bir altyazı formatıdır. VTT ise özellikle web ve HTML5 video kullanımı için daha modern bir formattır.",
    },
    {
      question: "Altyazı SEO’ya katkı sağlar mı?",
      answer:
        "Evet. Altyazı ve transkript, video içeriğin arama motorları tarafından daha iyi anlaşılmasına ve indekslenmesine yardımcı olur.",
    },
  ],
  "basin-bulteni-transkripsiyon": [
    {
      question: "Transkripsiyon sistemi basın bültenini tamamen otomatik yazar mı?",
      answer:
        "Sistem taslak metin ve özet üretimini hızlandırır; ancak nihai bültenin editör kontrolünden geçmesi gerekir.",
    },
    {
      question: "Sosyal medya içerikleri transkript üzerinden üretilebilir mi?",
      answer:
        "Evet. Tam metinden kısa özet, alıntı ve platforma uygun içerik taslakları üretmek mümkündür.",
    },
    {
      question: "Eski basın arşivi de geriye dönük işlenebilir mi?",
      answer:
        "Evet. Mevcut ses ve video kayıtları sisteme yüklenerek daha sonra aranabilir arşive dönüştürülebilir.",
    },
  ],
  "saha-ekipleri-mobil-ses-kaydi": [
    {
      question: "Saha personeli teknik bilgi olmadan mobil kayıt kullanabilir mi?",
      answer:
        "Evet. İyi tasarlanmış mobil akışlar, kayıt alma ve merkeze gönderme işlemlerini sadeleştirerek teknik bariyeri düşürür.",
    },
    {
      question: "İnternet olmadan saha kaydı alınabilir mi?",
      answer:
        "Kayıt çevrimdışı alınabilir; bağlantı kurulduğunda merkezi sisteme aktarılacak şekilde kurgulanabilir.",
    },
    {
      question: "Saha kayıtlarında veri güvenliği neden önemlidir?",
      answer:
        "Saha kayıtları vatandaş beyanı, konum bilgisi ve operasyon detayları içerebilir. Bu nedenle erişim ve saklama politikaları dikkatle yönetilmelidir.",
    },
  ],
  "universite-ders-kaydi-transkripsiyon": [
    {
      question: "Üniversite ders kayıtları hangi formatlarda işlenebilir?",
      answer:
        "MP3, WAV, MP4 gibi yaygın ses ve video formatları ile bağlantı tabanlı içerikler işlenebilir.",
    },
    {
      question: "Tüm ders kayıtlarını transkribe etmek gerekli midir?",
      answer:
        "Hayır. Kurumlar önceliği yüksek etkili dersler, hizmet içi eğitimler veya erişilebilirlik ihtiyacı daha yoğun içeriklere verebilir.",
    },
    {
      question: "Transkripsiyon öğrenci erişilebilirliğini nasıl etkiler?",
      answer:
        "Metin, altyazı ve aranabilir kayıt yapısı sayesinde öğrenciler içeriğe farklı öğrenme biçimleriyle daha rahat erişebilir.",
    },
  ],
  "canli-yayin-transkripsiyon": [
    {
      question: "Canlı yayınlarda anlık mı sonradan transkripsiyon mu daha uygundur?",
      answer:
        "Çoğu kamu kurumu için sonradan transkripsiyon daha sürdürülebilir ve daha yüksek doğruluk sağlayan bir yaklaşımdır. Anlık transkripsiyon ise erişilebilirlik önceliği yüksek yayınlarda değerlidir.",
    },
    {
      question: "YouTube arşivleri geriye dönük metne dönüştürülebilir mi?",
      answer:
        "Evet. Yayın bağlantıları veya kayıt dosyaları üzerinden arşivdeki içerikler daha sonra transkribe edilerek aranabilir hale getirilebilir.",
    },
    {
      question: "Canlı yayın transkripti SEO’ya katkı sağlar mı?",
      answer:
        "Evet. Metinleşen yayın içeriği arama motorları tarafından indekslenebilir hale gelir ve kurumsal görünürlüğü artırabilir.",
    },
  ],
  "dijital-cagda-kamu-iletisimi-medya-zekasi": [
    {
      question: "Medya Zekâsı hangi kurumlar için uygundur?",
      answer:
        "Belediyeler, kamu kurumları, üniversiteler, basın-yayın birimleri, kurumsal iletişim ekipleri ve düzenli ses veya video kaydı üreten saha ekipleri için uygundur.",
    },
    {
      question: "Platform yalnızca kayıtları metne mi dönüştürür?",
      answer:
        "Hayır. Platform medya toplama, kuyruk tabanlı işleme, transkripsiyon, özetleme, altyazı üretimi, arşivleme ve yetkili erişim akışlarını birlikte ele alır.",
    },
    {
      question: "Kurumsal hafıza açısından temel fayda nedir?",
      answer:
        "Daha önce yalnızca dosya olarak kalan konuşma, toplantı ve yayın kayıtları; aranabilir, paylaşılabilir ve yeniden kullanılabilir kurumsal bilgiye dönüşür.",
    },
    {
      question: "Mobil uygulama ne sağlar?",
      answer:
        "Saha ekipleri Android ve iOS üzerinden ses, video veya bağlantı gönderebilir; merkez ekip ise web panelinden süreçleri takip edebilir.",
    },
    {
      question: "Yapay zekâ çıktıları doğrudan yayımlanmalı mı?",
      answer:
        "Kurumsal iletişimde önerilen yaklaşım, yapay zekâ çıktılarının uzman ekip tarafından gözden geçirilmesi ve kurumsal dil ile doğruluk açısından son kontrolden geçirilmesidir.",
    },
  ],
  "manuel-kaostan-yapay-zeka-destekli-medya-duzenine-gecis": [
    {
      question: "Medya Zekâsı manuel medya yönetiminde hangi sorunu çözer?",
      answer:
        "Dağınık dosya akışını merkezi kuyruğa alır; transkripsiyon, özetleme, altyazı ve arşivleme süreçlerini daha düzenli ve izlenebilir hale getirir.",
    },
    {
      question: "Bu yaklaşım belediyeler için neden önemlidir?",
      answer:
        "Meclis toplantıları, basın açıklamaları, canlı yayınlar ve saha kayıtları farklı kaynaklardan gelir. Merkezi iş akışı olmadan bu içerikler kaybolabilir veya geç işlenebilir.",
    },
    {
      question: "Mobil uygulama bu düzende ne rol oynar?",
      answer:
        "Sahada oluşan medya içeriğinin Android ve iOS üzerinden hızla merkeze aktarılmasını sağlar ve web panelindeki operasyon akışını besler.",
    },
    {
      question: "Yapay zekâ destekli medya yönetimi insan kontrolünü ortadan kaldırır mı?",
      answer:
        "Hayır. Yapay zekâ ilk taslakları hızlandırır; ancak kurumsal iletişimde nihai kontrolün uzman ekipte olması gerekir.",
    },
    {
      question: "Kurumsal hafıza açısından en büyük fayda nedir?",
      answer:
        "Daha önce yalnızca ses veya video olarak duran kayıtlar, metinle zenginleşerek aranabilir ve yeniden kullanılabilir kurumsal bilgiye dönüşür.",
    },
  ],
  "medya-zekasi-operasyonel-tuzugu": [
    {
      question: "Medya Zekâsı operasyonel olarak hangi alanları standardize eder?",
      answer:
        "Medya alımı, kuyruk tabanlı işleme, transkripsiyon, özetleme, uzman kontrolü, rol bazlı erişim, performans takibi ve arşivleme süreçlerini daha standardize biçimde yönetmeye yardımcı olur.",
    },
    {
      question: "Kuyruk tabanlı medya işleme neden önemlidir?",
      answer:
        "Aynı anda çok sayıda dosyanın işlendiği kurumlarda işlerin sıraya alınması, önceliklendirilmesi, gecikmelerin görülmesi ve hataların takip edilmesi için kritik bir yapıdır.",
    },
    {
      question: "Human-in-the-loop yaklaşımı ne sağlar?",
      answer:
        "Yapay zekâ ilk taslakları hızlandırırken editörlerin ve yetkili ekiplerin son kontrolü yapmasını sağlar; böylece kurumsal dil ve doğruluk korunur.",
    },
    {
      question: "Performans metrikleri hangi kararlara destek olur?",
      answer:
        "Kuyruk yoğunluğu, ortalama işlem süresi, hata oranı, backlog ve birim bazlı üretim verileri; kapasite planlaması ve operasyonel iyileştirme kararlarına temel sağlar.",
    },
    {
      question: "Rol bazlı erişim neden gereklidir?",
      answer:
        "Basın-yayın ekipleri, yöneticiler, saha personeli ve standart kullanıcılar farklı yetki seviyelerine ihtiyaç duyar. Rol bazlı erişim hem güvenliği hem de iş düzenini güçlendirir.",
    },
  ],
};

export async function generateStaticParams() {
  return getAllInsights().map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getAllInsights().find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return buildMetadata({
    title: `${seoTitles[slug] || insight.seoTitle || insight.title} | Medya Zekâsı`,
    description: insight.description,
    path: `/insights/${slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insightExists = getAllInsights().some((item) => item.slug === slug);

  if (!insightExists) {
    notFound();
  }

  const { meta, content } = await getInsightBySlug(slug);
  const faqItems = insightFaqs[slug];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: meta.title, path: `/insights/${slug}` },
          ]),
          buildArticleJsonLd({
            title: meta.title,
            description: meta.description,
            path: `/insights/${slug}`,
            datePublished: meta.datePublished,
            dateModified: meta.dateModified,
          }),
          ...(faqItems ? [buildFaqJsonLd(faqItems)] : []),
        ]}
      />

      <Link
        href="/insights"
        className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
      >
        Insights sayfasına dön
      </Link>

      <section className="mt-6 rounded-[2rem] border border-white/60 bg-white/85 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary">{meta.audience}</Badge>
          <Badge variant="outline">{meta.readingTime}</Badge>
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">{meta.description}</p>
      </section>

      <article className="prose prose-slate mt-8 max-w-none rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
        {content}
      </article>
    </main>
  );
}
