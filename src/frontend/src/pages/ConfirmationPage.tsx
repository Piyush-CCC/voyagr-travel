import { useTravelStore } from "@/store/travel-store";
import { useNavigate } from "@tanstack/react-router";
import {
  CheckCircle2,
  Download,
  Hotel,
  MapPin,
  Plane,
  Share2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ── Confetti particle ── */
const COLORS = [
  "#FF6B35",
  "#1B4FD8",
  "#22c55e",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
];

function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      rot: number;
      rotV: number;
      color: string;
      w: number;
      h: number;
    };

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: -10 - Math.random() * 80,
      vx: (Math.random() - 0.5) * 2.5,
      vy: 1.5 + Math.random() * 2.5,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: 6 + Math.random() * 8,
      h: 3 + Math.random() * 4,
    }));

    let raf: number;
    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotV;
        if (p.y > H + 20) {
          p.y = -10;
          p.x = Math.random() * W;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    // Stop after 4 s
    const timer = setTimeout(() => {
      running = false;
      cancelAnimationFrame(raf);
    }, 4000);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={390}
      height={220}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { bookings } = useTravelStore();
  const latestBooking = bookings[bookings.length - 1];

  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (latestBooking) {
      const t = setTimeout(() => setAnimating(true), 150);
      return () => clearTimeout(t);
    }
  }, [latestBooking]);

  if (!latestBooking) {
    return (
      <div
        className="flex flex-col items-center justify-center px-6 py-16 text-center"
        data-ocid="confirmation.no_booking_state"
      >
        <Plane className="w-10 h-10 text-muted-foreground mb-4" />
        <h2 className="text-lg font-display font-bold text-foreground mb-2">
          No active booking
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          No recent booking to confirm.
        </p>
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="mobile-button-primary"
          style={{ background: "#FF6B35" }}
          data-ocid="confirmation.go_home_button"
        >
          Start a New Search
        </button>
      </div>
    );
  }

  const nights = latestBooking.nights || 1;
  const totalPaidDisplay = `$${Math.round(latestBooking.totalPrice * 1.08).toLocaleString()}`;

  return (
    <div
      className="flex flex-col min-h-full bg-muted/20"
      data-ocid="confirmation.page"
    >
      {/* Blue header */}
      <div
        className="flex-shrink-0 px-4 pt-3 pb-4"
        style={{ background: "#1B4FD8" }}
        data-ocid="confirmation.header"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white"
            aria-label="Go home"
            data-ocid="confirmation.home_button"
          >
            <Plane className="w-4 h-4" />
          </button>
          <h1 className="text-white font-display font-bold text-lg">
            Booking Confirmed
          </h1>
        </div>
      </div>

      {/* Confetti + check hero */}
      <div
        className="relative h-52 flex flex-col items-center justify-center flex-shrink-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #1B4FD8 0%, #3b6ff0 60%, #f0f4ff 100%)",
        }}
        data-ocid="confirmation.success_hero"
      >
        <ConfettiCanvas />

        {/* Animated checkmark ring */}
        <div
          className={[
            "relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 z-10",
            animating ? "scale-100 opacity-100" : "scale-50 opacity-0",
          ].join(" ")}
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "3px solid rgba(255,255,255,0.5)",
          }}
          data-ocid="confirmation.success_icon"
        >
          <div
            className={[
              "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 delay-200",
              animating ? "scale-100" : "scale-0",
            ].join(" ")}
            style={{ background: "white" }}
          >
            <CheckCircle2
              className={[
                "w-9 h-9 transition-all duration-300 delay-400",
                animating ? "opacity-100 scale-100" : "opacity-0 scale-50",
              ].join(" ")}
              style={{ color: "#1B4FD8" }}
            />
          </div>
        </div>

        <h2
          className={[
            "text-white font-display font-bold text-xl mt-3 transition-all duration-500 delay-300 z-10",
            animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          Booking Confirmed! 🎉
        </h2>
        <p
          className={[
            "text-white/80 text-xs mt-1 transition-all duration-500 delay-400 z-10",
            animating ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          Get ready for an amazing journey!
        </p>
      </div>

      {/* Booking reference */}
      <div
        className="px-4 -mt-5 relative z-20"
        data-ocid="confirmation.reference_badge"
      >
        <div className="mobile-card p-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
              Booking Reference
            </p>
            <p
              className="font-mono font-black text-xl"
              style={{ color: "#1B4FD8" }}
              data-ocid="confirmation.code"
            >
              {latestBooking.confirmationCode}
            </p>
          </div>
          <div
            className="px-3 py-1.5 rounded-full text-white text-xs font-semibold"
            style={{ background: "#22c55e" }}
          >
            Confirmed ✓
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 pb-6 space-y-3">
        {/* Flight details */}
        {latestBooking.flight && (
          <div
            className="mobile-card p-4"
            data-ocid="confirmation.flight_details"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "#1B4FD8" }}
              >
                <Plane className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-sm text-foreground">
                {latestBooking.flight.airline}
              </span>
              <span
                className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "#dbeafe", color: "#1B4FD8" }}
              >
                {latestBooking.flight.cabinClass.replace("_", " ")}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">
                  {latestBooking.flight.segments[0].departure.airport.code}
                </p>
                <p className="text-xs text-muted-foreground">
                  {latestBooking.flight.segments[0].departure.time}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {latestBooking.flight.segments[0].departure.airport.city}
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center px-3">
                <p className="text-xs text-muted-foreground mb-1">
                  {latestBooking.flight.totalDuration}
                </p>
                <div className="w-full flex items-center gap-1">
                  <div className="flex-1 h-px bg-border" />
                  <Plane className="w-3 h-3" style={{ color: "#FF6B35" }} />
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {latestBooking.flight.stops === 0
                    ? "Direct"
                    : `${latestBooking.flight.stops} stop`}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">
                  {
                    latestBooking.flight.segments[
                      latestBooking.flight.segments.length - 1
                    ].arrival.airport.code
                  }
                </p>
                <p className="text-xs text-muted-foreground">
                  {
                    latestBooking.flight.segments[
                      latestBooking.flight.segments.length - 1
                    ].arrival.time
                  }
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {
                    latestBooking.flight.segments[
                      latestBooking.flight.segments.length - 1
                    ].arrival.airport.city
                  }
                </p>
              </div>
            </div>
            {latestBooking.passengers &&
              latestBooking.passengers.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Passengers
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {latestBooking.passengers
                      .map((p) => `${p.firstName} ${p.lastName}`)
                      .join(" · ")}
                  </p>
                </div>
              )}
          </div>
        )}

        {/* Hotel details */}
        {latestBooking.hotel && latestBooking.room && (
          <div
            className="mobile-card p-4"
            data-ocid="confirmation.hotel_details"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "#FF6B35" }}
              >
                <Hotel className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-sm text-foreground">
                {latestBooking.hotel.name}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
                  Room
                </p>
                <p className="font-medium text-foreground">
                  {latestBooking.room.name}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
                  Duration
                </p>
                <p className="font-medium text-foreground">{nights} nights</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
                  Check-in
                </p>
                <p className="font-medium text-foreground">
                  {latestBooking.checkIn}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
                  Check-out
                </p>
                <p className="font-medium text-foreground">
                  {latestBooking.checkOut}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border">
              <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                {latestBooking.hotel.address}
              </p>
            </div>
          </div>
        )}

        {/* Total paid */}
        <div className="mobile-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Paid</p>
              <p className="text-[10px] text-muted-foreground">
                (incl. taxes & fees)
              </p>
            </div>
            <span
              className="text-2xl font-black"
              style={{ color: "#FF6B35" }}
              data-ocid="confirmation.total_paid"
            >
              {totalPaidDisplay}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-2 pt-1" data-ocid="confirmation.actions">
          <button
            type="button"
            onClick={() => navigate({ to: "/trips" })}
            className="mobile-button-primary"
            style={{ background: "#1B4FD8" }}
            data-ocid="confirmation.view_trips_button"
          >
            View My Trips
          </button>
          <button
            type="button"
            className="mobile-button-primary"
            style={{ background: "#FF6B35" }}
            data-ocid="confirmation.download_eticket_button"
          >
            <Download className="w-4 h-4 mr-2" /> Download E-ticket
          </button>
          <button
            type="button"
            className="w-full px-4 py-3 border-2 rounded-lg font-semibold text-sm transition-smooth flex items-center justify-center gap-2"
            style={{
              borderColor: "#1B4FD8",
              color: "#1B4FD8",
              background: "transparent",
            }}
            data-ocid="confirmation.share_button"
          >
            <Share2 className="w-4 h-4" /> Share Itinerary
          </button>
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground transition-smooth"
            data-ocid="confirmation.book_another_button"
          >
            + Book Another Trip
          </button>
        </div>

        {/* Bon Voyage banner */}
        <div
          className="h-16 rounded-2xl flex items-center justify-center gap-3 text-white font-display font-bold text-base"
          style={{ background: "linear-gradient(90deg, #1B4FD8, #FF6B35)" }}
        >
          ✈️ Bon Voyage!
          <span className="text-white/70 font-normal text-sm">
            Your adventure awaits
          </span>
        </div>
      </div>
    </div>
  );
}
