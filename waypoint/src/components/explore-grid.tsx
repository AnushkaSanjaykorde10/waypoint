"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";

import type { Destination } from "@/data/destinations";
import { Input } from "@/components/ui/input";
import { DestinationCard } from "@/components/destination-card";
import { cn } from "@/lib/utils";

export function ExploreGrid({ destinations }: { destinations: Destination[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    destinations.forEach((d) => d.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [destinations]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter((d) => {
      const matchesQuery =
        q.length === 0 ||
        d.name.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q);
      const matchesTag = !activeTag || d.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [destinations, query, activeTag]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, regions, or vibes…"
            className="rounded-full pl-10"
            aria-label="Search destinations"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
              activeTag === null
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
                activeTag === tag
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
          <SearchX className="h-6 w-6 text-muted-foreground" />
          <p className="font-display text-lg">No destinations match yet</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Try a different search term, or clear the tag filter to see everything.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      )}
    </div>
  );
}
