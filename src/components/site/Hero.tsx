const heroImg = "/favicon.png";
import droneImg from "@/assets/drone.png";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Kizzai hero banner"
          className="absolute inset-0 h-full w-full object-cover scale-110 animate-[shimmer_20s_linear_infinite]"
          style={{ filter: "saturate(1.1) contrast(1.05)" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-50 animate-glow"
        style={{ background: "radial-gradient(circle, var(--electric), transparent 60%)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-50 animate-glow"
        style={{ background: "radial-gradient(circle, var(--neon), transparent 60%)", animationDelay: "1.5s" }}
      />

      {/* Floating hero drone with realistic blinking nav lights */}
      <div
        aria-hidden
        className="hidden lg:block absolute right-[8%] top-1/3 w-[380px] animate-float pointer-events-none"
      >
        <div className="relative">
          <img
            src={droneImg}
            alt=""
            className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)] drop-shadow-[0_0_60px_rgba(0,194,255,0.45)]"
            style={{ filter: "contrast(1.12) saturate(1.2)" }}
          />
          {/* Red nav light (port) */}
          <motion.span
            className="absolute rounded-full"
            style={{
              width: 14, height: 14, left: "6%", top: "52%",
              background: "#ff2a2a",
              boxShadow: "0 0 12px #ff2a2a, 0 0 28px #ff2a2a, 0 0 56px rgba(255,42,42,0.7)",
            }}
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Green nav light (starboard) */}
          <motion.span
            className="absolute rounded-full"
            style={{
              width: 14, height: 14, right: "6%", top: "52%",
              background: "#22ff88",
              boxShadow: "0 0 12px #22ff88, 0 0 28px #22ff88, 0 0 56px rgba(34,255,136,0.7)",
            }}
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* White strobe */}
          <motion.span
            className="absolute rounded-full -translate-x-1/2"
            style={{
              width: 10, height: 10, left: "50%", top: "60%",
              background: "#ffffff",
              boxShadow: "0 0 16px #ffffff, 0 0 36px rgba(180,230,255,0.8)",
            }}
            animate={{ opacity: [0, 0, 1, 0, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.55, 1] }}
          />
        </div>
      </div>

      {/* Surveillance drone flying across hero */}
      <motion.div
        aria-hidden
        className="hidden md:block absolute top-[22%] w-[280px] pointer-events-none"
        initial={{ x: "-25vw" }}
        animate={{
          x: ["-25vw", "115vw"],
          y: [0, -18, 12, -10, 0],
          rotate: [0, 4, -4, 2, 0],
        }}
        transition={{
          x: { duration: 28, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ filter: "blur(0.3px)" }}
      >
        <div className="relative">
          <img
            src={droneImg}
            alt=""
            className="w-full"
            style={{
              filter:
                "drop-shadow(0 14px 30px rgba(0,0,0,0.65)) drop-shadow(0 0 32px rgba(34,255,180,0.5)) contrast(1.15) saturate(1.25)",
            }}
          />
          {/* Radar pulses */}
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 120, height: 120,
                border: "1.5px solid rgba(34,255,180,0.6)",
                boxShadow: "0 0 20px rgba(34,255,180,0.45)",
              }}
              animate={{ scale: [0.4, 2.2], opacity: [0.85, 0] }}
              transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "easeOut" }}
            />
          ))}
          {/* Rotating HUD ring (camera) */}
          <motion.span
            className="absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 90, height: 90,
              border: "1px dashed rgba(120,255,220,0.65)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* Scanner cone */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 origin-top"
            style={{
              top: "75%", width: 180, height: 200,
              background:
                "conic-gradient(from -20deg at 50% 0%, transparent 0deg, rgba(120,255,220,0.35) 18deg, transparent 36deg)",
              filter: "blur(2px)",
            }}
            animate={{ rotate: [-25, 25, -25] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Nav lights */}
          <motion.span
            className="absolute rounded-full"
            style={{
              width: 10, height: 10, left: "8%", top: "52%",
              background: "#ff2a2a",
              boxShadow: "0 0 10px #ff2a2a, 0 0 22px #ff2a2a",
            }}
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
          <motion.span
            className="absolute rounded-full"
            style={{
              width: 10, height: 10, right: "8%", top: "52%",
              background: "#22ff88",
              boxShadow: "0 0 10px #22ff88, 0 0 22px #22ff88",
            }}
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-xs uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
            Digital Aerial Intelligence
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight">
            Innovating the Future
            <br />
            Through <span className="gradient-text">Technology</span>
            <br />& <span className="gradient-text">Creativity</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground/90">Drone</span>
            <span className="mx-2 opacity-40">|</span>
            <span className="text-foreground/90">Digital Film Production</span>
            <span className="mx-2 opacity-40">|</span>
            <span className="text-foreground/90">Mobile App and Web Development</span>
            <span className="mx-2 opacity-40">|</span>
            <span className="text-foreground/90">Digital Marketing</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground"
            >
              <Play size={14} />
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

