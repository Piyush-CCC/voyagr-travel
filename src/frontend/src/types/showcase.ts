export interface SlideFeature {
  iconName: string;
  label: string;
  description: string;
}

export type MockupType = "login" | "template" | "contacts" | "broadcast";

export interface SlideData {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle: string;
  narrationText: string;
  features: SlideFeature[];
  mockupType: MockupType;
  keyFields: string[];
}

export interface ShowcaseState {
  currentSlide: number;
  isPlaying: boolean;
  isMusicMuted: boolean;
  isVoiceMuted: boolean;
  countdownSeconds: number;
  hasEnded: boolean;
}

export interface ShowcaseActions {
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  togglePlay: () => void;
  toggleMusicMute: () => void;
  toggleVoiceMute: () => void;
  resetShowcase: () => void;
  tickCountdown: () => void;
}

export type ShowcaseStore = ShowcaseState & ShowcaseActions;
