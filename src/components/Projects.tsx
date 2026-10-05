import { projects } from "../data/portfolio";
import type { Project } from "../types";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";

function ProjectItem({ title, summary, stack, liveUrl, repoUrl }: Project) {
  return (
    <li className="py-8 first:pt-0">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-2xl leading-relaxed">{summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${title} tech stack`}>
        {stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-6">
        {liveUrl && (
          <a href={liveUrl} className="link focus-ring">
            Live site
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} className="link focus-ring">
            Source code
          </a>
        )}
      </div>
    </li>
  );
}

export function Projects() {
  return (
    <Section id="work" title="Selected work">
      <ul className="divide-y divide-ink/15">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>
    </Section>
  );
}
