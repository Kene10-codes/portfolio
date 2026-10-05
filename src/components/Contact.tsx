import { profile } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed">
        I'm open to full-stack roles and freelance projects. The quickest way to reach me is email.
      </p>
      <a href={`mailto:${profile.email}`} className="link focus-ring mt-4 inline-block text-2xl font-semibold text-accent">
        {profile.email}
      </a>
      <div className="mt-6 flex gap-6">
        <a href={profile.github} className="link focus-ring">
          GitHub
        </a>
        <a href={profile.linkedin} className="link focus-ring">
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
