import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Photo = { full: string; thumb: string };

interface PhotoGridProps {
  photos: Photo[];
  className?: string;
}

export function PhotoGrid({
  photos,
  className = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
}: PhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + photos.length) % photos.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, photos.length]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className={className}>
        {photos.map((photo, i) => (
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
              setActiveIndex((i) =>
                i === null ? null : (i - 1 + photos.length) % photos.length
              );
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
              setActiveIndex((i) =>
                i === null ? null : (i + 1) % photos.length
              );
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
    </>
  );
}
