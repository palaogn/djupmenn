import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("news")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1497297557835-539059ef5066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwZmpvcmRzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzY0NjgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="West Fjords Iceland"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="mb-8 leading-tight">Djúpmannafélagið</h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto font-light">
          Samfélags- og menningarsamtök fólks frá Vestfjörðum
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join"
            className="group px-8 py-4 bg-white text-[var(--fjord-blue)] hover:bg-[var(--ice-blue)] transition-all rounded-full text-lg inline-flex items-center justify-center gap-2"
          >
            Gerast meðlimur
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform"
            />
          </a>
          <a
            href="#cabin"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all rounded-full border border-white/30 text-lg"
          >
            <span className="flex items-center gap-2">Um Álfhól</span>
          </a>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} strokeWidth={1.5} />
      </button>
    </section>
  );
}
