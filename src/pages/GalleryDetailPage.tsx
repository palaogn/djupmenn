import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { PhotoGrid } from "../components/PhotoGrid";
import { galleries } from "../data/galleries";

export function GalleryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const gallery = galleries.find((g) => g.slug === slug);
  if (!gallery) return <Navigate to="/frodleikur" replace />;

  return (
    <LegacyPageLayout title={gallery.title} intro={`${gallery.photos.length} myndir`}>
      <Link
        to="/frodleikur#myndir"
        className="inline-flex items-center gap-2 text-sm text-[var(--fjord-blue)] hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={14} /> Til baka í myndir
      </Link>

      <PhotoGrid photos={gallery.photos} />
    </LegacyPageLayout>
  );
}
