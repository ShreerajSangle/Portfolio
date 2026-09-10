import { accentGradients, experience } from "../data/profile";
import { Reveal } from "./Reveal";

const internships = experience.filter((e) => e.role.toLowerCase().includes("intern"));

export function FeaturedExperience() {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Experience</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            Grounded in real internship work.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {internships.map((e, i) => (
            <Reveal
              key={e.company}
              delay={i * 60}
              className="grid overflow-hidden rounded-3xl border border-line md:grid-cols-[260px_1fr]"
            >
              <div
                className={`flex flex-col justify-between gap-6 bg-gradient-to-br p-6 sm:p-8 ${accentGradients[i % accentGradients.length]}`}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{e.period}</p>
                  <h3 className="font-display mt-3 text-2xl font-bold leading-tight text-white">{e.company}</h3>
                </div>
                <p className="text-sm text-white/70">{e.location}</p>
              </div>

              <div className="bg-surface p-6 sm:p-8">
                <h4 className="font-display text-lg font-semibold text-paper">{e.role}</h4>
                <ul className="mt-4 space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-gray-light">
                      <span aria-hidden className="mt-0.5 shrink-0 font-display text-sm font-bold text-orange">
                        &gt;
                      </span>
                      {b}
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
