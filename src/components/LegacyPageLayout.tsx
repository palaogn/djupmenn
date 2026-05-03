import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LegacyPageLayoutProps {
  title: string;
  intro?: string;
  children: ReactNode;
}

export function LegacyPageLayout({ title, intro, children }: LegacyPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <header className="pt-36 pb-14 px-6 lg:px-8 bg-gradient-to-b from-[var(--ice-blue)] to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--fjord-blue)] break-words hyphens-auto" lang="is">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-lg text-[var(--stone-gray)] leading-relaxed">{intro}</p>
          )}
        </div>
      </header>
      <main className="flex-1 px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
