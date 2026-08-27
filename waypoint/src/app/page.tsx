import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { destinations } from "@/data/destinations";
import { ExploreGrid } from "@/components/explore-grid";
import { Button } from "@/components/ui/button";

export default function Home() {
  const destinationCount = destinations.length;
  const avgDays = Math.round(
    destinations.reduce((sum, d) => sum + d.days, 0) / destinationCount
  );
  const fromPrice = Math.min(...destinations.map((d) => d.priceFrom));
  const featured = destinations[0];

  return (
    <main>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Departures — all destinations
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] sm:text-5xl">
              Where to next?
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              A short list of places worth the trip, each one planned down to
              the first three days so you can stop scrolling and start
              packing.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#destinations">
                  Explore destinations
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <dl className="mt-10 flex flex-wrap gap-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Destinations
                </dt>
                <dd className="mt-1 font-display text-2xl">
                  {destinationCount}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Avg. trip length
                </dt>
                <dd className="mt-1 font-display text-2xl">{avgDays} days</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Trips from
                </dt>
                <dd className="mt-1 font-display text-2xl">
                  ${fromPrice.toLocaleString()}
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={featured.image}
                alt={`${featured.name}, ${featured.region}`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
            <Link
              href={`/destinations/${featured.slug}`}
              className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg transition-transform hover:-translate-y-0.5 sm:left-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-mono text-xs text-primary">
                {featured.code}
              </span>
              <span>
                <span className="block text-sm font-medium leading-tight">
                  {featured.name}, {featured.region}
                </span>
                <span className="block text-xs text-muted-foreground">
                  from ${featured.priceFrom.toLocaleString()}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-6xl px-6 py-16">
        <ExploreGrid destinations={destinations} />
      </section>
    </main>
  );
}
