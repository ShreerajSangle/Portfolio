import { education, profile } from "../data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">About</p>
          <h2 className="font-display mt-3 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            Design with purpose, build with rigor.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={80} className="space-y-5 text-lg leading-relaxed text-gray-light">
            <p>{profile.summary}</p>
            <p>{profile.grounding}</p>
            <p>{profile.goal}</p>
          </Reveal>

          <Reveal delay={160}>
            <div className="space-y-6">
              {education.map((ed) => (
                <div key={`${ed.school}-${ed.degree}`} className="rounded-2xl border border-line bg-surface p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold text-paper">{ed.degree}</h3>
                    {ed.period && <span className="text-sm text-gray">{ed.period}</span>}
                  </div>
                  <p className="mt-1 text-sm text-orange">
                    {ed.school} · {ed.location}
                  </p>
                  {ed.detail && <p className="mt-3 text-sm text-gray-light">{ed.detail}</p>}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {ed.coursework.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-light"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
