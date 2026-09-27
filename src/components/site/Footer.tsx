import { InstagramIcon as Instagram, LinkedinIcon as Linkedin, TwitterIcon as Twitter, YoutubeIcon as Youtube } from "./SocialIcons";

export function Footer() {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/kizzai_private_limited/", Icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kizzai-kizzai-6a8aaa418/?isSelfProfile=true", Icon: Linkedin },
    { label: "X", href: "https://x.com/Kizzai_pvt_ltd", Icon: Twitter },
    { label: "YouTube", href: "https://www.youtube.com/@Kizzai_studio", Icon: Youtube },
  ];

  return (
    <footer className="relative border-t border-border pt-20 pb-10 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--electric), var(--neon), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center font-display font-bold text-background"
                style={{ background: "var(--gradient-primary)" }}>K</div>
              <span className="font-display text-lg font-semibold">
                Kizz<span className="gradient-text">ai</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A creative tech studio building drones, films, apps and growth — for the
              next generation of brands.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit KizzAI on ${label}`}
                  className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:border-electric hover:text-electric transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground/80 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground/80 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Drone</li>
              
              <li>Film Production</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Kizzai. All rights reserved.</span>
          <span>Crafted with precision in India.</span>
        </div>
      </div>
    </footer>
  );
}
