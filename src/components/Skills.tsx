import { accentGradients, skillGroups } from "../data/profile";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Dedicated panel: one surface level up from the page background,
            so Skills reads as its own space rather than another flat section. */}
        <Reveal
          as="div"
          className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-10"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-label font-semibold uppercase text-orange">// 03 / Skills</p>
            <h2 className="font-display text-h2 mt-3 text-balance font-bold">
              A toolkit spanning AI, full-stack, and data.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => (
              <div
                key={g.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-surface-raised"
              >
                <div
                  className={`flex h-16 items-center bg-gradient-to-br px-6 ${accentGradients[i % accentGradients.length]}`}
                >
                  <span className="font-mono text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6 pt-5">
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-label rounded-full bg-white/5 px-3 py-1.5 text-gray-light"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
