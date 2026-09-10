import { education, skillGroups } from "../data/profile";
import { Disclosure } from "./Disclosure";
import { Reveal } from "./Reveal";

export function SkillsEducation() {
  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Skills & education</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            The toolkit, and where it came from.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={80}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray">Skills</p>
            <div>
              {skillGroups.map((g) => (
                <Disclosure key={g.title} title={g.title} subtitle={`${g.items.length}`}>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Disclosure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray">Education</p>
            <div>
              {education.map((ed) => (
                <Disclosure
                  key={`${ed.school}-${ed.degree}`}
                  title={ed.degree}
                  subtitle={ed.period || ed.school}
                >
                  <p className="text-sm text-orange">
                    {ed.school} · {ed.location}
                  </p>
                  {ed.detail && <p className="mt-2 text-sm text-gray-light">{ed.detail}</p>}
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {ed.coursework.map((c) => (
                      <li key={c} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-light">
                        {c}
                      </li>
                    ))}
                  </ul>
                </Disclosure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
