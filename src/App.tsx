import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
