import { mockBookings } from "@/data/mockBookings";
import { useTravelStore } from "@/store/travel-store";
import type { Booking } from "@/types/travel";
import {
  AlertTriangle,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Download,
  Hotel,
  MapPin,
  Plane,
  Share2,
  Star,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

const fmt = (d?: string) =>
  d
    ? new Date(d).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

function isUpcoming(b: Booking) {
  return b.status === "confirmed" || b.status === "pending";
}
function isPast(b: Booking) {
  return b.status === "completed" || b.status === "cancelled";
}

function statusConfig(status: Booking["status"]) {
  if (status === "confirmed")
    return {
      label: "Confirmed",
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-500",
    };
  if (status === "pending")
    return {
      label: "Pending",
      bg: "bg-orange-100",
      text: "text-orange-600",
      dot: "bg-orange-500",
    };
  if (status === "cancelled")
    return {
      label: "Cancelled",
      bg: "bg-red-100",
      text: "text-red-600",
      dot: "bg-red-500",
    };
  return {
    label: "Completed",
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-border",
  };
}

// ── Stat Mini Card ────────────────────────────────────────────────────────────
function MiniStat({
  value,
  label,
  accent,
}: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex-1 bg-card rounded-2xl px-3 py-3 text-center shadow-sm border border-border">
      <p
        className={[
          "text-lg font-bold font-display",
          accent ? "text-primary" : "text-secondary",
        ].join(" ")}
      >
        {value}
      </p>
      <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
        {label}
      </p>
    </div>
  );
}

// ── Cancel Modal ──────────────────────────────────────────────────────────────
function CancelModal({
  booking,
  onClose,
  onConfirm,
}: {
  booking: Booking;
  onClose: () => void;
  onConfirm: (id: string) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      data-ocid="trips.cancel_modal.dialog"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm w-full"
        onClick={onClose}
      />
      <div className="relative bg-card rounded-t-3xl w-full max-w-[390px] p-6 pb-8 animate-slide-in">
        <div className="w-12 h-1 bg-border rounded-full mx-auto mb-5" />
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <h2 className="text-base font-bold font-display text-foreground">
              Cancel Booking?
            </h2>
            <p className="text-xs text-muted-foreground font-mono">
              {booking.confirmationCode}
            </p>
          </div>
        </div>
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-5">
          <p className="text-xs font-semibold text-destructive mb-1">
            ⚠ Non-Refundable
          </p>
          <p className="text-xs text-muted-foreground">
            Cancelling forfeits{" "}
            <span className="font-semibold text-foreground">
              ${booking.totalPrice.toLocaleString()}
            </span>
            . This cannot be undone.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onConfirm(booking.id)}
            className="flex-1 py-3 bg-destructive text-destructive-foreground font-semibold rounded-xl text-sm"
            data-ocid="trips.cancel_modal.confirm_button"
          >
            Cancel Booking
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 border-2 border-border text-foreground font-semibold rounded-xl text-sm"
            data-ocid="trips.cancel_modal.cancel_button"
          >
            Keep It
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Expanded Flight/Hotel Details ─────────────────────────────────────────────
function ExpandedDetails({ booking }: { booking: Booking }) {
  return (
    <div className="mt-3 pt-3 border-t border-border space-y-3">
      {booking.type === "flight" && booking.flight && (
        <>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Flight Itinerary
          </p>
          {booking.flight.segments.map((seg) => (
            <div
              key={seg.flightNumber}
              className="flex items-center gap-3 bg-muted/40 rounded-xl p-3"
            >
              <div className="text-center min-w-0">
                <p className="font-bold text-sm text-foreground">
                  {seg.departure.time}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {seg.departure.airport.code}
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-0.5">
                <p className="text-[10px] text-muted-foreground">
                  {seg.duration}
                </p>
                <div className="w-full flex items-center gap-1">
                  <div className="flex-1 h-px bg-border" />
                  <Plane className="w-3 h-3 text-secondary" />
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-[10px] font-mono text-muted-foreground">
                  {seg.flightNumber}
                </p>
              </div>
              <div className="text-center min-w-0">
                <p className="font-bold text-sm text-foreground">
                  {seg.arrival.time}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {seg.arrival.airport.code}
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
            <span>✈ {booking.flight.airline}</span>
            <span>💺 {booking.flight.cabinClass.replace("_", " ")}</span>
            {booking.flight.mealIncluded && <span>🍽 Meal included</span>}
          </div>
        </>
      )}
      {booking.type === "hotel" && booking.hotel && (
        <>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Hotel Details
          </p>
          <div className="bg-muted/40 rounded-xl p-3 space-y-1.5">
            <p className="font-bold text-sm text-foreground">
              {booking.hotel.name}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {booking.hotel.address}
            </p>
            {booking.room && (
              <p className="text-xs text-muted-foreground">
                🛏 {booking.room.name} · {booking.room.bedType}
              </p>
            )}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={[
                    "w-3 h-3",
                    n <= (booking.hotel?.stars ?? 0)
                      ? "text-amber-400 fill-amber-400"
                      : "text-border",
                  ].join(" ")}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                {booking.hotel.rating}
              </span>
            </div>
          </div>
        </>
      )}
      {booking.passengers && booking.passengers.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {booking.passengers.map((p) => (
            <div
              key={p.id}
              className="bg-secondary/10 rounded-lg px-2.5 py-1.5"
            >
              <p className="text-xs font-medium text-secondary">
                {p.firstName} {p.lastName}
              </p>
              <p className="text-[10px] text-muted-foreground capitalize">
                {p.type}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Trip Card ─────────────────────────────────────────────────────────────────
function TripCard({
  booking,
  index,
  onCancel,
}: {
  booking: Booking;
  index: number;
  onCancel: (b: Booking) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const upcoming = isUpcoming(booking);
  const sc = statusConfig(booking.status);

  const destination =
    booking.type === "flight" && booking.flight
      ? `${booking.flight.segments[0].departure.airport.city} → ${booking.flight.segments[booking.flight.segments.length - 1].arrival.airport.city}`
      : booking.type === "hotel" && booking.hotel
        ? booking.hotel.city
        : booking.hotel
          ? booking.hotel.city
          : "Trip";

  const subtitle =
    booking.type === "flight" && booking.flight
      ? `${booking.flight.airline} · ${booking.flight.segments[0].flightNumber}`
      : booking.type === "hotel" && booking.hotel
        ? `${booking.hotel.stars}★ · ${booking.room?.name ?? "Deluxe Room"}`
        : "Flight + Hotel Bundle";

  const typeIcon =
    booking.type === "flight" ? (
      <Plane className="w-4 h-4 text-secondary" />
    ) : booking.type === "hotel" ? (
      <Hotel className="w-4 h-4 text-primary" />
    ) : (
      <Building2 className="w-4 h-4 text-muted-foreground" />
    );

  const typeBg =
    booking.type === "flight"
      ? "bg-secondary/10"
      : booking.type === "hotel"
        ? "bg-primary/10"
        : "bg-muted";

  return (
    <div
      className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
      data-ocid={`trips.booking_card.${index}`}
    >
      {/* Status accent bar */}
      <div
        className={[
          "h-0.5 w-full",
          booking.status === "confirmed"
            ? "bg-green-400"
            : booking.status === "pending"
              ? "bg-primary"
              : booking.status === "cancelled"
                ? "bg-destructive"
                : "bg-muted-foreground",
        ].join(" ")}
      />
      <div className="p-4">
        {/* Top row */}
        <div className="flex items-start gap-3">
          <div
            className={[
              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
              typeBg,
            ].join(" ")}
          >
            {typeIcon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-sm text-foreground truncate">
                {destination}
              </h3>
              <span
                className={[
                  "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full",
                  sc.bg,
                  sc.text,
                ].join(" ")}
              >
                <span
                  className={["w-1.5 h-1.5 rounded-full", sc.dot].join(" ")}
                />
                {sc.label}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
            <p className="text-[11px] font-mono text-muted-foreground">
              {booking.confirmationCode}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-base font-bold font-display text-primary">
              ${booking.totalPrice.toLocaleString()}
            </p>
            <p className="text-[11px] text-muted-foreground">total</p>
          </div>
        </div>

        {/* Date row */}
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-secondary" />
            {fmt(booking.checkIn)}
          </span>
          {booking.checkOut && (
            <span className="flex items-center gap-1">
              → {fmt(booking.checkOut)}
            </span>
          )}
          {booking.nights && (
            <span className="ml-auto flex items-center gap-1">
              <Users className="w-3 h-3" />
              {booking.nights}n
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-1 text-xs font-medium text-secondary"
            data-ocid={`trips.booking_card.view_details_button.${index}`}
            aria-expanded={expanded}
          >
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
            {expanded ? "Hide" : "Details"}
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium border border-border rounded-lg text-muted-foreground"
              data-ocid={`trips.booking_card.download_button.${index}`}
              aria-label="Download receipt"
            >
              <Download className="w-3 h-3" /> Receipt
            </button>
            <button
              type="button"
              className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium border border-border rounded-lg text-muted-foreground"
              data-ocid={`trips.booking_card.share_button.${index}`}
              aria-label="Share trip"
            >
              <Share2 className="w-3 h-3" /> Share
            </button>
            {upcoming && (
              <button
                type="button"
                onClick={() => onCancel(booking)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium border border-destructive/30 text-destructive rounded-lg"
                data-ocid={`trips.booking_card.cancel_button.${index}`}
              >
                <X className="w-3 h-3" /> Cancel
              </button>
            )}
          </div>
        </div>

        {expanded && <ExpandedDetails booking={booking} />}
      </div>
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────
function EmptyState({ tab }: { tab: "upcoming" | "past" }) {
  return (
    <div
      className="flex flex-col items-center py-16 px-4"
      data-ocid="trips.empty_state"
    >
      <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
        <Plane className="w-9 h-9 text-secondary/50" />
      </div>
      <h3 className="text-lg font-bold font-display text-foreground mb-1">
        No {tab === "upcoming" ? "Upcoming" : "Past"} Trips
      </h3>
      <p className="text-sm text-muted-foreground text-center">
        {tab === "upcoming"
          ? "Start planning your next adventure!"
          : "Your completed trips will appear here."}
      </p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function TripsPage() {
  const { bookings: storeBookings } = useTravelStore();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [cancelTarget, setCancelTarget] = useState<Booking | null>(null);
  const [cancelledIds, setCancelledIds] = useState<Set<string>>(new Set());

  const allBookings = useMemo(
    () => [
      ...mockBookings.map((b) =>
        cancelledIds.has(b.id) ? { ...b, status: "cancelled" as const } : b,
      ),
      ...storeBookings.map((b) =>
        cancelledIds.has(b.id) ? { ...b, status: "cancelled" as const } : b,
      ),
    ],
    [storeBookings, cancelledIds],
  );

  const upcoming = allBookings.filter(isUpcoming);
  const past = allBookings.filter(isPast);
  const filtered = activeTab === "upcoming" ? upcoming : past;

  const totalTrips = allBookings.filter((b) => b.status !== "cancelled").length;
  const totalSpent = allBookings
    .filter((b) => b.paymentStatus === "paid")
    .reduce((s, b) => s + b.totalPrice, 0);
  const loyaltyPts = 24580;

  function handleConfirmCancel(id: string) {
    setCancelledIds((prev) => new Set([...prev, id]));
    setCancelTarget(null);
  }

  return (
    <div className="bg-background min-h-screen pb-24" data-ocid="trips.page">
      {/* Blue Header */}
      <div
        className="bg-secondary px-4 pt-4 pb-6"
        data-ocid="trips.header_section"
      >
        <h1 className="text-xl font-display font-bold text-secondary-foreground">
          My Trips
        </h1>
        <p className="text-secondary-foreground/70 text-xs mt-0.5">
          Track your travel bookings
        </p>

        {/* Stats row */}
        <div className="flex gap-2 mt-4" data-ocid="trips.stats_section">
          <MiniStat value={String(totalTrips)} label="Total Trips" />
          <MiniStat
            value={`$${(totalSpent / 1000).toFixed(1)}k`}
            label="Total Spent"
            accent
          />
          <MiniStat
            value={`${(loyaltyPts / 1000).toFixed(1)}k`}
            label="Loyalty Pts"
          />
        </div>
      </div>

      {/* Tab pills */}
      <div className="px-4 py-4" data-ocid="trips.tabs">
        <div className="flex bg-muted rounded-2xl p-1 gap-1">
          {(["upcoming", "past"] as const).map((tab) => {
            const count = tab === "upcoming" ? upcoming.length : past.length;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-smooth",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground",
                ].join(" ")}
                data-ocid={`trips.${tab}_tab`}
              >
                {tab === "upcoming" ? "Upcoming" : "Past"}
                <span
                  className={[
                    "inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold",
                    activeTab === tab
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-border text-muted-foreground",
                  ].join(" ")}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trip list */}
      <div className="px-4 space-y-3" data-ocid="trips.bookings_list">
        {filtered.length === 0 ? (
          <EmptyState tab={activeTab} />
        ) : (
          filtered.map((booking, i) => (
            <TripCard
              key={booking.id}
              booking={booking}
              index={i + 1}
              onCancel={setCancelTarget}
            />
          ))
        )}
      </div>

      {cancelTarget && (
        <CancelModal
          booking={cancelTarget}
          onClose={() => setCancelTarget(null)}
          onConfirm={handleConfirmCancel}
        />
      )}
    </div>
  );
}
