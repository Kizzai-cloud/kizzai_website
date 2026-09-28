import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, ArrowRight, Play, Film, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
const logoImg = "/assets/kizzai-logo-final-Cc_4zmaA.png";
const links = [];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 text-sm font-extrabold border-2 ${scrolled ? "glass-strong border-white/10" : "border-transparent"}`,
            children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#top",
                  className: "group flex items-center",
                  "aria-label": "KizzAI home",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: logoImg,
                      alt: "KizzAI",
                      className: "w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105",
                      style: { height: "clamp(28px, 3.5vw, 38px)" },
                      draggable: false
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: l.href,
                  className: "text-sm text-muted-foreground hover:text-foreground transition-colors relative group",
                  children: [
                    l.label,
                    /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-electric to-neon transition-all duration-300 group-hover:w-full" })
                  ]
                },
                l.href
              )) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: "hidden md:inline-flex items-center rounded-full btn-primary px-5 py-2 text-sm font-medium",
                  children: "Get Started"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "md:hidden text-foreground",
                  onClick: () => setOpen(!open),
                  "aria-label": "Menu",
                  children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxs("div", { className: "md:hidden mt-2 glass-strong rounded-2xl p-6 flex flex-col gap-4 animate-fade-up", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "text-sm text-muted-foreground hover:text-foreground",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "btn-primary rounded-full px-5 py-2 text-sm text-center font-medium",
              children: "Get Started"
            }
          )
        ] })
      ] })
    }
  );
}
const droneImg = "/assets/drone-C6ElgEl-.png";
const heroImg = "/favicon.png";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen flex items-center overflow-hidden noise", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Kizzai hero banner",
          className: "absolute inset-0 h-full w-full object-cover scale-110 animate-[shimmer_20s_linear_infinite]",
          style: { filter: "saturate(1.1) contrast(1.05)" }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-hero)" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-60" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-50 animate-glow",
        style: { background: "radial-gradient(circle, var(--electric), transparent 60%)" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-50 animate-glow",
        style: { background: "radial-gradient(circle, var(--neon), transparent 60%)", animationDelay: "1.5s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "hidden lg:block absolute right-[8%] top-1/3 w-[380px] animate-float pointer-events-none",
        children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: droneImg,
              alt: "",
              className: "w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)] drop-shadow-[0_0_60px_rgba(0,194,255,0.45)]",
              style: { filter: "contrast(1.12) saturate(1.2)" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute rounded-full",
              style: {
                width: 14,
                height: 14,
                left: "6%",
                top: "52%",
                background: "#ff2a2a",
                boxShadow: "0 0 12px #ff2a2a, 0 0 28px #ff2a2a, 0 0 56px rgba(255,42,42,0.7)"
              },
              animate: { opacity: [1, 0.1, 1] },
              transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute rounded-full",
              style: {
                width: 14,
                height: 14,
                right: "6%",
                top: "52%",
                background: "#22ff88",
                boxShadow: "0 0 12px #22ff88, 0 0 28px #22ff88, 0 0 56px rgba(34,255,136,0.7)"
              },
              animate: { opacity: [0.1, 1, 0.1] },
              transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute rounded-full -translate-x-1/2",
              style: {
                width: 10,
                height: 10,
                left: "50%",
                top: "60%",
                background: "#ffffff",
                boxShadow: "0 0 16px #ffffff, 0 0 36px rgba(180,230,255,0.8)"
              },
              animate: { opacity: [0, 0, 1, 0, 0] },
              transition: { duration: 2.4, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.55, 1] }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "hidden md:block absolute top-[22%] w-[280px] pointer-events-none",
        initial: { x: "-25vw" },
        animate: {
          x: ["-25vw", "115vw"],
          y: [0, -18, 12, -10, 0],
          rotate: [0, 4, -4, 2, 0]
        },
        transition: {
          x: { duration: 28, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" }
        },
        style: { filter: "blur(0.3px)" },
        children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: droneImg,
              alt: "",
              className: "w-full",
              style: {
                filter: "drop-shadow(0 14px 30px rgba(0,0,0,0.65)) drop-shadow(0 0 32px rgba(34,255,180,0.5)) contrast(1.15) saturate(1.25)"
              }
            }
          ),
          [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2",
              style: {
                width: 120,
                height: 120,
                border: "1.5px solid rgba(34,255,180,0.6)",
                boxShadow: "0 0 20px rgba(34,255,180,0.45)"
              },
              animate: { scale: [0.4, 2.2], opacity: [0.85, 0] },
              transition: { duration: 3, delay: i * 1, repeat: Infinity, ease: "easeOut" }
            },
            i
          )),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2",
              style: {
                width: 90,
                height: 90,
                border: "1px dashed rgba(120,255,220,0.65)"
              },
              animate: { rotate: 360 },
              transition: { duration: 8, repeat: Infinity, ease: "linear" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute left-1/2 -translate-x-1/2 origin-top",
              style: {
                top: "75%",
                width: 180,
                height: 200,
                background: "conic-gradient(from -20deg at 50% 0%, transparent 0deg, rgba(120,255,220,0.35) 18deg, transparent 36deg)",
                filter: "blur(2px)"
              },
              animate: { rotate: [-25, 25, -25] },
              transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute rounded-full",
              style: {
                width: 10,
                height: 10,
                left: "8%",
                top: "52%",
                background: "#ff2a2a",
                boxShadow: "0 0 10px #ff2a2a, 0 0 22px #ff2a2a"
              },
              animate: { opacity: [1, 0.1, 1] },
              transition: { duration: 1.1, repeat: Infinity }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute rounded-full",
              style: {
                width: 10,
                height: 10,
                right: "8%",
                top: "52%",
                background: "#22ff88",
                boxShadow: "0 0 10px #22ff88, 0 0 22px #22ff88"
              },
              animate: { opacity: [0.1, 1, 0.1] },
              transition: { duration: 1.1, repeat: Infinity }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 w-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl animate-fade-up", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-xs uppercase tracking-[0.2em]", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-electric animate-pulse" }),
        "Digital Aerial Intelligence"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight", children: [
        "Innovating the Future",
        /* @__PURE__ */ jsx("br", {}),
        "Through ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Technology" }),
        /* @__PURE__ */ jsx("br", {}),
        "& ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Creativity" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "Drone" }),
        /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-40", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "Digital Film Production" }),
        /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-40", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "Mobile App and Web Development" }),
        /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-40", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "Digital Marketing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#services",
            className: "btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium",
            children: [
              "Explore Services",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contact",
            className: "btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground",
            children: [
              /* @__PURE__ */ jsx(Play, { size: 14 }),
              "Contact Us"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-40 pointer-events-none",
        style: { background: "var(--gradient-radial)" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.3em] text-electric mb-5 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsx("span", { children: "— About" }),
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: "font-display lowercase",
            style: { fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 },
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    background: "linear-gradient(180deg, #5bd1ff 0%, #1e7ae8 55%, #1747b8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 8px rgba(56,189,248,0.55)) drop-shadow(0 2px 3px rgba(10,40,120,0.45))"
                  },
                  children: "kizz"
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    background: "linear-gradient(180deg, #a8e05a 0%, #5cb832 55%, #3d7a1c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 8px rgba(132,204,22,0.5)) drop-shadow(0 2px 3px rgba(30,80,10,0.45))"
                  },
                  children: "ai"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: "We are a next-generation tech and creative studio built for the future. We bring together advanced drones and cutting-edge filmmaking to change how people see, map, and experience the world." })
    ] }) })
  ] });
}
const DevIcon = ({ size = 22, className = "" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("rect", { x: "2", y: "3", width: "15", height: "11", rx: "1.6" }),
      /* @__PURE__ */ jsx("line", { x1: "2", y1: "6.5", x2: "17", y2: "6.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "4.2", cy: "4.75", r: "0.45", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "5.8", cy: "4.75", r: "0.45", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("polyline", { points: "7 9.5 5.5 11 7 12.5" }),
      /* @__PURE__ */ jsx("polyline", { points: "10 9.5 11.5 11 10 12.5" }),
      /* @__PURE__ */ jsx("rect", { x: "13", y: "10", width: "8", height: "11", rx: "1.6" }),
      /* @__PURE__ */ jsx("line", { x1: "13", y1: "18", x2: "21", y2: "18" }),
      /* @__PURE__ */ jsx("circle", { cx: "17", cy: "19.5", r: "0.55", fill: "currentColor", stroke: "none" })
    ]
  }
);
const MarketingIcon = ({ size = 22, className = "" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("polyline", { points: "3 17 8 12 12 14 20 5" }),
      /* @__PURE__ */ jsx("polyline", { points: "15 5 20 5 20 10" }),
      /* @__PURE__ */ jsx("circle", { cx: "3", cy: "17", r: "1.4", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "8", cy: "12", r: "1.4", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "14", r: "1.4", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M20 13.5 a3.2 3.2 0 0 1 -3.2 3.2", opacity: "0.7" }),
      /* @__PURE__ */ jsx("path", { d: "M22 14 a5.2 5.2 0 0 1 -5.2 5.2", opacity: "0.45" })
    ]
  }
);
const DroneIcon = ({ size = 22, className = "" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("ellipse", { cx: "5", cy: "5", rx: "3", ry: "1.2" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "19", cy: "5", rx: "3", ry: "1.2" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "5", cy: "19", rx: "3", ry: "1.2" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "19", cy: "19", rx: "3", ry: "1.2" }),
      /* @__PURE__ */ jsx("circle", { cx: "5", cy: "5", r: "0.8", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "19", cy: "5", r: "0.8", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "5", cy: "19", r: "0.8", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "19", cy: "19", r: "0.8", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("line", { x1: "5", y1: "5", x2: "9.5", y2: "9.5" }),
      /* @__PURE__ */ jsx("line", { x1: "19", y1: "5", x2: "14.5", y2: "9.5" }),
      /* @__PURE__ */ jsx("line", { x1: "5", y1: "19", x2: "9.5", y2: "14.5" }),
      /* @__PURE__ */ jsx("line", { x1: "19", y1: "19", x2: "14.5", y2: "14.5" }),
      /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "6", height: "6", rx: "1.4", fill: "currentColor", stroke: "none", opacity: "0.95" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.2", fill: "hsl(var(--background, 0 0% 5%))", stroke: "none" })
    ]
  }
);
const services = [
  {
    icon: DroneIcon,
    title: "Drone",
    desc: "We are a trusted drone dealer and distributor. Delivering quality drones and reliable support for every need."
  },
  {
    icon: Film,
    title: "Digital Film Production",
    desc: "We create cinematic digital films that capture attention. From storytelling to visuals, we bring ideas to life."
  },
  {
    icon: DevIcon,
    title: "Mobile App and Web Development",
    desc: "We build modern mobile apps and powerful websites. Fast, scalable, and designed for real user experience."
  },
  {
    icon: MarketingIcon,
    title: "Digital Marketing",
    desc: "We grow brands through smart digital marketing. Creative strategies, real reach, and impactful results."
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "relative py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group relative glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity",
            style: { background: "var(--gradient-primary)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -bottom-20 -right-20 w-44 h-44 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-3xl",
            style: {
              background: i % 2 === 0 ? "radial-gradient(circle, var(--electric), transparent 70%)" : "radial-gradient(circle, var(--neon), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-8", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-12 w-12 rounded-xl flex items-center justify-center overflow-hidden",
                style: { background: "oklch(1 0 0 / 6%)", border: "1px solid oklch(1 0 0 / 12%)" },
                children: /* @__PURE__ */ jsx(s.icon, { size: 22, className: "text-electric group-hover:text-neon transition-colors" })
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
              "0",
              i + 1
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold leading-snug", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] })
      ]
    },
    s.title
  )) }) }) });
}
function InstagramIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "6.5", r: "0.8", fill: "currentColor" })
  ] });
}
function LinkedinIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
    /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
    /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
  ] });
}
function TwitterIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className, children: /* @__PURE__ */ jsx("path", { d: "M18.244 2H21.5l-7.5 8.57L23 22h-6.83l-5.35-6.99L4.6 22H1.34l8.02-9.16L1 2h6.99l4.84 6.4L18.24 2zm-2.39 18h1.89L7.27 4H5.27l10.59 16z" }) });
}
function YoutubeIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
    /* @__PURE__ */ jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
    /* @__PURE__ */ jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02", fill: "currentColor" })
  ] });
}
const contactHero = "/assets/contact-hero-Dq2i5P4a.png";
function Contact() {
  const [sent, setSent] = useState(false);
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/kizzai_private_limited/", Icon: InstagramIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kizzai-kizzai-6a8aaa418/?isSelfProfile=true", Icon: LinkedinIcon },
    { label: "X", href: "https://x.com/Kizzai_pvt_ltd", Icon: TwitterIcon },
    { label: "YouTube", href: "https://www.youtube.com/@Kizzai_studio", Icon: YoutubeIcon }
  ];
  const sendInquiryEmail = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const service = String(formData.get("service") ?? "");
    const projectDetails = String(formData.get("projectDetails") ?? "");
    const emailParameters = new URLSearchParams({
      subject: `New KizzAI enquiry from ${name}`,
      body: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Service: ${service}`,
        "",
        "Project details:",
        projectDetails
      ].join("\n")
    });
    setSent(true);
    window.location.href = `mailto:sales@kizzai.com?${emailParameters.toString()}`;
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl min-h-[500px]", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-15",
          style: { backgroundImage: `url(${contactHero})` }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-electric mb-5", children: "— LET'S GROW" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground max-w-md leading-relaxed", children: "Drop us a message and our team get back to you soon. For urgent requests, contact by phone or social." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-5", children: [
          { icon: Mail, label: "sales@kizzai.com", href: "mailto:sales@kizzai.com" },
          { icon: Phone, label: "+91 99402 80736", href: "tel:+919940280736" },
          { icon: MapPin, label: "Chennai", href: "#" }
        ].map((c) => /* @__PURE__ */ jsxs("a", { href: c.href, className: "flex items-center gap-4 group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl glass flex items-center justify-center group-hover:border-electric transition-colors", children: /* @__PURE__ */ jsx(c.icon, { size: 18, className: "text-electric" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/90 group-hover:text-foreground", children: c.label })
        ] }, c.label)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 flex gap-3", children: socialLinks.map(({ label, href, Icon }) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "h-11 w-11 rounded-xl glass flex items-center justify-center hover:border-electric hover:text-electric transition-colors",
            "aria-label": `Visit KizzAI on ${label}`,
            children: /* @__PURE__ */ jsx(Icon, { size: 18 })
          },
          label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: sendInquiryEmail,
        className: "glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-30 blur-3xl",
              style: { background: "radial-gradient(circle, var(--neon), transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5 relative", children: [
            /* @__PURE__ */ jsx(Field, { label: "Full Name", name: "name", placeholder: "Enter Your Name" }),
            /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "Enter Your Email" }),
            /* @__PURE__ */ jsx(Field, { label: "Company", name: "company", placeholder: "Enter Your Company" }),
            /* @__PURE__ */ jsx(Field, { label: "Service", name: "service", placeholder: "Select a Service" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 relative", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Project details" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "projectDetails",
                rows: 5,
                placeholder: "Tell us a bit about your goals, timeline and budget...",
                required: true,
                className: "mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric focus:shadow-[0_0_24px_oklch(0.78_0.17_230/0.25)] transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: sent,
              className: "btn-primary mt-6 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium w-full sm:w-auto",
              children: sent ? "Message sent ✓" : /* @__PURE__ */ jsxs(Fragment, { children: [
                "Send Message",
                /* @__PURE__ */ jsx(Send, { size: 14 })
              ] })
            }
          )
        ]
      }
    )
  ] }) }) });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        placeholder,
        required: true,
        className: "mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric focus:shadow-[0_0_24px_oklch(0.78_0.17_230/0.25)] transition-all"
      }
    )
  ] });
}
const drones = [
  { type: "showcase", size: 150, top: "12%", duration: 30, delay: 0, direction: "ltr", tilt: 10, opacity: 0.95 },
  { type: "agriculture", size: 180, top: "34%", duration: 42, delay: 5, direction: "rtl", tilt: -6, opacity: 0.9 },
  { type: "surveillance", size: 160, top: "55%", duration: 38, delay: 2, direction: "depth", tilt: 6, opacity: 0.9 },
  { type: "fog", size: 170, top: "72%", duration: 46, delay: 9, direction: "ltr", tilt: -8, opacity: 0.85 },
  { type: "showcase", size: 120, top: "22%", duration: 50, delay: 14, direction: "rtl", tilt: 8, opacity: 0.8 }
];
function NavLights({ size }) {
  const dot = (size * 0.085).toFixed(1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "absolute rounded-full",
        style: {
          width: `${dot}px`,
          height: `${dot}px`,
          left: "6%",
          top: "52%",
          background: "#ff2a2a",
          boxShadow: "0 0 10px #ff2a2a, 0 0 22px #ff2a2a, 0 0 44px rgba(255,42,42,0.65)"
        },
        animate: { opacity: [1, 0.1, 1] },
        transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "absolute rounded-full",
        style: {
          width: `${dot}px`,
          height: `${dot}px`,
          right: "6%",
          top: "52%",
          background: "#22ff88",
          boxShadow: "0 0 10px #22ff88, 0 0 22px #22ff88, 0 0 44px rgba(34,255,136,0.65)"
        },
        animate: { opacity: [0.1, 1, 0.1] },
        transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "absolute rounded-full",
        style: {
          width: `${(size * 0.06).toFixed(1)}px`,
          height: `${(size * 0.06).toFixed(1)}px`,
          left: "50%",
          top: "60%",
          transform: "translateX(-50%)",
          background: "#ffffff",
          boxShadow: "0 0 14px #ffffff, 0 0 28px rgba(180,230,255,0.7)"
        },
        animate: { opacity: [0, 0, 1, 0, 0] },
        transition: { duration: 2.4, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.55, 1] }
      }
    )
  ] });
}
function Propellers({ size }) {
  const r = size * 0.22;
  const positions = [
    { left: "4%", top: "12%" },
    { right: "4%", top: "12%" },
    { left: "4%", bottom: "22%" },
    { right: "4%", bottom: "22%" }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: positions.map((p, i) => /* @__PURE__ */ jsx(
    motion.span,
    {
      className: "absolute rounded-full",
      style: {
        ...p,
        width: r,
        height: r,
        background: "radial-gradient(circle, rgba(180,230,255,0.35), rgba(180,230,255,0.05) 60%, transparent 70%)",
        border: "1px solid rgba(180,230,255,0.25)",
        filter: "blur(0.6px)"
      },
      animate: { rotate: 360, opacity: [0.6, 0.9, 0.6] },
      transition: {
        rotate: { duration: 0.18, repeat: Infinity, ease: "linear" },
        opacity: { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
      }
    },
    i
  )) });
}
function SprayMist({ size }) {
  const drops = Array.from({ length: 14 });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "absolute left-1/2 -translate-x-1/2",
      style: { top: "90%", width: size * 1.1, height: size * 1.6, pointerEvents: "none" },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute left-1/2 -translate-x-1/2 top-0",
            style: {
              width: size * 1.1,
              height: size * 1.4,
              background: "radial-gradient(ellipse at top, rgba(140,220,255,0.35), rgba(140,220,255,0.08) 45%, transparent 70%)",
              filter: "blur(6px)",
              clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)"
            },
            animate: { opacity: [0.5, 0.9, 0.5], scaleY: [0.95, 1.05, 0.95] },
            transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        ),
        drops.map((_, i) => {
          const left = 35 + i * 7 % 30;
          const dur = 1.6 + i % 4 * 0.3;
          return /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute rounded-full",
              style: {
                left: `${left}%`,
                top: 0,
                width: 2.5,
                height: 6,
                background: "linear-gradient(to bottom, rgba(180,230,255,0.95), rgba(180,230,255,0))",
                boxShadow: "0 0 6px rgba(120,210,255,0.7)"
              },
              animate: { y: [0, size * 1.4], opacity: [0, 1, 0] },
              transition: { duration: dur, delay: i * 0.12 % 1.5, repeat: Infinity, ease: "easeIn" }
            },
            i
          );
        })
      ]
    }
  );
}
function FogPlume({ size }) {
  const puffs = Array.from({ length: 6 });
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute left-1/2 -translate-x-1/2",
      style: { top: "85%", width: size * 1.8, height: size * 1.4, pointerEvents: "none" },
      children: puffs.map((_, i) => {
        const left = 20 + i * 12;
        const dur = 5 + i % 3;
        return /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "absolute rounded-full",
            style: {
              left: `${left}%`,
              top: "10%",
              width: size * 0.55,
              height: size * 0.55,
              background: "radial-gradient(circle, rgba(170,235,255,0.45), rgba(120,200,255,0.15) 45%, transparent 70%)",
              filter: "blur(10px)"
            },
            animate: {
              y: [0, -size * 0.4],
              x: [0, i % 2 ? 18 : -18],
              scale: [0.6, 1.6],
              opacity: [0, 0.7, 0]
            },
            transition: { duration: dur, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }
          },
          i
        );
      })
    }
  );
}
function SurveillanceFX({ size }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2",
        style: {
          width: size * 0.5,
          height: size * 0.5,
          border: "1.5px solid rgba(34,255,180,0.55)",
          boxShadow: "0 0 18px rgba(34,255,180,0.45) inset, 0 0 18px rgba(34,255,180,0.45)"
        },
        animate: { scale: [0.4, 2.2], opacity: [0.8, 0] },
        transition: { duration: 3, delay: i * 1, repeat: Infinity, ease: "easeOut" }
      },
      i
    )),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute left-1/2 -translate-x-1/2",
        style: { top: "75%", width: size * 1.4, height: size * 1.1, pointerEvents: "none" },
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute left-1/2 top-0 origin-top",
            style: {
              width: size * 0.9,
              height: size * 1.1,
              background: "conic-gradient(from -20deg at 50% 0%, transparent 0deg, rgba(120,255,220,0.35) 18deg, transparent 36deg)",
              filter: "blur(2px)",
              transform: "translateX(-50%)"
            },
            animate: { rotate: [-25, 25, -25] },
            transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2",
        style: {
          width: size * 0.95,
          height: size * 0.95,
          border: "1px dashed rgba(120,255,220,0.55)"
        },
        animate: { rotate: 360 },
        transition: { duration: 9, repeat: Infinity, ease: "linear" }
      }
    )
  ] });
}
function DroneBody({ cfg }) {
  const baseFilter = "drop-shadow(0 10px 22px rgba(0,0,0,0.6)) drop-shadow(0 0 26px rgba(0,194,255,0.55)) drop-shadow(0 0 50px rgba(0,210,170,0.35)) contrast(1.12) saturate(1.2)";
  return /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: cfg.size, height: cfg.size * 0.55 }, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: droneImg,
        alt: "",
        "aria-hidden": true,
        style: { filter: baseFilter, width: "100%", display: "block" }
      }
    ),
    /* @__PURE__ */ jsx(Propellers, { size: cfg.size }),
    /* @__PURE__ */ jsx(NavLights, { size: cfg.size }),
    cfg.type === "agriculture" && /* @__PURE__ */ jsx(SprayMist, { size: cfg.size }),
    cfg.type === "fog" && /* @__PURE__ */ jsx(FogPlume, { size: cfg.size }),
    cfg.type === "surveillance" && /* @__PURE__ */ jsx(SurveillanceFX, { size: cfg.size })
  ] });
}
function Drone({ cfg }) {
  if (cfg.direction === "depth") {
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "pointer-events-none absolute left-1/2",
        style: { top: cfg.top, width: cfg.size, opacity: cfg.opacity },
        initial: { scale: 0.25, x: "-50%", y: 40, opacity: 0 },
        animate: {
          scale: [0.25, 1.45, 0.25],
          y: [40, -140, 40],
          opacity: [0, cfg.opacity, 0],
          rotate: [0, cfg.tilt, -cfg.tilt, 0]
        },
        transition: { duration: cfg.duration, delay: cfg.delay, repeat: Infinity, ease: "easeInOut" },
        children: /* @__PURE__ */ jsx(DroneBody, { cfg })
      }
    );
  }
  const fromX = cfg.direction === "ltr" ? "-22vw" : "122vw";
  const toX = cfg.direction === "ltr" ? "122vw" : "-22vw";
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "pointer-events-none absolute",
      style: {
        top: cfg.top,
        width: cfg.size,
        opacity: cfg.opacity,
        filter: "blur(0.4px)"
      },
      initial: { x: fromX },
      animate: {
        x: [fromX, toX],
        y: [0, -28, 18, -14, 0],
        rotate: [0, cfg.tilt, -cfg.tilt, cfg.tilt / 2, 0]
      },
      transition: {
        x: { duration: cfg.duration, delay: cfg.delay, repeat: Infinity, ease: "linear" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: cfg.duration / 2, repeat: Infinity, ease: "easeInOut" }
      },
      children: /* @__PURE__ */ jsx(DroneBody, { cfg })
    }
  );
}
function Particles() {
  const dots = Array.from({ length: 26 });
  return /* @__PURE__ */ jsx(Fragment, { children: dots.map((_, i) => {
    const left = i * 53 % 100;
    const top = i * 37 % 100;
    const dur = 8 + i % 6 * 2;
    return /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "pointer-events-none absolute h-[3px] w-[3px] rounded-full",
        style: {
          left: `${left}%`,
          top: `${top}%`,
          background: i % 2 ? "var(--electric)" : "var(--neon)",
          boxShadow: "0 0 14px currentColor",
          opacity: 0.6
        },
        animate: { y: [0, -50, 0], opacity: [0.2, 0.85, 0.2] },
        transition: { duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
      },
      i
    );
  }) });
}
function FlyingDrones() {
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mob = window.matchMedia("(max-width: 640px)");
    setReduced(m.matches);
    setIsMobile(mob.matches);
    const h = (e) => setReduced(e.matches);
    const hm = (e) => setIsMobile(e.matches);
    m.addEventListener("change", h);
    mob.addEventListener("change", hm);
    return () => {
      m.removeEventListener("change", h);
      mob.removeEventListener("change", hm);
    };
  }, []);
  if (reduced) return null;
  const list = isMobile ? drones.slice(0, 3).map((d) => ({ ...d, size: Math.round(d.size * 0.7) })) : drones;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed inset-0 z-[5] overflow-hidden",
      style: { contain: "strict" },
      children: [
        /* @__PURE__ */ jsx(Particles, {}),
        list.map((cfg, i) => /* @__PURE__ */ jsx(Drone, { cfg }, i))
      ]
    }
  );
}
function CinematicBackground() {
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-ambient)" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full",
        style: {
          background: "radial-gradient(circle, oklch(0.72 0.16 215 / 0.45), transparent 65%)",
          filter: "blur(60px)"
        },
        animate: { x: [0, 80, -40, 0], y: [0, 60, -30, 0], scale: [1, 1.1, 0.95, 1] },
        transition: { duration: 24, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute -bottom-40 -right-40 h-[640px] w-[640px] rounded-full",
        style: {
          background: "radial-gradient(circle, oklch(0.68 0.15 175 / 0.45), transparent 65%)",
          filter: "blur(60px)"
        },
        animate: { x: [0, -60, 40, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.9, 1] },
        transition: { duration: 28, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute top-1/3 left-0 h-[2px] w-1/2",
        style: {
          background: "linear-gradient(90deg, transparent, oklch(0.85 0.12 195 / 0.6), transparent)",
          filter: "blur(2px)"
        },
        animate: { x: ["-50%", "200%"] },
        transition: { duration: 12, repeat: Infinity, ease: "linear" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 200 / 0.7) 100%)"
        }
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "relative bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(CinematicBackground, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx(Nav, {}),
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(FlyingDrones, {})
  ] });
}
export {
  Index as component
};
