import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, P as Plane } from "./index-C4w8056_.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { A as ArrowLeft } from "./arrow-left-CB5hk0Rn.js";
import { C as Check, a as CreditCard, L as Lock } from "./lock-CX_aHVQP.js";
import { H as Hotel } from "./hotel-DFVsQXCZ.js";
import { C as ChevronRight } from "./chevron-right-B-5BqIoX.js";
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const STEP_LABELS = ["Details", "Seats", "Payment", "Review"];
const SEAT_COLS = ["A", "B", "C", "D", "E", "F"];
const TAKEN_SEATS = /* @__PURE__ */ new Set([
  "1A",
  "1C",
  "2B",
  "2E",
  "3A",
  "3F",
  "4C",
  "4D",
  "5B",
  "5E",
  "6A",
  "6C",
  "7B",
  "7D",
  "8A",
  "8F"
]);
function formatCardNumber(val) {
  return val.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}
function formatExpiry(val) {
  const digits = val.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}
function BookingPage() {
  const navigate = useNavigate();
  const {
    selectedFlight,
    selectedHotel,
    selectedRoom,
    searchParams,
    bookingStep,
    setBookingStep,
    addBooking,
    currentUser
  } = useTravelStore();
  const passengerCount = searchParams.flight.passengers.adults || 1;
  const [passengers, setPassengers] = reactExports.useState(
    Array.from(
      { length: passengerCount },
      (_, i) => i === 0 ? {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phone: currentUser.phone,
        dateOfBirth: "1990-05-15"
      } : {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: ""
      }
    )
  );
  const [selectedSeats, setSelectedSeats] = reactExports.useState([]);
  const [formErrors, setFormErrors] = reactExports.useState({});
  const [cardNumber, setCardNumber] = reactExports.useState("4242 4242 4242 4242");
  const [cardName, setCardName] = reactExports.useState(
    `${currentUser.firstName} ${currentUser.lastName}`
  );
  const [cardExpiry, setCardExpiry] = reactExports.useState("12/27");
  const [cardCvv, setCardCvv] = reactExports.useState("");
  const [promoCode, setPromoCode] = reactExports.useState("");
  const [promoApplied, setPromoApplied] = reactExports.useState(false);
  const [promoError, setPromoError] = reactExports.useState("");
  const [promoOpen, setPromoOpen] = reactExports.useState(false);
  const nights = Math.max(
    1,
    Math.round(
      (new Date(searchParams.hotel.checkOut).getTime() - new Date(searchParams.hotel.checkIn).getTime()) / 864e5
    )
  );
  const flightTotal = selectedFlight ? selectedFlight.price * passengerCount : 0;
  const hotelTotal = selectedRoom ? selectedRoom.price * nights : 0;
  const subtotal = flightTotal + hotelTotal;
  const taxes = Math.round(subtotal * 0.08);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + taxes - discount;
  const toggleSeat = (seat) => {
    if (TAKEN_SEATS.has(seat)) return;
    setSelectedSeats(
      (prev) => prev.includes(seat) ? prev.filter((s) => s !== seat) : prev.length < passengerCount ? [...prev, seat] : [...prev.slice(1), seat]
    );
  };
  const updatePassenger = (idx, field, value) => {
    setPassengers((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
    if (formErrors[`${idx}-${field}`]) {
      setFormErrors((e) => {
        const n = { ...e };
        delete n[`${idx}-${field}`];
        return n;
      });
    }
  };
  const validateStep1 = () => {
    const errors = {};
    passengers.forEach((p, i) => {
      var _a, _b, _c, _d;
      if (!((_a = p.firstName) == null ? void 0 : _a.trim())) errors[`${i}-firstName`] = "Required";
      if (!((_b = p.lastName) == null ? void 0 : _b.trim())) errors[`${i}-lastName`] = "Required";
      if (!((_c = p.email) == null ? void 0 : _c.trim())) errors[`${i}-email`] = "Required";
      if (!((_d = p.phone) == null ? void 0 : _d.trim())) errors[`${i}-phone`] = "Required";
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "VOYAGE10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try VOYAGE10");
      setPromoApplied(false);
    }
  };
  const handleConfirm = () => {
    const booking = {
      id: `bk-${Date.now()}`,
      type: selectedFlight && selectedHotel ? "bundle" : selectedFlight ? "flight" : "hotel",
      status: "confirmed",
      paymentStatus: "paid",
      bookedAt: (/* @__PURE__ */ new Date()).toISOString(),
      totalPrice: total,
      confirmationCode: `VY2025-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      flight: selectedFlight ?? void 0,
      hotel: selectedHotel ?? void 0,
      room: selectedRoom ?? void 0,
      passengers: passengers.map((p, i) => ({
        id: `p-${i + 1}`,
        type: "adult",
        ...p,
        firstName: p.firstName || "",
        lastName: p.lastName || ""
      })),
      checkIn: searchParams.hotel.checkIn,
      checkOut: searchParams.hotel.checkOut,
      nights,
      guestCount: searchParams.hotel.guests.adults
    };
    addBooking(booking);
    navigate({ to: "/booking/confirmation" });
  };
  if (!selectedFlight && !selectedHotel) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center px-6 py-16 text-center",
        "data-ocid": "booking.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-8 h-8 text-secondary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground mb-2", children: "No booking selected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Search for a flight or hotel to continue." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "mobile-button-primary",
              "data-ocid": "booking.go_home_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                " Back to Search"
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-full bg-muted/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex-shrink-0 px-4 pt-3 pb-4",
        style: { background: "#1B4FD8" },
        "data-ocid": "booking.header",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => bookingStep > 1 ? setBookingStep(bookingStep - 1) : navigate({ to: "/" }),
                className: "w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white",
                "aria-label": "Go back",
                "data-ocid": "booking.back_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-lg flex-1", children: selectedFlight ? "Book Flight" : "Book Hotel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/70 text-sm", children: [
              bookingStep,
              "/4"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", "data-ocid": "booking.stepper", children: STEP_LABELS.map((label, i) => {
            const stepNum = i + 1;
            const isCompleted = bookingStep > stepNum;
            const isActive = bookingStep === stepNum;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: [
                      "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-smooth",
                      isCompleted ? "bg-white border-white text-blue-700" : isActive ? "border-transparent text-blue-700 shadow-sm" : "border-white/30 text-white/50 bg-transparent"
                    ].join(" "),
                    style: isActive ? {
                      background: "#FF6B35",
                      borderColor: "#FF6B35",
                      color: "white"
                    } : {},
                    "data-ocid": `booking.step_${stepNum}_indicator`,
                    children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) : stepNum
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: [
                      "text-[10px] font-medium leading-none",
                      isActive ? "text-white" : isCompleted ? "text-white/90" : "text-white/40"
                    ].join(" "),
                    children: label
                  }
                )
              ] }),
              i < STEP_LABELS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-0.5 flex-1 mx-1 rounded-full",
                  style: {
                    background: isCompleted ? "#FF6B35" : "rgba(255,255,255,0.25)"
                  }
                }
              )
            ] }, label);
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto pb-4 px-4 pt-4 space-y-3", children: [
      bookingStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "booking.step1_traveler_details", children: [
        selectedFlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-7 h-7 rounded-lg flex items-center justify-center",
                style: { background: "#1B4FD8" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3.5 h-3.5 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: selectedFlight.airline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: selectedFlight.segments[0].flightNumber })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: selectedFlight.segments[0].departure.airport.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: selectedFlight.segments[0].departure.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: selectedFlight.totalDuration }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3 h-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: selectedFlight.stops === 0 ? "Direct" : `${selectedFlight.stops} stop` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: selectedFlight.segments[selectedFlight.segments.length - 1].arrival.airport.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: selectedFlight.segments[selectedFlight.segments.length - 1].arrival.time })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-between items-center border-t border-border pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              passengerCount,
              " passenger",
              passengerCount > 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-bold text-sm",
                style: { color: "#FF6B35" },
                children: [
                  "$",
                  flightTotal.toLocaleString()
                ]
              }
            )
          ] })
        ] }),
        selectedHotel && selectedRoom && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-7 h-7 rounded-lg flex items-center justify-center",
                style: { background: "#FF6B35" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "w-3.5 h-3.5 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: selectedHotel.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            selectedRoom.name,
            " · ",
            nights,
            " nights · $",
            selectedRoom.price,
            "/night"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-right font-bold text-sm mt-2",
              style: { color: "#FF6B35" },
              children: [
                "$",
                hotelTotal.toLocaleString()
              ]
            }
          )
        ] }),
        passengers.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mobile-card p-4",
            "data-ocid": `booking.passenger_form.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm text-foreground mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center font-bold",
                    style: { background: "#1B4FD8" },
                    children: idx + 1
                  }
                ),
                idx === 0 ? "Primary Passenger" : `Passenger ${idx + 1}`
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                  {
                    field: "firstName",
                    label: "First Name",
                    type: "text",
                    placeholder: "John"
                  },
                  {
                    field: "lastName",
                    label: "Last Name",
                    type: "text",
                    placeholder: "Doe"
                  }
                ].map(({ field, label, type, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: `p${idx}-${field}`,
                      className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: `p${idx}-${field}`,
                      type,
                      placeholder,
                      value: p[field] || "",
                      onChange: (e) => updatePassenger(idx, field, e.target.value),
                      className: [
                        "mobile-input text-sm",
                        formErrors[`${idx}-${field}`] ? "border-destructive" : ""
                      ].join(" "),
                      "data-ocid": `booking.${field}_input.${idx + 1}`
                    }
                  ),
                  formErrors[`${idx}-${field}`] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[10px] text-destructive mt-0.5",
                      "data-ocid": `booking.${field}_field_error.${idx + 1}`,
                      children: formErrors[`${idx}-${field}`]
                    }
                  )
                ] }, field)) }),
                [
                  {
                    field: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "john@example.com"
                  },
                  {
                    field: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+1 (555) 000-0000"
                  },
                  {
                    field: "dateOfBirth",
                    label: "Date of Birth",
                    type: "date",
                    placeholder: ""
                  },
                  {
                    field: "passportNumber",
                    label: "Passport No.",
                    type: "text",
                    placeholder: "A12345678"
                  }
                ].map(({ field, label, type, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: `p${idx}-${field}`,
                      className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: `p${idx}-${field}`,
                      type,
                      placeholder,
                      value: p[field] || "",
                      onChange: (e) => updatePassenger(idx, field, e.target.value),
                      className: [
                        "mobile-input text-sm",
                        formErrors[`${idx}-${field}`] ? "border-destructive" : ""
                      ].join(" "),
                      "data-ocid": `booking.${field}_input.${idx + 1}`
                    }
                  ),
                  formErrors[`${idx}-${field}`] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[10px] text-destructive mt-0.5",
                      "data-ocid": `booking.${field}_field_error.${idx + 1}`,
                      children: formErrors[`${idx}-${field}`]
                    }
                  )
                ] }, field))
              ] })
            ]
          },
          `passenger-form-${idx + 1}`
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              if (validateStep1()) setBookingStep(2);
            },
            className: "mobile-button-primary mt-2",
            style: { background: "#FF6B35" },
            "data-ocid": "booking.step1_continue_button",
            children: [
              "Continue to Seat Selection",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
            ]
          }
        )
      ] }),
      bookingStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "booking.step2_seat_room", children: [
        selectedFlight ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-base mb-1", children: "Choose Your Seat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-3", children: [
            "Select up to ",
            passengerCount,
            " seat",
            passengerCount > 1 ? "s" : "",
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 mb-4", children: [
            { style: { background: "#e5e7eb" }, label: "Taken" },
            {
              style: {
                background: "#dbeafe",
                border: "1px solid #93c5fd"
              },
              label: "Available"
            },
            { style: { background: "#FF6B35" }, label: "Selected" }
          ].map(({ style, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded", style }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label })
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto -mx-1 px-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-1 pl-7", children: SEAT_COLS.map((col, ci) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-5 flex items-center justify-center text-[10px] font-bold text-muted-foreground", children: col }),
              ci === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5" })
            ] }, col)) }),
            [1, 2, 3, 4, 5, 6, 7, 8].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1 mb-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 text-[10px] font-bold text-muted-foreground text-center flex-shrink-0", children: row }),
                  SEAT_COLS.map((col, ci) => {
                    const seatId = `${row}${col}`;
                    const isTaken = TAKEN_SEATS.has(seatId);
                    const isSelected = selectedSeats.includes(seatId);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: isTaken,
                          onClick: () => toggleSeat(seatId),
                          "data-ocid": `booking.seat_${seatId}`,
                          className: "w-9 h-9 rounded-t-lg text-[10px] font-semibold transition-smooth border flex items-center justify-center",
                          style: {
                            background: isTaken ? "#e5e7eb" : isSelected ? "#FF6B35" : "#dbeafe",
                            borderColor: isTaken ? "#d1d5db" : isSelected ? "#FF6B35" : "#93c5fd",
                            color: isTaken ? "#9ca3af" : isSelected ? "white" : "#1B4FD8",
                            cursor: isTaken ? "not-allowed" : "pointer"
                          },
                          children: seatId
                        }
                      ),
                      ci === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5" })
                    ] }, seatId);
                  })
                ]
              },
              `row-${row}`
            ))
          ] }),
          selectedSeats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-3 p-3 rounded-xl border",
              style: { background: "#fff7f4", borderColor: "#ffceba" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground", children: [
                "Selected:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#FF6B35" }, children: selectedSeats.join(", ") }),
                selectedSeats.length < passengerCount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-2", children: [
                  "(",
                  passengerCount - selectedSeats.length,
                  " more needed)"
                ] })
              ] })
            }
          )
        ] }) : selectedHotel && selectedRoom && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-base mb-3", children: "Room Confirmation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-32 rounded-xl flex items-center justify-center mb-3",
              style: {
                background: "linear-gradient(135deg, #dbeafe 0%, #fde8dd 100%)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "w-10 h-10", style: { color: "#1B4FD8" } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: selectedRoom.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            selectedRoom.bedType,
            " · ",
            selectedRoom.size,
            " m²"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 border-t border-border pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              nights,
              " nights × $",
              selectedRoom.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#FF6B35" }, children: [
              "$",
              hotelTotal.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setBookingStep(3),
            className: "mobile-button-primary mt-2",
            style: { background: "#FF6B35" },
            "data-ocid": "booking.step2_continue_button",
            children: [
              "Continue to Payment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
            ]
          }
        )
      ] }),
      bookingStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "booking.step3_payment", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground text-base mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4", style: { color: "#1B4FD8" } }),
            "Payment Details"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            ["VISA", "MC", "AMEX", "JCB"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-2 py-1 border border-border rounded text-[10px] font-bold text-muted-foreground bg-muted/30",
                children: b
              },
              b
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1 text-[10px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 text-green-500" }),
              " Secure"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "card-number",
                  className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                  children: "Card Number"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "card-number",
                    type: "text",
                    placeholder: "1234 5678 9012 3456",
                    value: cardNumber,
                    onChange: (e) => setCardNumber(formatCardNumber(e.target.value)),
                    maxLength: 19,
                    className: "mobile-input text-sm pr-10",
                    "data-ocid": "booking.card_number_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "card-holder",
                  className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                  children: "Cardholder Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "card-holder",
                  type: "text",
                  placeholder: "John Doe",
                  value: cardName,
                  onChange: (e) => setCardName(e.target.value),
                  className: "mobile-input text-sm",
                  "data-ocid": "booking.card_name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "card-expiry",
                    className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                    children: "Expiry (MM/YY)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "card-expiry",
                    type: "text",
                    placeholder: "MM/YY",
                    value: cardExpiry,
                    onChange: (e) => setCardExpiry(formatExpiry(e.target.value)),
                    maxLength: 5,
                    className: "mobile-input text-sm",
                    "data-ocid": "booking.card_expiry_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "card-cvv",
                    className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                    children: "CVV"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "card-cvv",
                    type: "password",
                    placeholder: "•••",
                    value: cardCvv,
                    onChange: (e) => setCardCvv(e.target.value.slice(0, 4)),
                    maxLength: 4,
                    className: "mobile-input text-sm",
                    "data-ocid": "booking.card_cvv_input"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setPromoOpen(!promoOpen),
              className: "w-full flex items-center justify-between text-sm font-semibold text-foreground",
              "data-ocid": "booking.promo_toggle_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4", style: { color: "#FF6B35" } }),
                  "Apply Promo Code"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronRight,
                  {
                    className: [
                      "w-4 h-4 text-muted-foreground transition-smooth",
                      promoOpen ? "rotate-90" : ""
                    ].join(" ")
                  }
                )
              ]
            }
          ),
          promoOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-3 flex gap-2",
              "data-ocid": "booking.promo_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "e.g. VOYAGE10",
                    value: promoCode,
                    onChange: (e) => {
                      setPromoCode(e.target.value);
                      setPromoError("");
                    },
                    className: "mobile-input text-sm flex-1",
                    "data-ocid": "booking.promo_code_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleApplyPromo,
                    className: "px-4 py-3 rounded-lg text-sm font-semibold text-white transition-smooth",
                    style: { background: "#1B4FD8" },
                    "data-ocid": "booking.apply_promo_button",
                    children: "Apply"
                  }
                )
              ]
            }
          ),
          promoApplied && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-green-600 text-xs mt-2 flex items-center gap-1",
              "data-ocid": "booking.promo_success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
                " VOYAGE10 applied — 10% off!"
              ]
            }
          ),
          promoError && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-destructive text-xs mt-2",
              "data-ocid": "booking.promo_error_state",
              children: promoError
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-foreground mb-3", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            selectedFlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                selectedFlight.airline,
                " × ",
                passengerCount,
                " pax"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                "$",
                flightTotal.toLocaleString()
              ] })
            ] }),
            selectedHotel && selectedRoom && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                selectedHotel.name,
                " × ",
                nights,
                " nights"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                "$",
                hotelTotal.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Taxes & fees (8%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                taxes.toLocaleString()
              ] })
            ] }),
            promoApplied && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-green-600 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Promo VOYAGE10 (−10%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "−$",
                discount.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base border-t border-border pt-2 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Due" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#FF6B35" }, children: [
                "$",
                total.toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-3 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 text-green-500 flex-shrink-0" }),
          "Protected with 256-bit SSL encryption"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleConfirm,
            className: "mobile-button-primary font-bold text-base",
            style: { background: "#FF6B35" },
            "data-ocid": "booking.pay_now_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 mr-2" }),
              " Pay Now · $",
              total.toLocaleString()
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  BookingPage as default
};
