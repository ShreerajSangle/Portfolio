import { highlights } from "../data/profile";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Results</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            A few numbers from the work above.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 60}>
              <p className="font-display text-4xl font-extrabold tracking-tight text-orange sm:text-5xl">
                {h.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-light">{h.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
