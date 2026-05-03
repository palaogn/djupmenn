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
              Síðan 1954
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
            <p className="text-xl mb-6 text-[var(--charcoal)] leading-relaxed">
              Félag Djúpmanna í Reykjavík, var stofnað þann 30 april 1954 og var
              þá upphaflega hugsað sem vettvangur fyrir burtflutta Djúpmenn í
              Reykjavík og nágrenni eins og nafnið gefur kannski til kynna. Í
              dag er að mörgu leiti önnur staða uppi og viljum við gjarnan fá
              alla þá í félagið sem eiga einhver tengsl við Djúpið óháð búsetu
              en flestir skráðra félaga eru búsettir á höfuðborgarsvæðinu.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/myndir/djupmyndir-agust-atlason/206837_10150155317449230_708829229_6881893_4879255_n.jpg"
                alt="Ísafjarðardjúp"
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
