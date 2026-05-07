import { SLIDE_DURATION } from "@/data/slides";
import { useShowcaseStore } from "@/store/showcase-store";
import {
  ChevronLeft,
  ChevronRight,
  Mic,
  MicOff,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

interface ShowcaseControlsProps {
  countdown: number;
}

export function ShowcaseControls({ countdown }: ShowcaseControlsProps) {
  const {
    currentSlide,
    isPlaying,
    isMusicMuted,
    isVoiceMuted,
    hasEnded,
    nextSlide,
    prevSlide,
    togglePlay,
    toggleMusicMute,
    toggleVoiceMute,
  } = useShowcaseStore();

  const isLastSlide = currentSlide === 3;
  const progress = ((SLIDE_DURATION - countdown) / SLIDE_DURATION) * 100;

  return (
    <div className="w-full bg-card border-t border-border/50 px-4 py-3">
      {/* Countdown ring + controls row */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {/* Left: Prev */}
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          data-ocid="controls.prev_button"
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-body text-sm font-medium transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            backgroundColor: "#25D36615",
            border: "1px solid #25D36640",
            color: currentSlide === 0 ? "oklch(0.55 0.015 280)" : "#25D366",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Center: Countdown + Play/Pause */}
        <div className="flex items-center gap-3">
          {/* Countdown pill */}
          <div className="relative flex items-center justify-center">
            <svg
              className="w-12 h-12 -rotate-90"
              viewBox="0 0 36 36"
              role="img"
              aria-label="Countdown timer"
            >
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#25D36630"
                strokeWidth="2.5"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#25D366"
                strokeWidth="2.5"
                strokeDasharray={`${(countdown / SLIDE_DURATION) * 87.96} 87.96`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <span
              className="absolute text-xs font-display font-bold"
              style={{ color: "#25D366" }}
            >
              {countdown}s
            </span>
          </div>

          {/* Play/Pause */}
          <button
            type="button"
            onClick={togglePlay}
            data-ocid="controls.play_pause_button"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-smooth shadow-lg"
            style={{
              backgroundColor: "#25D366",
              color: "#0f1a0f",
            }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5" fill="currentColor" />
            )}
          </button>
        </div>

        {/* Right: Next + Mute toggles */}
        <div className="flex items-center gap-2">
          {/* Music toggle */}
          <button
            type="button"
            onClick={toggleMusicMute}
            data-ocid="controls.music_mute_toggle"
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg font-body text-xs font-medium transition-smooth"
            style={{
              backgroundColor: isMusicMuted ? "#1a1a1a" : "#25D36615",
              border: `1px solid ${isMusicMuted ? "oklch(0.28 0.015 280)" : "#25D36640"}`,
              color: isMusicMuted ? "oklch(0.55 0.015 280)" : "#25D366",
            }}
            aria-label="Toggle music"
          >
            {isMusicMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">Music</span>
          </button>

          {/* Voice toggle */}
          <button
            type="button"
            onClick={toggleVoiceMute}
            data-ocid="controls.voice_mute_toggle"
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg font-body text-xs font-medium transition-smooth"
            style={{
              backgroundColor: isVoiceMuted ? "#1a1a1a" : "#25D36615",
              border: `1px solid ${isVoiceMuted ? "oklch(0.28 0.015 280)" : "#25D36640"}`,
              color: isVoiceMuted ? "oklch(0.55 0.015 280)" : "#25D366",
            }}
            aria-label="Toggle voice"
          >
            {isVoiceMuted ? (
              <MicOff className="w-3.5 h-3.5" />
            ) : (
              <Mic className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">Voice</span>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={isLastSlide && hasEnded}
            data-ocid="controls.next_button"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-body text-sm font-medium transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "#25D36615",
              border: "1px solid #25D36640",
              color:
                isLastSlide && hasEnded ? "oklch(0.55 0.015 280)" : "#25D366",
            }}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {!hasEnded && (
        <div className="mt-2 w-full h-0.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${progress}%`, backgroundColor: "#25D366" }}
          />
        </div>
      )}
    </div>
  );
}
