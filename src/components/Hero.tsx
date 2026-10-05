import { profile } from "../data/portfolio";

const stackLines = profile.stack.map((tech) => `    "${tech}",`).join("\n");

const profileSnippet = `const me: Developer = {
  role: "${profile.role}",
  location: "${profile.location}",
  stack: [
${stackLines}
  ],
  available: true,
};`;

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:py-28">
      <div>
        <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">{profile.name}</h1>
        <p className="mt-6 text-2xl font-semibold text-accent">{profile.role}</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed">{profile.bio}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#work" className="focus-ring rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-accent">
            See my work
          </a>
          <a href="../assets/Kenechukwu_Nwobodo_Resume.pdf" download="Kenechukwu_Nwobodo_Resume" className="focus-ring rounded-md border border-ink px-5 py-3 font-semibold hover:bg-tint">
            📥 Download Resume
          </a>
        </div>
      </div>

      <pre
        aria-label="Profile summary as TypeScript"
        className="self-start overflow-x-auto rounded-xl bg-ink p-6 font-mono text-sm leading-7 text-[#c9d6f5]"
      >
        {profileSnippet}
      </pre>
    </section>
  );
}
