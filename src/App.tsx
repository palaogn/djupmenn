import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { NewsSection } from "./components/NewsSection";
import { AboutSection } from "./components/AboutSection";
import { CabinSection } from "./components/CabinSection";
import { JoinSection } from "./components/JoinSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <NewsSection />
      <AboutSection />
      <CabinSection />
      <JoinSection />
      <Footer />
    </div>
  );
}

/*
TODO

- Add instagram
- Connect to contentful for blogs
- Add companies in west fjords
*/
