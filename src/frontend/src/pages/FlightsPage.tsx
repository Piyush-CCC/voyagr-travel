import { useTravelStore } from "@/store/travel-store";
import type { FlightFilters } from "@/store/travel-store";
import type { Flight } from "@/types/travel";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  BaggageClaim,
  ChevronDown,
  ChevronUp,
  Clock,
  Filter,
  Plane,
  RotateCcw,
  ShieldCheck,
  Utensils,
  Wifi,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── NYC → LAX Mock Flights ─────────────────────────────────────────────────

const NYC_LAX_FLIGHTS: Flight[] = [
  {
    id: "nla-001",
    airline: "Delta",
    airlineCode: "DL",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "JFK",
            city: "New York",
            country: "USA",
            name: "John F. Kennedy",
          },
          time: "06:00",
          terminal: "T4",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "09:10",
          terminal: "T2",
        },
        duration: "5h 10m",
        flightNumber: "DL407",
        aircraft: "Boeing 737-900",
      },
    ],
    stops: 0,
    totalDuration: "5h 10m",
    price: 129,
    originalPrice: 189,
    cabinClass: "economy",
    seatsLeft: 8,
    refundable: false,
    mealIncluded: false,
    rating: 4.3,
    baggage: { carry: "1 bag", checked: "1 bag ($30)" },
    amenities: ["Wi-Fi ($8)", "USB Charging"],
  },
  {
    id: "nla-002",
    airline: "JetBlue",
    airlineCode: "B6",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "JFK",
            city: "New York",
            country: "USA",
            name: "John F. Kennedy",
          },
          time: "08:15",
          terminal: "T5",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "11:35",
          terminal: "T3",
        },
        duration: "5h 20m",
        flightNumber: "B6415",
        aircraft: "Airbus A321neo",
      },
    ],
    stops: 0,
    totalDuration: "5h 20m",
    price: 149,
    cabinClass: "economy",
    seatsLeft: 12,
    refundable: false,
    mealIncluded: true,
    rating: 4.5,
    baggage: { carry: "1 bag", checked: "1 bag ($35)" },
    amenities: ["Free Wi-Fi", "Live TV", "Snacks"],
  },
  {
    id: "nla-003",
    airline: "American",
    airlineCode: "AA",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "JFK",
            city: "New York",
            country: "USA",
            name: "John F. Kennedy",
          },
          time: "10:00",
          terminal: "T8",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "16:45",
          terminal: "T4",
        },
        duration: "8h 45m",
        flightNumber: "AA1",
        aircraft: "Boeing 777-200",
      },
    ],
    stops: 1,
    stopCities: ["DFW"],
    totalDuration: "8h 45m",
    price: 89,
    cabinClass: "economy",
    seatsLeft: 3,
    refundable: false,
    mealIncluded: false,
    rating: 3.9,
    baggage: { carry: "1 bag", checked: "1 bag ($35)" },
    amenities: ["Wi-Fi ($10)", "USB Charging"],
  },
  {
    id: "nla-004",
    airline: "United",
    airlineCode: "UA",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "EWR",
            city: "Newark",
            country: "USA",
            name: "Newark Liberty Intl",
          },
          time: "12:30",
          terminal: "C",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "15:55",
          terminal: "T7",
        },
        duration: "5h 25m",
        flightNumber: "UA323",
        aircraft: "Airbus A320",
      },
    ],
    stops: 0,
    totalDuration: "5h 25m",
    price: 179,
    originalPrice: 220,
    cabinClass: "economy",
    seatsLeft: 15,
    refundable: true,
    mealIncluded: false,
    rating: 4.1,
    baggage: { carry: "1 bag", checked: "1 bag ($35)" },
    amenities: ["Wi-Fi", "USB Charging"],
  },
  {
    id: "nla-005",
    airline: "Southwest",
    airlineCode: "WN",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "LGA",
            city: "New York",
            country: "USA",
            name: "LaGuardia Airport",
          },
          time: "07:00",
          terminal: "B",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "13:30",
          terminal: "T1",
        },
        duration: "7h 30m",
        flightNumber: "WN3781",
        aircraft: "Boeing 737 MAX 8",
      },
    ],
    stops: 1,
    stopCities: ["PHX"],
    totalDuration: "7h 30m",
    price: 99,
    cabinClass: "economy",
    seatsLeft: 20,
    refundable: true,
    mealIncluded: false,
    rating: 4.2,
    baggage: { carry: "Free", checked: "2 bags FREE" },
    amenities: ["Free 2 Bags", "No Change Fees"],
  },
  {
    id: "nla-006",
    airline: "Delta",
    airlineCode: "DL",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "JFK",
            city: "New York",
            country: "USA",
            name: "John F. Kennedy",
          },
          time: "15:45",
          terminal: "T4",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "18:55",
          terminal: "T2",
        },
        duration: "5h 10m",
        flightNumber: "DL429",
        aircraft: "Airbus A220-300",
      },
    ],
    stops: 0,
    totalDuration: "5h 10m",
    price: 199,
    cabinClass: "economy",
    seatsLeft: 6,
    refundable: false,
    mealIncluded: false,
    rating: 4.4,
    baggage: { carry: "1 bag", checked: "1 bag ($30)" },
    amenities: ["Wi-Fi", "Seatback Screen", "USB Charging"],
  },
  {
    id: "nla-007",
    airline: "American",
    airlineCode: "AA",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "JFK",
            city: "New York",
            country: "USA",
            name: "John F. Kennedy",
          },
          time: "19:00",
          terminal: "T8",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "22:25",
          terminal: "T4",
        },
        duration: "5h 25m",
        flightNumber: "AA187",
        aircraft: "Boeing 757-200",
      },
    ],
    stops: 0,
    totalDuration: "5h 25m",
    price: 219,
    originalPrice: 299,
    cabinClass: "economy",
    seatsLeft: 9,
    refundable: true,
    mealIncluded: true,
    rating: 4.0,
    baggage: { carry: "1 bag", checked: "1 bag ($35)" },
    amenities: ["Wi-Fi", "Meal", "Seatback Screen"],
  },
  {
    id: "nla-008",
    airline: "United",
    airlineCode: "UA",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "JFK",
            city: "New York",
            country: "USA",
            name: "John F. Kennedy",
          },
          time: "14:00",
          terminal: "T7",
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl",
          },
          time: "21:30",
          terminal: "T7",
        },
        duration: "7h 30m",
        flightNumber: "UA567",
        aircraft: "Boeing 737-800",
      },
    ],
    stops: 1,
    stopCities: ["ORD"],
    totalDuration: "7h 30m",
    price: 449,
    cabinClass: "business",
    seatsLeft: 2,
    refundable: true,
    mealIncluded: true,
    rating: 4.6,
    baggage: { carry: "2 bags", checked: "2 bags FREE" },
    amenities: ["Flat Bed", "Priority Boarding", "Lounge Access", "Wi-Fi"],
  },
];

// ─── Airline Brand Colors ────────────────────────────────────────────────────

const AIRLINE_BG: Record<string, string> = {
  DL: "#003087", // Delta blue
  B6: "#003876", // JetBlue dark blue
  AA: "#0078D2", // American blue
  UA: "#005DAA", // United blue
  WN: "#304CB2", // Southwest blue
};

const AIRLINE_ACCENT: Record<string, string> = {
  DL: "#E51937",
  B6: "#00B2E3",
  AA: "#C8102E",
  UA: "#0068AF",
  WN: "#F9A825",
};

// ─── Filter Chips ──────────────────────────────────────────────────────────

type ChipFilter =
  | "all"
  | "cheapest"
  | "fastest"
  | "nonstop"
  | "morning"
  | "evening";

const CHIPS: { id: ChipFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cheapest", label: "Cheapest" },
  { id: "fastest", label: "Fastest" },
  { id: "nonstop", label: "Nonstop" },
  { id: "morning", label: "Morning" },
  { id: "evening", label: "Evening" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseMinutes(dur: string): number {
  const m = dur.match(/(\d+)h\s*(\d+)?m?/);
  if (!m) return 0;
  return (
    Number.parseInt(m[1], 10) * 60 + (m[2] ? Number.parseInt(m[2], 10) : 0)
  );
}

function parseHour(t: string): number {
  return Number.parseInt(t.split(":")[0], 10);
}

function stopLabel(s: number): string {
  if (s === 0) return "Nonstop";
  if (s === 1) return "1 Stop";
  return `${s} Stops`;
}

// ─── Flight Card ──────────────────────────────────────────────────────────────

function FlightCard({
  flight,
  index,
  onSelect,
}: { flight: Flight; index: number; onSelect: (f: Flight) => void }) {
  const [expanded, setExpanded] = useState(false);
  const seg = flight.segments[0];
  const lastSeg = flight.segments[flight.segments.length - 1];
  const bgColor = AIRLINE_BG[flight.airlineCode] ?? "#1B4FD8";
  const accentColor = AIRLINE_ACCENT[flight.airlineCode] ?? "#FF6B35";
  const initial = flight.airline.charAt(0);

  const stopBadgeClass =
    flight.stops === 0
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : flight.stops === 1
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-red-50 text-red-600 border-red-200";

  return (
    <div
      className="bg-card border border-border rounded-2xl overflow-hidden"
      data-ocid={`flights.flight_card.${index}`}
    >
      <div className="p-4">
        {/* Airline row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{ backgroundColor: bgColor }}
            >
              {initial}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {flight.airline}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {seg.flightNumber}
              </p>
            </div>
          </div>
          {/* Seats urgency */}
          {flight.seatsLeft <= 5 && (
            <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full px-2 py-0.5">
              {flight.seatsLeft} left
            </span>
          )}
        </div>

        {/* Route row */}
        <div className="flex items-center gap-2 mb-3">
          {/* Departure */}
          <div className="text-center min-w-[52px]">
            <p className="text-lg font-bold text-foreground tabular-nums leading-tight">
              {seg.departure.time}
            </p>
            <p className="text-xs font-semibold" style={{ color: bgColor }}>
              {seg.departure.airport.code}
            </p>
          </div>

          {/* Duration line */}
          <div className="flex-1 flex flex-col items-center">
            <p className="text-[10px] text-muted-foreground mb-1">
              {flight.totalDuration}
            </p>
            <div className="relative w-full flex items-center">
              <div className="flex-1 h-px bg-border" />
              <Plane
                className="w-3 h-3 mx-1 shrink-0"
                style={{ color: accentColor }}
              />
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="mt-1">
              <span
                className={[
                  "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border",
                  stopBadgeClass,
                ].join(" ")}
              >
                {stopLabel(flight.stops)}
              </span>
            </div>
            {flight.stopCities && flight.stopCities.length > 0 && (
              <p className="text-[9px] text-muted-foreground mt-0.5">
                via {flight.stopCities.join(", ")}
              </p>
            )}
          </div>

          {/* Arrival */}
          <div className="text-center min-w-[52px]">
            <p className="text-lg font-bold text-foreground tabular-nums leading-tight">
              {lastSeg.arrival.time}
            </p>
            <p className="text-xs font-semibold" style={{ color: bgColor }}>
              {lastSeg.arrival.airport.code}
            </p>
          </div>
        </div>

        {/* Price + Select row */}
        <div className="flex items-center justify-between">
          <div>
            {flight.originalPrice && (
              <p className="text-[11px] text-muted-foreground line-through">
                ${flight.originalPrice}
              </p>
            )}
            <p
              className="text-xl font-bold leading-tight"
              style={{ color: "#FF6B35" }}
            >
              ${flight.price}
            </p>
            <p className="text-[10px] text-muted-foreground">per person</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Amenity icons */}
            <div className="flex items-center gap-1.5 mr-1">
              {flight.amenities.some(
                (a) =>
                  a.toLowerCase().includes("wi-fi") ||
                  a.toLowerCase().includes("wifi"),
              ) && <Wifi className="w-3.5 h-3.5 text-muted-foreground" />}
              {flight.amenities.some(
                (a) =>
                  a.toLowerCase().includes("meal") ||
                  a.toLowerCase().includes("snack"),
              ) && <Utensils className="w-3.5 h-3.5 text-muted-foreground" />}
              {flight.refundable && (
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              )}
            </div>
            <button
              type="button"
              onClick={() => onSelect(flight)}
              className="text-sm font-bold text-white px-5 py-2 rounded-xl transition-opacity active:opacity-80"
              style={{ backgroundColor: "#FF6B35" }}
              data-ocid={`flights.select_button.${index}`}
            >
              Select
            </button>
          </div>
        </div>

        {/* Expand toggle */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 mt-3 pt-3 border-t border-border w-full text-xs text-muted-foreground"
          data-ocid={`flights.expand_button.${index}`}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Hide details
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> View details ·{" "}
              {flight.cabinClass.replace("_", " ")}
            </>
          )}
        </button>

        {/* Expanded details */}
        {expanded && (
          <div className="mt-3 space-y-3">
            <div className="bg-muted/40 rounded-xl p-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-[10px] text-muted-foreground">From</p>
                  <p className="text-xs font-bold text-foreground">
                    {seg.departure.airport.code}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {seg.departure.airport.city}
                  </p>
                  {seg.departure.terminal && (
                    <p
                      className="text-[10px] font-medium"
                      style={{ color: "#1B4FD8" }}
                    >
                      T{seg.departure.terminal}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Clock className="w-3 h-3 text-muted-foreground mb-0.5" />
                  <p className="text-[10px] text-muted-foreground">
                    {seg.duration}
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    {seg.aircraft}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">To</p>
                  <p className="text-xs font-bold text-foreground">
                    {lastSeg.arrival.airport.code}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {lastSeg.arrival.airport.city}
                  </p>
                  {lastSeg.arrival.terminal && (
                    <p
                      className="text-[10px] font-medium"
                      style={{ color: "#1B4FD8" }}
                    >
                      T{lastSeg.arrival.terminal}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Baggage */}
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 bg-muted/40 rounded-xl p-2.5">
                <BaggageClaim
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#1B4FD8" }}
                />
                <div>
                  <p className="text-[10px] text-muted-foreground">Carry-on</p>
                  <p className="text-xs font-semibold text-foreground">
                    {flight.baggage.carry}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-2 bg-muted/40 rounded-xl p-2.5">
                <BaggageClaim
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#FF6B35" }}
                />
                <div>
                  <p className="text-[10px] text-muted-foreground">Checked</p>
                  <p className="text-xs font-semibold text-foreground">
                    {flight.baggage.checked}
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1.5">
              {flight.amenities.map((a) => (
                <span
                  key={a}
                  className="text-[10px] bg-muted/50 text-muted-foreground rounded-full px-2.5 py-1 border border-border"
                >
                  {a}
                </span>
              ))}
              {flight.refundable && (
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2.5 py-1">
                  Refundable
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Bottom Sheet Filters ────────────────────────────────────────────────────

interface BottomSheetProps {
  priceMax: number;
  onPriceMax: (v: number) => void;
  selectedStops: number[];
  onToggleStop: (s: number) => void;
  selectedAirlines: string[];
  onToggleAirline: (a: string) => void;
  depTimeSlots: string[];
  onToggleDepTime: (id: string) => void;
  onApply: () => void;
  onReset: () => void;
}

const ALL_NYC_LAX_AIRLINES = [
  "Delta",
  "JetBlue",
  "American",
  "United",
  "Southwest",
];

function FiltersBottomSheet(props: BottomSheetProps) {
  const {
    priceMax,
    onPriceMax,
    selectedStops,
    onToggleStop,
    selectedAirlines,
    onToggleAirline,
    depTimeSlots,
    onToggleDepTime,
    onApply,
    onReset,
  } = props;

  return (
    <div className="fixed inset-0 z-50" data-ocid="flights.filter_sheet">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close filters"
        className="absolute inset-0 bg-foreground/40 w-full"
        onClick={onApply}
      />
      {/* Sheet */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-card rounded-t-3xl shadow-2xl overflow-hidden">
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-border rounded-full" />
        </div>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <h2 className="font-bold text-base text-foreground">
            Filter Flights
          </h2>
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-semibold"
            style={{ color: "#FF6B35" }}
            data-ocid="flights.reset_filters_button"
          >
            Reset all
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[70vh] px-5 py-4 space-y-5">
          {/* Price range */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-foreground">Max Price</p>
              <p className="text-sm font-bold" style={{ color: "#FF6B35" }}>
                ${priceMax}
              </p>
            </div>
            <input
              type="range"
              min={89}
              max={450}
              step={10}
              value={priceMax}
              onChange={(e) => onPriceMax(Number(e.target.value))}
              className="w-full h-1.5 rounded-full cursor-pointer accent-orange-500"
              data-ocid="flights.price_slider"
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-muted-foreground">$89</span>
              <span className="text-[10px] text-muted-foreground">$450</span>
            </div>
          </div>

          {/* Stops */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Stops</p>
            <div className="flex gap-2">
              {([0, 1, 2] as const).map((s) => {
                const active = selectedStops.includes(s);
                const label =
                  s === 0 ? "Nonstop" : s === 1 ? "1 Stop" : "2+ Stops";
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => onToggleStop(s)}
                    className={[
                      "flex-1 py-2 rounded-xl border text-xs font-semibold transition-colors",
                      active
                        ? "text-white border-transparent"
                        : "text-foreground border-border bg-background",
                    ].join(" ")}
                    style={
                      active
                        ? { backgroundColor: "#1B4FD8", borderColor: "#1B4FD8" }
                        : {}
                    }
                    data-ocid={`flights.stop_filter.${s}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Airlines */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">
              Airlines
            </p>
            <div className="space-y-2.5">
              {ALL_NYC_LAX_AIRLINES.map((airline) => {
                const checked = selectedAirlines.includes(airline);
                return (
                  <label
                    key={airline}
                    htmlFor={`airline-filter-${airline.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        id={`airline-filter-${airline.toLowerCase().replace(/\s+/g, "-")}`}
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleAirline(airline)}
                        className="w-4 h-4 rounded accent-orange-500"
                        data-ocid={`flights.airline_filter.${airline.toLowerCase().replace(/\s+/g, "_")}`}
                      />
                      <span className="text-sm text-foreground">{airline}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Departure time */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">
              Departure Time
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "morning", label: "Morning", range: "6am–12pm" },
                { id: "afternoon", label: "Afternoon", range: "12pm–6pm" },
                { id: "evening", label: "Evening", range: "6pm–12am" },
              ].map(({ id, label, range }) => {
                const active = depTimeSlots.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onToggleDepTime(id)}
                    className={[
                      "flex flex-col items-center py-2.5 rounded-xl border text-center transition-colors",
                      active
                        ? "text-white border-transparent"
                        : "text-foreground border-border bg-background",
                    ].join(" ")}
                    style={
                      active
                        ? { backgroundColor: "#1B4FD8", borderColor: "#1B4FD8" }
                        : {}
                    }
                    data-ocid={`flights.dep_time.${id}`}
                  >
                    <span className="text-xs font-semibold">{label}</span>
                    <span className="text-[10px] opacity-70 mt-0.5">
                      {range}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Apply button */}
        <div className="px-5 py-4 border-t border-border">
          <button
            type="button"
            onClick={onApply}
            className="w-full py-3.5 rounded-2xl text-white font-bold text-sm"
            style={{ backgroundColor: "#FF6B35" }}
            data-ocid="flights.apply_filters_button"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Sort Dropdown ────────────────────────────────────────────────────────────

const SORT_OPTS: { value: FlightFilters["sortBy"]; label: string }[] = [
  { value: "price", label: "Price" },
  { value: "duration", label: "Duration" },
  { value: "departure", label: "Departure" },
  { value: "rating", label: "Rating" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FlightsPage() {
  const navigate = useNavigate();
  const { searchParams, setSelectedFlight, filterState, setFlightFilters } =
    useTravelStore();
  const { flight } = searchParams;

  // Chip + local filter state
  const [activeChip, setActiveChip] = useState<ChipFilter>("all");
  const [priceMax, setPriceMax] = useState(450);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [depTimeSlots, setDepTimeSlots] = useState<string[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const toggleStop = (s: number) =>
    setSelectedStops((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  const toggleAirline = (a: string) =>
    setSelectedAirlines((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
    );
  const toggleDepTime = (id: string) =>
    setDepTimeSlots((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const resetFilters = () => {
    setPriceMax(450);
    setSelectedStops([]);
    setSelectedAirlines([]);
    setDepTimeSlots([]);
    setActiveChip("all");
  };

  // Apply chip to filters
  const handleChip = (chip: ChipFilter) => {
    setActiveChip(chip);
    if (chip === "all") {
      setSelectedStops([]);
      setDepTimeSlots([]);
      setFlightFilters({ sortBy: "price" });
    } else if (chip === "cheapest") {
      setFlightFilters({ sortBy: "price" });
    } else if (chip === "fastest") {
      setFlightFilters({ sortBy: "duration" });
    } else if (chip === "nonstop") {
      setSelectedStops([0]);
    } else if (chip === "morning") {
      setDepTimeSlots(["morning"]);
    } else if (chip === "evening") {
      setDepTimeSlots(["evening"]);
    }
  };

  // Filtered + sorted
  const filtered = useMemo(() => {
    let res = NYC_LAX_FLIGHTS.filter((f) => {
      if (f.price > priceMax) return false;
      if (
        selectedStops.length > 0 &&
        !selectedStops.includes(f.stops >= 2 ? 2 : f.stops)
      )
        return false;
      if (selectedAirlines.length > 0 && !selectedAirlines.includes(f.airline))
        return false;
      if (depTimeSlots.length > 0) {
        const hour = parseHour(f.segments[0].departure.time);
        const match = depTimeSlots.some((id) => {
          if (id === "morning") return hour >= 6 && hour < 12;
          if (id === "afternoon") return hour >= 12 && hour < 18;
          if (id === "evening") return hour >= 18 && hour < 24;
          return false;
        });
        if (!match) return false;
      }
      return true;
    });

    if (filterState.sortBy === "price")
      res = [...res].sort((a, b) => a.price - b.price);
    else if (filterState.sortBy === "duration")
      res = [...res].sort(
        (a, b) => parseMinutes(a.totalDuration) - parseMinutes(b.totalDuration),
      );
    else if (filterState.sortBy === "departure")
      res = [...res].sort(
        (a, b) =>
          parseHour(a.segments[0].departure.time) -
          parseHour(b.segments[0].departure.time),
      );
    else if (filterState.sortBy === "rating")
      res = [...res].sort((a, b) => b.rating - a.rating);

    return res;
  }, [
    priceMax,
    selectedStops,
    selectedAirlines,
    depTimeSlots,
    filterState.sortBy,
  ]);

  const handleSelect = (f: Flight) => {
    setSelectedFlight(f);
    navigate({ to: "/booking" });
  };

  const activeFilterCount =
    selectedStops.length +
    selectedAirlines.length +
    depTimeSlots.length +
    (priceMax < 450 ? 1 : 0);

  const currentSortLabel =
    SORT_OPTS.find((o) => o.value === filterState.sortBy)?.label ?? "Price";

  // Build route label from store or default NYC → LAX
  const originCode = flight.origin.includes("(")
    ? flight.origin.split("(")[1].replace(")", "")
    : "NYC";
  const destCode = flight.destination.includes("(")
    ? flight.destination.split("(")[1].replace(")", "")
    : "LAX";
  const originCity = flight.origin.split("(")[0].trim() || "New York";
  const _destCity = flight.destination.split("(")[0].trim() || "Los Angeles";

  return (
    <div className="bg-background min-h-screen">
      {/* ── Blue Sticky Header ── */}
      <div
        className="sticky top-0 z-30 shadow-md"
        style={{ backgroundColor: "#1B4FD8" }}
        data-ocid="flights.header"
      >
        <div className="px-4 pt-3 pb-3">
          {/* Top row: back + route + sort */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/15 shrink-0"
              aria-label="Go back to Home"
              data-ocid="flights.back_button"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-base">
                  {originCode}
                </span>
                <span className="text-white/70 text-sm">→</span>
                <span className="text-white font-bold text-base">
                  {destCode}
                </span>
              </div>
              <p className="text-white/70 text-[11px] truncate">
                {originCity} · {flight.departureDate} ·{" "}
                {flight.passengers.adults} adult
                {flight.passengers.adults !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Sort dropdown trigger */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-1 bg-white/15 text-white text-xs font-semibold rounded-full px-3 py-1.5"
                data-ocid="flights.sort_button"
              >
                {currentSortLabel} <ChevronDown className="w-3 h-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50 w-36">
                  {SORT_OPTS.map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setFlightFilters({ sortBy: value });
                        setSortOpen(false);
                      }}
                      className={[
                        "w-full text-left px-4 py-2.5 text-sm",
                        filterState.sortBy === value
                          ? "font-bold text-foreground bg-muted"
                          : "text-foreground hover:bg-muted",
                      ].join(" ")}
                      data-ocid={`flights.sort_option.${value}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chip filter row */}
          <div
            className="flex items-center gap-2 mt-2.5 overflow-x-auto scrollbar-hide pb-0.5"
            data-ocid="flights.chip_filters"
          >
            {CHIPS.map(({ id, label }) => {
              const active = activeChip === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleChip(id)}
                  className={[
                    "shrink-0 text-xs font-semibold rounded-full px-3.5 py-1.5 transition-colors",
                    active
                      ? "text-white border-transparent"
                      : "text-white/80 border border-white/30 bg-white/10",
                  ].join(" ")}
                  style={active ? { backgroundColor: "#FF6B35" } : {}}
                  data-ocid={`flights.chip.${id}`}
                >
                  {label}
                </button>
              );
            })}

            {/* Filters chip */}
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="shrink-0 flex items-center gap-1 text-xs font-semibold rounded-full px-3.5 py-1.5 border border-white/30 bg-white/10 text-white/80"
              data-ocid="flights.open_filters_button"
            >
              <Filter className="w-3 h-3" />
              Filters
              {activeFilterCount > 0 && (
                <span
                  className="ml-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-white"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="px-3 pt-3 pb-24">
        {/* Count row */}
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="text-xs text-muted-foreground">
            <span className="font-bold text-foreground">{filtered.length}</span>{" "}
            flights · NYC → LAX
          </p>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={resetFilters}
              className="flex items-center gap-1 text-xs font-semibold"
              style={{ color: "#FF6B35" }}
              data-ocid="flights.clear_filters_button"
            >
              <RotateCcw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>

        {/* Cards */}
        <div className="space-y-3" data-ocid="flights.results_list">
          {filtered.map((f, i) => (
            <FlightCard
              key={f.id}
              flight={f}
              index={i + 1}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16" data-ocid="flights.empty_state">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-base mb-1">
              No flights found
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Try adjusting your filters
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-2xl text-white text-sm font-bold"
              style={{ backgroundColor: "#FF6B35" }}
              data-ocid="flights.reset_button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ── Bottom sheet ── */}
      {sheetOpen && (
        <FiltersBottomSheet
          priceMax={priceMax}
          onPriceMax={setPriceMax}
          selectedStops={selectedStops}
          onToggleStop={toggleStop}
          selectedAirlines={selectedAirlines}
          onToggleAirline={toggleAirline}
          depTimeSlots={depTimeSlots}
          onToggleDepTime={toggleDepTime}
          onApply={() => setSheetOpen(false)}
          onReset={resetFilters}
        />
      )}

      {/* Close sort dropdown when clicking outside */}
      {sortOpen && (
        <button
          type="button"
          aria-label="Close sort menu"
          className="fixed inset-0 z-40"
          onClick={() => setSortOpen(false)}
        />
      )}
    </div>
  );
}
