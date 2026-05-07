import { mockDestinations } from "@/data/mockDestinations";
import { useTravelStore } from "@/store/travel-store";
import { useNavigate } from "@tanstack/react-router";
import { MapPin, Plane, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const featuredId = "dest-002"; // Bali as featured

const travelCategories = [
  { label: "All", emoji: "🌍" },
  { label: "Beach", emoji: "🏖️" },
  { label: "City", emoji: "🏙️" },
  { label: "Adventure", emoji: "🏔️" },
  { label: "Luxury", emoji: "✨" },
  { label: "Cultural", emoji: "🏛️" },
];

export default function ExplorePage() {
  const navigate = useNavigate();
  const { setHotelSearch } = useTravelStore();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured =
    mockDestinations.find((d) => d.id === featuredId) ?? mockDestinations[0];

  const gridDests = useMemo(() => {
    return mockDestinations
      .filter((d) => d.id !== featuredId)
      .filter((d) => {
        if (!search.trim()) return true;
        const q = search.toLowerCase();
        return (
          d.city.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q)
        );
      });
  }, [search]);

  const handleExplore = (dest: (typeof mockDestinations)[0]) => {
    setHotelSearch({ destination: dest.city });
    navigate({ to: "/hotels" });
  };

  return (
    <div className="bg-background min-h-screen pb-24" data-ocid="explore.page">
      {/* Blue Header */}
      <div
        className="bg-secondary px-4 pt-4 pb-5"
        data-ocid="explore.hero_section"
      >
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs text-secondary-foreground/70 font-medium">
            Discover the world
          </span>
        </div>
        <h1 className="text-xl font-display font-bold text-secondary-foreground">
          Explore Destinations
        </h1>

        {/* Search input */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search cities, countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full input-travel pl-9 text-sm bg-card text-foreground"
            data-ocid="explore.search_input"
          />
        </div>
      </div>

      <div className="px-4 space-y-5 mt-4">
        {/* Category pills */}
        <div
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
          data-ocid="explore.categories_section"
        >
          {travelCategories.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActiveCategory(cat.label)}
              className={[
                "flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full text-xs font-semibold border transition-smooth",
                activeCategory === cat.label
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border",
              ].join(" ")}
              data-ocid={`explore.category.${i + 1}`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured destination */}
        {!search && (
          <div data-ocid="explore.featured_section">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Featured
            </p>
            <button
              type="button"
              onClick={() => handleExplore(featured)}
              className="w-full relative rounded-2xl overflow-hidden h-44 block text-left shadow-md"
              data-ocid="explore.featured_card"
            >
              <img
                src={featured.image}
                alt={featured.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {featured.badge && (
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {featured.badge}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display font-bold text-white text-lg leading-tight">
                  {featured.city}, {featured.country}
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  {featured.tagline}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-xs text-white/80">
                    <Plane className="w-3 h-3" /> From {featured.flightFrom}
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Explore
                  </span>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Popular cities grid */}
        <div data-ocid="explore.destinations_section">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            {search ? `Results for "${search}"` : "Popular Cities"}
          </p>
          {gridDests.length === 0 ? (
            <div
              className="flex flex-col items-center py-10"
              data-ocid="explore.empty_state"
            >
              <p className="text-muted-foreground text-sm">
                No destinations found.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {gridDests.map((dest, i) => (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => handleExplore(dest)}
                  className="group bg-card rounded-2xl border border-border overflow-hidden text-left shadow-sm active:scale-95 transition-transform"
                  data-ocid={`explore.destination_card.${i + 1}`}
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.city}
                      className="w-full h-full object-cover group-active:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {dest.badge && (
                      <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {dest.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-2">
                      <p className="font-bold text-white text-xs truncate">
                        {dest.city}
                      </p>
                    </div>
                  </div>
                  <div className="px-2.5 py-2">
                    <p className="text-xs text-muted-foreground flex items-center gap-0.5 mb-1">
                      <MapPin className="w-2.5 h-2.5" />
                      {dest.country}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground italic truncate">
                        {dest.popularFor[0]}
                      </p>
                      <p className="text-xs font-bold text-primary shrink-0 ml-1">
                        {dest.flightFrom}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
