import { motion } from "framer-motion";

export function CinematicBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-background" />

      {/* Peacock ambient gradient wash */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Animated peacock-blue blob */}
      <motion.div
        className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.16 215 / 0.45), transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated peacock-green blob */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[640px] w-[640px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.15 175 / 0.45), transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -60, 40, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft light streak */}
      <motion.div
        className="absolute top-1/3 left-0 h-[2px] w-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.85 0.12 195 / 0.6), transparent)",
          filter: "blur(2px)",
        }}
        animate={{ x: ["-50%", "200%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 200 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
