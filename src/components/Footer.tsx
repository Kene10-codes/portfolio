import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-ink/15 py-8 text-center text-sm">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
