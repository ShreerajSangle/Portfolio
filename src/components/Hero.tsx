import { profile } from "../data/profile";
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
          <p className="font-mono text-label font-semibold uppercase text-orange">
            {profile.location} · Open to Data/BI & AI/ML roles
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-5">
          <h1 className="font-display text-hero max-w-4xl text-balance font-extrabold">
            Hey, I&apos;m building at the intersection of{" "}
            <span className="bg-gradient-to-r from-orange to-cream bg-clip-text text-transparent">
              AI, data & product.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <p className="measure text-body text-balance text-gray-light">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={220} className="mt-8 flex flex-wrap items-center gap-3">
          {/* Primary action: filled orange, the site's one "do this" color */}
          <a
            href="#projects"
            className="press inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-dim"
          >
            View my work <span aria-hidden>→</span>
          </a>
          {/* Secondary in-page action: orange outline, same family as the primary */}
          <a
            href="#experience"
            className="press inline-flex items-center gap-2 rounded-full border border-orange/40 px-6 py-3 text-sm font-semibold text-orange transition-colors hover:border-orange hover:bg-orange/10"
          >
            View experience <span aria-hidden>↓</span>
          </a>
          {/* Tertiary: external contact links, neutral so they read as a distinct group */}
          <a
            href={`mailto:${profile.email}`}
            className="press inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-gray-light transition-colors hover:border-white/30 hover:text-paper"
          >
            Email me <span aria-hidden>↗</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-gray-light transition-colors hover:border-white/30 hover:text-paper"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-gray-light transition-colors hover:border-white/30 hover:text-paper"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
