"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "#hero", label: "홈" },
  { href: "#projects", label: "프로젝트" },
  { href: "#about", label: "소개" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          바이브 코딩
        </Link>
        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
