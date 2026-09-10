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

          <div className="mt-12 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-surface-raised">
            {skillGroups.map((g, i) => (
              <div key={g.title} className="flex flex-col gap-4 p-6 sm:flex-row sm:gap-8 sm:p-7">
                <div className="flex shrink-0 items-center gap-3 sm:w-56">
                  <span
                    aria-hidden
                    className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${accentGradients[i % accentGradients.length]}`}
                  />
                  <h3 className="font-display text-base font-semibold text-paper sm:text-lg">{g.title}</h3>
                </div>
                <ul className="flex flex-1 flex-wrap gap-2">
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
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
