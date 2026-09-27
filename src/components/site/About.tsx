export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-40 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-electric mb-5 flex items-baseline gap-2">
            <span>— About</span>
            <span
              className="font-display lowercase"
              style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}
            >
              <span
                style={{
                  background: "linear-gradient(180deg, #5bd1ff 0%, #1e7ae8 55%, #1747b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 8px rgba(56,189,248,0.55)) drop-shadow(0 2px 3px rgba(10,40,120,0.45))",
                }}
              >kizz</span>
              <span
                style={{
                  background: "linear-gradient(180deg, #a8e05a 0%, #5cb832 55%, #3d7a1c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 8px rgba(132,204,22,0.5)) drop-shadow(0 2px 3px rgba(30,80,10,0.45))",
                }}
              >ai</span>
            </span>
          </div>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We are a next-generation tech and creative studio built for the future. We bring together advanced drones and cutting-edge filmmaking to change how people see, map, and experience the world.
          </p>
        </div>
      </div>
    </section>
  );
}
