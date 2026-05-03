import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { frodleikur } from "../data/frodleikur";

export function FrodleikurDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = frodleikur.find((e) => e.slug === slug);
  if (!entry) return <Navigate to="/frodleikur" replace />;

  return (
    <LegacyPageLayout title={entry.title}>
      <Link
        to="/frodleikur#frodleikur"
        className="inline-flex items-center gap-2 text-sm text-[var(--fjord-blue)] hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={14} /> Til baka í fróðleik
      </Link>
      <div className="space-y-4 text-[var(--charcoal)] leading-relaxed">
        {entry.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </LegacyPageLayout>
  );
}
