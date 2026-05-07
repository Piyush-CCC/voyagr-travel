import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-C4w8056_.js";
import { m as mockHotels, U as Users } from "./mockHotels-DKpMSNjG.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { A as ArrowLeft } from "./arrow-left-CB5hk0Rn.js";
import { C as Calendar } from "./calendar-D1yhkUq5.js";
import { S as Search } from "./search-CsGO8VHe.js";
import { C as ChevronDown } from "./chevron-down-B4YSm7UK.js";
import { M as MapPin } from "./map-pin-RDlHCuLw.js";
import { S as Star } from "./star-BJ6P8F03.js";
import { X } from "./x-BUuxQ_55.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const QUICK_FILTERS = [
  { id: "all", label: "All" },
  { id: "best_value", label: "Best Value" },
  { id: "luxury", label: "Luxury" },
  { id: "budget", label: "Budget" },
  { id: "pool", label: "Pool" },
  { id: "breakfast", label: "Breakfast" }
];
const SORT_OPTIONS = [
  { value: "best_value", label: "Best Match" },
  { value: "price_asc", label: "Price: Low → High" },
  { value: "price_desc", label: "Price: High → Low" },
  { value: "rating", label: "Top Rated" }
];
const AMENITY_FILTERS = [
  "Wi-Fi",
  "Parking",
  "Pool",
  "Fitness Center",
  "Restaurant",
  "Spa",
  "Airport Shuttle",
  "Pet Friendly"
];
function getReviewLabel(rating) {
  if (rating >= 4.9) return "Exceptional";
  if (rating >= 4.7) return "Excellent";
  if (rating >= 4.5) return "Very Good";
  return "Good";
}
function HotelsPage() {
  const navigate = useNavigate();
  const { searchParams, setSelectedHotel } = useTravelStore();
  const { hotel } = searchParams;
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("best_value");
  const [showSortSheet, setShowSortSheet] = reactExports.useState(false);
  const [showFilterSheet, setShowFilterSheet] = reactExports.useState(false);
  const [priceRange, setPriceRange] = reactExports.useState([0, 5e3]);
  const [selectedStars, setSelectedStars] = reactExports.useState([]);
  const [selectedAmenities, setSelectedAmenities] = reactExports.useState([]);
  const toggleStar = (star) => setSelectedStars(
    (prev) => prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
  );
  const toggleAmenity = (amenity) => setSelectedAmenities(
    (prev) => prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
  );
  const clearFilters = () => {
    setPriceRange([0, 5e3]);
    setSelectedStars([]);
    setSelectedAmenities([]);
  };
  const filtered = reactExports.useMemo(() => {
    let res = mockHotels.filter((h) => {
      if (h.priceFrom < priceRange[0] || h.priceFrom > priceRange[1])
        return false;
      if (selectedStars.length > 0 && !selectedStars.includes(h.stars))
        return false;
      if (selectedAmenities.length > 0 && !selectedAmenities.every((a) => h.amenities.includes(a)))
        return false;
      if (activeFilter === "luxury") return h.priceFrom >= 1e3;
      if (activeFilter === "budget") return h.priceFrom <= 700;
      if (activeFilter === "pool")
        return h.amenities.some((a) => a.toLowerCase().includes("pool"));
      if (activeFilter === "breakfast")
        return h.amenities.some(
          (a) => a.toLowerCase().includes("dining") || a.toLowerCase().includes("restaurant")
        );
      return true;
    });
    if (sortBy === "price_asc")
      res = [...res].sort((a, b) => a.priceFrom - b.priceFrom);
    else if (sortBy === "price_desc")
      res = [...res].sort((a, b) => b.priceFrom - a.priceFrom);
    else if (sortBy === "rating")
      res = [...res].sort((a, b) => b.rating - a.rating);
    else
      res = [...res].sort(
        (a, b) => b.rating * 0.6 - b.priceFrom * 1e-3 - (a.rating * 0.6 - a.priceFrom * 1e-3)
      );
    return res;
  }, [activeFilter, priceRange, selectedStars, selectedAmenities, sortBy]);
  const handleSelect = (h) => {
    setSelectedHotel(h);
    navigate({ to: "/hotels/$id", params: { id: h.id } });
  };
  const currentSort = SORT_OPTIONS.find((o) => o.value === sortBy);
  const hasActiveFilters = priceRange[1] < 5e3 || selectedStars.length > 0 || selectedAmenities.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-background min-h-screen flex flex-col",
      "data-ocid": "hotels.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "sticky top-0 z-30 bg-secondary text-secondary-foreground",
            "data-ocid": "hotels.header",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/" }),
                      className: "w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 active:bg-white/25",
                      "aria-label": "Go back",
                      "data-ocid": "hotels.back_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-display font-bold text-lg leading-tight", children: hotel.destination }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/75 text-xs flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                        hotel.checkIn,
                        " – ",
                        hotel.checkOut
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/75 text-xs flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                        hotel.guests.adults,
                        " guest",
                        hotel.guests.adults > 1 ? "s" : ""
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/" }),
                      className: "w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 active:bg-white/25",
                      "aria-label": "Search",
                      "data-ocid": "hotels.search_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 text-white" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex gap-2 overflow-x-auto pb-0.5 scrollbar-none -mx-1 px-1",
                    "data-ocid": "hotels.filter_chips",
                    children: QUICK_FILTERS.map(({ id, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setActiveFilter(id),
                        className: [
                          "flex-shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors",
                          activeFilter === id ? "bg-primary border-primary text-white" : "bg-white/10 border-white/20 text-white/90"
                        ].join(" "),
                        "data-ocid": `hotels.quick_filter.${id}`,
                        children: label
                      },
                      id
                    ))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-white border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-secondary", children: filtered.length }),
                  " ",
                  "hotels found"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowSortSheet(true),
                      className: "flex items-center gap-1.5 text-xs font-semibold text-secondary border border-secondary/30 rounded-full px-3 py-1.5 bg-secondary/5",
                      "data-ocid": "hotels.sort_button",
                      children: [
                        currentSort.label,
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowFilterSheet(true),
                      className: [
                        "flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 border",
                        hasActiveFilters ? "text-primary border-primary/40 bg-primary/10" : "text-foreground border-border bg-card"
                      ].join(" "),
                      "data-ocid": "hotels.filter_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-3.5 h-3.5" }),
                        "Filter",
                        hasActiveFilters ? " ·" : "",
                        hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-1 px-4 py-4 space-y-4",
            "data-ocid": "hotels.results_list",
            children: [
              filtered.slice(0, 6).map((h, i) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelect(h),
                    className: "w-full text-left bg-card rounded-2xl overflow-hidden shadow-md active:shadow-sm transition-shadow border border-border",
                    "data-ocid": `hotels.hotel_card.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                        ((_a = h.images[0]) == null ? void 0 : _a.url) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: h.images[0].url,
                            alt: h.name,
                            className: "w-full h-full object-cover"
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-secondary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-10 h-10 text-secondary/40" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-xl flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-white text-white" }),
                          h.rating.toFixed(1)
                        ] }),
                        h.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-xl", children: "Featured" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base leading-tight line-clamp-1", children: h.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
                              [1, 2, 3, 4, 5].slice(0, h.stars).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Star,
                                {
                                  className: "w-3 h-3 fill-amber-400 text-amber-400"
                                },
                                n
                              )),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                                h.stars,
                                "-star hotel"
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-right", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold text-primary", children: [
                              "$",
                              h.priceFrom.toLocaleString()
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "/night" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2 text-xs text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 flex-shrink-0 text-secondary" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-clamp-1", children: [
                            h.city,
                            ", ",
                            h.country
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mt-3 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-secondary/10 text-secondary text-xs font-bold px-2 py-0.5 rounded-lg", children: h.rating.toFixed(1) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: getReviewLabel(h.rating) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                            "· ",
                            h.reviewCount.toLocaleString(),
                            " reviews"
                          ] })
                        ] }) })
                      ] })
                    ]
                  },
                  h.id
                );
              }),
              filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "hotels.empty_state", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-8 h-8 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-2", children: "No hotels found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: "Try adjusting your filters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      clearFilters();
                      setActiveFilter("all");
                    },
                    className: "bg-primary text-white font-semibold px-6 py-2.5 rounded-full text-sm",
                    "data-ocid": "hotels.reset_filters_button",
                    children: "Clear Filters"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4" })
            ]
          }
        ),
        showSortSheet && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50", "data-ocid": "hotels.sort_sheet", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute inset-0 bg-foreground/40 w-full",
              "aria-label": "Close sort sheet",
              onClick: () => setShowSortSheet(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 pt-5 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base", children: "Sort By" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowSortSheet(false),
                  className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center",
                  "aria-label": "Close",
                  "data-ocid": "hotels.sort_sheet.close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-8", children: SORT_OPTIONS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setSortBy(value);
                  setShowSortSheet(false);
                },
                className: [
                  "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl mb-1.5 text-sm font-medium transition-colors",
                  sortBy === value ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:bg-muted"
                ].join(" "),
                "data-ocid": `hotels.sort_option.${value}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                  sortBy === value && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-white" }) })
                ]
              },
              value
            )) })
          ] })
        ] }),
        showFilterSheet && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50", "data-ocid": "hotels.filter_sheet", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute inset-0 bg-foreground/40 w-full",
              "aria-label": "Close filter sheet",
              onClick: () => setShowFilterSheet(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl max-h-[80vh] overflow-y-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-card flex items-center justify-between px-5 pt-5 pb-3 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base", children: "Filters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowFilterSheet(false),
                  className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center",
                  "aria-label": "Close",
                  "data-ocid": "hotels.filter_sheet.close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-foreground", children: "Price per night" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary font-semibold", children: [
                    "$",
                    priceRange[0],
                    " – $",
                    priceRange[1] === 5e3 ? "5000+" : priceRange[1]
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: 5e3,
                    step: 50,
                    value: priceRange[1],
                    onChange: (e) => setPriceRange([priceRange[0], Number(e.target.value)]),
                    className: "w-full accent-primary",
                    "data-ocid": "hotels.price_range_slider"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$5000+" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-foreground mb-3", children: "Star Rating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [5, 4, 3, 2].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleStar(star),
                    className: [
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors",
                      selectedStars.includes(star) ? "bg-primary/10 border-primary text-primary" : "bg-muted border-transparent text-foreground"
                    ].join(" "),
                    "data-ocid": `hotels.star_filter.${star}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Star,
                        {
                          className: [
                            "w-3 h-3",
                            selectedStars.includes(star) ? "fill-primary text-primary" : "fill-amber-400 text-amber-400"
                          ].join(" ")
                        }
                      ),
                      star,
                      " stars"
                    ]
                  },
                  star
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-foreground mb-3", children: "Amenities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: AMENITY_FILTERS.map((amenity) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: `amenity-${amenity.toLowerCase().replace(/ /g, "-")}`,
                    className: "flex items-center gap-3 cursor-pointer py-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: `amenity-${amenity.toLowerCase().replace(/ /g, "-")}`,
                          type: "checkbox",
                          checked: selectedAmenities.includes(amenity),
                          onChange: () => toggleAmenity(amenity),
                          className: "w-5 h-5 rounded accent-primary",
                          "data-ocid": `hotels.amenity_filter.${amenity.toLowerCase().replace(/ /g, "_")}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: amenity })
                    ]
                  },
                  amenity
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-0 bg-card border-t border-border p-4 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: clearFilters,
                  className: "flex-1 border border-border rounded-2xl py-3 text-sm font-semibold text-foreground",
                  "data-ocid": "hotels.clear_filters_button",
                  children: "Clear"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowFilterSheet(false),
                  className: "flex-[2] bg-primary text-white rounded-2xl py-3 text-sm font-bold",
                  "data-ocid": "hotels.apply_filters_button",
                  children: [
                    "Show ",
                    filtered.length,
                    " Hotels"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  HotelsPage as default
};
