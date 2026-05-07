import { useCallback, useEffect, useRef } from "react";

interface AudioEngine {
  startMusic: () => void;
  stopMusic: () => void;
  setMuted: (muted: boolean) => void;
}

const FREQUENCIES = [220, 330, 440, 550];
const OSCILLATOR_GAIN = 0.04;
const FILTER_FREQUENCY = 800;
const LFO_RATE = 0.5;
const LFO_DEPTH = 0.01;

export function useAudioEngine(isMuted: boolean): AudioEngine {
  const ctxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);
  const masterGainRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const lfoGainRef = useRef<GainNode | null>(null);
  const startedRef = useRef(false);

  const buildGraph = useCallback(() => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;

    // Master gain
    const master = ctx.createGain();
    master.gain.value = isMuted ? 0 : 1;
    masterGainRef.current = master;

    // Low-pass filter for warmth
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = FILTER_FREQUENCY;
    filter.connect(master);
    master.connect(ctx.destination);

    // LFO for breathing effect
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = LFO_RATE;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = LFO_DEPTH;
    lfo.connect(lfoGain);
    lfoRef.current = lfo;
    lfoGainRef.current = lfoGain;
    lfo.start();

    // Oscillators
    for (const freq of FREQUENCIES) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;

      const gainNode = ctx.createGain();
      gainNode.gain.value = OSCILLATOR_GAIN;

      // Connect LFO to gain for breathing
      lfoGain.connect(gainNode.gain);

      osc.connect(gainNode);
      gainNode.connect(filter);

      osc.start();
      oscillatorsRef.current.push(osc);
      gainNodesRef.current.push(gainNode);
    }
  }, [isMuted]);

  const stopAll = useCallback(() => {
    for (const osc of oscillatorsRef.current) {
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
    }
    lfoRef.current?.stop();
    oscillatorsRef.current = [];
    gainNodesRef.current = [];
    masterGainRef.current = null;
    lfoRef.current = null;
    lfoGainRef.current = null;
    startedRef.current = false;
  }, []);

  const startMusic = useCallback(() => {
    if (startedRef.current) return;
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume().then(() => buildGraph());
    } else {
      buildGraph();
    }
    startedRef.current = true;
  }, [buildGraph]);

  const stopMusic = useCallback(() => {
    stopAll();
  }, [stopAll]);

  const setMuted = useCallback((muted: boolean) => {
    if (masterGainRef.current && ctxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(
        muted ? 0 : 1,
        ctxRef.current.currentTime,
        0.1,
      );
    }
  }, []);

  // React to mute changes
  useEffect(() => {
    setMuted(isMuted);
  }, [isMuted, setMuted]);

  // Auto-start on mount; resume on user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!startedRef.current) {
        startMusic();
      } else if (ctxRef.current?.state === "suspended") {
        ctxRef.current.resume();
      }
    };

    // Try starting immediately
    startMusic();

    document.addEventListener("click", handleInteraction, { once: false });
    document.addEventListener("keydown", handleInteraction, { once: false });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [startMusic]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAll();
      ctxRef.current?.close();
    };
  }, [stopAll]);

  return { startMusic, stopMusic, setMuted };
}
