import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Quote } from "lucide-react";

import { destinations, getDestination } from "@/data/destinations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to explore
      </Link>

      {/* Boarding-pass style header */}
      <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="relative h-64 w-full sm:h-80">
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.region}`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              {destination.code} · {destination.region}
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl">
              {destination.name}
            </h1>
            <p className="mt-2 max-w-md text-muted-foreground">
              {destination.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="tear-line w-full shrink-0 pt-6 sm:h-full sm:w-px sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" />

          <div className="flex shrink-0 flex-col gap-4 font-mono text-sm sm:w-48">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                From
              </p>
              <p className="text-lg text-foreground">
                ${destination.priceFrom.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Suggested length
              </p>
              <p className="text-foreground">{destination.days} days</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Best time to visit
              </p>
              <p className="text-foreground">{destination.bestTime}</p>
            </div>
            <Button size="lg" className="mt-2">
              Plan this trip
            </Button>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="mt-12">
        <h2 className="font-display text-2xl">About {destination.name}</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">{destination.blurb}</p>
      </section>

      {/* Gallery */}
      <section className="mt-10">
        <h2 className="font-display text-2xl">Gallery</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {destination.gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border"
            >
              <Image
                src={src}
                alt={`${destination.name} — photo ${i + 1}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="mt-12">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl">First few days</h2>
        </div>
        <ol className="mt-6 space-y-6 border-l border-border pl-6">
          {destination.itinerary.map((stop) => (
            <li key={stop.day} className="relative">
              <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {stop.day}
              </p>
              <h3 className="mt-1 font-display text-lg">{stop.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">
                {stop.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonial */}
      <section className="mt-12 mb-4 rounded-lg border border-dashed border-border bg-secondary/40 p-8">
        <Quote className="h-6 w-6 text-primary" />
        <p className="mt-3 max-w-xl font-display text-lg leading-snug">
          “{destination.testimonial.quote}”
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {destination.testimonial.author}, traveled to {destination.name}
        </p>
      </section>
    </main>
  );
}
