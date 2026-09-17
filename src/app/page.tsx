import { destinations } from "@/data/destinations";
import { ExploreGrid } from "@/components/explore-grid";
import { WorldMap } from "@/components/world-map";

export default function Home() {
  return (
    <main>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Departures — all destinations
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] sm:text-5xl">
            Where to next?
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            A short list of places worth the trip, each one planned down to the
            first three days so you can stop scrolling and start packing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <ExploreGrid destinations={destinations} />
      </section>

      <WorldMap />
    </main>
  );
}
