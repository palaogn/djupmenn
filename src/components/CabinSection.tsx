import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CabinSection() {
  return (
    <section id="cabin" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/articles/IMG_0420.jpg"
              alt="Álfhóll"
              className="w-full h-[260px] sm:h-[360px] lg:h-[480px] object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 text-[var(--fjord-blue)]">Álfhóll</h2>
            <div className="flex items-center text-[var(--fjord-blue)] mb-6">
              <MapPin size={20} className="mr-2" />
              <span>Mjóifjörður, Vestfirðir</span>
            </div>
            <p className="text-xl text-[var(--charcoal)] leading-relaxed mb-6">
              Lítill og notalegur skáli félagsins í botni Mjóafjarðar. Tvöfalt
              rúm, háloft fyrir 2–3, eldhúskrókur og klósett.
            </p>
            <p className="text-lg text-[var(--stone-gray)] leading-relaxed mb-10">
              Aðeins fyrir meðlimi félagsins. Á sérstakri síðu má finna verð,
              laus pláss, leiðina að skálanum og umgengnisreglur.
            </p>
            <Link
              to="/alfholl"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--fjord-blue)] text-white rounded-full text-lg hover:bg-[var(--deep-sea)] transition-all"
            >
              Sjá meira um Álfhól
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
