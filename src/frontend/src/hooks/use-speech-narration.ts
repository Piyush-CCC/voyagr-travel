import { useCallback, useEffect, useRef } from "react";

interface SpeechNarration {
  narrateSlide: (text: string, isMuted: boolean) => void;
  stopNarration: () => void;
  isSupported: boolean;
}

const isSupported =
  typeof window !== "undefined" && "speechSynthesis" in window;

export function useSpeechNarration(): SpeechNarration {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Pre-select preferred voice
  const selectVoice = useCallback(() => {
    if (!isSupported) return;
    const voices = window.speechSynthesis.getVoices();
    const enVoices = voices.filter((v) => v.lang.startsWith("en"));
    const enUSVoices = voices.filter((v) => v.lang === "en-US");
    // Prefer female-sounding en-US voices
    const femaleVoice = enUSVoices.find((v) =>
      /female|woman|samantha|karen|victoria|zira/i.test(v.name),
    );
    voiceRef.current =
      femaleVoice ?? enUSVoices[0] ?? enVoices[0] ?? voices[0] ?? null;
  }, []);

  useEffect(() => {
    if (!isSupported) return;
    selectVoice();
    window.speechSynthesis.onvoiceschanged = selectVoice;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [selectVoice]);

  const stopNarration = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
  }, []);

  const narrateSlide = useCallback((text: string, isMuted: boolean) => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = isMuted ? 0 : 1;
    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    }
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    return () => {
      if (isSupported) window.speechSynthesis.cancel();
    };
  }, []);

  return { narrateSlide, stopNarration, isSupported };
}
