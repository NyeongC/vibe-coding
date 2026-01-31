import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getProfile } from "@/lib/data";

const profile = getProfile();

const footerLinks = [
  profile.contact.github && { href: profile.contact.github, label: "GitHub" },
  profile.contact.linkedin && {
    href: profile.contact.linkedin,
    label: "LinkedIn",
  },
  profile.contact.email && {
    href: `mailto:${profile.contact.email}`,
    label: "이메일",
  },
].filter(Boolean) as { href: string; label: string }[];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. 개발자 포트폴리오
        </p>
        <ul className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
