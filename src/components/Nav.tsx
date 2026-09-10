import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/profile";

const LINKS = [
  { hash: "#experience", label: "Experience" },
  { hash: "#skills", label: "Skills" },
  { hash: "#projects", label: "Projects" },
  { hash: "#education", label: "Education" },
  { hash: "#contact", label: "Contact" },
];

type NavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Nav({ open, onOpenChange }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll and allow Escape to close while the mobile
  // menu is open — the rest of the page is also made `inert` by App.tsx.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  // The menu, its toggle button, and the "main is inert" lock are all
  // md:hidden/mobile-only. Without this, opening the menu then resizing (or
  // rotating a tablet) past the md breakpoint strands the page: the toggle
  // button disappears, main stays inert, and body scroll stays locked, with
  // no visible way out.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 768px)");
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) onOpenChange(false);
    }
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open, onOpenChange]);

  function goToSection(hash: string) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      onOpenChange(false);
      if (location.pathname === "/") {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", hash);
      } else {
        navigate(`/${hash}`);
      }
    };
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/60 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          Shreeraj<span className="text-orange">.</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-light md:flex">
          {LINKS.map((l) => (
            <li key={l.hash}>
              <a href={`/${l.hash}`} onClick={goToSection(l.hash)} className="press transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={`mailto:${profile.email}`}
            className="press inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-orange-dim"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => onOpenChange(!open)}
          className="press flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-paper transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-paper transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        inert={!open || undefined}
        className={`fixed inset-x-0 top-[57px] bottom-0 overflow-y-auto bg-black transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 text-base">
          {LINKS.map((l) => (
            <li key={l.hash}>
              <a
                href={`/${l.hash}`}
                onClick={goToSection(l.hash)}
                className="block rounded-lg px-2 py-2.5 text-gray-light transition-colors hover:bg-white/5 hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => onOpenChange(false)}
              className="press inline-flex w-full items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-black"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
