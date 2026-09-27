import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: p4, title: "Skyline — Aerial Series", tag: "Drone Cinematography", span: "md:col-span-2 md:row-span-2" },
  { img: p2, title: "Nocturne Film", tag: "Brand Film", span: "" },
  { img: p3, title: "Pulse App", tag: "Mobile Product", span: "" },
  { img: p1, title: "Aerial Brand Story", tag: "Drone Film", span: "md:col-span-2" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-electric mb-5">— Selected work</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Recent <span className="gradient-text">showcase</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A glimpse into our drone shoots, cinematic films and apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[260px] gap-5">
          {items.map((it) => (
            <a
              key={it.title}
              href="#contact"
              className={`group relative overflow-hidden rounded-3xl glass ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-electric">{it.tag}</div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mt-1">{it.title}</h3>
                </div>
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <ArrowUpRight size={16} className="text-background" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
