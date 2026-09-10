import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { MoreWork } from "../components/MoreWork";
import { SkillsEducation } from "../components/SkillsEducation";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <MoreWork />
      <About />
      <Experience />
      <SkillsEducation />
      <Contact />
    </>
  );
}
