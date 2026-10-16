import type {
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SkillGroup,
} from "../types";

export const profile: Profile = {
  name: "Kenechukwu Nwobodo",
  role: "Full-stack developer",
  location: "Abuja, Nigeria",
  email: "nwobodokenechukwu2@gmail.com",
  github: "https://github.com/Kene10-codes",
  linkedin: "https://linkedin.com/in/kenechukwunwobodo/",
  bio: "I build web products from the database to the browser with TypeScript, React and Node.js, and I care about typed APIs, fast pages and code a team can maintain.",
  stack: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Mongo DB"
  ],
};

export const navItems: readonly NavItem[] = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const projects: readonly Project[] = [
  {
    title: "Techie Laptops",
    summary:
      "Techie Laptops is a technology retail business that specializes in selling laptops, phones, gaming products, accessories, and related gadgets.",
    stack: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "Node.js", "Express"],
    liveUrl: "#",
    repoUrl: "#",
  },
   {
    title: "Spendwise",
    summary:
      "Spendwise is an application that allows users to manage their personal finances in one place.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://jovial-zabaione-0efa78.netlify.app/",
    repoUrl: "https://github.com/Kene10-codes/spendwise",
  },
  {
    title: "  Weather App",
    summary:
      "Real-time weather updates across multiple locations.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://weather-app-murex-phi.vercel.app/",
    repoUrl: "https://github.com/Kene10-codes/weatherApp",
  }
];

export const skillGroups: readonly SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST",],
  },
  {
    group: "Data and infrastructure",
    items: [
      "PostgreSQL",
      "MongoDB"
    ],
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    period: "May 2025 -  July 2025 (Contract)",
    title: "IT / Programming Instructor | CITOM Technologies - Affiliate of Cisco Networking Academy",
    detail:
      "Teach programming and digital technology concepts to secondary-school students.",
  },
  {
    period: "2022 | Approximately 4–5 months",
    title: "Software Developer | Zsoft Solutions Ltd",
    detail:
      "•	Developed and supported software solutions using JavaScript/Node.js technologies and REST APIs.",
  },
  {
    period: "2022 - Prsent",
    title: "Founder | Techie Laptops",
    detail:
      "•	Founded and operate a technology retail business focused on laptops, phones, gaming products, accessories, and related gadgets.",
  },
];
