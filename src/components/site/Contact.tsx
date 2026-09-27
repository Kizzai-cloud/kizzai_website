import { Mail, Phone, MapPin, Send } from "lucide-react";
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin, TwitterIcon as Twitter, YoutubeIcon as Youtube } from "./SocialIcons";
import { useState } from "react";
import contactHero from "@/assets/contact-hero.png";

export function Contact() {
  const [sent, setSent] = useState(false);
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/kizzai_private_limited/", Icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kizzai-kizzai-6a8aaa418/?isSelfProfile=true", Icon: Linkedin },
    { label: "X", href: "https://x.com/Kizzai_pvt_ltd", Icon: Twitter },
    { label: "YouTube", href: "https://www.youtube.com/@Kizzai_studio", Icon: Youtube },
  ];

  const sendInquiryEmail = (event: React.FormEvent<HTMLFormElement>) => {
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
        projectDetails,
      ].join("\n"),
    });

    setSent(true);
    window.location.href = `mailto:sales@kizzai.com?${emailParameters.toString()}`;
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <div className="relative overflow-hidden rounded-2xl min-h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{ backgroundImage: `url(${contactHero})` }}
            />
            <div className="relative z-10 p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-electric mb-5">— LET'S GROW</div>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                Drop us a message and our team get back to you soon. For urgent requests, contact by phone or social.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Mail, label: "sales@kizzai.com", href: "mailto:sales@kizzai.com" },
                  { icon: Phone, label: "+91 99402 80736", href: "tel:+919940280736" },
                  { icon: MapPin, label: "Chennai", href: "#" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                    <div className="h-11 w-11 rounded-xl glass flex items-center justify-center group-hover:border-electric transition-colors">
                      <c.icon size={18} className="text-electric" />
                    </div>
                    <span className="text-sm text-foreground/90 group-hover:text-foreground">{c.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-10 flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:border-electric hover:text-electric transition-colors"
                    aria-label={`Visit KizzAI on ${label}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={sendInquiryEmail}
            className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--neon), transparent 70%)" }}
            />

            <div className="grid sm:grid-cols-2 gap-5 relative">
              <Field label="Full Name" name="name" placeholder="Enter Your Name" />
              <Field label="Email" name="email" type="email" placeholder="Enter Your Email" />
              <Field label="Company" name="company" placeholder="Enter Your Company" />
              <Field label="Service" name="service" placeholder="Select a Service" />
            </div>

            <div className="mt-5 relative">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                name="projectDetails"
                rows={5}
                placeholder="Tell us a bit about your goals, timeline and budget..."
                required
                className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric focus:shadow-[0_0_24px_oklch(0.78_0.17_230/0.25)] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="btn-primary mt-6 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium w-full sm:w-auto"
            >
              {sent ? "Message sent ✓" : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric focus:shadow-[0_0_24px_oklch(0.78_0.17_230/0.25)] transition-all"
      />
    </div>
  );
}
