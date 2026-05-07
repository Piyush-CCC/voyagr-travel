import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, P as Plane } from "./index-C4w8056_.js";
import { m as mockDestinations } from "./mockDestinations-B8CpvURw.js";
import { m as mockHotels, U as Users } from "./mockHotels-DKpMSNjG.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { M as MapPin } from "./map-pin-RDlHCuLw.js";
import { C as Calendar } from "./calendar-D1yhkUq5.js";
import { C as ChevronRight } from "./chevron-right-B-5BqIoX.js";
import { S as Star } from "./star-BJ6P8F03.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
  ["path", { d: "M12 4v6", key: "1dcgq2" }],
  ["path", { d: "M2 18h20", key: "ajqnye" }]
];
const BedDouble = createLucideIcon("bed-double", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const DEST_IMAGES = {
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
  london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
  tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80"
};
const FEATURED_CITIES = [
  { city: "Paris", country: "France", price: "$620", key: "paris" },
  { city: "Dubai", country: "UAE", price: "$849", key: "dubai" },
  { city: "Bali", country: "Indonesia", price: "$720", key: "bali" },
  { city: "London", country: "UK", price: "$480", key: "london" },
  { city: "Tokyo", country: "Japan", price: "$890", key: "tokyo" }
];
function HomePage() {
  const navigate = useNavigate();
  const { searchParams, setFlightSearch, setHotelSearch, setSearchParams } = useTravelStore();
  const { activeTab, flight, hotel } = searchParams;
  const [imgErrors, setImgErrors] = reactExports.useState({});
  const topHotels = mockHotels.filter((h) => h.rating >= 4.7).slice(0, 5);
  const handleFlightSearch = () => navigate({ to: "/flights" });
  const handleHotelSearch = () => navigate({ to: "/hotels" });
  const destImgSrc = (city, _fallbackIdx) => {
    var _a;
    const key = city.toLowerCase().split(",")[0].trim();
    return DEST_IMAGES[key] || ((_a = mockDestinations.find((d) => d.city.toLowerCase() === key)) == null ? void 0 : _a.image) || `/assets/generated/dest-${key}.jpg`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "animate-fade-in",
      style: { fontFamily: "var(--font-body, sans-serif)" },
      "data-ocid": "home.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative overflow-hidden",
            style: {
              background: "linear-gradient(160deg, #1B4FD8 0%, #1438a8 60%, #0f2460 100%)",
              minHeight: 190,
              paddingTop: 20,
              paddingBottom: 56,
              paddingLeft: 20,
              paddingRight: 20
            },
            "data-ocid": "home.hero_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute rounded-full opacity-20",
                  style: {
                    width: 160,
                    height: 160,
                    background: "radial-gradient(circle, #FF6B35, transparent 70%)",
                    top: -40,
                    right: -30
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute rounded-full opacity-10",
                  style: {
                    width: 100,
                    height: 100,
                    background: "radial-gradient(circle, #fff, transparent 70%)",
                    bottom: 10,
                    left: -20
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center",
                      style: { background: "#FF6B35" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-lg font-bold tracking-tight",
                      style: {
                        color: "#fff",
                        fontFamily: "var(--font-display, sans-serif)"
                      },
                      children: "Voyagr"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                    style: { background: "rgba(255,255,255,0.15)", color: "#fff" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3", style: { color: "#FF6B35" } }),
                      "New York, US"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "rgba(255,255,255,0.7)" }, children: "Good morning, Alex 👋" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "text-2xl font-bold leading-tight mt-0.5",
                    style: {
                      color: "#fff",
                      fontFamily: "var(--font-display, sans-serif)"
                    },
                    children: "Where to next?"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", style: { marginTop: -44 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: {
              background: "#fff",
              boxShadow: "0 8px 32px rgba(27,79,216,0.18)"
            },
            "data-ocid": "home.search_widget",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", style: { padding: "10px 10px 0" }, children: ["flights", "hotels"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSearchParams({ activeTab: tab }),
                  "data-ocid": `home.${tab}_tab`,
                  className: "flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  style: {
                    background: activeTab === tab ? "#FF6B35" : "transparent",
                    color: activeTab === tab ? "#fff" : "#888"
                  },
                  children: [
                    tab === "flights" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3.5 h-3.5" }),
                    tab === "flights" ? "Flights" : "Hotels"
                  ]
                },
                tab
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 pt-3 space-y-2.5", children: activeTab === "flights" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2.5 rounded-xl px-3.5 py-3",
                    style: { background: "#F5F7FA", border: "1px solid #E8EBF0" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Plane,
                        {
                          className: "w-4 h-4 flex-shrink-0",
                          style: { color: "#1B4FD8" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          className: "flex-1 bg-transparent text-sm focus:outline-none",
                          style: { color: "#111" },
                          placeholder: "From — Departure city",
                          value: flight.origin,
                          onChange: (e) => setFlightSearch({ origin: e.target.value }),
                          "data-ocid": "search.origin_input"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2.5 rounded-xl px-3.5 py-3",
                      style: {
                        background: "#F5F7FA",
                        border: "1px solid #E8EBF0"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          MapPin,
                          {
                            className: "w-4 h-4 flex-shrink-0",
                            style: { color: "#1B4FD8" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            className: "flex-1 bg-transparent text-sm focus:outline-none",
                            style: { color: "#111" },
                            placeholder: "To — Destination city",
                            value: flight.destination,
                            onChange: (e) => setFlightSearch({ destination: e.target.value }),
                            "data-ocid": "search.destination_input"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setFlightSearch({
                        origin: flight.destination,
                        destination: flight.origin
                      }),
                      "aria-label": "Swap origin and destination",
                      "data-ocid": "search.swap_button",
                      className: "absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center",
                      style: {
                        background: "#1B4FD8",
                        color: "#fff"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              d: "M2 4.5L5 1.5L8 4.5M12 9.5L9 12.5L6 9.5M5 1.5V12.5M9 12.5V1.5",
                              stroke: "white",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 rounded-xl px-3 py-2.5",
                      style: {
                        background: "#F5F7FA",
                        border: "1px solid #E8EBF0"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Calendar,
                          {
                            className: "w-3.5 h-3.5 flex-shrink-0",
                            style: { color: "#1B4FD8" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "date",
                            className: "flex-1 min-w-0 bg-transparent text-xs focus:outline-none",
                            style: { color: "#111" },
                            value: flight.departureDate,
                            onChange: (e) => setFlightSearch({ departureDate: e.target.value }),
                            "data-ocid": "search.departure_date_input"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 rounded-xl px-3 py-2.5",
                      style: {
                        background: "#F5F7FA",
                        border: "1px solid #E8EBF0",
                        opacity: flight.tripType !== "round_trip" ? 0.5 : 1
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Calendar,
                          {
                            className: "w-3.5 h-3.5 flex-shrink-0",
                            style: { color: "#888" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "date",
                            className: "flex-1 min-w-0 bg-transparent text-xs focus:outline-none",
                            style: { color: "#111" },
                            value: flight.returnDate || "",
                            disabled: flight.tripType !== "round_trip",
                            onChange: (e) => setFlightSearch({ returnDate: e.target.value }),
                            "data-ocid": "search.return_date_input"
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2.5 rounded-xl px-3.5 py-3",
                    style: { background: "#F5F7FA", border: "1px solid #E8EBF0" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Users,
                        {
                          className: "w-4 h-4 flex-shrink-0",
                          style: { color: "#1B4FD8" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm flex-1", style: { color: "#555" }, children: [
                        flight.passengers.adults + flight.passengers.children + flight.passengers.infants,
                        " ",
                        "Passenger",
                        flight.passengers.adults + flight.passengers.children + flight.passengers.infants !== 1 ? "s" : "",
                        " ",
                        "· Economy"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4", style: { color: "#888" } })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleFlightSearch,
                    "data-ocid": "search.search_flights_button",
                    className: "w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95",
                    style: {
                      background: "linear-gradient(135deg, #FF6B35, #e85520)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4" }),
                      "Search Flights"
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2.5 rounded-xl px-3.5 py-3",
                    style: { background: "#F5F7FA", border: "1px solid #E8EBF0" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MapPin,
                        {
                          className: "w-4 h-4 flex-shrink-0",
                          style: { color: "#1B4FD8" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          className: "flex-1 bg-transparent text-sm focus:outline-none",
                          style: { color: "#111" },
                          placeholder: "City, hotel or landmark",
                          value: hotel.destination,
                          onChange: (e) => setHotelSearch({ destination: e.target.value }),
                          "data-ocid": "search.hotel_destination_input"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 rounded-xl px-3 py-2.5",
                      style: {
                        background: "#F5F7FA",
                        border: "1px solid #E8EBF0"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Calendar,
                          {
                            className: "w-3.5 h-3.5 flex-shrink-0",
                            style: { color: "#1B4FD8" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "date",
                            className: "flex-1 min-w-0 bg-transparent text-xs focus:outline-none",
                            value: hotel.checkIn,
                            onChange: (e) => setHotelSearch({ checkIn: e.target.value }),
                            "data-ocid": "search.checkin_input"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 rounded-xl px-3 py-2.5",
                      style: {
                        background: "#F5F7FA",
                        border: "1px solid #E8EBF0"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Calendar,
                          {
                            className: "w-3.5 h-3.5 flex-shrink-0",
                            style: { color: "#888" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "date",
                            className: "flex-1 min-w-0 bg-transparent text-xs focus:outline-none",
                            value: hotel.checkOut,
                            onChange: (e) => setHotelSearch({ checkOut: e.target.value }),
                            "data-ocid": "search.checkout_input"
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2.5 rounded-xl px-3.5 py-3",
                    style: { background: "#F5F7FA", border: "1px solid #E8EBF0" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Users,
                        {
                          className: "w-4 h-4 flex-shrink-0",
                          style: { color: "#1B4FD8" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm flex-1", style: { color: "#555" }, children: [
                        hotel.guests.adults + hotel.guests.children,
                        " Guest",
                        hotel.guests.adults + hotel.guests.children !== 1 ? "s" : "",
                        " ",
                        "· ",
                        hotel.guests.rooms,
                        " Room",
                        hotel.guests.rooms !== 1 ? "s" : ""
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4", style: { color: "#888" } })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleHotelSearch,
                    "data-ocid": "search.search_hotels_button",
                    className: "w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95",
                    style: {
                      background: "linear-gradient(135deg, #FF6B35, #e85520)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-4 h-4" }),
                      "Search Hotels"
                    ]
                  }
                )
              ] }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7", "data-ocid": "home.destinations_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-base font-bold",
                style: {
                  color: "#1B4FD8",
                  fontFamily: "var(--font-display, sans-serif)"
                },
                children: "Popular Destinations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/explore" }),
                className: "text-xs font-semibold",
                style: { color: "#FF6B35" },
                "data-ocid": "home.see_all_destinations_button",
                children: "See All"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-3 overflow-x-auto pl-4 pr-4",
              style: { scrollSnapType: "x mandatory", scrollbarWidth: "none" },
              children: FEATURED_CITIES.map((dest, i) => {
                const imgSrc = destImgSrc(dest.city);
                const errorKey = dest.key;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setHotelSearch({ destination: dest.city });
                      navigate({ to: "/hotels" });
                    },
                    "data-ocid": `home.destination_card.${i + 1}`,
                    className: "flex-shrink-0 relative rounded-2xl overflow-hidden",
                    style: {
                      width: 130,
                      height: 170,
                      scrollSnapAlign: "start"
                    },
                    children: [
                      !imgErrors[errorKey] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: imgSrc,
                          alt: dest.city,
                          className: "absolute inset-0 w-full h-full object-cover",
                          onError: () => setImgErrors((p) => ({ ...p, [errorKey]: true }))
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0",
                          style: {
                            background: [
                              "linear-gradient(160deg,#1B4FD8,#0f2460)",
                              "linear-gradient(160deg,#FF6B35,#c44010)",
                              "linear-gradient(160deg,#0891b2,#164e63)",
                              "linear-gradient(160deg,#7c3aed,#4c1d95)",
                              "linear-gradient(160deg,#059669,#064e3b)"
                            ][i % 5]
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0",
                          style: {
                            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-bold text-sm leading-tight",
                            style: {
                              color: "#fff",
                              fontFamily: "var(--font-display, sans-serif)"
                            },
                            children: dest.city
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs mt-0.5",
                            style: { color: "rgba(255,255,255,0.75)" },
                            children: dest.country
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "text-xs font-semibold mt-1",
                            style: { color: "#FF6B35" },
                            children: [
                              "from ",
                              dest.price
                            ]
                          }
                        )
                      ] })
                    ]
                  },
                  dest.key
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7", "data-ocid": "home.featured_hotels_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-base font-bold",
                style: {
                  color: "#1B4FD8",
                  fontFamily: "var(--font-display, sans-serif)"
                },
                children: "Featured Hotels"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/hotels" }),
                className: "text-xs font-semibold",
                style: { color: "#FF6B35" },
                "data-ocid": "home.see_all_hotels_button",
                children: "See All"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-3 overflow-x-auto pl-4 pr-4",
              style: { scrollSnapType: "x mandatory", scrollbarWidth: "none" },
              children: topHotels.map((h, i) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({ to: "/hotels/$id", params: { id: h.id } }),
                    "data-ocid": `home.hotel_card.${i + 1}`,
                    className: "flex-shrink-0 rounded-2xl overflow-hidden text-left",
                    style: {
                      width: 170,
                      scrollSnapAlign: "start",
                      background: "#fff",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.09)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { height: 110 }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0",
                            style: {
                              background: [
                                "linear-gradient(160deg,#1B4FD8,#0f2460)",
                                "linear-gradient(160deg,#FF6B35,#c44010)",
                                "linear-gradient(160deg,#0891b2,#164e63)",
                                "linear-gradient(160deg,#7c3aed,#4c1d95)",
                                "linear-gradient(160deg,#059669,#064e3b)"
                              ][i % 5]
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: (_a = h.images[0]) == null ? void 0 : _a.url,
                            alt: h.name,
                            className: "absolute inset-0 w-full h-full object-cover",
                            onError: (e) => {
                              e.currentTarget.style.display = "none";
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "absolute top-2 right-2 flex items-center gap-0.5 rounded-full px-2 py-0.5",
                            style: {
                              background: "rgba(0,0,0,0.55)",
                              backdropFilter: "blur(4px)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Star,
                                {
                                  className: "w-3 h-3",
                                  style: { fill: "#FBBF24", color: "#FBBF24" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[10px] font-bold", children: h.rating })
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-bold text-xs leading-tight truncate",
                            style: { color: "#111" },
                            children: h.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "flex items-center gap-0.5 text-[11px] mt-0.5 truncate",
                            style: { color: "#888" },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-2.5 h-2.5 flex-shrink-0" }),
                              h.city
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mt-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "font-bold text-sm",
                              style: { color: "#FF6B35" },
                              children: [
                                "$",
                                h.priceFrom.toLocaleString()
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", style: { color: "#888" }, children: "/night" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "mt-2 w-full text-center rounded-lg py-1.5 text-[11px] font-semibold",
                            style: { background: "#FF6B35", color: "#fff" },
                            children: "View Details"
                          }
                        )
                      ] })
                    ]
                  },
                  h.id
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 px-4", "data-ocid": "home.deals_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/flights" }),
            className: "w-full relative rounded-2xl overflow-hidden text-left active:scale-95 transition-all",
            style: {
              background: "linear-gradient(135deg, #FF6B35 0%, #e85520 50%, #c94410 100%)",
              minHeight: 110
            },
            "data-ocid": "home.deal_banner",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute rounded-full opacity-20",
                  style: {
                    width: 120,
                    height: 120,
                    background: "#fff",
                    top: -40,
                    right: -30
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute rounded-full opacity-10",
                  style: {
                    width: 80,
                    height: 80,
                    background: "#fff",
                    bottom: -20,
                    left: 60
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold mb-2",
                      style: { background: "rgba(255,255,255,0.25)", color: "#fff" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
                        "Limited Time Offer"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-bold text-xl leading-tight",
                      style: {
                        color: "#fff",
                        fontFamily: "var(--font-display, sans-serif)"
                      },
                      children: [
                        "Up to",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-2xl",
                            style: {
                              background: "#fff",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            },
                            children: "35% OFF"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-1",
                      style: { color: "rgba(255,255,255,0.85)" },
                      children: "Flights to Dubai, Bali & Paris"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-shrink-0 flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold",
                    style: { background: "#fff", color: "#FF6B35" },
                    children: "Book Now"
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 px-4 pb-6", "data-ocid": "home.why_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-base font-bold mb-3",
              style: {
                color: "#1B4FD8",
                fontFamily: "var(--font-display, sans-serif)"
              },
              children: "Why Voyagr?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
            {
              icon: "🔒",
              title: "Secure Payments",
              desc: "256-bit SSL encryption"
            },
            { icon: "🏷️", title: "Best Prices", desc: "Price match guarantee" },
            {
              icon: "🎧",
              title: "24/7 Support",
              desc: "Help whenever you need"
            },
            { icon: "🏆", title: "Award Winning", desc: "5M+ happy travelers" }
          ].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-3.5",
              style: {
                background: i % 2 === 0 ? "rgba(27,79,216,0.06)" : "rgba(255,107,53,0.06)",
                border: i % 2 === 0 ? "1px solid rgba(27,79,216,0.12)" : "1px solid rgba(255,107,53,0.12)"
              },
              "data-ocid": `home.why_feature.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1.5", children: f.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs", style: { color: "#111" }, children: f.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] mt-0.5", style: { color: "#888" }, children: f.desc })
              ]
            },
            f.title
          )) })
        ] })
      ]
    }
  );
}
export {
  HomePage as default
};
