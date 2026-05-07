import { mockDestinations } from "@/data/mockDestinations";
import { mockHotels } from "@/data/mockHotels";
import { useTravelStore } from "@/store/travel-store";
import { useNavigate } from "@tanstack/react-router";
import {
  BedDouble,
  Calendar,
  ChevronRight,
  MapPin,
  Plane,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const DEST_IMAGES: Record<string, string> = {
  paris:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
  london:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
  tokyo:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
};

const FEATURED_CITIES = [
  { city: "Paris", country: "France", price: "$620", key: "paris" },
  { city: "Dubai", country: "UAE", price: "$849", key: "dubai" },
  { city: "Bali", country: "Indonesia", price: "$720", key: "bali" },
  { city: "London", country: "UK", price: "$480", key: "london" },
  { city: "Tokyo", country: "Japan", price: "$890", key: "tokyo" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { searchParams, setFlightSearch, setHotelSearch, setSearchParams } =
    useTravelStore();
  const { activeTab, flight, hotel } = searchParams;
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const topHotels = mockHotels.filter((h) => h.rating >= 4.7).slice(0, 5);

  const handleFlightSearch = () => navigate({ to: "/flights" });
  const handleHotelSearch = () => navigate({ to: "/hotels" });

  const destImgSrc = (city: string, _fallbackIdx: number) => {
    const key = city.toLowerCase().split(",")[0].trim();
    return (
      DEST_IMAGES[key] ||
      mockDestinations.find((d) => d.city.toLowerCase() === key)?.image ||
      `/assets/generated/dest-${key}.jpg`
    );
  };

  return (
    <div
      className="animate-fade-in"
      style={{ fontFamily: "var(--font-body, sans-serif)" }}
      data-ocid="home.page"
    >
      {/* ─── BLUE HEADER HERO ─── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #1B4FD8 0%, #1438a8 60%, #0f2460 100%)",
          minHeight: 190,
          paddingTop: 20,
          paddingBottom: 56,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        data-ocid="home.hero_section"
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 160,
            height: 160,
            background: "radial-gradient(circle, #FF6B35, transparent 70%)",
            top: -40,
            right: -30,
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 100,
            height: 100,
            background: "radial-gradient(circle, #fff, transparent 70%)",
            bottom: 10,
            left: -20,
          }}
        />

        {/* Logo row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#FF6B35" }}
            >
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{
                color: "#fff",
                fontFamily: "var(--font-display, sans-serif)",
              }}
            >
              Voyagr
            </span>
          </div>
          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
          >
            <MapPin className="w-3 h-3" style={{ color: "#FF6B35" }} />
            New York, US
          </div>
        </div>

        {/* Greeting */}
        <div className="mt-2">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Good morning, Alex 👋
          </p>
          <h1
            className="text-2xl font-bold leading-tight mt-0.5"
            style={{
              color: "#fff",
              fontFamily: "var(--font-display, sans-serif)",
            }}
          >
            Where to next?
          </h1>
        </div>
      </div>

      {/* ─── SEARCH WIDGET (overlaps header) ─── */}
      <div className="px-4" style={{ marginTop: -44 }}>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#fff",
            boxShadow: "0 8px 32px rgba(27,79,216,0.18)",
          }}
          data-ocid="home.search_widget"
        >
          {/* Tabs */}
          <div className="flex" style={{ padding: "10px 10px 0" }}>
            {(["flights", "hotels"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSearchParams({ activeTab: tab })}
                data-ocid={`home.${tab}_tab`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeTab === tab ? "#FF6B35" : "transparent",
                  color: activeTab === tab ? "#fff" : "#888",
                }}
              >
                {tab === "flights" ? (
                  <Plane className="w-3.5 h-3.5" />
                ) : (
                  <BedDouble className="w-3.5 h-3.5" />
                )}
                {tab === "flights" ? "Flights" : "Hotels"}
              </button>
            ))}
          </div>

          {/* Form body */}
          <div className="p-4 pt-3 space-y-2.5">
            {activeTab === "flights" ? (
              <>
                {/* From */}
                <div
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ background: "#F5F7FA", border: "1px solid #E8EBF0" }}
                >
                  <Plane
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1B4FD8" }}
                  />
                  <input
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                    style={{ color: "#111" }}
                    placeholder="From — Departure city"
                    value={flight.origin}
                    onChange={(e) =>
                      setFlightSearch({ origin: e.target.value })
                    }
                    data-ocid="search.origin_input"
                  />
                </div>

                {/* Swap + To */}
                <div className="relative">
                  <div
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #E8EBF0",
                    }}
                  >
                    <MapPin
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#1B4FD8" }}
                    />
                    <input
                      className="flex-1 bg-transparent text-sm focus:outline-none"
                      style={{ color: "#111" }}
                      placeholder="To — Destination city"
                      value={flight.destination}
                      onChange={(e) =>
                        setFlightSearch({ destination: e.target.value })
                      }
                      data-ocid="search.destination_input"
                    />
                  </div>
                  {/* Swap button */}
                  <button
                    type="button"
                    onClick={() =>
                      setFlightSearch({
                        origin: flight.destination,
                        destination: flight.origin,
                      })
                    }
                    aria-label="Swap origin and destination"
                    data-ocid="search.swap_button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "#1B4FD8",
                      color: "#fff",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5L5 1.5L8 4.5M12 9.5L9 12.5L6 9.5M5 1.5V12.5M9 12.5V1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Date row */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #E8EBF0",
                    }}
                  >
                    <Calendar
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#1B4FD8" }}
                    />
                    <input
                      type="date"
                      className="flex-1 min-w-0 bg-transparent text-xs focus:outline-none"
                      style={{ color: "#111" }}
                      value={flight.departureDate}
                      onChange={(e) =>
                        setFlightSearch({ departureDate: e.target.value })
                      }
                      data-ocid="search.departure_date_input"
                    />
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #E8EBF0",
                      opacity: flight.tripType !== "round_trip" ? 0.5 : 1,
                    }}
                  >
                    <Calendar
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#888" }}
                    />
                    <input
                      type="date"
                      className="flex-1 min-w-0 bg-transparent text-xs focus:outline-none"
                      style={{ color: "#111" }}
                      value={flight.returnDate || ""}
                      disabled={flight.tripType !== "round_trip"}
                      onChange={(e) =>
                        setFlightSearch({ returnDate: e.target.value })
                      }
                      data-ocid="search.return_date_input"
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ background: "#F5F7FA", border: "1px solid #E8EBF0" }}
                >
                  <Users
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1B4FD8" }}
                  />
                  <span className="text-sm flex-1" style={{ color: "#555" }}>
                    {flight.passengers.adults +
                      flight.passengers.children +
                      flight.passengers.infants}{" "}
                    Passenger
                    {flight.passengers.adults +
                      flight.passengers.children +
                      flight.passengers.infants !==
                    1
                      ? "s"
                      : ""}{" "}
                    · Economy
                  </span>
                  <ChevronRight className="w-4 h-4" style={{ color: "#888" }} />
                </div>

                {/* Search Button */}
                <button
                  type="button"
                  onClick={handleFlightSearch}
                  data-ocid="search.search_flights_button"
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #e85520)",
                  }}
                >
                  <Plane className="w-4 h-4" />
                  Search Flights
                </button>
              </>
            ) : (
              <>
                {/* Hotel Destination */}
                <div
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ background: "#F5F7FA", border: "1px solid #E8EBF0" }}
                >
                  <MapPin
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1B4FD8" }}
                  />
                  <input
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                    style={{ color: "#111" }}
                    placeholder="City, hotel or landmark"
                    value={hotel.destination}
                    onChange={(e) =>
                      setHotelSearch({ destination: e.target.value })
                    }
                    data-ocid="search.hotel_destination_input"
                  />
                </div>

                {/* Check-in / Check-out row */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #E8EBF0",
                    }}
                  >
                    <Calendar
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#1B4FD8" }}
                    />
                    <input
                      type="date"
                      className="flex-1 min-w-0 bg-transparent text-xs focus:outline-none"
                      value={hotel.checkIn}
                      onChange={(e) =>
                        setHotelSearch({ checkIn: e.target.value })
                      }
                      data-ocid="search.checkin_input"
                    />
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #E8EBF0",
                    }}
                  >
                    <Calendar
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#888" }}
                    />
                    <input
                      type="date"
                      className="flex-1 min-w-0 bg-transparent text-xs focus:outline-none"
                      value={hotel.checkOut}
                      onChange={(e) =>
                        setHotelSearch({ checkOut: e.target.value })
                      }
                      data-ocid="search.checkout_input"
                    />
                  </div>
                </div>

                {/* Guests + Rooms */}
                <div
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ background: "#F5F7FA", border: "1px solid #E8EBF0" }}
                >
                  <Users
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1B4FD8" }}
                  />
                  <span className="text-sm flex-1" style={{ color: "#555" }}>
                    {hotel.guests.adults + hotel.guests.children} Guest
                    {hotel.guests.adults + hotel.guests.children !== 1
                      ? "s"
                      : ""}{" "}
                    · {hotel.guests.rooms} Room
                    {hotel.guests.rooms !== 1 ? "s" : ""}
                  </span>
                  <ChevronRight className="w-4 h-4" style={{ color: "#888" }} />
                </div>

                {/* Search Button */}
                <button
                  type="button"
                  onClick={handleHotelSearch}
                  data-ocid="search.search_hotels_button"
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #e85520)",
                  }}
                >
                  <BedDouble className="w-4 h-4" />
                  Search Hotels
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ─── POPULAR DESTINATIONS ─── */}
      <div className="mt-7" data-ocid="home.destinations_section">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2
            className="text-base font-bold"
            style={{
              color: "#1B4FD8",
              fontFamily: "var(--font-display, sans-serif)",
            }}
          >
            Popular Destinations
          </h2>
          <button
            type="button"
            onClick={() => navigate({ to: "/explore" })}
            className="text-xs font-semibold"
            style={{ color: "#FF6B35" }}
            data-ocid="home.see_all_destinations_button"
          >
            See All
          </button>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-3 overflow-x-auto pl-4 pr-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {FEATURED_CITIES.map((dest, i) => {
            const imgSrc = destImgSrc(dest.city, i);
            const errorKey = dest.key;
            return (
              <button
                key={dest.key}
                type="button"
                onClick={() => {
                  setHotelSearch({ destination: dest.city });
                  navigate({ to: "/hotels" });
                }}
                data-ocid={`home.destination_card.${i + 1}`}
                className="flex-shrink-0 relative rounded-2xl overflow-hidden"
                style={{
                  width: 130,
                  height: 170,
                  scrollSnapAlign: "start",
                }}
              >
                {/* Image / gradient fallback */}
                {!imgErrors[errorKey] ? (
                  <img
                    src={imgSrc}
                    alt={dest.city}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() =>
                      setImgErrors((p) => ({ ...p, [errorKey]: true }))
                    }
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: [
                        "linear-gradient(160deg,#1B4FD8,#0f2460)",
                        "linear-gradient(160deg,#FF6B35,#c44010)",
                        "linear-gradient(160deg,#0891b2,#164e63)",
                        "linear-gradient(160deg,#7c3aed,#4c1d95)",
                        "linear-gradient(160deg,#059669,#064e3b)",
                      ][i % 5],
                    }}
                  />
                )}
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  }}
                />
                {/* City info */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p
                    className="font-bold text-sm leading-tight"
                    style={{
                      color: "#fff",
                      fontFamily: "var(--font-display, sans-serif)",
                    }}
                  >
                    {dest.city}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {dest.country}
                  </p>
                  <p
                    className="text-xs font-semibold mt-1"
                    style={{ color: "#FF6B35" }}
                  >
                    from {dest.price}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── FEATURED HOTELS ─── */}
      <div className="mt-7" data-ocid="home.featured_hotels_section">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2
            className="text-base font-bold"
            style={{
              color: "#1B4FD8",
              fontFamily: "var(--font-display, sans-serif)",
            }}
          >
            Featured Hotels
          </h2>
          <button
            type="button"
            onClick={() => navigate({ to: "/hotels" })}
            className="text-xs font-semibold"
            style={{ color: "#FF6B35" }}
            data-ocid="home.see_all_hotels_button"
          >
            See All
          </button>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-3 overflow-x-auto pl-4 pr-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {topHotels.map((h, i) => (
            <button
              key={h.id}
              type="button"
              onClick={() =>
                navigate({ to: "/hotels/$id", params: { id: h.id } })
              }
              data-ocid={`home.hotel_card.${i + 1}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden text-left"
              style={{
                width: 170,
                scrollSnapAlign: "start",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.09)",
              }}
            >
              {/* Hotel image */}
              <div className="relative" style={{ height: 110 }}>
                <div
                  className="absolute inset-0"
                  style={{
                    background: [
                      "linear-gradient(160deg,#1B4FD8,#0f2460)",
                      "linear-gradient(160deg,#FF6B35,#c44010)",
                      "linear-gradient(160deg,#0891b2,#164e63)",
                      "linear-gradient(160deg,#7c3aed,#4c1d95)",
                      "linear-gradient(160deg,#059669,#064e3b)",
                    ][i % 5],
                  }}
                />
                <img
                  src={h.images[0]?.url}
                  alt={h.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                {/* Rating badge */}
                <div
                  className="absolute top-2 right-2 flex items-center gap-0.5 rounded-full px-2 py-0.5"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <Star
                    className="w-3 h-3"
                    style={{ fill: "#FBBF24", color: "#FBBF24" }}
                  />
                  <span className="text-white text-[10px] font-bold">
                    {h.rating}
                  </span>
                </div>
              </div>

              {/* Hotel info */}
              <div className="p-2.5">
                <p
                  className="font-bold text-xs leading-tight truncate"
                  style={{ color: "#111" }}
                >
                  {h.name}
                </p>
                <p
                  className="flex items-center gap-0.5 text-[11px] mt-0.5 truncate"
                  style={{ color: "#888" }}
                >
                  <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                  {h.city}
                </p>
                <div className="flex items-baseline gap-1 mt-1.5">
                  <span
                    className="font-bold text-sm"
                    style={{ color: "#FF6B35" }}
                  >
                    ${h.priceFrom.toLocaleString()}
                  </span>
                  <span className="text-[10px]" style={{ color: "#888" }}>
                    /night
                  </span>
                </div>
                <div
                  className="mt-2 w-full text-center rounded-lg py-1.5 text-[11px] font-semibold"
                  style={{ background: "#FF6B35", color: "#fff" }}
                >
                  View Details
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ─── SPECIAL DEALS BANNER ─── */}
      <div className="mt-7 px-4" data-ocid="home.deals_section">
        <button
          type="button"
          onClick={() => navigate({ to: "/flights" })}
          className="w-full relative rounded-2xl overflow-hidden text-left active:scale-95 transition-all"
          style={{
            background:
              "linear-gradient(135deg, #FF6B35 0%, #e85520 50%, #c94410 100%)",
            minHeight: 110,
          }}
          data-ocid="home.deal_banner"
        >
          {/* Decorative circles */}
          <div
            className="absolute rounded-full opacity-20"
            style={{
              width: 120,
              height: 120,
              background: "#fff",
              top: -40,
              right: -30,
            }}
          />
          <div
            className="absolute rounded-full opacity-10"
            style={{
              width: 80,
              height: 80,
              background: "#fff",
              bottom: -20,
              left: 60,
            }}
          />

          <div className="relative flex items-center justify-between p-5">
            <div>
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold mb-2"
                style={{ background: "rgba(255,255,255,0.25)", color: "#fff" }}
              >
                <Zap className="w-3 h-3" />
                Limited Time Offer
              </div>
              <p
                className="font-bold text-xl leading-tight"
                style={{
                  color: "#fff",
                  fontFamily: "var(--font-display, sans-serif)",
                }}
              >
                Up to{" "}
                <span
                  className="text-2xl"
                  style={{
                    background: "#fff",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  35% OFF
                </span>
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Flights to Dubai, Bali & Paris
              </p>
            </div>
            <div
              className="flex-shrink-0 flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold"
              style={{ background: "#fff", color: "#FF6B35" }}
            >
              Book Now
            </div>
          </div>
        </button>
      </div>

      {/* ─── WHY VOYAGR (compact mobile) ─── */}
      <div className="mt-7 px-4 pb-6" data-ocid="home.why_section">
        <h2
          className="text-base font-bold mb-3"
          style={{
            color: "#1B4FD8",
            fontFamily: "var(--font-display, sans-serif)",
          }}
        >
          Why Voyagr?
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: "🔒",
              title: "Secure Payments",
              desc: "256-bit SSL encryption",
            },
            { icon: "🏷️", title: "Best Prices", desc: "Price match guarantee" },
            {
              icon: "🎧",
              title: "24/7 Support",
              desc: "Help whenever you need",
            },
            { icon: "🏆", title: "Award Winning", desc: "5M+ happy travelers" },
          ].map((f, i) => (
            <div
              key={f.title}
              className="rounded-xl p-3.5"
              style={{
                background:
                  i % 2 === 0
                    ? "rgba(27,79,216,0.06)"
                    : "rgba(255,107,53,0.06)",
                border:
                  i % 2 === 0
                    ? "1px solid rgba(27,79,216,0.12)"
                    : "1px solid rgba(255,107,53,0.12)",
              }}
              data-ocid={`home.why_feature.${i + 1}`}
            >
              <div className="text-2xl mb-1.5">{f.icon}</div>
              <p className="font-bold text-xs" style={{ color: "#111" }}>
                {f.title}
              </p>
              <p className="text-[11px] mt-0.5" style={{ color: "#888" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
