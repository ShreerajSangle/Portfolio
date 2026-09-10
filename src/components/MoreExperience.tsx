import { experience } from "../data/profile";
import { Reveal } from "./Reveal";

const rest = experience.filter((e) => !e.role.toLowerCase().includes("intern"));

export function MoreExperience() {
  if (rest.length === 0) return null;

  return (
    <Reveal as="div" className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray">More experience</p>
        <div className="space-y-8">
          {rest.map((e) => (
            <div
              key={e.company}
              className="grid gap-3 border-b border-line pb-8 last:border-b-0 md:grid-cols-[220px_1fr]"
            >
              <div>
                <h3 className="font-display font-semibold text-paper">{e.company}</h3>
                <p className="text-sm text-orange">{e.role}</p>
                <p className="mt-1 text-sm text-gray">
                  {e.location} · {e.period}
                </p>
              </div>
              <ul className="space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-gray-light">
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
