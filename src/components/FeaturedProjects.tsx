import { Link } from "react-router-dom";
import { projects } from "../data/profile";
import { Reveal } from "./Reveal";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-label font-semibold uppercase text-gray-light">// 04 / Selected work</p>
          <h2 className="font-display text-h2 mt-3 text-balance font-bold">
            A few projects worth a closer look.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/projects/${p.slug}`}
                className="press group flex h-full flex-col overflow-hidden rounded-3xl border border-line shadow-[0_0_0_rgba(0,0,0,0)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-orange/40 hover:shadow-[0_24px_40px_-20px_rgba(0,0,0,0.7)]"
              >
                <div className={`relative flex min-h-[160px] flex-col justify-between overflow-hidden bg-gradient-to-br p-6 ${p.gradient}`}>
                  {p.image && (
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-40"
                    />
                  )}
                  <span className="relative font-mono text-sm font-bold text-white/70">{p.number}</span>
                  <h3 className="relative font-display text-h3 font-bold text-white">{p.title}</h3>
                </div>

                <div className="flex flex-1 flex-col gap-1 bg-surface p-6">
                  <p className="text-body leading-relaxed text-gray-light">{p.oneLiner}</p>

                  {/* Secondary info layer — always visible on mobile/tablet where there's no
                      hover state to reveal it; hover/focus-revealed only at md: and above. */}
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-visible:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <ul className="font-mono text-label flex flex-wrap gap-1.5 pt-3">
                        {p.tech.map((t) => (
                          <li key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-gray-light">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    {p.headlineMetric && (
                      <span className="font-mono text-sm font-semibold text-orange">{p.headlineMetric}</span>
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
