import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

interface SlideTransitionProps {
  slideKey: string | number;
  children: ReactNode;
}

export function SlideTransition({ slideKey, children }: SlideTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
