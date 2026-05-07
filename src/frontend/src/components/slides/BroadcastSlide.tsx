import {
  Calendar,
  CheckCircle2,
  CheckSquare,
  Clock,
  Radio,
  Square,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const GREEN = "#25D366";

const features = [
  { text: "Scheduled message delivery" },
  { text: "Pre-approved template selection" },
  { text: "Flexible audience targeting" },
  { text: "CSV bulk import supported" },
  { text: "Real-time delivery tracking" },
];

const audienceTypes = [
  { label: "Registered Contact", active: false },
  { label: "Contact", active: true },
  { label: "CSV Upload", active: false },
];

const contacts = [
  { name: "Priya Sharma", phone: "+91 98765...", checked: true },
  { name: "Rahul Gupta", phone: "+91 87654...", checked: true },
  { name: "Anita Patel", phone: "+91 76543...", checked: false },
];

export default function BroadcastSlide() {
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
            04 / 04
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight"
          >
            Creating Broadcasts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-sm text-muted-foreground mt-1"
          >
            Reach thousands instantly
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
          maxHeight: "520px",
        }}
      >
        {/* Tab bar */}
        <div
          className="flex gap-3 mb-4 border-b pb-2"
          style={{ borderColor: "#2a2a2a" }}
        >
          {["Contacts", "Templates", "Broadcast"].map((tab) => (
            <span
              key={tab}
              className="flex items-center gap-1.5 text-xs font-semibold pb-1.5"
              style={{
                color: tab === "Broadcast" ? GREEN : "#555",
                borderBottom:
                  tab === "Broadcast"
                    ? `2px solid ${GREEN}`
                    : "2px solid transparent",
              }}
            >
              {tab}
              {tab === "Broadcast" && (
                <span
                  className="text-[9px] px-1 rounded font-bold"
                  style={{ background: `${GREEN}30`, color: GREEN }}
                >
                  NEW
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {/* Broadcast Name */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Broadcast Name
            </p>
            <div
              className="rounded-lg px-3 py-2"
              style={{ background: "#2a2a2a", border: "1px solid #383838" }}
            >
              <span className="text-sm" style={{ color: "#ddd" }}>
                Summer Campaign 2024
              </span>
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Schedule
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div
                className="rounded-lg px-3 py-2 flex items-center gap-2"
                style={{ background: "#2a2a2a", border: "1px solid #383838" }}
              >
                <Calendar className="w-3 h-3" style={{ color: "#555" }} />
                <span className="text-xs" style={{ color: "#ccc" }}>
                  25 Jul 2024
                </span>
              </div>
              <div
                className="rounded-lg px-3 py-2 flex items-center gap-2"
                style={{ background: "#2a2a2a", border: "1px solid #383838" }}
              >
                <Clock className="w-3 h-3" style={{ color: "#555" }} />
                <span className="text-xs" style={{ color: "#ccc" }}>
                  10:00 AM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Template selector */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Template
            </p>
            <div
              className="rounded-lg px-3 py-2.5 flex items-center gap-3"
              style={{ background: "#1a2a1a", border: `1px solid ${GREEN}40` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${GREEN}20` }}
              >
                <Radio className="w-4 h-4" style={{ color: GREEN }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold" style={{ color: "#eee" }}>
                  Summer Sale 2024
                </p>
                <p className="text-[10px]" style={{ color: "#666" }}>
                  Marketing
                </p>
              </div>
              <CheckCircle2
                className="w-4 h-4 shrink-0"
                style={{ color: GREEN }}
              />
            </div>
          </motion.div>

          {/* Audience type */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
          >
            <p className="text-xs mb-1" style={{ color: "#555" }}>
              Audience Type
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {audienceTypes.map((a) => (
                <span
                  key={a.label}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: a.active ? `${GREEN}20` : "#2a2a2a",
                    color: a.active ? GREEN : "#666",
                    border: a.active
                      ? `1px solid ${GREEN}50`
                      : "1px solid #383838",
                    fontWeight: a.active ? 600 : 400,
                  }}
                >
                  {a.label}
                  {a.active && " ✓"}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact list */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs" style={{ color: "#555" }}>
                Select Contacts
              </p>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{ background: `${GREEN}20`, color: GREEN }}
              >
                3 contacts selected
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5"
                  style={{
                    background: c.checked ? "#1a2a1a" : "#232323",
                    border: c.checked
                      ? `1px solid ${GREEN}25`
                      : "1px solid #2a2a2a",
                  }}
                >
                  {c.checked ? (
                    <CheckSquare
                      className="w-4 h-4 shrink-0"
                      style={{ color: GREEN }}
                    />
                  ) : (
                    <Square
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#444" }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-medium truncate"
                      style={{ color: c.checked ? "#eee" : "#666" }}
                    >
                      {c.name}
                    </p>
                  </div>
                  <p className="text-[10px] shrink-0" style={{ color: "#555" }}>
                    {c.phone}
                  </p>
                  <Users
                    className="w-3 h-3 shrink-0"
                    style={{ color: c.checked ? GREEN : "#333" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full rounded-lg py-2.5 text-xs font-bold mt-1 relative overflow-hidden"
            style={{
              background: GREEN,
              color: "#0a1a0a",
              boxShadow: `0 0 20px ${GREEN}50`,
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-lg"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{ background: "rgba(255,255,255,0.4)" }}
            />
            Submit Broadcast
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
