import {
  CheckCircle2,
  FileText,
  Globe,
  ImageIcon,
  Loader2,
  Plus,
  Tag,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const GREEN = "#25D366";

const features = [
  { text: "Marketing, Utility & Authentication templates" },
  { text: "Rich header: Text, Image, Video, Document, Location" },
  { text: "Dynamic variables with {name}, {company} placeholders" },
  { text: "Footer text and call-to-action buttons" },
  { text: "Official WhatsApp approval workflow" },
];

const headerTypes = [
  { label: "Text", icon: FileText },
  { label: "Image", icon: ImageIcon, active: true },
  { label: "Video", icon: Video },
  { label: "Doc", icon: Tag },
];

const categories = [
  { label: "Marketing", active: true },
  { label: "Utility", active: false },
  { label: "Auth", active: false },
];

export default function TemplatesSlide() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSubmitting(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 sm:p-6 items-center">
      {/* LEFT — Feature list */}
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-4 order-2 lg:order-1">
        <div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-3"
            style={{
              background: `${GREEN}20`,
              color: GREEN,
              border: `1px solid ${GREEN}40`,
            }}
          >
            02 / 04
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight"
          >
            Creating Message Templates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-sm text-muted-foreground mt-1"
          >
            Build rich, personalized messages
          </motion.p>
        </div>

        <div className="flex flex-col gap-2">
          {features.map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${GREEN}25` }}
              >
                <CheckCircle2 className="w-3 h-3" style={{ color: GREEN }} />
              </div>
              <span className="text-sm text-foreground/80">{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT — Mockup card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="order-1 lg:order-2 w-full lg:w-[380px] rounded-2xl p-5 shrink-0 overflow-y-auto"
        style={{
          background: "#1c1c1e",
          border: "1px solid #2a2a2a",
          borderTop: `2px solid ${GREEN}`,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          minHeight: "380px",
          maxHeight: "480px",
        }}
      >
        {/* Tab bar */}
        <div
          className="flex gap-3 mb-4 border-b pb-2"
          style={{ borderColor: "#2a2a2a" }}
        >
          {["Overview", "Templates", "Analytics"].map((tab) => (
            <span
              key={tab}
              className="text-xs font-semibold pb-1.5"
              style={{
                color: tab === "Templates" ? GREEN : "#555",
                borderBottom:
                  tab === "Templates"
                    ? `2px solid ${GREEN}`
                    : "2px solid transparent",
              }}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {/* Template Name */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Template Name
            </p>
            <div
              className="rounded-lg px-3 py-2"
              style={{ background: "#2a2a2a", border: "1px solid #383838" }}
            >
              <span className="text-sm" style={{ color: "#ddd" }}>
                Summer Sale 2024
              </span>
            </div>
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Category
            </p>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <span
                  key={cat.label}
                  className="text-xs px-2.5 py-1 rounded-full font-medium cursor-pointer"
                  style={{
                    background: cat.active ? `${GREEN}20` : "#2a2a2a",
                    color: cat.active ? GREEN : "#666",
                    border: cat.active
                      ? `1px solid ${GREEN}50`
                      : "1px solid #383838",
                  }}
                >
                  {cat.label}
                  {cat.active && " ✓"}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Language */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Language
            </p>
            <div
              className="rounded-lg px-3 py-2 flex items-center gap-2"
              style={{ background: "#2a2a2a", border: "1px solid #383838" }}
            >
              <Globe className="w-3.5 h-3.5" style={{ color: "#666" }} />
              <span className="text-sm" style={{ color: "#ddd" }}>
                English (en)
              </span>
            </div>
          </motion.div>

          {/* Header Type */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Header Type
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {headerTypes.map((h) => {
                const Icon = h.icon;
                return (
                  <span
                    key={h.label}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg"
                    style={{
                      background: h.active ? `${GREEN}20` : "#2a2a2a",
                      color: h.active ? GREEN : "#666",
                      border: h.active
                        ? `1px solid ${GREEN}50`
                        : "1px solid #383838",
                    }}
                  >
                    <Icon className="w-2.5 h-2.5" />
                    {h.label}
                    {h.active && " ✓"}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Message Body
            </p>
            <div
              className="rounded-lg px-3 py-2"
              style={{ background: "#2a2a2a", border: "1px solid #383838" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "#ccc" }}>
                Hello{" "}
                <span
                  className="px-1 rounded"
                  style={{ background: `${GREEN}25`, color: GREEN }}
                >
                  &#123;&#123;1&#125;&#125;
                </span>
                , check out our latest offer!
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 text-xs mt-1.5 px-2 py-1 rounded-md"
              style={{
                background: `${GREEN}15`,
                color: GREEN,
                border: `1px solid ${GREEN}30`,
              }}
            >
              <Plus className="w-2.5 h-2.5" /> Add Variable
            </button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.53 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Footer
            </p>
            <div
              className="rounded-lg px-3 py-2"
              style={{ background: "#2a2a2a", border: "1px solid #383838" }}
            >
              <span className="text-xs" style={{ color: "#888" }}>
                Reply STOP to unsubscribe
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Buttons
            </p>
            <span
              className="inline-flex text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${GREEN}20`,
                color: GREEN,
                border: `1px solid ${GREEN}40`,
              }}
            >
              Call to Action: Visit Website
            </span>
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="w-full rounded-lg py-2.5 text-xs font-bold flex items-center justify-center gap-2 mt-1"
            style={{
              background: GREEN,
              color: "#0a1a0a",
              boxShadow: `0 0 14px ${GREEN}35`,
            }}
          >
            {isSubmitting && <Loader2 className="w-3 h-3 animate-spin" />}
            Submit for Approval
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
