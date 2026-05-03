import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { FrodleikurHubPage } from "./pages/FrodleikurHubPage";
import { FrodleikurDetailPage } from "./pages/FrodleikurDetailPage";
import { TenglarDetailPage } from "./pages/TenglarDetailPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { GalleryDetailPage } from "./pages/GalleryDetailPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/frodleikur" element={<FrodleikurHubPage />} />
      <Route path="/frodleikur/efni/:slug" element={<FrodleikurDetailPage />} />
      <Route path="/frodleikur/tenglar/:slug" element={<TenglarDetailPage />} />
      <Route path="/frodleikur/greinar/:slug" element={<ArticleDetailPage />} />
      <Route path="/frodleikur/myndir/:slug" element={<GalleryDetailPage />} />
      </Routes>
    </>
  );
}
