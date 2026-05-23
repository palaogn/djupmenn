import { ExternalLink } from "lucide-react";

const FORM_URL = "https://forms.gle/3Wg7Tes3Ja7nwbPb8";

export function JoinSection() {
  return (
    <section
      id="join"
      className="py-32 px-6 bg-gradient-to-br from-[var(--fjord-blue)] via-[var(--deep-sea)] to-[var(--charcoal)] text-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="mb-6 text-white">Gerast meðlimur</h2>
        <p className="text-xl text-white/90 leading-relaxed mb-4">
          Komdu og vertu hluti af samfélagi Djúpmanna og hjálpaðu okkur að móta félagið.
        </p>
        <p className="text-lg text-white/80 leading-relaxed mb-12">
          Árleg félagsgjöld eru 4.000 kr.
        </p>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white text-[var(--fjord-blue)] px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-[var(--ice-blue)] transition-all text-base sm:text-lg shadow-xl"
        >
          Fylla út umsókn
          <ExternalLink
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>

        <p className="text-sm text-white/70 mt-8">
          Eyðublaðið opnast í nýjum flipa.
        </p>
      </div>
    </section>
  );
}
