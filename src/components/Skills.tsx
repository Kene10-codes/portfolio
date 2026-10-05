import { skillGroups } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map(({ group, items }) => (
          <div key={group}>
            <h3 className="font-semibold">{group}</h3>
            <ul className="mt-3 space-y-1.5">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
