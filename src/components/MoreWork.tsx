import { Link } from "react-router-dom";
import { projects } from "../data/profile";
import { Reveal } from "./Reveal";

const rest = projects.filter((p) => !p.featured);

export function MoreWork() {
  if (rest.length === 0) return null;

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-label mb-8 font-semibold uppercase text-gray">More work</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/projects/${p.slug}`}
                className="press group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-orange/40"
              >
                <span className="min-w-0">
                  <span className="font-display block font-semibold text-paper transition-colors group-hover:text-orange">
                    {p.title}
                  </span>
                  <span className="font-mono text-label mt-1.5 block text-gray-light">{p.subtitle}</span>
                </span>
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-gray-light transition-colors group-hover:border-orange group-hover:text-orange"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
