import {
  CheckCircle2,
  Clock,
  Key,
  Shield,
  Smartphone,
  Wifi,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const GREEN = "#25D366";

const features = [
  { icon: Shield, text: "Secure email & password login" },
  { icon: Wifi, text: "WhatsApp Business Account (WABA) setup" },
  { icon: Smartphone, text: "Meta Business ID configuration" },
  { icon: CheckCircle2, text: "Phone number verification" },
  { icon: Key, text: "Access token management (2-hour refresh)" },
];

const setupFields = [
  { label: "Phone Number", value: "+91 98765 43210" },
  { label: "WABA ID", value: "1234567890123456" },
  { label: "Meta Business ID", value: "9876543210987654" },
  { label: "Number ID", value: "5678901234567890" },
  { label: "Access Token", value: "EAABs...••••••", expiring: true },
];

function LoginFormMockup() {
  return (
    <motion.div
      key="login-form"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${GREEN}25`, border: `1.5px solid ${GREEN}50` }}
        >
          <span className="text-base">💬</span>
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: "#fff" }}>
            Welcome to Messagify
          </p>
          <p className="text-xs" style={{ color: "#666" }}>
            Sign in to continue
          </p>
        </div>
      </div>

      {/* Email field */}
      <div>
        <p className="text-xs mb-1" style={{ color: "#666" }}>
          Email address
        </p>
        <div
          className="rounded-lg px-3 py-2 flex items-center gap-2"
          style={{ background: "#2a2a2a", border: `1px solid ${GREEN}40` }}
        >
          <span className="text-sm" style={{ color: "#aaa" }}>
            admin@company.com
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="w-0.5 h-4 ml-auto"
            style={{ background: GREEN }}
          />
        </div>
      </div>

      {/* Password field */}
      <div>
        <p className="text-xs mb-1" style={{ color: "#666" }}>
          Password
        </p>
        <div
          className="rounded-lg px-3 py-2"
          style={{ background: "#2a2a2a", border: "1px solid #3a3a3a" }}
        >
          <span className="text-sm tracking-widest" style={{ color: "#aaa" }}>
            ••••••••
          </span>
        </div>
      </div>

      {/* Sign in button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        className="w-full rounded-lg py-2.5 text-sm font-bold mt-1"
        style={{
          background: GREEN,
          color: "#0a1a0a",
          boxShadow: `0 0 16px ${GREEN}40`,
        }}
      >
        Sign In
      </motion.button>

      <p className="text-center text-xs" style={{ color: GREEN }}>
        Forgot Password?
      </p>
    </motion.div>
  );
}

function WhatsAppSetupMockup() {
  return (
    <motion.div
      key="whatsapp-setup"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col gap-2"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full" style={{ background: GREEN }} />
        <p className="text-xs font-semibold" style={{ color: "#aaa" }}>
          Account Settings
        </p>
        <span style={{ color: "#555" }}>›</span>
        <p className="text-xs font-bold" style={{ color: GREEN }}>
          WhatsApp Setup
        </p>
      </div>

      {setupFields.map((field, i) => (
        <motion.div
          key={field.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
        >
          <p className="text-xs mb-1" style={{ color: "#555" }}>
            {field.label}
          </p>
          <div
            className="rounded-lg px-3 py-2 flex items-center justify-between gap-2"
            style={{ background: "#2a2a2a", border: "1px solid #383838" }}
          >
            <span className="text-xs font-mono" style={{ color: "#ddd" }}>
              {field.value}
            </span>
            {field.expiring && (
              <span
                className="text-xs px-1.5 py-0.5 rounded-md font-medium shrink-0"
                style={{
                  background: "#ef444425",
                  color: "#ef4444",
                  border: "1px solid #ef444440",
                }}
              >
                <Clock className="w-2.5 h-2.5 inline mr-0.5" />
                Expires 1h 47m
              </span>
            )}
          </div>
        </motion.div>
      ))}

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
        className="w-full rounded-lg py-2.5 text-xs font-bold mt-2"
        style={{
          background: GREEN,
          color: "#0a1a0a",
          boxShadow: `0 0 14px ${GREEN}35`,
        }}
      >
        Save Configuration
      </motion.button>
    </motion.div>
  );
}

export default function LoginSlide() {
  const [showSetup, setShowSetup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSetup(true), 4000);
    return () => clearTimeout(t);
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
            01 / 04
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight"
          >
            User Login &amp; WhatsApp Setup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-sm text-muted-foreground mt-1"
          >
            Get connected in minutes
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
        className="order-1 lg:order-2 w-full lg:w-[360px] rounded-2xl p-5 shrink-0"
        style={{
          background: "#1c1c1e",
          border: "1px solid #2a2a2a",
          borderTop: `2px solid ${GREEN}`,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          minHeight: "380px",
        }}
      >
        <AnimatePresence mode="wait">
          {showSetup ? <WhatsAppSetupMockup /> : <LoginFormMockup />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
