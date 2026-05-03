import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { CabinSection } from "../components/CabinSection";
import { JoinSection } from "../components/JoinSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <CabinSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
