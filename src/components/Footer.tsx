import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="font-mono text-label mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-gray sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-paper">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-paper">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-paper">
            Email
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="press inline-flex items-center gap-1 transition-colors hover:text-orange"
          >
            Back to top <span aria-hidden>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
