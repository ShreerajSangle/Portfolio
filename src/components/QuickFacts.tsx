import { quickFacts } from "../data/profile";
import { Reveal } from "./Reveal";

export function QuickFacts() {
  const last = quickFacts.length - 1;

  return (
    <Reveal as="div" className="border-y border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
        {quickFacts.map((f, i) => (
          <div
            key={f.label}
            className={[
              "border-line px-5 py-8 sm:px-8",
              i % 2 === 0 ? "border-r" : "",
              i < 2 ? "border-b" : "",
              "sm:border-b-0",
              i !== last ? "sm:border-r" : "sm:border-r-0",
            ].join(" ")}
          >
            <p className="font-mono text-h3 font-bold tracking-tight text-paper">{f.value}</p>
            <p className="font-mono text-label mt-2 font-semibold uppercase text-gray-light">{f.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
