import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { articles } from "../data/articles";

const dateFormatter = new Intl.DateTimeFormat("is-IS", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/frodleikur" replace />;

  return (
    <LegacyPageLayout title={article.title} intro={dateFormatter.format(new Date(article.dateISO))}>
      <Link
        to="/frodleikur#greinar"
        className="inline-flex items-center gap-2 text-sm text-[var(--fjord-blue)] hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={14} /> Til baka í greinar
      </Link>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full max-w-2xl rounded-2xl shadow-sm mb-8"
        />
      )}
      <div className="space-y-4 text-[var(--charcoal)] leading-relaxed">
        {article.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </LegacyPageLayout>
  );
}
