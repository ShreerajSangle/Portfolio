import { profile, services } from "../data/profile";
import { Disclosure } from "./Disclosure";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-label font-semibold uppercase text-gray-light">// 01 / About</p>
          <h2 className="font-display text-h2 mt-3 max-w-2xl text-balance font-bold">
            Design with purpose, build with rigor.
          </h2>
        </Reveal>

        <Reveal delay={80} className="measure mt-8 space-y-4 text-body text-gray-light">
          <p>{profile.summary}</p>
          <p>{profile.grounding}</p>
          <p className="text-body text-gray">{profile.goal}</p>
        </Reveal>

        <Reveal delay={140} className="mt-10 max-w-2xl">
          <Disclosure title="What I can help with" subtitle={`${services.length} areas`}>
            <ul className="space-y-4 pt-1">
              {services.map((s) => (
                <li key={s.title}>
                  <p className="font-display text-sm font-semibold text-paper">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-light">{s.description}</p>
                </li>
              ))}
            </ul>
          </Disclosure>
        </Reveal>
      </div>
    </section>
  );
}
