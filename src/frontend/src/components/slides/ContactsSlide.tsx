import { CheckCircle2, ChevronDown, Save } from "lucide-react";
import { motion } from "motion/react";

const GREEN = "#25D366";

const features = [
  { text: "Full contact profile with 15+ fields" },
  { text: "Lead scoring: Cold, Warm, Hot ratings" },
  { text: "Status tracking through pipeline stages" },
  { text: "Multi-source import: CSV, LinkedIn, WhatsApp" },
  { text: "Tag-based segmentation and filtering" },
];

const ratingPills = [
  { label: "Cold", active: false },
  { label: "Warm", active: true },
  { label: "Hot", active: false },
];

const typePills = [
  { label: "Lead", active: true },
  { label: "Customer", active: false },
];

const tags = ["CRM Tools", "WhatsApp API"];

function Field({
  label,
  value,
  delay,
}: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <p className="text-xs mb-0.5" style={{ color: "#555" }}>
        {label}
      </p>
      <div
        className="rounded-lg px-3 py-1.5"
        style={{ background: "#2a2a2a", border: "1px solid #383838" }}
      >
        <span className="text-xs" style={{ color: "#ccc" }}>
          {value}
        </span>
      </div>
    </motion.div>
  );
}

export default function ContactsSlide() {
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
            03 / 04
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight"
          >
            Managing Contacts &amp; Leads
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-sm text-muted-foreground mt-1"
          >
            Organize your entire pipeline
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
          maxHeight: "500px",
        }}
      >
        {/* Tab bar */}
        <div
          className="flex gap-3 mb-3 border-b pb-2"
          style={{ borderColor: "#2a2a2a" }}
        >
          {["Dashboard", "Contacts & Leads", "Tasks"].map((tab) => (
            <span
              key={tab}
              className="text-xs font-semibold pb-1.5 whitespace-nowrap"
              style={{
                color: tab === "Contacts & Leads" ? GREEN : "#555",
                borderBottom:
                  tab === "Contacts & Leads"
                    ? `2px solid ${GREEN}`
                    : "2px solid transparent",
              }}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-3"
        >
          <div
            className="flex items-center gap-2 mb-2 pl-2"
            style={{ borderLeft: `2px solid ${GREEN}` }}
          >
            <p className="text-xs font-bold" style={{ color: "#bbb" }}>
              Contact Information
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Field label="Phone" value="+91 ▼  98765 43210" delay={0.15} />
            <Field label="Email" value="priya.sharma@gmail.com" delay={0.22} />

            {/* Type pills */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.29 }}
            >
              <p className="text-xs mb-1" style={{ color: "#555" }}>
                Type
              </p>
              <div className="flex gap-2">
                {typePills.map((p) => (
                  <span
                    key={p.label}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: p.active ? `${GREEN}20` : "#2a2a2a",
                      color: p.active ? GREEN : "#666",
                      border: p.active
                        ? `1px solid ${GREEN}50`
                        : "1px solid #383838",
                    }}
                  >
                    {p.label}
                    {p.active && " ✓"}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Status dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <p className="text-xs mb-1" style={{ color: "#555" }}>
                Status
              </p>
              <div
                className="rounded-lg px-3 py-1.5 flex items-center justify-between"
                style={{ background: "#2a2a2a", border: "1px solid #383838" }}
              >
                <span className="text-xs" style={{ color: "#ccc" }}>
                  Working
                </span>
                <ChevronDown className="w-3 h-3" style={{ color: "#555" }} />
              </div>
            </motion.div>

            {/* Rating pills */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
            >
              <p className="text-xs mb-1" style={{ color: "#555" }}>
                Rating
              </p>
              <div className="flex gap-2">
                {ratingPills.map((p) => (
                  <span
                    key={p.label}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: p.active ? `${GREEN}20` : "#2a2a2a",
                      color: p.active ? GREEN : "#666",
                      border: p.active
                        ? `1px solid ${GREEN}50`
                        : "1px solid #383838",
                    }}
                  >
                    {p.label}
                    {p.active && " ✓"}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Source */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
            >
              <p className="text-xs mb-1" style={{ color: "#555" }}>
                Source
              </p>
              <div
                className="rounded-lg px-3 py-1.5 flex items-center justify-between"
                style={{
                  background: "#2a2a2a",
                  border: `1px solid ${GREEN}30`,
                }}
              >
                <span className="text-xs" style={{ color: GREEN }}>
                  LinkedIn
                </span>
                <ChevronDown className="w-3 h-3" style={{ color: "#555" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Basic Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-3"
        >
          <div
            className="flex items-center gap-2 mb-2 pl-2"
            style={{ borderLeft: "2px solid #444" }}
          >
            <p className="text-xs font-bold" style={{ color: "#888" }}>
              Basic Details
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="First Name" value="Priya" delay={0.55} />
            <Field label="Last Name" value="Sharma" delay={0.58} />
            <Field label="Gender" value="Female" delay={0.61} />
            <Field label="DOB" value="15/04/1992" delay={0.64} />
            <Field label="Country" value="India" delay={0.67} />
            <Field label="State" value="Maharashtra" delay={0.7} />
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-4"
        >
          <div
            className="flex items-center gap-2 mb-2 pl-2"
            style={{ borderLeft: "2px solid #444" }}
          >
            <p className="text-xs font-bold" style={{ color: "#888" }}>
              Tags
            </p>
          </div>
          <p className="text-xs mb-1" style={{ color: "#555" }}>
            Product Interest
          </p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: `${GREEN}20`,
                  color: GREEN,
                  border: `1px solid ${GREEN}40`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs mb-1" style={{ color: "#555" }}>
            Preferred Language
          </p>
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              background: `${GREEN}20`,
              color: GREEN,
              border: `1px solid ${GREEN}40`,
            }}
          >
            English
          </span>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex gap-2"
        >
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold"
            style={{
              background: GREEN,
              color: "#0a1a0a",
              boxShadow: `0 0 12px ${GREEN}35`,
            }}
          >
            <Save className="w-3 h-3" /> Save
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg py-2 text-xs font-medium"
            style={{
              background: "#2a2a2a",
              color: "#aaa",
              border: "1px solid #383838",
            }}
          >
            Save and Add Another
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
