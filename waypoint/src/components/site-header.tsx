import Link from "next/link";
import { Compass } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Compass className="h-4 w-4" />
          </span>
          <span className="font-display text-lg tracking-tight">Waypoint</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Explore
          </Link>
          <a
            href="https://github.com"
            className="hidden transition-colors hover:text-foreground sm:inline"
          >
            Playground repo
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
