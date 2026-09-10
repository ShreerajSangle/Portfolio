import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectDetail } from "./pages/ProjectDetail";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen bg-ink text-paper">
        <Nav open={menuOpen} onOpenChange={setMenuOpen} />
        {/* inert while the mobile menu is open keeps focus and screen-reader
            navigation from reaching content hidden behind the overlay */}
        <main inert={menuOpen || undefined}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer inert={menuOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
