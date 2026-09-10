import { experience } from "../data/profile";
import { Reveal } from "./Reveal";

const rest = experience.filter((e) => !e.role.toLowerCase().includes("intern"));

export function MoreExperience() {
  if (rest.length === 0) return null;

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-label mb-8 font-semibold uppercase text-orange">More experience</p>
        <div className="space-y-4">
          {rest.map((e, i) => (
            <Reveal
              key={e.company}
              delay={i * 60}
              className="grid gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20 sm:p-7 md:grid-cols-[1fr_2fr]"
            >
              <div className="flex gap-4 md:flex-col md:gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 font-mono text-xs font-bold text-gray-light">
                  {e.company
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-paper">{e.company}</h3>
                  <p className="text-sm text-orange">{e.role}</p>
                  <p className="font-mono text-label mt-1 text-gray">
                    {e.location} · {e.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 border-t border-line pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                {e.bullets.map((b) => (
                  <li key={b} className="text-body flex items-start gap-2 leading-relaxed text-gray-light">
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
