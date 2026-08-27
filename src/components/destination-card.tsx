import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Destination } from "@/data/destinations";
import { Badge } from "@/components/ui/badge";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.region}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-1 font-mono text-xs tracking-widest text-foreground">
          {destination.code}
        </span>
      </div>

      <div className="tear-line mx-5" />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg leading-tight">
              {destination.name}
            </h3>
            <p className="text-sm text-muted-foreground">{destination.region}</p>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>

        <p className="mt-3 text-sm text-foreground/80">{destination.tagline}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {destination.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-xs text-muted-foreground">
          <span>{destination.days} days</span>
          <span>
            from{" "}
            <span className="text-sm text-foreground">
              ${destination.priceFrom.toLocaleString()}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
