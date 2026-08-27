import Link from "next/link";
import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center px-6 py-24 text-center">
      <Compass className="h-8 w-8 text-primary" />
      <h1 className="mt-4 font-display text-2xl">This destination isn't on the map</h1>
      <p className="mt-2 text-muted-foreground">
        The trip you're looking for doesn't exist, or the link is out of date.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to explore</Link>
      </Button>
    </main>
  );
}
