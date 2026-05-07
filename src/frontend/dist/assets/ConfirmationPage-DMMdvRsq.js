import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, P as Plane } from "./index-C4w8056_.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { C as CircleCheck } from "./circle-check-BDSxN_-t.js";
import { H as Hotel } from "./hotel-DFVsQXCZ.js";
import { M as MapPin } from "./map-pin-RDlHCuLw.js";
import { D as Download } from "./download-wsO4h-oF.js";
import { S as Share2 } from "./share-2-BmF96bl-.js";
const COLORS = [
  "#FF6B35",
  "#1B4FD8",
  "#22c55e",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6"
];
function ConfettiCanvas() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: -10 - Math.random() * 80,
      vx: (Math.random() - 0.5) * 2.5,
      vy: 1.5 + Math.random() * 2.5,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: 6 + Math.random() * 8,
      h: 3 + Math.random() * 4
    }));
    let raf;
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
    const timer = setTimeout(() => {
      running = false;
      cancelAnimationFrame(raf);
    }, 4e3);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      width: 390,
      height: 220,
      className: "absolute inset-0 w-full h-full pointer-events-none"
    }
  );
}
function ConfirmationPage() {
  const navigate = useNavigate();
  const { bookings } = useTravelStore();
  const latestBooking = bookings[bookings.length - 1];
  const [animating, setAnimating] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (latestBooking) {
      const t = setTimeout(() => setAnimating(true), 150);
      return () => clearTimeout(t);
    }
  }, [latestBooking]);
  if (!latestBooking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center px-6 py-16 text-center",
        "data-ocid": "confirmation.no_booking_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-10 h-10 text-muted-foreground mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground mb-2", children: "No active booking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "No recent booking to confirm." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "mobile-button-primary",
              style: { background: "#FF6B35" },
              "data-ocid": "confirmation.go_home_button",
              children: "Start a New Search"
            }
          )
        ]
      }
    );
  }
  const nights = latestBooking.nights || 1;
  const totalPaidDisplay = `$${Math.round(latestBooking.totalPrice * 1.08).toLocaleString()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col min-h-full bg-muted/20",
      "data-ocid": "confirmation.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-shrink-0 px-4 pt-3 pb-4",
            style: { background: "#1B4FD8" },
            "data-ocid": "confirmation.header",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: "/" }),
                  className: "w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white",
                  "aria-label": "Go home",
                  "data-ocid": "confirmation.home_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-lg", children: "Booking Confirmed" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative h-52 flex flex-col items-center justify-center flex-shrink-0 overflow-hidden",
            style: {
              background: "linear-gradient(180deg, #1B4FD8 0%, #3b6ff0 60%, #f0f4ff 100%)"
            },
            "data-ocid": "confirmation.success_hero",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiCanvas, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: [
                    "relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 z-10",
                    animating ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  ].join(" "),
                  style: {
                    background: "rgba(255,255,255,0.18)",
                    border: "3px solid rgba(255,255,255,0.5)"
                  },
                  "data-ocid": "confirmation.success_icon",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: [
                        "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 delay-200",
                        animating ? "scale-100" : "scale-0"
                      ].join(" "),
                      style: { background: "white" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheck,
                        {
                          className: [
                            "w-9 h-9 transition-all duration-300 delay-400",
                            animating ? "opacity-100 scale-100" : "opacity-0 scale-50"
                          ].join(" "),
                          style: { color: "#1B4FD8" }
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: [
                    "text-white font-display font-bold text-xl mt-3 transition-all duration-500 delay-300 z-10",
                    animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  ].join(" "),
                  children: "Booking Confirmed! 🎉"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: [
                    "text-white/80 text-xs mt-1 transition-all duration-500 delay-400 z-10",
                    animating ? "opacity-100" : "opacity-0"
                  ].join(" "),
                  children: "Get ready for an amazing journey!"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "px-4 -mt-5 relative z-20",
            "data-ocid": "confirmation.reference_badge",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-card p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-0.5", children: "Booking Reference" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-mono font-black text-xl",
                    style: { color: "#1B4FD8" },
                    "data-ocid": "confirmation.code",
                    children: latestBooking.confirmationCode
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-3 py-1.5 rounded-full text-white text-xs font-semibold",
                  style: { background: "#22c55e" },
                  children: "Confirmed ✓"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-3 pb-6 space-y-3", children: [
          latestBooking.flight && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mobile-card p-4",
              "data-ocid": "confirmation.flight_details",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-7 h-7 rounded-lg flex items-center justify-center",
                      style: { background: "#1B4FD8" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3.5 h-3.5 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: latestBooking.flight.airline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "ml-auto text-xs font-semibold px-2 py-0.5 rounded-full",
                      style: { background: "#dbeafe", color: "#1B4FD8" },
                      children: latestBooking.flight.cabinClass.replace("_", " ")
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: latestBooking.flight.segments[0].departure.airport.code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: latestBooking.flight.segments[0].departure.time }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: latestBooking.flight.segments[0].departure.airport.city })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center px-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: latestBooking.flight.totalDuration }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3 h-3", style: { color: "#FF6B35" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: latestBooking.flight.stops === 0 ? "Direct" : `${latestBooking.flight.stops} stop` })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: latestBooking.flight.segments[latestBooking.flight.segments.length - 1].arrival.airport.code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: latestBooking.flight.segments[latestBooking.flight.segments.length - 1].arrival.time }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: latestBooking.flight.segments[latestBooking.flight.segments.length - 1].arrival.airport.city })
                  ] })
                ] }),
                latestBooking.passengers && latestBooking.passengers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1", children: "Passengers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: latestBooking.passengers.map((p) => `${p.firstName} ${p.lastName}`).join(" · ") })
                ] })
              ]
            }
          ),
          latestBooking.hotel && latestBooking.room && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mobile-card p-4",
              "data-ocid": "confirmation.hotel_details",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-7 h-7 rounded-lg flex items-center justify-center",
                      style: { background: "#FF6B35" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "w-3.5 h-3.5 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: latestBooking.hotel.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Room" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: latestBooking.room.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Duration" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-foreground", children: [
                      nights,
                      " nights"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Check-in" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: latestBooking.checkIn })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Check-out" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: latestBooking.checkOut })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-3 pt-3 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-muted-foreground flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: latestBooking.hotel.address })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "(incl. taxes & fees)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-2xl font-black",
                style: { color: "#FF6B35" },
                "data-ocid": "confirmation.total_paid",
                children: totalPaidDisplay
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", "data-ocid": "confirmation.actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/trips" }),
                className: "mobile-button-primary",
                style: { background: "#1B4FD8" },
                "data-ocid": "confirmation.view_trips_button",
                children: "View My Trips"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "mobile-button-primary",
                style: { background: "#FF6B35" },
                "data-ocid": "confirmation.download_eticket_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
                  " Download E-ticket"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full px-4 py-3 border-2 rounded-lg font-semibold text-sm transition-smooth flex items-center justify-center gap-2",
                style: {
                  borderColor: "#1B4FD8",
                  color: "#1B4FD8",
                  background: "transparent"
                },
                "data-ocid": "confirmation.share_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                  " Share Itinerary"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/" }),
                className: "w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground transition-smooth",
                "data-ocid": "confirmation.book_another_button",
                children: "+ Book Another Trip"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "h-16 rounded-2xl flex items-center justify-center gap-3 text-white font-display font-bold text-base",
              style: { background: "linear-gradient(90deg, #1B4FD8, #FF6B35)" },
              children: [
                "✈️ Bon Voyage!",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 font-normal text-sm", children: "Your adventure awaits" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  ConfirmationPage as default
};
