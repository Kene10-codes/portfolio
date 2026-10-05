import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-ink/15 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[200px_1fr]">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
