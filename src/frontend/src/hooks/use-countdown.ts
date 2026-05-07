import { SLIDE_DURATION } from "@/data/slides";
import { useEffect, useRef } from "react";

interface CountdownOptions {
  isPlaying: boolean;
  onExpire: () => void;
  duration?: number;
}

export function useCountdown({
  isPlaying,
  onExpire,
  duration = SLIDE_DURATION,
}: CountdownOptions) {
  const onExpireRef = useRef(onExpire);
  const durationRef = useRef(duration);
  const countRef = useRef(duration);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      countRef.current -= 1;
      if (countRef.current <= 0) {
        countRef.current = durationRef.current;
        onExpireRef.current();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const resetCountdown = () => {
    countRef.current = durationRef.current;
  };

  return { resetCountdown };
}
