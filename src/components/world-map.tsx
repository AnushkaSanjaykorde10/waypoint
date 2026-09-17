export function WorldMap() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
          Route map — the whole network
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
          Every waypoint on one map
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground">
          A rough sweep of where these trips will take you. Pan and zoom to
          start plotting your own connections.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            title="Map of Waypoint destinations"
            src="https://maps.google.com/maps?ll=20,10&z=2&t=m&output=embed"
            className="block h-[360px] w-full border-0 sm:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
