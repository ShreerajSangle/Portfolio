import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { MoreWork } from "../components/MoreWork";
import { Skills } from "../components/Skills";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <MoreWork />
      <Education />
      <Contact />
    </>
  );
}
