import { experience } from "../data/profile";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Experience</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            Grounded in real operational work, not just theory.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10">
          {experience.map((e, i) => (
            <Reveal
              key={`${e.company}-${e.role}`}
              delay={i * 40}
              className="grid gap-4 border-b border-line pb-10 last:border-b-0 md:grid-cols-[220px_1fr]"
            >
              <div>
                <h3 className="font-display font-semibold text-paper">{e.company}</h3>
                <p className="text-sm text-orange">{e.role}</p>
                <p className="mt-1 text-sm text-gray">
                  {e.location} · {e.period}
                </p>
              </div>
              <ul className="space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-gray-light">
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
