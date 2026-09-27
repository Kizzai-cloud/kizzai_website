import { Film } from "lucide-react";

const DevIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Browser window */}
    <rect x="2" y="3" width="15" height="11" rx="1.6" />
    <line x1="2" y1="6.5" x2="17" y2="6.5" />
    <circle cx="4.2" cy="4.75" r="0.45" fill="currentColor" stroke="none" />
    <circle cx="5.8" cy="4.75" r="0.45" fill="currentColor" stroke="none" />
    {/* Code brackets */}
    <polyline points="7 9.5 5.5 11 7 12.5" />
    <polyline points="10 9.5 11.5 11 10 12.5" />
    {/* Phone overlapping bottom-right */}
    <rect x="13" y="10" width="8" height="11" rx="1.6" />
    <line x1="13" y1="18" x2="21" y2="18" />
    <circle cx="17" cy="19.5" r="0.55" fill="currentColor" stroke="none" />
  </svg>
);

const MarketingIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Growth curve */}
    <polyline points="3 17 8 12 12 14 20 5" />
    {/* Arrow tip */}
    <polyline points="15 5 20 5 20 10" />
    {/* Connected nodes along the path */}
    <circle cx="3" cy="17" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="8" cy="12" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
    {/* Signal waves emanating from endpoint */}
    <path d="M20 13.5 a3.2 3.2 0 0 1 -3.2 3.2" opacity="0.7" />
    <path d="M22 14 a5.2 5.2 0 0 1 -5.2 5.2" opacity="0.45" />
  </svg>
);

const DroneIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Propellers */}
    <ellipse cx="5" cy="5" rx="3" ry="1.2" />
    <ellipse cx="19" cy="5" rx="3" ry="1.2" />
    <ellipse cx="5" cy="19" rx="3" ry="1.2" />
    <ellipse cx="19" cy="19" rx="3" ry="1.2" />
    {/* Motor hubs */}
    <circle cx="5" cy="5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="19" cy="5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="5" cy="19" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="19" cy="19" r="0.8" fill="currentColor" stroke="none" />
    {/* Arms */}
    <line x1="5" y1="5" x2="9.5" y2="9.5" />
    <line x1="19" y1="5" x2="14.5" y2="9.5" />
    <line x1="5" y1="19" x2="9.5" y2="14.5" />
    <line x1="19" y1="19" x2="14.5" y2="14.5" />
    {/* Body */}
    <rect x="9" y="9" width="6" height="6" rx="1.4" fill="currentColor" stroke="none" opacity="0.95" />
    <circle cx="12" cy="12" r="1.2" fill="hsl(var(--background, 0 0% 5%))" stroke="none" />
  </svg>
);

const services = [
  {
    icon: DroneIcon,
    title: "Drone",
    desc: "We are a trusted drone dealer and distributor. Delivering quality drones and reliable support for every need.",
  },
  {
    icon: Film,
    title: "Digital Film Production",
    desc: "We create cinematic digital films that capture attention. From storytelling to visuals, we bring ideas to life.",
  },
  {
    icon: DevIcon,
    title: "Mobile App and Web Development",
    desc: "We build modern mobile apps and powerful websites. Fast, scalable, and designed for real user experience.",
  },
  {
    icon: MarketingIcon,
    title: "Digital Marketing",
    desc: "We grow brands through smart digital marketing. Creative strategies, real reach, and impactful results.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-3xl"
                style={{
                  background: i % 2 === 0
                    ? "radial-gradient(circle, var(--electric), transparent 70%)"
                    : "radial-gradient(circle, var(--neon), transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center overflow-hidden"
                    style={{ background: "oklch(1 0 0 / 6%)", border: "1px solid oklch(1 0 0 / 12%)" }}
                  >
                    <s.icon size={22} className="text-electric group-hover:text-neon transition-colors" />

                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                </div>

                <h3 className="font-display text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
