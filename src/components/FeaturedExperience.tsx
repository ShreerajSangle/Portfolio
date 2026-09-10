import { accentGradients, experience } from "../data/profile";
import { Reveal } from "./Reveal";

const internships = experience.filter((e) => e.role.toLowerCase().includes("intern"));

export function FeaturedExperience() {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-label font-semibold uppercase text-orange">// 02 / Experience</p>
          <h2 className="font-display text-h2 mt-3 text-balance font-bold">
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
                  <p className="font-mono text-label font-semibold uppercase text-white/70">{e.period}</p>
                  <h3 className="font-display text-h3 mt-3 font-bold leading-tight text-white">{e.company}</h3>
                </div>
                <p className="font-mono text-label text-white/70">{e.location}</p>
              </div>

              <div className="bg-surface p-6 sm:p-8">
                <h4 className="font-display text-lg font-semibold text-paper">{e.role}</h4>
                <ul className="mt-4 space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-body leading-relaxed text-gray-light">
                      <span aria-hidden className="font-mono mt-0.5 shrink-0 text-sm font-bold text-orange">
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
