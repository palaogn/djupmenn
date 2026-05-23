import { useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { PhotoGrid } from "../components/PhotoGrid";
import {
  MapPin,
  Key,
  Info,
  CalendarCheck,
  Tag,
  Clock,
  Package,
  Flame,
  Sparkles,
  Droplet,
} from "lucide-react";

const VIDEO_PLAYBACK_RATE = 1;

const bringList = [
  "Sængurver, koddaver og lak (rúmið er 150×200)",
  "Sápur (uppþvotta- og handsápu)",
  "Handklæði og viskastykki",
  "Borðtuskur",
  "Salernispappír",
  "Tuskur fyrir þrif",
];

const interiorPhotos = [
  "/alfholl/486974992_1102012055304421_7925751453748896810_n.jpg",
  "/alfholl/487061967_1102012098637750_5682025423373632392_n.jpg",
  "/alfholl/487096494_1102011868637773_6292140743205500313_n.jpg",
  "/alfholl/487187825_1102012088637751_8403216032737513817_n.jpg",
  "/alfholl/487281137_1102012085304418_2852149923783891800_n.jpg",
  "/alfholl/487297152_1102012035304423_841404346204466277_n.jpg",
  "/alfholl/487325903_1102012038637756_1404161118861181371_n.jpg",
  "/alfholl/487762027_1102012071971086_4689298929775377673_n.jpg",
].map((src) => ({ full: src, thumb: src }));

const cleanupList = [
  "Sópa og þvo gólf",
  "Salerni",
  "Vaska",
  "Eldavél",
  "Leirtau og eldhúsáhöld",
  "Ganga frá rusli",
  "Slá út rafmagninu",
  "Þrífa , slökkva og skilja eftir rifu á honum",
];

export function AlfhollPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = VIDEO_PLAYBACK_RATE;
  }, []);

  return (
    <LegacyPageLayout
      title="Álfhóll"
      intro="Skáli Djúpmannafélagsins í botni Mjóafjarðar á Vestfjörðum."
    >
      <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
        <ImageWithFallback
          src="/articles/IMG_0420.jpg"
          alt="Álfhóll"
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="bg-gradient-to-br from-[var(--ice-blue)] to-white rounded-3xl p-12 shadow-lg mb-20">
        <div className="flex items-center justify-center text-[var(--fjord-blue)] mb-6">
          <MapPin size={24} className="mr-3" />
          <span className="text-lg">Mjóifjörður, Vestfirðir</span>
        </div>
        <p className="text-xl text-center text-[var(--charcoal)] leading-relaxed">
          Álfhóll er lítill kofi sem er dásamlegt að vera í. Það eru eitt tvöfalt
          rúm og lítið háloft fyrir 2–3. Lítill eldhúskrókur er til staðar og
          klósett. Vatn í kofann er yfirborðsvatn svo það er ekki mælt með því
          að drekka það. Aðeins fyrir meðlimi félagsins.
        </p>
      </div>

      <section className="mb-20">
        <h3 className="text-2xl mb-6 text-[var(--charcoal)]">Inni í Álfhóli</h3>
        <PhotoGrid
          photos={interiorPhotos}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3"
        />
      </section>

      <section className="mb-20 grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-sm">
          <div className="flex items-center mb-4 text-[var(--fjord-blue)]">
            <Tag size={22} className="mr-3" />
            <h3 className="text-2xl text-[var(--charcoal)]">Verð</h3>
          </div>
          <p className="text-[var(--stone-gray)] leading-relaxed">
            7.000 kr. fyrir eina nótt.
          </p>
        </div>

        <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-sm">
          <div className="flex items-center mb-4 text-[var(--fjord-blue)]">
            <CalendarCheck size={22} className="mr-3" />
            <h3 className="text-2xl text-[var(--charcoal)]">Bókun og laus pláss</h3>
          </div>
          <p className="text-[var(--stone-gray)] leading-relaxed">
            Til að bóka, hafðu samband við Jórunni Sillu{" "}
            <a
              href="mailto:djupmenn@djupmenn.is"
              className="text-[var(--fjord-blue)] underline"
            >
              unnag@simnet.is
              </a>{" "}
            eða í síma{" "}
            <a
              href="tel:+3548677623"
              className="text-[var(--fjord-blue)] underline"
            >
              867-7623
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mb-24 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl mb-6 text-[var(--charcoal)]">Staðsetning</h3>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[var(--ice-blue)]">
            <iframe
              src="https://www.google.com/maps?q=65.8488472,-22.6447361&hl=is&z=17&t=k&output=embed"
              title="Álfhóll á Google Maps"
              className="w-full h-[360px] block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.google.com/maps/place/65%C2%B050'55.9%22N+22%C2%B038'41.1%22W/@65.8488607,-22.6456763,18.37z/data=!4m4!3m3!8m2!3d65.8488472!4d-22.6447361"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[var(--fjord-blue)] hover:underline"
          >
            Opna í Google Maps
            <MapPin size={16} />
          </a>
        </div>

        <div>
          <h3 className="text-2xl mb-6 text-[var(--charcoal)]">Leiðin að skálanum</h3>
          <p className="text-[var(--stone-gray)] mb-6">
            Myndbandið sýnir leiðina frá aðalveginum að skálanum.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-black w-full max-w-[280px]">
            <video
              ref={videoRef}
              src="/articles/alfholl-leid.mp4"
              className="w-full h-auto block"
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-2xl mb-10 text-[var(--charcoal)]">Húsreglur</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-white to-[var(--ice-blue)] p-8 rounded-3xl shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[var(--fjord-blue)] flex items-center justify-center mb-5">
              <Clock size={28} className="text-white" />
            </div>
            <h4 className="mb-3 text-[var(--charcoal)] text-xl">Komi og brottför</h4>
            <ul className="space-y-2 text-[var(--stone-gray)] leading-relaxed">
              <li>Komutími: kl. 16:00 á komudegi.</li>
              <li>Brottför: í síðasta lagi kl. 14:00 á brottfarardegi.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-[var(--ice-blue)] p-8 rounded-3xl shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[var(--fjord-blue)] flex items-center justify-center mb-5">
              <Key size={28} className="text-white" />
            </div>
            <h4 className="mb-3 text-[var(--charcoal)] text-xl">Lyklar og rafmagn</h4>
            <p className="text-[var(--stone-gray)] leading-relaxed">
              Leigutaki fær númer að lyklakassa með framvísun leigusamnings.
              Rafmagnstaflan er fyrir ofan útidyrnar — slá þarf inn rafmagninu
              og loka ísskápnum við komu.
            </p>
          </div>
        </div>

        <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-lg mb-6">
          <h4 className="mb-2 text-[var(--charcoal)] flex items-center text-xl">
            <Info size={22} className="mr-3 text-[var(--fjord-blue)]" />
            Um húsið
          </h4>
          <p className="text-[var(--stone-gray)] leading-relaxed">
            Forstofa og stúdíóherbergi með góðu rúmi fyrir tvo (150×200) og
            koju fyrir ofan sem rúmar 2-2. Eldhúshorn með tveimur eldavélahellum,
            ísskáp og vaski. Borðbúnaður fyrir 6. Salerni og handlaug. Í húsinu eru
            4 sængur og 4 koddar. Einungis er kalt vatn í húsinu enn sem komið er.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-lg">
            <h4 className="mb-4 text-[var(--charcoal)] flex items-center text-xl">
              <Package size={22} className="mr-3 text-[var(--fjord-blue)]" />
              Hvað þarf að koma með
            </h4>
            <ul className="space-y-2 text-[var(--charcoal)]">
              {bringList.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-[var(--fjord-blue)] mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-lg">
            <h4 className="mb-4 text-[var(--charcoal)] flex items-center text-xl">
              <Sparkles size={22} className="mr-3 text-[var(--fjord-blue)]" />
              Frágangur við brottför
            </h4>
            <p className="text-[var(--stone-gray)] mb-4">
              Ræsta skal húsið vandlega áður en farið er.
            </p>
            <ul className="space-y-2 text-[var(--charcoal)]">
              {cleanupList.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-[var(--fjord-blue)] mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 shadow-lg mb-6">
          <h4 className="mb-3 text-[var(--charcoal)] flex items-center text-xl">
            <Flame size={22} className="mr-3 text-amber-600" />
            Eldvarnir — mikilvægt
          </h4>
          <p className="text-[var(--charcoal)] leading-relaxed">
            Á svæðinu er mikil eldhætta. Gæta þarf fyllstu varúðar við
            meðhöndlun elds, bæði kertaljósa og við grillun.{" "}
            <strong>
              Bannað er að nota einnota grill sem liggur á palli eða jörðu
            </strong>{" "}
            — mjög alvarlegir eldar hafa kviknað vegna þeirra.
          </p>
        </div>

        <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-lg mb-6">
          <h4 className="mb-3 text-[var(--charcoal)] flex items-center text-xl">
            <Droplet size={22} className="mr-3 text-[var(--fjord-blue)]" />
            Vatn
          </h4>
          <p className="text-[var(--stone-gray)] leading-relaxed">
            Vatnið er yfirborðsvatn — mælt er með því að sjóða neysluvatnið.
          </p>
        </div>

        <div className="bg-[var(--fjord-blue)]/5 rounded-3xl p-8">
          <p className="text-[var(--charcoal)] leading-relaxed text-lg">
            Álfhóll er sameign okkar djúpmanna. Leigutaki ber ábyrgð á húsinu
            og öllu sem þar er meðan á dvöl stendur. Verði um skemmdir að
            ræða skal tilkynna umsjónarmanni það strax. Göngum vel um húsið og
            umhverfið — gróður og allt — og skiljum við það eins og við viljum
            sjálf taka við því.
          </p>
        </div>
      </section>

      <section className="mb-24">
        <h3 className="text-2xl mb-6 text-[var(--charcoal)]">Taglið — göngustígur við Álfhól</h3>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="/articles/taglid.jpg"
              alt="Taglið göngustígur"
              className="w-full h-auto block"
            />
          </div>
          <p className="text-[var(--stone-gray)] leading-relaxed text-lg">
            Við Álfhól hefur verið lagður göngustígur upp á Taglið á Bolafjalli.
            Fylgjið rauðum stikum sem hafa verið lagðar, leiðin er um 800m.
            Stígurinn býður upp á fallega leið og er
            tilvalin leið fyrir stuttar gönguferðir í náttúrunni.
          </p>
        </div>
      </section>
    </LegacyPageLayout>
  );
}
