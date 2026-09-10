import { services } from "../data/profile";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Services</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
            What I can help you with.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className="rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-orange/40"
            >
              <span className="font-display text-xs font-bold text-orange">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-light leading-relaxed">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
