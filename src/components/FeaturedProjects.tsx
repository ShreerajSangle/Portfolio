import { Link } from "react-router-dom";
import { projects } from "../data/profile";
import { Reveal } from "./Reveal";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Selected work</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            A few projects worth a closer look.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/projects/${p.slug}`}
                className="press group flex h-full flex-col overflow-hidden rounded-3xl border border-line transition-colors hover:border-orange/40"
              >
                <div className={`relative flex min-h-[160px] flex-col justify-between bg-gradient-to-br p-6 ${p.gradient}`}>
                  <span className="font-display text-sm font-bold text-white/70">{p.number}</span>
                  <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                </div>

                <div className="flex flex-1 flex-col gap-4 bg-surface p-6">
                  <p className="text-sm leading-relaxed text-gray-light">{p.oneLiner}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    {p.headlineMetric && (
                      <span className="text-sm font-semibold text-orange">{p.headlineMetric}</span>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-paper transition-colors group-hover:text-orange">
                      View case study <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
