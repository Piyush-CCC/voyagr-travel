import { Link, useRouterState } from "@tanstack/react-router";
import { Briefcase, Building2, Home, Plane, User } from "lucide-react";
import type { ReactNode } from "react";

const tabs = [
  { href: "/", label: "Home", icon: Home, ocid: "nav.home_tab" },
  { href: "/flights", label: "Flights", icon: Plane, ocid: "nav.flights_tab" },
  { href: "/hotels", label: "Hotels", icon: Building2, ocid: "nav.hotels_tab" },
  { href: "/trips", label: "Trips", icon: Briefcase, ocid: "nav.trips_tab" },
  { href: "/profile", label: "Profile", icon: User, ocid: "nav.profile_tab" },
];

function StatusBar() {
  return (
    <div className="iphone-status-bar" data-ocid="ui.status_bar">
      <span className="text-[13px] font-bold tracking-tight">9:41</span>
      <div className="flex-1" />
      <div className="flex items-center gap-[5px]">
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="0" y="7" width="3" height="5" rx="0.5" opacity="1" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="1" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.35" />
        </svg>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M8 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor" />
          <path
            d="M5.2 7.7a4 4 0 0 1 5.6 0"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M2.5 5a7.5 7.5 0 0 1 11 0"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
        <svg
          width="25"
          height="12"
          viewBox="0 0 25 12"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="0.5"
            y="0.5"
            width="21"
            height="11"
            rx="3.5"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
          <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
          <path
            d="M23 4v4a2 2 0 0 0 0-4z"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}

function BottomTabBar() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <div className="iphone-tabbar" data-ocid="nav.tab_bar">
      {tabs.map(({ href, label, icon: Icon, ocid }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            to={href}
            className={["iphone-tab", active ? "active" : ""].join(" ")}
            data-ocid={ocid}
            aria-label={label}
          >
            <Icon
              className="w-6 h-6 mb-0.5"
              style={{ color: active ? "#FF6B35" : undefined }}
            />
            <span
              className="iphone-tab-label"
              style={{ color: active ? "#FF6B35" : undefined }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen flex items-start justify-center py-10"
      style={{
        background:
          "linear-gradient(135deg, #e8eef8 0%, #dce6f5 40%, #d4e0f0 100%)",
      }}
    >
      {/* iPhone 15 Pro frame */}
      <div className="iphone-frame" data-ocid="ui.iphone_frame">
        {/* Side buttons (decorative) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4px",
            top: "118px",
            width: "4px",
            height: "30px",
            background: "#2a2a2c",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4px",
            top: "162px",
            width: "4px",
            height: "36px",
            background: "#2a2a2c",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4px",
            top: "212px",
            width: "4px",
            height: "36px",
            background: "#2a2a2c",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-4px",
            top: "180px",
            width: "4px",
            height: "70px",
            background: "#2a2a2c",
            borderRadius: "0 2px 2px 0",
          }}
        />

        {/* Inner screen */}
        <div className="iphone-screen">
          {/* Dynamic Island */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "11px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "126px",
              height: "37px",
              background: "#000",
              borderRadius: "20px",
              zIndex: 60,
              pointerEvents: "none",
            }}
          />
          <StatusBar />
          <div className="iphone-content" data-ocid="ui.scroll_area">
            {children}
          </div>
          <BottomTabBar />
        </div>
      </div>
    </div>
  );
}
