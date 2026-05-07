import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, P as Plane } from "./index-C4w8056_.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { A as ArrowLeft } from "./arrow-left-CB5hk0Rn.js";
import { C as ChevronDown } from "./chevron-down-B4YSm7UK.js";
import { W as Wifi, U as Utensils, C as Clock } from "./wifi-CSbrjdv-.js";
import { C as ChevronUp } from "./chevron-up-CswLSSgS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }],
  ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }],
  ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }],
  ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
  ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]
];
const BaggageClaim = createLucideIcon("baggage-claim", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
const NYC_LAX_FLIGHTS = [
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
            name: "John F. Kennedy"
          },
          time: "06:00",
          terminal: "T4"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "09:10",
          terminal: "T2"
        },
        duration: "5h 10m",
        flightNumber: "DL407",
        aircraft: "Boeing 737-900"
      }
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
    amenities: ["Wi-Fi ($8)", "USB Charging"]
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
            name: "John F. Kennedy"
          },
          time: "08:15",
          terminal: "T5"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "11:35",
          terminal: "T3"
        },
        duration: "5h 20m",
        flightNumber: "B6415",
        aircraft: "Airbus A321neo"
      }
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
    amenities: ["Free Wi-Fi", "Live TV", "Snacks"]
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
            name: "John F. Kennedy"
          },
          time: "10:00",
          terminal: "T8"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "16:45",
          terminal: "T4"
        },
        duration: "8h 45m",
        flightNumber: "AA1",
        aircraft: "Boeing 777-200"
      }
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
    amenities: ["Wi-Fi ($10)", "USB Charging"]
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
            name: "Newark Liberty Intl"
          },
          time: "12:30",
          terminal: "C"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "15:55",
          terminal: "T7"
        },
        duration: "5h 25m",
        flightNumber: "UA323",
        aircraft: "Airbus A320"
      }
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
    amenities: ["Wi-Fi", "USB Charging"]
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
            name: "LaGuardia Airport"
          },
          time: "07:00",
          terminal: "B"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "13:30",
          terminal: "T1"
        },
        duration: "7h 30m",
        flightNumber: "WN3781",
        aircraft: "Boeing 737 MAX 8"
      }
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
    amenities: ["Free 2 Bags", "No Change Fees"]
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
            name: "John F. Kennedy"
          },
          time: "15:45",
          terminal: "T4"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "18:55",
          terminal: "T2"
        },
        duration: "5h 10m",
        flightNumber: "DL429",
        aircraft: "Airbus A220-300"
      }
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
    amenities: ["Wi-Fi", "Seatback Screen", "USB Charging"]
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
            name: "John F. Kennedy"
          },
          time: "19:00",
          terminal: "T8"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "22:25",
          terminal: "T4"
        },
        duration: "5h 25m",
        flightNumber: "AA187",
        aircraft: "Boeing 757-200"
      }
    ],
    stops: 0,
    totalDuration: "5h 25m",
    price: 219,
    originalPrice: 299,
    cabinClass: "economy",
    seatsLeft: 9,
    refundable: true,
    mealIncluded: true,
    rating: 4,
    baggage: { carry: "1 bag", checked: "1 bag ($35)" },
    amenities: ["Wi-Fi", "Meal", "Seatback Screen"]
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
            name: "John F. Kennedy"
          },
          time: "14:00",
          terminal: "T7"
        },
        arrival: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles Intl"
          },
          time: "21:30",
          terminal: "T7"
        },
        duration: "7h 30m",
        flightNumber: "UA567",
        aircraft: "Boeing 737-800"
      }
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
    amenities: ["Flat Bed", "Priority Boarding", "Lounge Access", "Wi-Fi"]
  }
];
const AIRLINE_BG = {
  DL: "#003087",
  // Delta blue
  B6: "#003876",
  // JetBlue dark blue
  AA: "#0078D2",
  // American blue
  UA: "#005DAA",
  // United blue
  WN: "#304CB2"
  // Southwest blue
};
const AIRLINE_ACCENT = {
  DL: "#E51937",
  B6: "#00B2E3",
  AA: "#C8102E",
  UA: "#0068AF",
  WN: "#F9A825"
};
const CHIPS = [
  { id: "all", label: "All" },
  { id: "cheapest", label: "Cheapest" },
  { id: "fastest", label: "Fastest" },
  { id: "nonstop", label: "Nonstop" },
  { id: "morning", label: "Morning" },
  { id: "evening", label: "Evening" }
];
function parseMinutes(dur) {
  const m = dur.match(/(\d+)h\s*(\d+)?m?/);
  if (!m) return 0;
  return Number.parseInt(m[1], 10) * 60 + (m[2] ? Number.parseInt(m[2], 10) : 0);
}
function parseHour(t) {
  return Number.parseInt(t.split(":")[0], 10);
}
function stopLabel(s) {
  if (s === 0) return "Nonstop";
  if (s === 1) return "1 Stop";
  return `${s} Stops`;
}
function FlightCard({
  flight,
  index,
  onSelect
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const seg = flight.segments[0];
  const lastSeg = flight.segments[flight.segments.length - 1];
  const bgColor = AIRLINE_BG[flight.airlineCode] ?? "#1B4FD8";
  const accentColor = AIRLINE_ACCENT[flight.airlineCode] ?? "#FF6B35";
  const initial = flight.airline.charAt(0);
  const stopBadgeClass = flight.stops === 0 ? "bg-emerald-50 text-emerald-700 border-emerald-200" : flight.stops === 1 ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-red-50 text-red-600 border-red-200";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-card border border-border rounded-2xl overflow-hidden",
      "data-ocid": `flights.flight_card.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0",
                style: { backgroundColor: bgColor },
                children: initial
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: flight.airline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: seg.flightNumber })
            ] })
          ] }),
          flight.seatsLeft <= 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full px-2 py-0.5", children: [
            flight.seatsLeft,
            " left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center min-w-[52px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground tabular-nums leading-tight", children: seg.departure.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", style: { color: bgColor }, children: seg.departure.airport.code })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: flight.totalDuration }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Plane,
                {
                  className: "w-3 h-3 mx-1 shrink-0",
                  style: { color: accentColor }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: [
                  "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border",
                  stopBadgeClass
                ].join(" "),
                children: stopLabel(flight.stops)
              }
            ) }),
            flight.stopCities && flight.stopCities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-muted-foreground mt-0.5", children: [
              "via ",
              flight.stopCities.join(", ")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center min-w-[52px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground tabular-nums leading-tight", children: lastSeg.arrival.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", style: { color: bgColor }, children: lastSeg.arrival.airport.code })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            flight.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-through", children: [
              "$",
              flight.originalPrice
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-xl font-bold leading-tight",
                style: { color: "#FF6B35" },
                children: [
                  "$",
                  flight.price
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "per person" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mr-1", children: [
              flight.amenities.some(
                (a) => a.toLowerCase().includes("wi-fi") || a.toLowerCase().includes("wifi")
              ) && /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              flight.amenities.some(
                (a) => a.toLowerCase().includes("meal") || a.toLowerCase().includes("snack")
              ) && /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              flight.refundable && /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onSelect(flight),
                className: "text-sm font-bold text-white px-5 py-2 rounded-xl transition-opacity active:opacity-80",
                style: { backgroundColor: "#FF6B35" },
                "data-ocid": `flights.select_button.${index}`,
                children: "Select"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            className: "flex items-center gap-1 mt-3 pt-3 border-t border-border w-full text-xs text-muted-foreground",
            "data-ocid": `flights.expand_button.${index}`,
            children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }),
              " Hide details"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }),
              " View details ·",
              " ",
              flight.cabinClass.replace("_", " ")
            ] })
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 rounded-xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "From" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: seg.departure.airport.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: seg.departure.airport.city }),
              seg.departure.terminal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-[10px] font-medium",
                  style: { color: "#1B4FD8" },
                  children: [
                    "T",
                    seg.departure.terminal
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-muted-foreground mb-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: seg.duration }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: seg.aircraft })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: lastSeg.arrival.airport.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: lastSeg.arrival.airport.city }),
              lastSeg.arrival.terminal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-[10px] font-medium",
                  style: { color: "#1B4FD8" },
                  children: [
                    "T",
                    lastSeg.arrival.terminal
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 bg-muted/40 rounded-xl p-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                BaggageClaim,
                {
                  className: "w-4 h-4 shrink-0",
                  style: { color: "#1B4FD8" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Carry-on" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: flight.baggage.carry })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 bg-muted/40 rounded-xl p-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                BaggageClaim,
                {
                  className: "w-4 h-4 shrink-0",
                  style: { color: "#FF6B35" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Checked" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: flight.baggage.checked })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
            flight.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] bg-muted/50 text-muted-foreground rounded-full px-2.5 py-1 border border-border",
                children: a
              },
              a
            )),
            flight.refundable && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2.5 py-1", children: "Refundable" })
          ] })
        ] })
      ] })
    }
  );
}
const ALL_NYC_LAX_AIRLINES = [
  "Delta",
  "JetBlue",
  "American",
  "United",
  "Southwest"
];
function FiltersBottomSheet(props) {
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
    onReset
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50", "data-ocid": "flights.filter_sheet", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Close filters",
        className: "absolute inset-0 bg-foreground/40 w-full",
        onClick: onApply
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-card rounded-t-3xl shadow-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-3 pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-1 bg-border rounded-full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base text-foreground", children: "Filter Flights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onReset,
            className: "text-xs font-semibold",
            style: { color: "#FF6B35" },
            "data-ocid": "flights.reset_filters_button",
            children: "Reset all"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto max-h-[70vh] px-5 py-4 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Max Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", style: { color: "#FF6B35" }, children: [
              "$",
              priceMax
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 89,
              max: 450,
              step: 10,
              value: priceMax,
              onChange: (e) => onPriceMax(Number(e.target.value)),
              className: "w-full h-1.5 rounded-full cursor-pointer accent-orange-500",
              "data-ocid": "flights.price_slider"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "$89" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "$450" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "Stops" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [0, 1, 2].map((s) => {
            const active = selectedStops.includes(s);
            const label = s === 0 ? "Nonstop" : s === 1 ? "1 Stop" : "2+ Stops";
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onToggleStop(s),
                className: [
                  "flex-1 py-2 rounded-xl border text-xs font-semibold transition-colors",
                  active ? "text-white border-transparent" : "text-foreground border-border bg-background"
                ].join(" "),
                style: active ? { backgroundColor: "#1B4FD8", borderColor: "#1B4FD8" } : {},
                "data-ocid": `flights.stop_filter.${s}`,
                children: label
              },
              s
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "Airlines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: ALL_NYC_LAX_AIRLINES.map((airline) => {
            const checked = selectedAirlines.includes(airline);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `airline-filter-${airline.toLowerCase().replace(/\s+/g, "-")}`,
                className: "flex items-center justify-between cursor-pointer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: `airline-filter-${airline.toLowerCase().replace(/\s+/g, "-")}`,
                      type: "checkbox",
                      checked,
                      onChange: () => onToggleAirline(airline),
                      className: "w-4 h-4 rounded accent-orange-500",
                      "data-ocid": `flights.airline_filter.${airline.toLowerCase().replace(/\s+/g, "_")}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: airline })
                ] })
              },
              airline
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "Departure Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
            { id: "morning", label: "Morning", range: "6am–12pm" },
            { id: "afternoon", label: "Afternoon", range: "12pm–6pm" },
            { id: "evening", label: "Evening", range: "6pm–12am" }
          ].map(({ id, label, range }) => {
            const active = depTimeSlots.includes(id);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => onToggleDepTime(id),
                className: [
                  "flex flex-col items-center py-2.5 rounded-xl border text-center transition-colors",
                  active ? "text-white border-transparent" : "text-foreground border-border bg-background"
                ].join(" "),
                style: active ? { backgroundColor: "#1B4FD8", borderColor: "#1B4FD8" } : {},
                "data-ocid": `flights.dep_time.${id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-70 mt-0.5", children: range })
                ]
              },
              id
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onApply,
          className: "w-full py-3.5 rounded-2xl text-white font-bold text-sm",
          style: { backgroundColor: "#FF6B35" },
          "data-ocid": "flights.apply_filters_button",
          children: "Apply Filters"
        }
      ) })
    ] })
  ] });
}
const SORT_OPTS = [
  { value: "price", label: "Price" },
  { value: "duration", label: "Duration" },
  { value: "departure", label: "Departure" },
  { value: "rating", label: "Rating" }
];
function FlightsPage() {
  var _a;
  const navigate = useNavigate();
  const { searchParams, setSelectedFlight, filterState, setFlightFilters } = useTravelStore();
  const { flight } = searchParams;
  const [activeChip, setActiveChip] = reactExports.useState("all");
  const [priceMax, setPriceMax] = reactExports.useState(450);
  const [selectedStops, setSelectedStops] = reactExports.useState([]);
  const [selectedAirlines, setSelectedAirlines] = reactExports.useState([]);
  const [depTimeSlots, setDepTimeSlots] = reactExports.useState([]);
  const [sheetOpen, setSheetOpen] = reactExports.useState(false);
  const [sortOpen, setSortOpen] = reactExports.useState(false);
  const toggleStop = (s) => setSelectedStops(
    (prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
  );
  const toggleAirline = (a) => setSelectedAirlines(
    (prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
  );
  const toggleDepTime = (id) => setDepTimeSlots(
    (prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );
  const resetFilters = () => {
    setPriceMax(450);
    setSelectedStops([]);
    setSelectedAirlines([]);
    setDepTimeSlots([]);
    setActiveChip("all");
  };
  const handleChip = (chip) => {
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
  const filtered = reactExports.useMemo(() => {
    let res = NYC_LAX_FLIGHTS.filter((f) => {
      if (f.price > priceMax) return false;
      if (selectedStops.length > 0 && !selectedStops.includes(f.stops >= 2 ? 2 : f.stops))
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
        (a, b) => parseMinutes(a.totalDuration) - parseMinutes(b.totalDuration)
      );
    else if (filterState.sortBy === "departure")
      res = [...res].sort(
        (a, b) => parseHour(a.segments[0].departure.time) - parseHour(b.segments[0].departure.time)
      );
    else if (filterState.sortBy === "rating")
      res = [...res].sort((a, b) => b.rating - a.rating);
    return res;
  }, [
    priceMax,
    selectedStops,
    selectedAirlines,
    depTimeSlots,
    filterState.sortBy
  ]);
  const handleSelect = (f) => {
    setSelectedFlight(f);
    navigate({ to: "/booking" });
  };
  const activeFilterCount = selectedStops.length + selectedAirlines.length + depTimeSlots.length + (priceMax < 450 ? 1 : 0);
  const currentSortLabel = ((_a = SORT_OPTS.find((o) => o.value === filterState.sortBy)) == null ? void 0 : _a.label) ?? "Price";
  const originCode = flight.origin.includes("(") ? flight.origin.split("(")[1].replace(")", "") : "NYC";
  const destCode = flight.destination.includes("(") ? flight.destination.split("(")[1].replace(")", "") : "LAX";
  const originCity = flight.origin.split("(")[0].trim() || "New York";
  flight.destination.split("(")[0].trim() || "Los Angeles";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-0 z-30 shadow-md",
        style: { backgroundColor: "#1B4FD8" },
        "data-ocid": "flights.header",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-3 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/" }),
                className: "w-8 h-8 rounded-full flex items-center justify-center bg-white/15 shrink-0",
                "aria-label": "Go back to Home",
                "data-ocid": "flights.back_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-base", children: originCode }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-sm", children: "→" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-base", children: destCode })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-[11px] truncate", children: [
                originCity,
                " · ",
                flight.departureDate,
                " ·",
                " ",
                flight.passengers.adults,
                " adult",
                flight.passengers.adults !== 1 ? "s" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSortOpen((v) => !v),
                  className: "flex items-center gap-1 bg-white/15 text-white text-xs font-semibold rounded-full px-3 py-1.5",
                  "data-ocid": "flights.sort_button",
                  children: [
                    currentSortLabel,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
                  ]
                }
              ),
              sortOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50 w-36", children: SORT_OPTS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setFlightFilters({ sortBy: value });
                    setSortOpen(false);
                  },
                  className: [
                    "w-full text-left px-4 py-2.5 text-sm",
                    filterState.sortBy === value ? "font-bold text-foreground bg-muted" : "text-foreground hover:bg-muted"
                  ].join(" "),
                  "data-ocid": `flights.sort_option.${value}`,
                  children: label
                },
                value
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 mt-2.5 overflow-x-auto scrollbar-hide pb-0.5",
              "data-ocid": "flights.chip_filters",
              children: [
                CHIPS.map(({ id, label }) => {
                  const active = activeChip === id;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleChip(id),
                      className: [
                        "shrink-0 text-xs font-semibold rounded-full px-3.5 py-1.5 transition-colors",
                        active ? "text-white border-transparent" : "text-white/80 border border-white/30 bg-white/10"
                      ].join(" "),
                      style: active ? { backgroundColor: "#FF6B35" } : {},
                      "data-ocid": `flights.chip.${id}`,
                      children: label
                    },
                    id
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSheetOpen(true),
                    className: "shrink-0 flex items-center gap-1 text-xs font-semibold rounded-full px-3.5 py-1.5 border border-white/30 bg-white/10 text-white/80",
                    "data-ocid": "flights.open_filters_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3 h-3" }),
                      "Filters",
                      activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "ml-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-white",
                          style: { backgroundColor: "#FF6B35" },
                          children: activeFilterCount
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: filtered.length }),
          " ",
          "flights · NYC → LAX"
        ] }),
        activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: resetFilters,
            className: "flex items-center gap-1 text-xs font-semibold",
            style: { color: "#FF6B35" },
            "data-ocid": "flights.clear_filters_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "flights.results_list", children: filtered.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FlightCard,
        {
          flight: f,
          index: i + 1,
          onSelect: handleSelect
        },
        f.id
      )) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "flights.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-8 h-8 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-base mb-1", children: "No flights found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: "Try adjusting your filters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: resetFilters,
            className: "px-6 py-2.5 rounded-2xl text-white text-sm font-bold",
            style: { backgroundColor: "#FF6B35" },
            "data-ocid": "flights.reset_button",
            children: "Reset Filters"
          }
        )
      ] })
    ] }),
    sheetOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FiltersBottomSheet,
      {
        priceMax,
        onPriceMax: setPriceMax,
        selectedStops,
        onToggleStop: toggleStop,
        selectedAirlines,
        onToggleAirline: toggleAirline,
        depTimeSlots,
        onToggleDepTime: toggleDepTime,
        onApply: () => setSheetOpen(false),
        onReset: resetFilters
      }
    ),
    sortOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Close sort menu",
        className: "fixed inset-0 z-40",
        onClick: () => setSortOpen(false)
      }
    )
  ] });
}
export {
  FlightsPage as default
};
