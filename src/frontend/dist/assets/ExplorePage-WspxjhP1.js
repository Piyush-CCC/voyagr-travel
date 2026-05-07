import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, P as Plane } from "./index-C4w8056_.js";
import { m as mockDestinations } from "./mockDestinations-B8CpvURw.js";
import { u as useTravelStore } from "./travel-store-CJpaOUdH.js";
import { S as Sparkles } from "./sparkles-CwItkHVH.js";
import { S as Search } from "./search-CsGO8VHe.js";
import { M as MapPin } from "./map-pin-RDlHCuLw.js";
const featuredId = "dest-002";
const travelCategories = [
  { label: "All", emoji: "🌍" },
  { label: "Beach", emoji: "🏖️" },
  { label: "City", emoji: "🏙️" },
  { label: "Adventure", emoji: "🏔️" },
  { label: "Luxury", emoji: "✨" },
  { label: "Cultural", emoji: "🏛️" }
];
function ExplorePage() {
  const navigate = useNavigate();
  const { setHotelSearch } = useTravelStore();
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const featured = mockDestinations.find((d) => d.id === featuredId) ?? mockDestinations[0];
  const gridDests = reactExports.useMemo(() => {
    return mockDestinations.filter((d) => d.id !== featuredId).filter((d) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return d.city.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
    });
  }, [search]);
  const handleExplore = (dest) => {
    setHotelSearch({ destination: dest.city });
    navigate({ to: "/hotels" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", "data-ocid": "explore.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-secondary px-4 pt-4 pb-5",
        "data-ocid": "explore.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-secondary-foreground/70 font-medium", children: "Discover the world" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-secondary-foreground", children: "Explore Destinations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search cities, countries...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "w-full input-travel pl-9 text-sm bg-card text-foreground",
                "data-ocid": "explore.search_input"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 space-y-5 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide",
          "data-ocid": "explore.categories_section",
          children: travelCategories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat.label),
              className: [
                "flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full text-xs font-semibold border transition-smooth",
                activeCategory === cat.label ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border"
              ].join(" "),
              "data-ocid": `explore.category.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.emoji }),
                cat.label
              ]
            },
            cat.label
          ))
        }
      ),
      !search && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "explore.featured_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => handleExplore(featured),
            className: "w-full relative rounded-2xl overflow-hidden h-44 block text-left shadow-md",
            "data-ocid": "explore.featured_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: featured.image,
                  alt: featured.city,
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
              featured.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-bold px-2.5 py-1 rounded-full", children: featured.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-white text-lg leading-tight", children: [
                  featured.city,
                  ", ",
                  featured.country
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs mt-0.5", children: featured.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-white/80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3 h-3" }),
                    " From ",
                    featured.flightFrom
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full", children: "Explore" })
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "explore.destinations_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: search ? `Results for "${search}"` : "Popular Cities" }),
        gridDests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-col items-center py-10",
            "data-ocid": "explore.empty_state",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No destinations found." })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: gridDests.map((dest, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => handleExplore(dest),
            className: "group bg-card rounded-2xl border border-border overflow-hidden text-left shadow-sm active:scale-95 transition-transform",
            "data-ocid": `explore.destination_card.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: dest.image,
                    alt: dest.city,
                    className: "w-full h-full object-cover group-active:scale-105 transition-transform duration-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
                dest.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full", children: dest.badge }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 px-2.5 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-xs truncate", children: dest.city }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-0.5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-2.5 h-2.5" }),
                  dest.country
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic truncate", children: dest.popularFor[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-primary shrink-0 ml-1", children: dest.flightFrom })
                ] })
              ] })
            ]
          },
          dest.id
        )) })
      ] })
    ] })
  ] });
}
export {
  ExplorePage as default
};
