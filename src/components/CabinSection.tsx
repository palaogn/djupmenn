import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Key, Trash2, Droplet, Info } from "lucide-react";

export function CabinSection() {
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

  return (
    <section id="cabin" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-[var(--fjord-blue)]">Álfhóll</h2>
          <p className="text-xl text-[var(--stone-gray)] max-w-3xl mx-auto">
            Staðsettur í botni Mjóafjarðar í stórbrotinni náttúru
          </p>
        </div>

        {/* Cabin Image */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565971988144-c8a2adc6eb1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbiUyMGljZWxhbmR8ZW58MXx8fHwxNzY3NjQ2ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Skálinn"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-linear-to-br from-[--ice-blue] to-white rounded-3xl p-12 shadow-lg">
            <div className="flex items-center justify-center text-[--fjord-blue] mb-6">
              <MapPin size={24} className="mr-3" />
              <span className="text-lg">Vestfirðir, Ísland</span>
            </div>
            <p className="text-xl text-center text-[--charcoal] leading-relaxed">
              Álfhóll er lítill kofi sem er dásamlegt að vera í. Það eru eitt
              tvöfalt rúm og lítið háloft fyirir 2-3. Lítill eldhúskrókur er til
              staðar og klósett. Vatn í kofann er yfirborðsvatn svo það er ekki
              mælt með því að drekka það. Aðeins fyrir meðlimi félagsins.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-24">
          <h3 className="text-center mb-12 text-[--charcoal]">
            Leiðin að skálanum
          </h3>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%] bg-linear-to-br from-[--fjord-blue] to-[--deep-sea]">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6">
                    <Info size={40} className="opacity-75" />
                  </div>
                  <p className="text-xl mb-2">Hlaða myndbandi hér</p>
                  <p className="text-sm opacity-75">
                    Sýnir leiðina frá aðalveginum að skálanum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-[var(--stone-gray)] mt-6">
            Bættu við YouTube eða Vimeo myndbandi með því að uppfæra video URL í
            kóðanum
          </p>
        </div>

        {/* Cabin Rules */}
        <div>
          <h3 className="text-center mb-16 text-[var(--charcoal)]">
            Reglur um notkun skálans
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {cabinRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[var(--ice-blue)] p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[var(--fjord-blue)] flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="mb-4 text-[var(--charcoal)]">{rule.title}</h4>
                  <p className="text-[var(--stone-gray)] leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto bg-white border-2 border-[var(--ice-blue)] rounded-3xl p-10 shadow-lg">
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
                  Aðeins er yfirborðsvatn í skálanum, sem ekki mælt með að
                  drekka
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--fjord-blue)] mr-3">•</span>
                <span>
                  Álhóll er eign okkar allra og er haldið við í sjálboðavinnu
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--fjord-blue)] mr-3">•</span>
                <span>
                  Komum að honum að virðingu og ef það eru einhver vandamál
                  látið okkur þá vita
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
