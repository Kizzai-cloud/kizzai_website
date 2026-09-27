import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { FlyingDrones } from "@/components/site/FlyingDrones";
import { CinematicBackground } from "@/components/site/CinematicBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kizzai" },
      {
        name: "description",
        content:
          "Kizzai is a creative tech studio for drones, film production and mobile app development.",
      },
      { property: "og:title", content: "Kizzai — Innovating the Future" },
      {
        property: "og:description",
        content: "Drone · Film Production · Mobile Apps",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600&family=Cormorant+Garamond:wght@600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <CinematicBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <FlyingDrones />
    </main>
  );
}
