import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Heart, Mountain } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-b from-[var(--ice-blue)] to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-[var(--fjord-blue)]/10 text-[var(--fjord-blue)] text-sm mb-6">
              Síðan 1950
            </div>
            <h2 className="mb-8 text-[var(--fjord-blue)]">Um félagið</h2>
            <p className="text-xl mb-6 text-[var(--charcoal)] leading-relaxed">
              Djúpmannafélagið er samfélags- og menningarsamtök sem sameina
              Vestfirðinga og þá sem hafa sérstaka tengingu við Vestfirði.
            </p>
            <p className="text-lg mb-12 text-[var(--stone-gray)] leading-relaxed">
              Við höldum reglulega viðburði, fundaröð og félagslega
              samverustundir. Félagið á og rekur einnig skála á Vestfjörðum sem
              meðlimir geta nýtt sér.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 mx-auto group hover:scale-110 transition-transform">
                  <Users size={36} className="text-[var(--fjord-blue)]" />
                </div>
                <div className="text-4xl mb-2">200+</div>
                <div className="text-sm text-[var(--stone-gray)]">Meðlimir</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 mx-auto group hover:scale-110 transition-transform">
                  <Heart size={36} className="text-[var(--fjord-blue)]" />
                </div>
                <div className="text-4xl mb-2">75+</div>
                <div className="text-sm text-[var(--stone-gray)]">Ár</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 mx-auto group hover:scale-110 transition-transform">
                  <Mountain size={36} className="text-[var(--fjord-blue)]" />
                </div>
                <div className="text-4xl mb-2">1</div>
                <div className="text-sm text-[var(--stone-gray)]">Skáli</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622556956013-58110fa525e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbW91bnRhaW5zJTIwc2VhfGVufDF8fHx8MTc2NzY0NjgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vestfirðir landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--accent-blue)] rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--moss-green)] rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
