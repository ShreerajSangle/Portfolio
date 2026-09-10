import { skillGroups } from "../data/profile";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Skills</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            A toolkit spanning AI, full-stack, and data.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 50}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <span className="font-display text-xs font-bold text-orange">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-light">
                    {item}
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
