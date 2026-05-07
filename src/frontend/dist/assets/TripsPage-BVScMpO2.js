import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, P as Plane, B as Building2 } from "./index-C4w8056_.js";
import { m as mockHotels, U as Users } from "./mockHotels-DKpMSNjG.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { H as Hotel } from "./hotel-DFVsQXCZ.js";
import { C as Calendar } from "./calendar-D1yhkUq5.js";
import { C as ChevronUp } from "./chevron-up-CswLSSgS.js";
import { C as ChevronDown } from "./chevron-down-B4YSm7UK.js";
import { D as Download } from "./download-wsO4h-oF.js";
import { S as Share2 } from "./share-2-BmF96bl-.js";
import { X } from "./x-BUuxQ_55.js";
import { M as MapPin } from "./map-pin-RDlHCuLw.js";
import { S as Star } from "./star-BJ6P8F03.js";
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const mockFlights = [
  {
    id: "fl-001",
    airline: "Emirates",
    airlineCode: "EK",
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
          time: "08:30",
          terminal: "T4"
        },
        arrival: {
          airport: {
            code: "DXB",
            city: "Dubai",
            country: "UAE",
            name: "Dubai International"
          },
          time: "06:45+1",
          terminal: "T3"
        },
        duration: "13h 15m",
        flightNumber: "EK202",
        aircraft: "Boeing 777-300ER"
      }
    ],
    stops: 0,
    totalDuration: "13h 15m",
    price: 1249,
    originalPrice: 1550,
    cabinClass: "economy",
    seatsLeft: 5,
    refundable: true,
    mealIncluded: true,
    rating: 4.8,
    baggage: { carry: "7 kg", checked: "30 kg" },
    amenities: ["Wi-Fi", "ICE Entertainment", "USB Charging", "Lie-flat seats"]
  },
  {
    id: "fl-002",
    airline: "Singapore Airlines",
    airlineCode: "SQ",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles International"
          },
          time: "23:55",
          terminal: "T2"
        },
        arrival: {
          airport: {
            code: "SIN",
            city: "Singapore",
            country: "Singapore",
            name: "Changi Airport"
          },
          time: "07:20+2",
          terminal: "T3"
        },
        duration: "17h 25m",
        flightNumber: "SQ35",
        aircraft: "Airbus A350-900"
      }
    ],
    stops: 0,
    totalDuration: "17h 25m",
    price: 1089,
    originalPrice: 1320,
    cabinClass: "economy",
    seatsLeft: 12,
    refundable: true,
    mealIncluded: true,
    rating: 4.9,
    baggage: { carry: "7 kg", checked: "25 kg" },
    amenities: [
      "Wi-Fi",
      "KrisWorld",
      "USB Charging",
      "Noise-cancelling headphones"
    ]
  },
  {
    id: "fl-003",
    airline: "Delta Air Lines",
    airlineCode: "DL",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "ORD",
            city: "Chicago",
            country: "USA",
            name: "O'Hare International"
          },
          time: "07:15"
        },
        arrival: {
          airport: {
            code: "ATL",
            city: "Atlanta",
            country: "USA",
            name: "Hartsfield–Jackson"
          },
          time: "10:30"
        },
        duration: "2h 15m",
        flightNumber: "DL1234",
        aircraft: "Airbus A220"
      },
      {
        departure: {
          airport: {
            code: "ATL",
            city: "Atlanta",
            country: "USA",
            name: "Hartsfield–Jackson"
          },
          time: "12:20"
        },
        arrival: {
          airport: {
            code: "CDG",
            city: "Paris",
            country: "France",
            name: "Charles de Gaulle"
          },
          time: "05:45+1",
          terminal: "T2"
        },
        duration: "9h 25m",
        flightNumber: "DL56",
        aircraft: "Boeing 767-400"
      }
    ],
    stops: 1,
    stopCities: ["Atlanta"],
    totalDuration: "13h 30m",
    price: 698,
    cabinClass: "economy",
    seatsLeft: 8,
    refundable: false,
    mealIncluded: true,
    rating: 4.2,
    baggage: { carry: "10 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "In-seat screens", "Power outlets"]
  },
  {
    id: "fl-004",
    airline: "Lufthansa",
    airlineCode: "LH",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "BOS",
            city: "Boston",
            country: "USA",
            name: "Logan International"
          },
          time: "19:00",
          terminal: "E"
        },
        arrival: {
          airport: {
            code: "FRA",
            city: "Frankfurt",
            country: "Germany",
            name: "Frankfurt Airport"
          },
          time: "08:30+1",
          terminal: "T1"
        },
        duration: "7h 30m",
        flightNumber: "LH424",
        aircraft: "Airbus A330-300"
      }
    ],
    stops: 0,
    totalDuration: "7h 30m",
    price: 785,
    cabinClass: "economy",
    seatsLeft: 3,
    refundable: true,
    mealIncluded: true,
    rating: 4.5,
    baggage: { carry: "8 kg", checked: "23 kg" },
    amenities: [
      "Wi-Fi",
      "In-seat screens",
      "USB Charging",
      "Newspaper service"
    ]
  },
  {
    id: "fl-005",
    airline: "Qatar Airways",
    airlineCode: "QR",
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
          time: "22:00",
          terminal: "T8"
        },
        arrival: {
          airport: {
            code: "DOH",
            city: "Doha",
            country: "Qatar",
            name: "Hamad International"
          },
          time: "17:00+1",
          terminal: "T1"
        },
        duration: "11h 00m",
        flightNumber: "QR703",
        aircraft: "Boeing 777-300ER"
      }
    ],
    stops: 0,
    totalDuration: "11h 00m",
    price: 1150,
    originalPrice: 1400,
    cabinClass: "business",
    seatsLeft: 2,
    refundable: true,
    mealIncluded: true,
    rating: 4.9,
    baggage: { carry: "15 kg", checked: "40 kg" },
    amenities: [
      "Wi-Fi",
      "Oryx Entertainment",
      "Lie-flat beds",
      "Chauffeur service",
      "Lounge access"
    ]
  },
  {
    id: "fl-006",
    airline: "British Airways",
    airlineCode: "BA",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "MIA",
            city: "Miami",
            country: "USA",
            name: "Miami International"
          },
          time: "21:15",
          terminal: "E"
        },
        arrival: {
          airport: {
            code: "LHR",
            city: "London",
            country: "UK",
            name: "Heathrow Airport"
          },
          time: "09:25+1",
          terminal: "T5"
        },
        duration: "8h 10m",
        flightNumber: "BA207",
        aircraft: "Boeing 787-9 Dreamliner"
      }
    ],
    stops: 0,
    totalDuration: "8h 10m",
    price: 920,
    cabinClass: "economy",
    seatsLeft: 18,
    refundable: false,
    mealIncluded: true,
    rating: 4.3,
    baggage: { carry: "23 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "In-flight entertainment", "USB Charging"]
  },
  {
    id: "fl-007",
    airline: "Air France",
    airlineCode: "AF",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "SFO",
            city: "San Francisco",
            country: "USA",
            name: "SFO International"
          },
          time: "14:30"
        },
        arrival: {
          airport: {
            code: "CDG",
            city: "Paris",
            country: "France",
            name: "Charles de Gaulle"
          },
          time: "11:10+1"
        },
        duration: "10h 40m",
        flightNumber: "AF83",
        aircraft: "Boeing 777-300ER"
      }
    ],
    stops: 0,
    totalDuration: "10h 40m",
    price: 875,
    originalPrice: 1020,
    cabinClass: "economy",
    seatsLeft: 7,
    refundable: true,
    mealIncluded: true,
    rating: 4.4,
    baggage: { carry: "12 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "VOD Entertainment", "Premium meals"]
  },
  {
    id: "fl-008",
    airline: "United Airlines",
    airlineCode: "UA",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "EWR",
            city: "Newark",
            country: "USA",
            name: "Newark Liberty"
          },
          time: "16:00"
        },
        arrival: {
          airport: {
            code: "ORD",
            city: "Chicago",
            country: "USA",
            name: "O'Hare International"
          },
          time: "17:45"
        },
        duration: "2h 45m",
        flightNumber: "UA1022",
        aircraft: "Boeing 737-800"
      },
      {
        departure: {
          airport: {
            code: "ORD",
            city: "Chicago",
            country: "USA",
            name: "O'Hare International"
          },
          time: "19:30"
        },
        arrival: {
          airport: {
            code: "NRT",
            city: "Tokyo",
            country: "Japan",
            name: "Narita International"
          },
          time: "23:15+1"
        },
        duration: "13h 45m",
        flightNumber: "UA837",
        aircraft: "Boeing 787-9"
      }
    ],
    stops: 1,
    stopCities: ["Chicago"],
    totalDuration: "17h 15m",
    price: 890,
    cabinClass: "economy",
    seatsLeft: 14,
    refundable: false,
    mealIncluded: true,
    rating: 4,
    baggage: { carry: "10 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "DirecTV", "USB Charging"]
  },
  {
    id: "fl-009",
    airline: "KLM Royal Dutch",
    airlineCode: "KL",
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
          time: "23:40",
          terminal: "T4"
        },
        arrival: {
          airport: {
            code: "AMS",
            city: "Amsterdam",
            country: "Netherlands",
            name: "Schiphol Airport"
          },
          time: "12:30+1"
        },
        duration: "7h 50m",
        flightNumber: "KL642",
        aircraft: "Boeing 787-10"
      }
    ],
    stops: 0,
    totalDuration: "7h 50m",
    price: 730,
    cabinClass: "economy",
    seatsLeft: 9,
    refundable: true,
    mealIncluded: true,
    rating: 4.4,
    baggage: { carry: "12 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "Entertainment system", "Dutch treats"]
  },
  {
    id: "fl-010",
    airline: "ANA All Nippon",
    airlineCode: "NH",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "LAX",
            city: "Los Angeles",
            country: "USA",
            name: "Los Angeles International"
          },
          time: "12:05",
          terminal: "B"
        },
        arrival: {
          airport: {
            code: "NRT",
            city: "Tokyo",
            country: "Japan",
            name: "Narita International"
          },
          time: "16:00+1"
        },
        duration: "11h 55m",
        flightNumber: "NH6",
        aircraft: "Boeing 787-9"
      }
    ],
    stops: 0,
    totalDuration: "11h 55m",
    price: 980,
    originalPrice: 1190,
    cabinClass: "economy",
    seatsLeft: 6,
    refundable: true,
    mealIncluded: true,
    rating: 4.7,
    baggage: { carry: "10 kg", checked: "23 kg" },
    amenities: [
      "Wi-Fi",
      "AVOD",
      "Japanese cuisine",
      "Noise-cancelling headphones"
    ]
  },
  {
    id: "fl-011",
    airline: "Turkish Airlines",
    airlineCode: "TK",
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
          time: "18:20",
          terminal: "T1"
        },
        arrival: {
          airport: {
            code: "IST",
            city: "Istanbul",
            country: "Turkey",
            name: "Istanbul Airport"
          },
          time: "12:45+1"
        },
        duration: "10h 25m",
        flightNumber: "TK1",
        aircraft: "Boeing 787-9"
      }
    ],
    stops: 0,
    totalDuration: "10h 25m",
    price: 695,
    cabinClass: "economy",
    seatsLeft: 22,
    refundable: false,
    mealIncluded: true,
    rating: 4.3,
    baggage: { carry: "8 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "Planet", "Gourmet Turkish meals"]
  },
  {
    id: "fl-012",
    airline: "Cathay Pacific",
    airlineCode: "CX",
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
          time: "01:30",
          terminal: "T8"
        },
        arrival: {
          airport: {
            code: "HKG",
            city: "Hong Kong",
            country: "China",
            name: "Hong Kong International"
          },
          time: "05:45+1"
        },
        duration: "16h 15m",
        flightNumber: "CX843",
        aircraft: "Airbus A350-900"
      }
    ],
    stops: 0,
    totalDuration: "16h 15m",
    price: 1060,
    cabinClass: "economy",
    seatsLeft: 4,
    refundable: true,
    mealIncluded: true,
    rating: 4.6,
    baggage: { carry: "10 kg", checked: "30 kg" },
    amenities: ["Wi-Fi", "StudioCX", "Premium meals", "Amenity kit"]
  },
  {
    id: "fl-013",
    airline: "Emirates",
    airlineCode: "EK",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "SFO",
            city: "San Francisco",
            country: "USA",
            name: "SFO International"
          },
          time: "09:00"
        },
        arrival: {
          airport: {
            code: "DXB",
            city: "Dubai",
            country: "UAE",
            name: "Dubai International"
          },
          time: "07:45+1",
          terminal: "T3"
        },
        duration: "16h 45m",
        flightNumber: "EK225",
        aircraft: "Airbus A380"
      }
    ],
    stops: 0,
    totalDuration: "16h 45m",
    price: 3200,
    cabinClass: "business",
    seatsLeft: 1,
    refundable: true,
    mealIncluded: true,
    rating: 5,
    baggage: { carry: "15 kg", checked: "40 kg" },
    amenities: [
      "Wi-Fi",
      "Private suite",
      "Onboard bar",
      "Shower Spa",
      "Chauffeur service",
      "Lounge access"
    ]
  },
  {
    id: "fl-014",
    airline: "Swiss International",
    airlineCode: "LX",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "ORD",
            city: "Chicago",
            country: "USA",
            name: "O'Hare International"
          },
          time: "17:30"
        },
        arrival: {
          airport: {
            code: "ZRH",
            city: "Zurich",
            country: "Switzerland",
            name: "Zurich Airport"
          },
          time: "09:20+1"
        },
        duration: "9h 50m",
        flightNumber: "LX26",
        aircraft: "Boeing 777-300ER"
      }
    ],
    stops: 0,
    totalDuration: "9h 50m",
    price: 860,
    cabinClass: "economy",
    seatsLeft: 16,
    refundable: true,
    mealIncluded: true,
    rating: 4.5,
    baggage: { carry: "8 kg", checked: "23 kg" },
    amenities: [
      "Wi-Fi",
      "SWISS World",
      "Swiss chocolate",
      "Premium cabin service"
    ]
  },
  {
    id: "fl-015",
    airline: "Air Canada",
    airlineCode: "AC",
    airlineLogo: "✈",
    segments: [
      {
        departure: {
          airport: {
            code: "YYZ",
            city: "Toronto",
            country: "Canada",
            name: "Pearson International"
          },
          time: "20:50"
        },
        arrival: {
          airport: {
            code: "CDG",
            city: "Paris",
            country: "France",
            name: "Charles de Gaulle"
          },
          time: "10:30+1"
        },
        duration: "7h 40m",
        flightNumber: "AC870",
        aircraft: "Boeing 787-8"
      }
    ],
    stops: 0,
    totalDuration: "7h 40m",
    price: 650,
    cabinClass: "economy",
    seatsLeft: 25,
    refundable: false,
    mealIncluded: true,
    rating: 4.1,
    baggage: { carry: "10 kg", checked: "23 kg" },
    amenities: ["Wi-Fi", "Entertainment", "USB Charging"]
  }
];
const mockBookings = [
  {
    id: "bk-001",
    type: "flight",
    status: "confirmed",
    paymentStatus: "paid",
    bookedAt: "2025-09-15T14:32:00Z",
    totalPrice: 2498,
    confirmationCode: "VYG-EMI-8821",
    flight: mockFlights[0],
    passengers: [
      {
        id: "p1",
        type: "adult",
        firstName: "Alex",
        lastName: "Morgan",
        email: "alex@example.com",
        passportNumber: "A12345678",
        nationality: "American"
      },
      {
        id: "p2",
        type: "adult",
        firstName: "Jamie",
        lastName: "Morgan",
        passportNumber: "A87654321",
        nationality: "American"
      }
    ],
    checkIn: "2025-12-18",
    checkOut: "2026-01-03"
  },
  {
    id: "bk-002",
    type: "hotel",
    status: "confirmed",
    paymentStatus: "paid",
    bookedAt: "2025-10-20T09:15:00Z",
    totalPrice: 3250,
    confirmationCode: "VYG-FS-5514",
    hotel: mockHotels[1],
    room: mockHotels[1].rooms[0],
    guestCount: 2,
    nights: 5,
    checkIn: "2025-12-22",
    checkOut: "2025-12-27"
  },
  {
    id: "bk-003",
    type: "bundle",
    status: "completed",
    paymentStatus: "paid",
    bookedAt: "2025-06-10T16:45:00Z",
    totalPrice: 4840,
    confirmationCode: "VYG-BND-3301",
    flight: mockFlights[2],
    hotel: mockHotels[2],
    room: mockHotels[2].rooms[0],
    passengers: [
      {
        id: "p3",
        type: "adult",
        firstName: "Alex",
        lastName: "Morgan",
        email: "alex@example.com",
        passportNumber: "A12345678",
        nationality: "American"
      }
    ],
    guestCount: 1,
    nights: 7,
    checkIn: "2025-08-01",
    checkOut: "2025-08-08"
  },
  {
    id: "bk-004",
    type: "flight",
    status: "pending",
    paymentStatus: "pending",
    bookedAt: "2025-11-05T11:20:00Z",
    totalPrice: 1800,
    confirmationCode: "VYG-QR-9977",
    flight: mockFlights[4],
    passengers: [
      {
        id: "p4",
        type: "adult",
        firstName: "Alex",
        lastName: "Morgan",
        email: "alex@example.com"
      }
    ],
    checkIn: "2026-02-14"
  }
];
const fmt = (d) => d ? new Date(d).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
}) : "";
function isUpcoming(b) {
  return b.status === "confirmed" || b.status === "pending";
}
function isPast(b) {
  return b.status === "completed" || b.status === "cancelled";
}
function statusConfig(status) {
  if (status === "confirmed")
    return {
      label: "Confirmed",
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-500"
    };
  if (status === "pending")
    return {
      label: "Pending",
      bg: "bg-orange-100",
      text: "text-orange-600",
      dot: "bg-orange-500"
    };
  if (status === "cancelled")
    return {
      label: "Cancelled",
      bg: "bg-red-100",
      text: "text-red-600",
      dot: "bg-red-500"
    };
  return {
    label: "Completed",
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-border"
  };
}
function MiniStat({
  value,
  label,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-card rounded-2xl px-3 py-3 text-center shadow-sm border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: [
          "text-lg font-bold font-display",
          accent ? "text-primary" : "text-secondary"
        ].join(" "),
        children: value
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5 leading-tight", children: label })
  ] });
}
function CancelModal({
  booking,
  onClose,
  onConfirm
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end justify-center",
      "data-ocid": "trips.cancel_modal.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Close dialog",
            className: "absolute inset-0 bg-foreground/40 backdrop-blur-sm w-full",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card rounded-t-3xl w-full max-w-[390px] p-6 pb-8 animate-slide-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-border rounded-full mx-auto mb-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-destructive" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Cancel Booking?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: booking.confirmationCode })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-destructive mb-1", children: "⚠ Non-Refundable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Cancelling forfeits",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                "$",
                booking.totalPrice.toLocaleString()
              ] }),
              ". This cannot be undone."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onConfirm(booking.id),
                className: "flex-1 py-3 bg-destructive text-destructive-foreground font-semibold rounded-xl text-sm",
                "data-ocid": "trips.cancel_modal.confirm_button",
                children: "Cancel Booking"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "flex-1 py-3 border-2 border-border text-foreground font-semibold rounded-xl text-sm",
                "data-ocid": "trips.cancel_modal.cancel_button",
                children: "Keep It"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ExpandedDetails({ booking }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border space-y-3", children: [
    booking.type === "flight" && booking.flight && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: "Flight Itinerary" }),
      booking.flight.segments.map((seg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 bg-muted/40 rounded-xl p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: seg.departure.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: seg.departure.airport.code })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: seg.duration }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3 h-3 text-secondary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground", children: seg.flightNumber })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: seg.arrival.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: seg.arrival.airport.code })
            ] })
          ]
        },
        seg.flightNumber
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "✈ ",
          booking.flight.airline
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "💺 ",
          booking.flight.cabinClass.replace("_", " ")
        ] }),
        booking.flight.mealIncluded && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🍽 Meal included" })
      ] })
    ] }),
    booking.type === "hotel" && booking.hotel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: "Hotel Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: booking.hotel.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
          " ",
          booking.hotel.address
        ] }),
        booking.room && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "🛏 ",
          booking.room.name,
          " · ",
          booking.room.bedType
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          [1, 2, 3, 4, 5].map((n) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: [
                  "w-3 h-3",
                  n <= (((_a = booking.hotel) == null ? void 0 : _a.stars) ?? 0) ? "text-amber-400 fill-amber-400" : "text-border"
                ].join(" ")
              },
              n
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: booking.hotel.rating })
        ] })
      ] })
    ] }),
    booking.passengers && booking.passengers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: booking.passengers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-secondary/10 rounded-lg px-2.5 py-1.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-secondary", children: [
            p.firstName,
            " ",
            p.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground capitalize", children: p.type })
        ]
      },
      p.id
    )) })
  ] });
}
function TripCard({
  booking,
  index,
  onCancel
}) {
  var _a;
  const [expanded, setExpanded] = reactExports.useState(false);
  const upcoming = isUpcoming(booking);
  const sc = statusConfig(booking.status);
  const destination = booking.type === "flight" && booking.flight ? `${booking.flight.segments[0].departure.airport.city} → ${booking.flight.segments[booking.flight.segments.length - 1].arrival.airport.city}` : booking.type === "hotel" && booking.hotel ? booking.hotel.city : booking.hotel ? booking.hotel.city : "Trip";
  const subtitle = booking.type === "flight" && booking.flight ? `${booking.flight.airline} · ${booking.flight.segments[0].flightNumber}` : booking.type === "hotel" && booking.hotel ? `${booking.hotel.stars}★ · ${((_a = booking.room) == null ? void 0 : _a.name) ?? "Deluxe Room"}` : "Flight + Hotel Bundle";
  const typeIcon = booking.type === "flight" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4 text-secondary" }) : booking.type === "hotel" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "w-4 h-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-muted-foreground" });
  const typeBg = booking.type === "flight" ? "bg-secondary/10" : booking.type === "hotel" ? "bg-primary/10" : "bg-muted";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl border border-border overflow-hidden shadow-sm",
      "data-ocid": `trips.booking_card.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: [
              "h-0.5 w-full",
              booking.status === "confirmed" ? "bg-green-400" : booking.status === "pending" ? "bg-primary" : booking.status === "cancelled" ? "bg-destructive" : "bg-muted-foreground"
            ].join(" ")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: [
                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                  typeBg
                ].join(" "),
                children: typeIcon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground truncate", children: destination }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: [
                      "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full",
                      sc.bg,
                      sc.text
                    ].join(" "),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: ["w-1.5 h-1.5 rounded-full", sc.dot].join(" ")
                        }
                      ),
                      sc.label
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: subtitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-mono text-muted-foreground", children: booking.confirmationCode })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-bold font-display text-primary", children: [
                "$",
                booking.totalPrice.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "total" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 text-secondary" }),
              fmt(booking.checkIn)
            ] }),
            booking.checkOut && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              "→ ",
              fmt(booking.checkOut)
            ] }),
            booking.nights && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
              booking.nights,
              "n"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setExpanded((e) => !e),
                className: "flex items-center gap-1 text-xs font-medium text-secondary",
                "data-ocid": `trips.booking_card.view_details_button.${index}`,
                "aria-expanded": expanded,
                children: [
                  expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }),
                  expanded ? "Hide" : "Details"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium border border-border rounded-lg text-muted-foreground",
                  "data-ocid": `trips.booking_card.download_button.${index}`,
                  "aria-label": "Download receipt",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                    " Receipt"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium border border-border rounded-lg text-muted-foreground",
                  "data-ocid": `trips.booking_card.share_button.${index}`,
                  "aria-label": "Share trip",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3 h-3" }),
                    " Share"
                  ]
                }
              ),
              upcoming && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onCancel(booking),
                  className: "flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium border border-destructive/30 text-destructive rounded-lg",
                  "data-ocid": `trips.booking_card.cancel_button.${index}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                    " Cancel"
                  ]
                }
              )
            ] })
          ] }),
          expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandedDetails, { booking })
        ] })
      ]
    }
  );
}
function EmptyState({ tab }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center py-16 px-4",
      "data-ocid": "trips.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-9 h-9 text-secondary/50" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold font-display text-foreground mb-1", children: [
          "No ",
          tab === "upcoming" ? "Upcoming" : "Past",
          " Trips"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center", children: tab === "upcoming" ? "Start planning your next adventure!" : "Your completed trips will appear here." })
      ]
    }
  );
}
function TripsPage() {
  const { bookings: storeBookings } = useTravelStore();
  const [activeTab, setActiveTab] = reactExports.useState("upcoming");
  const [cancelTarget, setCancelTarget] = reactExports.useState(null);
  const [cancelledIds, setCancelledIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const allBookings = reactExports.useMemo(
    () => [
      ...mockBookings.map(
        (b) => cancelledIds.has(b.id) ? { ...b, status: "cancelled" } : b
      ),
      ...storeBookings.map(
        (b) => cancelledIds.has(b.id) ? { ...b, status: "cancelled" } : b
      )
    ],
    [storeBookings, cancelledIds]
  );
  const upcoming = allBookings.filter(isUpcoming);
  const past = allBookings.filter(isPast);
  const filtered = activeTab === "upcoming" ? upcoming : past;
  const totalTrips = allBookings.filter((b) => b.status !== "cancelled").length;
  const totalSpent = allBookings.filter((b) => b.paymentStatus === "paid").reduce((s, b) => s + b.totalPrice, 0);
  const loyaltyPts = 24580;
  function handleConfirmCancel(id) {
    setCancelledIds((prev) => /* @__PURE__ */ new Set([...prev, id]));
    setCancelTarget(null);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", "data-ocid": "trips.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-secondary px-4 pt-4 pb-6",
        "data-ocid": "trips.header_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-secondary-foreground", children: "My Trips" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-xs mt-0.5", children: "Track your travel bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", "data-ocid": "trips.stats_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { value: String(totalTrips), label: "Total Trips" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MiniStat,
              {
                value: `$${(totalSpent / 1e3).toFixed(1)}k`,
                label: "Total Spent",
                accent: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MiniStat,
              {
                value: `${(loyaltyPts / 1e3).toFixed(1)}k`,
                label: "Loyalty Pts"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4", "data-ocid": "trips.tabs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-muted rounded-2xl p-1 gap-1", children: ["upcoming", "past"].map((tab) => {
      const count = tab === "upcoming" ? upcoming.length : past.length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab(tab),
          className: [
            "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-smooth",
            activeTab === tab ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
          ].join(" "),
          "data-ocid": `trips.${tab}_tab`,
          children: [
            tab === "upcoming" ? "Upcoming" : "Past",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: [
                  "inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold",
                  activeTab === tab ? "bg-primary-foreground/20 text-primary-foreground" : "bg-border text-muted-foreground"
                ].join(" "),
                children: count
              }
            )
          ]
        },
        tab
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 space-y-3", "data-ocid": "trips.bookings_list", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { tab: activeTab }) : filtered.map((booking, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TripCard,
      {
        booking,
        index: i + 1,
        onCancel: setCancelTarget
      },
      booking.id
    )) }),
    cancelTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CancelModal,
      {
        booking: cancelTarget,
        onClose: () => setCancelTarget(null),
        onConfirm: handleConfirmCancel
      }
    )
  ] });
}
export {
  TripsPage as default
};
