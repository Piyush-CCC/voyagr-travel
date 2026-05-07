import { slides } from "@/data/slides";
import { MessageCircle } from "lucide-react";

const SEGMENT_LABELS = ["Login & Setup", "Templates", "Contacts", "Broadcast"];

interface ShowcaseHeaderProps {
  currentSlide: number;
  countdown?: number;
}

export function ShowcaseHeader({
  currentSlide,
  countdown: _countdown,
}: ShowcaseHeaderProps) {
  return (
    <header className="w-full bg-card border-b border-border/50 shadow-lg">
      {/* Progress bar */}
      <div className="w-full flex gap-1 px-4 pt-3">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="flex-1 flex flex-col gap-1"
            data-ocid={`progress.segment.${i + 1}`}
          >
            <div className="relative h-1.5 rounded-full overflow-hidden bg-border">
              {i < currentSlide && (
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: "100%", backgroundColor: "#25D366" }}
                />
              )}
              {i === currentSlide && (
                <div
                  key={currentSlide}
                  className="absolute inset-y-0 left-0 rounded-full animate-countdown-fill"
                  style={{ backgroundColor: "#25D366" }}
                />
              )}
            </div>
            <span
              className="text-xs font-body leading-none hidden sm:block"
              style={{
                color: i <= currentSlide ? "#25D366" : "oklch(0.55 0.015 280)",
              }}
            >
              {SEGMENT_LABELS[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Branding row */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "#25D36620",
            border: "1.5px solid #25D36660",
          }}
        >
          <MessageCircle
            className="w-5 h-5"
            style={{ color: "#25D366" }}
            strokeWidth={2.5}
          />
        </div>
        <div className="min-w-0">
          <h1 className="text-xl font-display font-bold text-foreground leading-tight">
            Messagify
          </h1>
          <p className="text-xs font-body text-muted-foreground leading-tight">
            Smart WhatsApp Business Messaging
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs font-body text-muted-foreground hidden md:inline">
            Section {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </header>
  );
}
