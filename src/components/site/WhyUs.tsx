import { Award, Lightbulb, Cpu, Layers, Zap, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  { icon: Award, title: "Industry Expertise", desc: "Decades of combined experience across media, tech and aviation." },
  { icon: Lightbulb, title: "Creative Strategy", desc: "Concepts grounded in research, sharpened by craft." },
  { icon: Cpu, title: "Advanced Technology", desc: "From UAV systems to cloud-native apps — built to scale." },
  { icon: Layers, title: "End-to-End Solutions", desc: "Hardware, software, story — handled under one roof." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile sprints, weekly demos, on-time launches." },
  { icon: Heart, title: "Client Satisfaction", desc: "Long-term partnerships built on outcomes and trust." },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Retention Rate" },
  { value: 12, suffix: "+", label: "Industry Awards" },
];

function useCount(target: number, run: boolean, duration = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

function Stat({ s, run }: { s: typeof stats[number]; run: boolean }) {
  const v = useCount(s.value, run);
  return (
    <div className="text-center md:text-left">
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text tabular-nums">
        {v}
        {s.suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
    </div>
  );
}

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="why" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, oklch(0.78 0.17 230 / 15%), transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-xs uppercase tracking-[0.3em] text-electric mb-5">— Why Kizzai</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
          Built for outcomes.{" "}
          <span className="gradient-text">Engineered for trust.</span>
        </h2>

        <div ref={ref} className="mt-16 glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Stat key={s.label} s={s} run={run} />
          ))}
        </div>

        {/* Timeline-style list */}
        <div className="mt-16 relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, var(--electric), var(--neon), transparent)" }}
          />
          <div className="grid md:grid-cols-2 gap-6 md:gap-x-20">
            {items.map((it, i) => (
              <div
                key={it.title}
                className={`glass rounded-2xl p-6 hover:border-electric transition-all relative ${
                  i % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <it.icon size={20} className="text-background" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
