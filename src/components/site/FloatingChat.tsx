import { MessageCircle } from "lucide-react";

export function FloatingChat() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center text-background shadow-[0_0_30px_oklch(0.78_0.17_230/0.5)] hover:scale-110 transition-transform"
      style={{ background: "var(--gradient-primary)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ background: "var(--gradient-primary)" }} />
    </a>
  );
}
