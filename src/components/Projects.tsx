import { projects } from "../data/profile";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Selected work</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            A curated collection of AI systems, full-stack apps, and forecasting projects.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className="group grid gap-0 overflow-hidden rounded-3xl border border-line md:grid-cols-2">
                <div
                  className={`relative flex min-h-[220px] flex-col justify-between bg-gradient-to-br p-8 ${p.gradient}`}
                >
                  <span className="font-display text-sm font-bold text-white/70">{p.number}</span>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                </div>

                <div className="flex flex-col justify-center gap-4 bg-surface p-8">
                  <p className="text-sm font-semibold text-orange">{p.subtitle}</p>
                  <p className="text-gray-light leading-relaxed">{p.description}</p>

                  {p.results && (
                    <ul className="space-y-1.5">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-paper">
                          <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-light">
                        {t}
                      </li>
                    ))}
                  </ul>

                  {p.links && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="press inline-flex items-center gap-1.5 text-sm font-semibold text-paper underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
                        >
                          {l.label} <span aria-hidden>↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
