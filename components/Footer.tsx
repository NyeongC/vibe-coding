import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "mailto:your@email.com", label: "이메일" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} 바이브 코딩. 개발자 포트폴리오
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
