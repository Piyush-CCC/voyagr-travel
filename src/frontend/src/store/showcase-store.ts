import { SLIDE_DURATION, TOTAL_SLIDES } from "@/data/slides";
import type { ShowcaseStore } from "@/types/showcase";
import { create } from "zustand";

const DEFAULT_STATE = {
  currentSlide: 0,
  isPlaying: true,
  isMusicMuted: false,
  isVoiceMuted: false,
  countdownSeconds: SLIDE_DURATION,
  hasEnded: false,
};

export const useShowcaseStore = create<ShowcaseStore>((set) => ({
  ...DEFAULT_STATE,

  nextSlide: () =>
    set((state) => {
      if (state.currentSlide >= TOTAL_SLIDES - 1) {
        return { hasEnded: true, isPlaying: false };
      }
      return {
        currentSlide: state.currentSlide + 1,
        countdownSeconds: SLIDE_DURATION,
      };
    }),

  prevSlide: () =>
    set((state) => ({
      currentSlide: Math.max(0, state.currentSlide - 1),
      countdownSeconds: SLIDE_DURATION,
      hasEnded: false,
      isPlaying: true,
    })),

  goToSlide: (index: number) =>
    set({
      currentSlide: index,
      countdownSeconds: SLIDE_DURATION,
      hasEnded: false,
      isPlaying: true,
    }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  toggleMusicMute: () =>
    set((state) => ({ isMusicMuted: !state.isMusicMuted })),

  toggleVoiceMute: () =>
    set((state) => ({ isVoiceMuted: !state.isVoiceMuted })),

  resetShowcase: () => set({ ...DEFAULT_STATE }),

  tickCountdown: () =>
    set((state) => {
      if (!state.isPlaying || state.hasEnded) return {};
      if (state.countdownSeconds <= 1) {
        return { countdownSeconds: SLIDE_DURATION };
      }
      return { countdownSeconds: state.countdownSeconds - 1 };
    }),
}));
