import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function NotFound() {
  useDocumentMeta("Page not found — Shreeraj Sangle", "This page couldn't be found.");

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-label font-semibold uppercase text-gray-light">404</p>
      <h1 className="font-display text-h2 mt-3 font-bold">That page doesn&apos;t exist.</h1>
      <p className="text-body measure mt-4 text-gray-light">
        The link you followed didn&apos;t resolve to anything here — it may be out of date or mistyped.
      </p>
      <Link
        to="/#projects"
        className="press mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-dim"
      >
        Back to work <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
