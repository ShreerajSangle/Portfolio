import { Link } from "react-router-dom";
import { projects } from "../data/profile";
import { Reveal } from "./Reveal";

const rest = projects.filter((p) => !p.featured);

export function MoreWork() {
  if (rest.length === 0) return null;

  return (
    <Reveal as="div" className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-label mb-6 font-semibold uppercase text-gray">More work</p>
        <ul className="divide-y divide-line">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/projects/${p.slug}`}
                className="press group flex items-center justify-between gap-4 py-4"
              >
                <span>
                  <span className="font-display font-semibold text-paper transition-colors group-hover:text-orange">
                    {p.title}
                  </span>
                  <span className="ml-3 text-sm text-gray-light">{p.subtitle}</span>
                </span>
                <span aria-hidden className="text-gray-light transition-colors group-hover:text-orange">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
