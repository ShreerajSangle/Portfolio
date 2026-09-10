import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { FeaturedExperience } from "../components/FeaturedExperience";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { MoreExperience } from "../components/MoreExperience";
import { MoreWork } from "../components/MoreWork";
import { Skills } from "../components/Skills";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <About />
      <FeaturedExperience />
      <MoreExperience />
      <Skills />
      <FeaturedProjects />
      <MoreWork />
      <Education />
      <Contact />
    </>
  );
}
