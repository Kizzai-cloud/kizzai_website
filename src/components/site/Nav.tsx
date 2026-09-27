import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/kizzai-logo-final.png";

const links: { href: string; label: string }[] = [];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 text-sm font-extrabold border-2 ${
            scrolled ? "glass-strong border-white/10" : "border-transparent"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center"
            aria-label="KizzAI home"
          >
            <img
              src={logoImg}
              alt="KizzAI"
              className="w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
              style={{ height: "clamp(28px, 3.5vw, 38px)" }}
              draggable={false}
            />
          </a>


          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-electric to-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full btn-primary px-5 py-2 text-sm font-medium"
          >
            Get Started
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-6 flex flex-col gap-4 animate-fade-up">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary rounded-full px-5 py-2 text-sm text-center font-medium"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
