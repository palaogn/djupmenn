import { useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { MapPin, Key, Trash2, Droplet, Info, CalendarCheck, Tag } from "lucide-react";

const VIDEO_PLAYBACK_RATE = 1;

const cabinRules = [
  {
    icon: Trash2,
    title: "Hreinlæti",
    description:
      "Vinsamlegast hafðu skálann hreinn þegar þú ferð. Þvoðu upp eftir þig og taktu rusl með þér.",
  },
  {
    icon: Droplet,
    title: "Vatn og rafmagn",
    description:
      "Notaðu vatn og rafmagn með skynsemi. Slökktu á öllu ljósi þegar þú ferð.",
  },
  {
    icon: Key,
    title: "Læsing",
    description:
      "Mundu að læsa vel þegar þú ferð. Lykilinn er afhendur meðlimum við upphaf hvers árs.",
  },
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

      <section className="mb-20 grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-8 shadow-sm">
          <div className="flex items-center mb-4 text-[var(--fjord-blue)]">
            <Tag size={22} className="mr-3" />
            <h3 className="text-2xl text-[var(--charcoal)]">Verð</h3>
          </div>
          <p className="text-[var(--stone-gray)] leading-relaxed">
            Verðskrá kemur fljótlega.
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
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mb-24">
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
      </section>

      <section className="mb-20">
        <h3 className="text-2xl mb-10 text-[var(--charcoal)]">Reglur um notkun skálans</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cabinRules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.title}
                className="bg-gradient-to-br from-white to-[var(--ice-blue)] p-8 rounded-3xl shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--fjord-blue)] flex items-center justify-center mb-5">
                  <Icon size={28} className="text-white" />
                </div>
                <h4 className="mb-3 text-[var(--charcoal)] text-xl">{rule.title}</h4>
                <p className="text-[var(--stone-gray)] leading-relaxed">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-10 shadow-lg">
          <h4 className="mb-6 text-[var(--charcoal)] flex items-center text-xl">
            <Info size={24} className="mr-3 text-[var(--fjord-blue)]" />
            Mikilvægt að vita
          </h4>
          <ul className="space-y-4 text-[var(--charcoal)] text-lg">
            <li className="flex items-start">
              <span className="text-[var(--fjord-blue)] mr-3">•</span>
              <span>Bóka þarf skálann í gegnum bókunarkerfi félagsins</span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--fjord-blue)] mr-3">•</span>
              <span>Aðeins félagsmenn geta bókað í skálann</span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--fjord-blue)] mr-3">•</span>
              <span>
                Aðeins er yfirborðsvatn í skálanum, sem ekki er mælt með að
                drekka
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--fjord-blue)] mr-3">•</span>
              <span>
                Álfhóll er eign okkar allra og er haldið við í sjálfboðavinnu
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--fjord-blue)] mr-3">•</span>
              <span>
                Komum fram við hann af virðingu og ef það eru einhver vandamál
                látið okkur vita
              </span>
            </li>
          </ul>
        </div>
      </section>
    </LegacyPageLayout>
  );
}
