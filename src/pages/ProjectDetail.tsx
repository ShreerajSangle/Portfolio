import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-24">
      <div className={`relative flex min-h-[280px] flex-col justify-end bg-gradient-to-br p-5 sm:p-8 ${project.gradient}`}>
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Link
              to="/#projects"
              className="press inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white"
            >
              <span aria-hidden>←</span> Back to work
            </Link>
            <p className="font-mono mt-6 text-sm font-bold text-white/70">{project.number}</p>
            <h1 className="font-display text-h2 mt-2 max-w-3xl text-balance font-extrabold text-white">
              {project.title}
            </h1>
            <p className="text-body measure mt-3 text-balance text-white/80">{project.subtitle}</p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <Reveal className="measure space-y-6">
            <p className="text-body leading-relaxed text-gray-light">{project.description}</p>

            {project.results && (
              <div>
                <p className="font-mono text-label mb-3 font-semibold uppercase text-gray">Results</p>
                <ul className="space-y-2">
                  {project.results.map((r) => (
                    <li key={r} className="text-body flex items-start gap-2 text-paper">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>

          <Reveal delay={80} className="space-y-8">
            <div>
              <p className="font-mono text-label mb-3 font-semibold uppercase text-gray">Tech</p>
              <ul className="font-mono text-label flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-gray-light">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {project.links && (
              <div>
                <p className="font-mono text-label mb-3 font-semibold uppercase text-gray">Links</p>
                <div className="flex flex-col gap-2">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="press inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-paper underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
                    >
                      {l.label} <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            to={`/projects/${next.slug}`}
            className="press group flex items-center justify-between gap-4"
          >
            <span>
              <span className="font-mono text-label font-semibold uppercase text-gray">Next project</span>
              <span className="font-display text-h3 mt-1 block font-bold text-paper transition-colors group-hover:text-orange">
                {next.title}
              </span>
            </span>
            <span aria-hidden className="text-2xl text-gray-light transition-colors group-hover:text-orange">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
