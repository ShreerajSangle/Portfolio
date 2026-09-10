import { profile } from "../data/profile";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      <div
        aria-hidden
        className="brand-gradient pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-25 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-label font-semibold uppercase text-gray-light">// 06 / Get in touch</p>
          <h2 className="font-display text-h2 mt-3 text-balance font-bold">
            Let&apos;s build something together.
          </h2>
          <p className="text-body measure mt-4 text-gray-light">
            Open to Data/BI Analyst and junior AI/ML Engineer roles — reach out directly and I&apos;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono press inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-orange-dim"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-orange/50"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-orange/50"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
