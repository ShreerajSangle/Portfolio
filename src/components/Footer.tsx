import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-gray sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-paper">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-paper">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-paper">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
