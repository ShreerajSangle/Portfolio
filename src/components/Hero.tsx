import { heroStats, profile, techStack } from "../data/profile";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="brand-gradient pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-30 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            {profile.location} · Open to Data/BI & AI/ML roles
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-4">
          <h1 className="font-display max-w-4xl text-balance text-[2.75rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl">
            Hey, I&apos;m building at the intersection of{" "}
            <span className="bg-gradient-to-r from-orange to-cream bg-clip-text text-transparent">
              AI, data & product.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160} className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-balance text-lg leading-relaxed text-gray-light">
            {profile.tagline}
          </p>
          <a
            href="#projects"
            className="press inline-flex w-fit items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-cream"
          >
            See my work
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={240} className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.id}>
              <span className="font-display text-xs font-bold text-orange">{s.id}</span>
              <p className="mt-1 text-sm font-medium text-gray-light">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={300} className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray">Core stack</p>
          <ul className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-gray-light"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
