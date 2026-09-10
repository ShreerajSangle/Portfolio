import { useId, useState, type ReactNode } from "react";

type DisclosureProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function Disclosure({ title, subtitle, children, defaultOpen = false, className = "" }: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className={`border-b border-line ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        className="press flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span>
          <span className="font-display font-semibold text-paper">{title}</span>
          {subtitle && <span className="font-mono text-label ml-3 text-gray">{subtitle}</span>}
        </span>
        <span
          aria-hidden
          className={`shrink-0 text-gray-light transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        id={contentId}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
