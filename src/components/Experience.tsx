import { experience } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8 border-l-2 border-accent/30 pl-6">
        {experience.map(({ period, title, detail }) => (
          <li key={title}>
            <p className="font-mono text-sm text-accent">{period}</p>
            <h3 className="mt-1 text-lg font-semibold">{title}</h3>
            <p className="mt-1 max-w-2xl leading-relaxed">{detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
