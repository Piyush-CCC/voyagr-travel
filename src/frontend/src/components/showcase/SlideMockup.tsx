import type { MockupType } from "@/types/showcase";

interface SlideMockupProps {
  type: MockupType;
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-[200px] sm:w-[220px] shrink-0 rounded-[2rem] overflow-hidden shadow-2xl"
      style={{
        background: "#111",
        border: "3px solid #333",
        aspectRatio: "9/19",
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-xl z-10"
        style={{ background: "#111" }}
      />
      {/* Status bar */}
      <div className="pt-5 px-3 pb-1 flex items-center justify-between">
        <span className="text-[9px] font-bold" style={{ color: "#aaa" }}>
          9:41
        </span>
        <span className="text-[9px]" style={{ color: "#aaa" }}>
          ●●●
        </span>
      </div>
      <div className="px-3 pb-3 flex flex-col h-[calc(100%-32px)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function LoginMockup() {
  return (
    <PhoneFrame>
      <div className="flex flex-col items-center gap-2 pt-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "#25D36620",
            border: "1.5px solid #25D36650",
          }}
        >
          <span className="text-base">💬</span>
        </div>
        <p className="text-[11px] font-bold" style={{ color: "#fff" }}>
          Messagify
        </p>
        <p className="text-[8px]" style={{ color: "#888" }}>
          Sign in to continue
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div
          className="rounded-md px-2 py-1.5"
          style={{ background: "#222", border: "1px solid #333" }}
        >
          <p className="text-[7px]" style={{ color: "#666" }}>
            Email address
          </p>
          <p className="text-[9px]" style={{ color: "#ccc" }}>
            user@example.com
          </p>
        </div>
        <div
          className="rounded-md px-2 py-1.5"
          style={{ background: "#222", border: "1px solid #333" }}
        >
          <p className="text-[7px]" style={{ color: "#666" }}>
            Password
          </p>
          <p className="text-[9px]" style={{ color: "#ccc" }}>
            ••••••••
          </p>
        </div>
        <button
          type="button"
          className="w-full rounded-md py-2 text-[9px] font-bold"
          style={{ background: "#25D366", color: "#0a1a0a" }}
        >
          Login
        </button>
        <p
          className="text-center text-[7px] cursor-pointer"
          style={{ color: "#25D366" }}
        >
          Forgot your password?
        </p>
      </div>
      <div className="mt-3 pt-2" style={{ borderTop: "1px solid #2a2a2a" }}>
        <p className="text-[8px] font-bold mb-1.5" style={{ color: "#ccc" }}>
          WhatsApp Setup
        </p>
        {["Phone Number", "WABA ID", "Access Token"].map((field) => (
          <div
            key={field}
            className="rounded px-2 py-1 mb-1"
            style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
          >
            <p className="text-[7px]" style={{ color: "#666" }}>
              {field}
            </p>
            <p className="text-[8px]" style={{ color: "#888" }}>
              ••••••••••
            </p>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

function TemplateMockup() {
  return (
    <PhoneFrame>
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-[10px] font-bold" style={{ color: "#fff" }}>
          Templates
        </span>
      </div>
      <p className="text-[7px] mb-2" style={{ color: "#666" }}>
        Create and manage message templates
      </p>
      {[
        { name: "Promo Alert", cat: "Marketing", status: "Approved" },
        { name: "Order Update", cat: "Utility", status: "Pending" },
        { name: "OTP Verify", cat: "Auth", status: "Approved" },
      ].map((t) => (
        <div
          key={t.name}
          className="rounded-md p-2 mb-1.5"
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
        >
          <div className="flex items-start justify-between">
            <p className="text-[9px] font-bold" style={{ color: "#eee" }}>
              {t.name}
            </p>
            <span
              className="text-[6px] px-1 rounded"
              style={{
                background: t.status === "Approved" ? "#25D36630" : "#f59e0b30",
                color: t.status === "Approved" ? "#25D366" : "#f59e0b",
              }}
            >
              {t.status}
            </span>
          </div>
          <p className="text-[7px] mt-0.5" style={{ color: "#666" }}>
            {t.cat}
          </p>
        </div>
      ))}
      <button
        type="button"
        className="w-full rounded-md py-1.5 mt-1 text-[8px] font-bold"
        style={{ background: "#25D366", color: "#0a1a0a" }}
      >
        + Create Template
      </button>
    </PhoneFrame>
  );
}

function ContactsMockup() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold" style={{ color: "#fff" }}>
          Contacts
        </span>
        <span
          className="text-[7px] px-1.5 py-0.5 rounded"
          style={{ background: "#25D36620", color: "#25D366" }}
        >
          +Add
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {[
          { name: "Rahul Sharma", phone: "+91 98765 43210", tag: "Hot" },
          { name: "Priya Nair", phone: "+91 87654 32109", tag: "Warm" },
          { name: "Mohan Gupta", phone: "+91 76543 21098", tag: "Cold" },
          { name: "Seema Patel", phone: "+91 65432 10987", tag: "Hot" },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 rounded-md p-1.5"
            style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0"
              style={{ background: "#25D36625", color: "#25D366" }}
            >
              {c.name[0]}
            </div>
            <div className="min-w-0">
              <p
                className="text-[8px] font-bold truncate"
                style={{ color: "#ddd" }}
              >
                {c.name}
              </p>
              <p className="text-[7px]" style={{ color: "#666" }}>
                {c.phone}
              </p>
            </div>
            <span
              className="ml-auto text-[6px] px-1 rounded shrink-0"
              style={{
                background:
                  c.tag === "Hot"
                    ? "#ef444430"
                    : c.tag === "Warm"
                      ? "#f59e0b30"
                      : "#3b82f630",
                color:
                  c.tag === "Hot"
                    ? "#ef4444"
                    : c.tag === "Warm"
                      ? "#f59e0b"
                      : "#3b82f6",
              }}
            >
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

function BroadcastMockup() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold" style={{ color: "#fff" }}>
          Broadcast
        </span>
      </div>
      <div
        className="rounded-md p-2 mb-2"
        style={{ background: "#1a2a1a", border: "1px solid #25D36630" }}
      >
        <p className="text-[7px] font-bold mb-1" style={{ color: "#25D366" }}>
          New Broadcast
        </p>
        <div
          className="rounded px-1.5 py-1 mb-1"
          style={{ background: "#111", border: "1px solid #2a2a2a" }}
        >
          <p className="text-[7px]" style={{ color: "#666" }}>
            Name
          </p>
          <p className="text-[8px]" style={{ color: "#ccc" }}>
            Summer Sale 2025
          </p>
        </div>
        <div
          className="rounded px-1.5 py-1 mb-1"
          style={{ background: "#111", border: "1px solid #2a2a2a" }}
        >
          <p className="text-[7px]" style={{ color: "#666" }}>
            Template
          </p>
          <p className="text-[8px]" style={{ color: "#ccc" }}>
            Promo Alert ✓
          </p>
        </div>
        <div
          className="rounded px-1.5 py-1"
          style={{ background: "#111", border: "1px solid #2a2a2a" }}
        >
          <p className="text-[7px]" style={{ color: "#666" }}>
            Audience
          </p>
          <p className="text-[8px]" style={{ color: "#ccc" }}>
            247 contacts selected
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {["Rahul Sharma", "Priya Nair", "Mohan Gupta"].map((n) => (
          <div
            key={n}
            className="flex items-center gap-1.5 rounded px-1.5 py-1"
            style={{ background: "#1a1a1a" }}
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold"
              style={{ background: "#25D36625", color: "#25D366" }}
            >
              {n[0]}
            </div>
            <p className="text-[7px]" style={{ color: "#ccc" }}>
              {n}
            </p>
            <div
              className="ml-auto w-2.5 h-2.5 rounded-sm"
              style={{ background: "#25D366", border: "none" }}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-full rounded-md py-1.5 mt-2 text-[8px] font-bold"
        style={{ background: "#25D366", color: "#0a1a0a" }}
      >
        Send Broadcast
      </button>
    </PhoneFrame>
  );
}

export function SlideMockup({ type }: SlideMockupProps) {
  switch (type) {
    case "login":
      return <LoginMockup />;
    case "template":
      return <TemplateMockup />;
    case "contacts":
      return <ContactsMockup />;
    case "broadcast":
      return <BroadcastMockup />;
  }
}
