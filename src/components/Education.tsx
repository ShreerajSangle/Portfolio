import { accentGradients, education } from "../data/profile";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Education</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            Where the toolkit came from.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {education.map((ed, i) => (
            <Reveal
              key={`${ed.school}-${ed.degree}`}
              delay={i * 60}
              className="grid overflow-hidden rounded-3xl border border-line md:grid-cols-[260px_1fr]"
            >
              <div
                className={`flex flex-col justify-between gap-6 bg-gradient-to-br p-6 sm:p-8 ${accentGradients[i % accentGradients.length]}`}
              >
                <div>
                  {ed.period && (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{ed.period}</p>
                  )}
                  <h3 className="font-display mt-3 text-xl font-bold leading-tight text-white">{ed.degree}</h3>
                </div>
                <p className="text-sm text-white/70">{ed.location}</p>
              </div>

              <div className="bg-surface p-6 sm:p-8">
                <h4 className="font-display text-lg font-semibold text-paper">{ed.school}</h4>
                {ed.detail && <p className="mt-2 text-sm leading-relaxed text-gray-light">{ed.detail}</p>}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {ed.coursework.map((c) => (
                    <li key={c} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-light">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
