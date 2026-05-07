import type { SlideData } from "@/types/showcase";
import {
  BarChart3,
  Braces,
  Calendar,
  CheckCircle2,
  FileCheck,
  FileText,
  Image,
  Key,
  LogIn,
  MessageCircle,
  Radio,
  Settings,
  Tag,
  Tags,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { SlideMockup } from "./SlideMockup";

const ICON_MAP: Record<string, React.ElementType> = {
  LogIn,
  MessageCircle,
  Settings,
  Key,
  FileText,
  Tag,
  Image,
  Braces,
  Users,
  Target,
  BarChart3,
  Tags,
  Radio,
  Calendar,
  FileCheck,
};

interface SlideContentProps {
  slide: SlideData;
}

export function SlideContent({ slide }: SlideContentProps) {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 sm:p-6 overflow-auto">
      {/* Mockup */}
      <div className="flex items-center justify-center lg:justify-start shrink-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SlideMockup type={slide.mockupType} />
        </motion.div>
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-4">
        {/* Section number + title */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-4xl font-display font-black leading-none"
            style={{ color: "#25D366" }}
          >
            {slide.sectionNumber}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-display font-bold text-foreground mt-1 leading-tight"
          >
            {slide.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="text-sm font-body text-muted-foreground mt-1"
          >
            {slide.subtitle}
          </motion.p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {slide.features.map((feature, i) => {
            const Icon = ICON_MAP[feature.iconName] ?? MessageCircle;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-2.5 rounded-lg p-3"
                style={{
                  background: "#25D36610",
                  border: "1px solid #25D36625",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "#25D36620" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#25D366" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-display font-semibold text-foreground leading-tight">
                    {feature.label}
                  </p>
                  <p className="text-xs font-body text-muted-foreground mt-0.5 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key fields checklist */}
        <div>
          <p
            className="text-xs font-display font-semibold uppercase tracking-wider mb-2"
            style={{ color: "#25D36690" }}
          >
            Key Fields
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
            {slide.keyFields.map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.45 + i * 0.06 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: "#25D366" }}
                />
                <span className="text-xs font-body text-foreground/80 leading-snug">
                  {field}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
