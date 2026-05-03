import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { tenglar } from "../data/tenglar";

export function TenglarDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const group = tenglar.find((t) => t.slug === slug);
  if (!group) return <Navigate to="/frodleikur" replace />;

  return (
    <LegacyPageLayout title={group.title}>
      <Link
        to="/frodleikur#tenglar"
        className="inline-flex items-center gap-2 text-sm text-[var(--fjord-blue)] hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={14} /> Til baka í tengla
      </Link>
      <ul className="space-y-3">
        {group.links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--charcoal)] hover:text-[var(--fjord-blue)] transition-colors group"
            >
              <span className="border-b border-transparent group-hover:border-current">
                {link.label}
              </span>
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </li>
        ))}
      </ul>
    </LegacyPageLayout>
  );
}
