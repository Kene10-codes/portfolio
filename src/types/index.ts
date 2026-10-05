export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly bio: string;
  readonly stack: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly summary: string;
  readonly stack: readonly string[];
  readonly liveUrl?: string;
  readonly repoUrl?: string;
}

export interface SkillGroup {
  readonly group: string;
  readonly items: readonly string[];
}

export interface ExperienceItem {
  readonly period: string;
  readonly title: string;
  readonly detail: string;
}

export interface NavItem {
  readonly id: string;
  readonly label: string;
}
