import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { articles } from "../data/articles";
import { frodleikur } from "../data/frodleikur";
import { tenglar } from "../data/tenglar";
import { galleries } from "../data/galleries";

const dateFormatter = new Intl.DateTimeFormat("is-IS", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

interface CardProps {
  to: string;
  title: string;
  meta?: string;
  description: string;
  image?: string;
}

function Card({ to, title, meta, description, image }: CardProps) {
  return (
    <Link
      to={to}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all hover:-translate-y-1 flex flex-col h-full"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        {meta && <p className="text-xs uppercase tracking-wide text-[var(--stone-gray)] mb-2">{meta}</p>}
        <h3 className="text-lg text-[var(--fjord-blue)] leading-snug mb-3 line-clamp-2 min-h-[3.25rem]">
          {title}
        </h3>
        <p className="text-sm text-[var(--charcoal)]/80 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm text-[var(--fjord-blue)] gap-1 group-hover:gap-2 transition-all">
          Lesa meira <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

function pickDescription(paragraphs: string[]): string {
  return paragraphs.find((p) => p.length >= 40) ?? paragraphs.join(" ");
}

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <h2 className="text-3xl lg:text-4xl text-[var(--fjord-blue)]">{title}</h2>
      <p className="mt-2 text-[var(--stone-gray)]">{subtitle}</p>
    </div>
  );
}

export function FrodleikurHubPage() {
  const sortedArticles = [...articles].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <LegacyPageLayout
      title="Fróðleikur"
      intro="Saga félagsins, gagnlegir tenglar og eldri fréttir úr starfi Félags Djúpmanna."
    >
      <section className="mb-20">
        <SectionHeading
          id="frodleikur"
          title="Fróðleikur"
          subtitle="Saga, lög og upplýsingar um félagið og Ísafjarðardjúp."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frodleikur.map((entry) => (
            <Card
              key={entry.id}
              to={`/frodleikur/efni/${entry.slug}`}
              title={entry.title}
              description={pickDescription(entry.paragraphs)}
            />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading
          id="tenglar"
          title="Tenglar"
          subtitle="Fjölmiðlar, átthagafélög og ferðaþjónusta á Vestfjörðum."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tenglar.map((group) => (
            <Card
              key={group.id}
              to={`/frodleikur/tenglar/${group.slug}`}
              title={group.title}
              description={group.links.map((l) => l.label).join(" · ")}
              meta={`${group.links.length} tenglar`}
            />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading
          id="myndir"
          title="Myndir"
          subtitle="Ljósmyndir úr starfi félagsins og frá Ísafjarðardjúpi."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {galleries.map((gallery) => (
            <Card
              key={gallery.id}
              to={`/frodleikur/myndir/${gallery.slug}`}
              title={gallery.title}
              meta={`${gallery.photos.length} myndir`}
              description=""
              image={gallery.photos[0]?.thumb}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          id="greinar"
          title="Greinar"
          subtitle="Eldri fréttir og tilkynningar úr starfi félagsins."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <Card
              key={article.id}
              to={`/frodleikur/greinar/${article.slug}`}
              title={article.title}
              meta={dateFormatter.format(new Date(article.dateISO))}
              description={pickDescription(article.paragraphs)}
              image={article.image}
            />
          ))}
        </div>
      </section>
    </LegacyPageLayout>
  );
}
