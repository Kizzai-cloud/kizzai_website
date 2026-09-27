import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Kizzai delivered a brand film that completely redefined how the market sees us. The aerial work is breathtaking.",
    name: "Aarav Mehta",
    role: "CMO, Skyline Ventures",
    initials: "AM",
  },
  {
    quote:
      "Their app team shipped our MVP in eight weeks. Clean architecture, beautiful UI, real engineering rigor.",
    name: "Sara Lin",
    role: "Founder, Pulse Health",
    initials: "SL",
  },
  {
    quote:
      "Performance ads that actually perform. CAC dropped 38% in the first quarter working with the Kizzai growth team.",
    name: "Daniel Okafor",
    role: "Head of Growth, Northwave",
    initials: "DO",
  },
];

const colors = [
  "linear-gradient(135deg, oklch(0.78 0.17 230), oklch(0.62 0.22 290))",
  "linear-gradient(135deg, oklch(0.62 0.22 290), oklch(0.78 0.17 230))",
  "linear-gradient(135deg, oklch(0.78 0.17 230), oklch(0.55 0.2 320))",
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.62 0.22 290 / 25%), transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-xs uppercase tracking-[0.3em] text-electric mb-5">— Testimonials</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
          Trusted by founders, marketers & <span className="gradient-text">creatives</span>.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="glass-strong rounded-3xl p-7 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-500"
            >
              <Quote size={28} className="text-electric/70" />
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center font-display font-semibold text-background"
                  style={{ background: colors[i] }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
