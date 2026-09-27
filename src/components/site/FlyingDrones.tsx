import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import droneImg from "@/assets/drone.png";

type DroneType = "showcase" | "agriculture" | "fog" | "surveillance";
type Direction = "ltr" | "rtl" | "depth";

type DroneCfg = {
  type: DroneType;
  size: number;
  top: string;
  duration: number;
  delay: number;
  direction: Direction;
  tilt: number;
  opacity: number;
};

const drones: DroneCfg[] = [
  { type: "showcase",     size: 150, top: "12%", duration: 30, delay: 0,  direction: "ltr", tilt: 10, opacity: 0.95 },
  { type: "agriculture",  size: 180, top: "34%", duration: 42, delay: 5,  direction: "rtl", tilt: -6, opacity: 0.9 },
  { type: "surveillance", size: 160, top: "55%", duration: 38, delay: 2,  direction: "depth", tilt: 6, opacity: 0.9 },
  { type: "fog",          size: 170, top: "72%", duration: 46, delay: 9,  direction: "ltr", tilt: -8, opacity: 0.85 },
  { type: "showcase",     size: 120, top: "22%", duration: 50, delay: 14, direction: "rtl", tilt: 8,  opacity: 0.8 },
];

/* ---------------- Drone visual chrome ---------------- */

function NavLights({ size }: { size: number }) {
  const dot = (size * 0.085).toFixed(1);
  return (
    <>
      <motion.span
        className="absolute rounded-full"
        style={{
          width: `${dot}px`, height: `${dot}px`,
          left: "6%", top: "52%",
          background: "#ff2a2a",
          boxShadow: "0 0 10px #ff2a2a, 0 0 22px #ff2a2a, 0 0 44px rgba(255,42,42,0.65)",
        }}
        animate={{ opacity: [1, 0.1, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute rounded-full"
        style={{
          width: `${dot}px`, height: `${dot}px`,
          right: "6%", top: "52%",
          background: "#22ff88",
          boxShadow: "0 0 10px #22ff88, 0 0 22px #22ff88, 0 0 44px rgba(34,255,136,0.65)",
        }}
        animate={{ opacity: [0.1, 1, 0.1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute rounded-full"
        style={{
          width: `${(size * 0.06).toFixed(1)}px`,
          height: `${(size * 0.06).toFixed(1)}px`,
          left: "50%", top: "60%",
          transform: "translateX(-50%)",
          background: "#ffffff",
          boxShadow: "0 0 14px #ffffff, 0 0 28px rgba(180,230,255,0.7)",
        }}
        animate={{ opacity: [0, 0, 1, 0, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.55, 1] }}
      />
    </>
  );
}

function Propellers({ size }: { size: number }) {
  // 4 spinning rotor discs at the corners
  const r = size * 0.22;
  const positions = [
    { left: "4%",  top: "12%" },
    { right: "4%", top: "12%" },
    { left: "4%",  bottom: "22%" },
    { right: "4%", bottom: "22%" },
  ] as const;
  return (
    <>
      {positions.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            ...p,
            width: r, height: r,
            background:
              "radial-gradient(circle, rgba(180,230,255,0.35), rgba(180,230,255,0.05) 60%, transparent 70%)",
            border: "1px solid rgba(180,230,255,0.25)",
            filter: "blur(0.6px)",
          }}
          animate={{ rotate: 360, opacity: [0.6, 0.9, 0.6] }}
          transition={{
            rotate: { duration: 0.18, repeat: Infinity, ease: "linear" },
            opacity: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </>
  );
}

/* ---------------- Behavior-specific FX ---------------- */

function SprayMist({ size }: { size: number }) {
  const drops = Array.from({ length: 14 });
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top: "90%", width: size * 1.1, height: size * 1.6, pointerEvents: "none" }}
    >
      {/* soft mist cone */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0"
        style={{
          width: size * 1.1,
          height: size * 1.4,
          background:
            "radial-gradient(ellipse at top, rgba(140,220,255,0.35), rgba(140,220,255,0.08) 45%, transparent 70%)",
          filter: "blur(6px)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5], scaleY: [0.95, 1.05, 0.95] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {drops.map((_, i) => {
        const left = 35 + (i * 7) % 30;
        const dur = 1.6 + (i % 4) * 0.3;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: 0,
              width: 2.5,
              height: 6,
              background: "linear-gradient(to bottom, rgba(180,230,255,0.95), rgba(180,230,255,0))",
              boxShadow: "0 0 6px rgba(120,210,255,0.7)",
            }}
            animate={{ y: [0, size * 1.4], opacity: [0, 1, 0] }}
            transition={{ duration: dur, delay: (i * 0.12) % 1.5, repeat: Infinity, ease: "easeIn" }}
          />
        );
      })}
    </div>
  );
}

function FogPlume({ size }: { size: number }) {
  const puffs = Array.from({ length: 6 });
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top: "85%", width: size * 1.8, height: size * 1.4, pointerEvents: "none" }}
    >
      {puffs.map((_, i) => {
        const left = 20 + i * 12;
        const dur = 5 + (i % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: "10%",
              width: size * 0.55,
              height: size * 0.55,
              background:
                "radial-gradient(circle, rgba(170,235,255,0.45), rgba(120,200,255,0.15) 45%, transparent 70%)",
              filter: "blur(10px)",
            }}
            animate={{
              y: [0, -size * 0.4],
              x: [0, (i % 2 ? 18 : -18)],
              scale: [0.6, 1.6],
              opacity: [0, 0.7, 0],
            }}
            transition={{ duration: dur, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

function SurveillanceFX({ size }: { size: number }) {
  return (
    <>
      {/* radar pulse */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            width: size * 0.5,
            height: size * 0.5,
            border: "1.5px solid rgba(34,255,180,0.55)",
            boxShadow: "0 0 18px rgba(34,255,180,0.45) inset, 0 0 18px rgba(34,255,180,0.45)",
          }}
          animate={{ scale: [0.4, 2.2], opacity: [0.8, 0] }}
          transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      {/* scanner cone sweeping below */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "75%", width: size * 1.4, height: size * 1.1, pointerEvents: "none" }}
      >
        <motion.div
          className="absolute left-1/2 top-0 origin-top"
          style={{
            width: size * 0.9,
            height: size * 1.1,
            background:
              "conic-gradient(from -20deg at 50% 0%, transparent 0deg, rgba(120,255,220,0.35) 18deg, transparent 36deg)",
            filter: "blur(2px)",
            transform: "translateX(-50%)",
          }}
          animate={{ rotate: [-25, 25, -25] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* HUD ring */}
      <motion.span
        className="absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: size * 0.95, height: size * 0.95,
          border: "1px dashed rgba(120,255,220,0.55)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

/* ---------------- Drone ---------------- */

function DroneBody({ cfg }: { cfg: DroneCfg }) {
  const baseFilter =
    "drop-shadow(0 10px 22px rgba(0,0,0,0.6)) drop-shadow(0 0 26px rgba(0,194,255,0.55)) drop-shadow(0 0 50px rgba(0,210,170,0.35)) contrast(1.12) saturate(1.2)";

  return (
    <div className="relative" style={{ width: cfg.size, height: cfg.size * 0.55 }}>
      <img
        src={droneImg}
        alt=""
        aria-hidden
        style={{ filter: baseFilter, width: "100%", display: "block" }}
      />
      <Propellers size={cfg.size} />
      <NavLights size={cfg.size} />
      {cfg.type === "agriculture" && <SprayMist size={cfg.size} />}
      {cfg.type === "fog" && <FogPlume size={cfg.size} />}
      {cfg.type === "surveillance" && <SurveillanceFX size={cfg.size} />}
    </div>
  );
}

function Drone({ cfg }: { cfg: DroneCfg }) {
  if (cfg.direction === "depth") {
    return (
      <motion.div
        className="pointer-events-none absolute left-1/2"
        style={{ top: cfg.top, width: cfg.size, opacity: cfg.opacity }}
        initial={{ scale: 0.25, x: "-50%", y: 40, opacity: 0 }}
        animate={{
          scale: [0.25, 1.45, 0.25],
          y: [40, -140, 40],
          opacity: [0, cfg.opacity, 0],
          rotate: [0, cfg.tilt, -cfg.tilt, 0],
        }}
        transition={{ duration: cfg.duration, delay: cfg.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <DroneBody cfg={cfg} />
      </motion.div>
    );
  }

  const fromX = cfg.direction === "ltr" ? "-22vw" : "122vw";
  const toX = cfg.direction === "ltr" ? "122vw" : "-22vw";

  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        top: cfg.top,
        width: cfg.size,
        opacity: cfg.opacity,
        filter: "blur(0.4px)",
      }}
      initial={{ x: fromX }}
      animate={{
        x: [fromX, toX],
        y: [0, -28, 18, -14, 0],
        rotate: [0, cfg.tilt, -cfg.tilt, cfg.tilt / 2, 0],
      }}
      transition={{
        x: { duration: cfg.duration, delay: cfg.delay, repeat: Infinity, ease: "linear" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: cfg.duration / 2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <DroneBody cfg={cfg} />
    </motion.div>
  );
}

/* ---------------- Particles ---------------- */

function Particles() {
  const dots = Array.from({ length: 26 });
  return (
    <>
      {dots.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 8 + (i % 6) * 2;
        return (
          <motion.span
            key={i}
            className="pointer-events-none absolute h-[3px] w-[3px] rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              background: i % 2 ? "var(--electric)" : "var(--neon)",
              boxShadow: "0 0 14px currentColor",
              opacity: 0.6,
            }}
            animate={{ y: [0, -50, 0], opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        );
      })}
    </>
  );
}

export function FlyingDrones() {
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mob = window.matchMedia("(max-width: 640px)");
    setReduced(m.matches);
    setIsMobile(mob.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    const hm = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    m.addEventListener("change", h);
    mob.addEventListener("change", hm);
    return () => {
      m.removeEventListener("change", h);
      mob.removeEventListener("change", hm);
    };
  }, []);

  if (reduced) return null;

  // On small screens, render fewer drones at smaller size for perf
  const list = isMobile
    ? drones.slice(0, 3).map((d) => ({ ...d, size: Math.round(d.size * 0.7) }))
    : drones;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      style={{ contain: "strict" }}
    >
      <Particles />
      {list.map((cfg, i) => (
        <Drone key={i} cfg={cfg} />
      ))}
    </div>
  );
}
