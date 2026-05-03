import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { LegacyPageLayout } from "../components/LegacyPageLayout";
import { galleries } from "../data/galleries";

export function GalleryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const gallery = galleries.find((g) => g.slug === slug);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : (i + 1) % gallery!.photos.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? null : (i - 1 + gallery!.photos.length) % gallery!.photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, gallery]);

  if (!gallery) return <Navigate to="/frodleikur" replace />;

  const active = activeIndex !== null ? gallery.photos[activeIndex] : null;

  return (
    <LegacyPageLayout title={gallery.title} intro={`${gallery.photos.length} myndir`}>
      <Link
        to="/frodleikur#myndir"
        className="inline-flex items-center gap-2 text-sm text-[var(--fjord-blue)] hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={14} /> Til baka í myndir
      </Link>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {gallery.photos.map((photo, i) => (
          <button
            key={photo.full}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="aspect-square overflow-hidden rounded-xl bg-gray-100 group cursor-zoom-in"
          >
            <img
              src={photo.thumb}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Loka"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.photos.length) % gallery.photos.length));
            }}
            aria-label="Fyrri mynd"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.photos.length));
            }}
            aria-label="Næsta mynd"
          >
            <ChevronRight size={32} />
          </button>
          <img
            src={active.full}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LegacyPageLayout>
  );
}
