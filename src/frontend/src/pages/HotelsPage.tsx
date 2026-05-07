import { mockHotels } from "@/data/mockHotels";
import { useTravelStore } from "@/store/travel-store";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type SortBy = "best_value" | "price_asc" | "price_desc" | "rating";
type QuickFilter =
  | "all"
  | "best_value"
  | "luxury"
  | "budget"
  | "pool"
  | "breakfast";

const QUICK_FILTERS: { id: QuickFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "best_value", label: "Best Value" },
  { id: "luxury", label: "Luxury" },
  { id: "budget", label: "Budget" },
  { id: "pool", label: "Pool" },
  { id: "breakfast", label: "Breakfast" },
];

const SORT_OPTIONS: { value: SortBy; label: string }[] = [
  { value: "best_value", label: "Best Match" },
  { value: "price_asc", label: "Price: Low → High" },
  { value: "price_desc", label: "Price: High → Low" },
  { value: "rating", label: "Top Rated" },
];

const AMENITY_FILTERS = [
  "Wi-Fi",
  "Parking",
  "Pool",
  "Fitness Center",
  "Restaurant",
  "Spa",
  "Airport Shuttle",
  "Pet Friendly",
];

const _REVIEW_LABEL: Record<string, string> = {
  "4.9": "Exceptional",
  "4.8": "Excellent",
  "4.7": "Very Good",
  "4.6": "Very Good",
};

function getReviewLabel(rating: number) {
  if (rating >= 4.9) return "Exceptional";
  if (rating >= 4.7) return "Excellent";
  if (rating >= 4.5) return "Very Good";
  return "Good";
}

export default function HotelsPage() {
  const navigate = useNavigate();
  const { searchParams, setSelectedHotel } = useTravelStore();
  const { hotel } = searchParams;

  const [activeFilter, setActiveFilter] = useState<QuickFilter>("all");
  const [sortBy, setSortBy] = useState<SortBy>("best_value");
  const [showSortSheet, setShowSortSheet] = useState(false);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleStar = (star: number) =>
    setSelectedStars((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star],
    );

  const toggleAmenity = (amenity: string) =>
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );

  const clearFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedStars([]);
    setSelectedAmenities([]);
  };

  const filtered = useMemo(() => {
    let res = mockHotels.filter((h) => {
      if (h.priceFrom < priceRange[0] || h.priceFrom > priceRange[1])
        return false;
      if (selectedStars.length > 0 && !selectedStars.includes(h.stars))
        return false;
      if (
        selectedAmenities.length > 0 &&
        !selectedAmenities.every((a) => h.amenities.includes(a))
      )
        return false;

      if (activeFilter === "luxury") return h.priceFrom >= 1000;
      if (activeFilter === "budget") return h.priceFrom <= 700;
      if (activeFilter === "pool")
        return h.amenities.some((a) => a.toLowerCase().includes("pool"));
      if (activeFilter === "breakfast")
        return h.amenities.some(
          (a) =>
            a.toLowerCase().includes("dining") ||
            a.toLowerCase().includes("restaurant"),
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
        (a, b) =>
          b.rating * 0.6 -
          b.priceFrom * 0.001 -
          (a.rating * 0.6 - a.priceFrom * 0.001),
      );

    return res;
  }, [activeFilter, priceRange, selectedStars, selectedAmenities, sortBy]);

  const handleSelect = (h: (typeof mockHotels)[0]) => {
    setSelectedHotel(h);
    navigate({ to: "/hotels/$id", params: { id: h.id } });
  };

  const currentSort = SORT_OPTIONS.find((o) => o.value === sortBy)!;
  const hasActiveFilters =
    priceRange[1] < 5000 ||
    selectedStars.length > 0 ||
    selectedAmenities.length > 0;

  return (
    <div
      className="bg-background min-h-screen flex flex-col"
      data-ocid="hotels.page"
    >
      {/* Blue Sticky Header */}
      <div
        className="sticky top-0 z-30 bg-secondary text-secondary-foreground"
        data-ocid="hotels.header"
      >
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-3 mb-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 active:bg-white/25"
              aria-label="Go back"
              data-ocid="hotels.back_button"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-white font-display font-bold text-lg leading-tight">
                {hotel.destination}
              </h1>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-white/75 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {hotel.checkIn} – {hotel.checkOut}
                </span>
                <span className="text-white/75 text-xs flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {hotel.guests.adults} guest
                  {hotel.guests.adults > 1 ? "s" : ""}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 active:bg-white/25"
              aria-label="Search"
              data-ocid="hotels.search_button"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Quick filter chips */}
          <div
            className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none -mx-1 px-1"
            data-ocid="hotels.filter_chips"
          >
            {QUICK_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                className={[
                  "flex-shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors",
                  activeFilter === id
                    ? "bg-primary border-primary text-white"
                    : "bg-white/10 border-white/20 text-white/90",
                ].join(" ")}
                data-ocid={`hotels.quick_filter.${id}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort + Filter bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-border">
          <span className="text-xs text-muted-foreground">
            <span className="font-bold text-secondary">{filtered.length}</span>{" "}
            hotels found
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSortSheet(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-secondary border border-secondary/30 rounded-full px-3 py-1.5 bg-secondary/5"
              data-ocid="hotels.sort_button"
            >
              {currentSort.label} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setShowFilterSheet(true)}
              className={[
                "flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 border",
                hasActiveFilters
                  ? "text-primary border-primary/40 bg-primary/10"
                  : "text-foreground border-border bg-card",
              ].join(" ")}
              data-ocid="hotels.filter_button"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter{hasActiveFilters ? " ·" : ""}
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hotel cards list */}
      <div
        className="flex-1 px-4 py-4 space-y-4"
        data-ocid="hotels.results_list"
      >
        {filtered.slice(0, 6).map((h, i) => (
          <button
            key={h.id}
            type="button"
            onClick={() => handleSelect(h)}
            className="w-full text-left bg-card rounded-2xl overflow-hidden shadow-md active:shadow-sm transition-shadow border border-border"
            data-ocid={`hotels.hotel_card.${i + 1}`}
          >
            {/* Hotel image */}
            <div className="relative h-48 overflow-hidden">
              {h.images[0]?.url ? (
                <img
                  src={h.images[0].url}
                  alt={h.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-secondary/40" />
                </div>
              )}
              {/* Review score badge */}
              <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-xl flex items-center gap-1">
                <Star className="w-3 h-3 fill-white text-white" />
                {h.rating.toFixed(1)}
              </div>
              {h.featured && (
                <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-xl">
                  Featured
                </div>
              )}
            </div>

            {/* Hotel info */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground text-base leading-tight line-clamp-1">
                    {h.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].slice(0, h.stars).map((n) => (
                      <Star
                        key={n}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      {h.stars}-star hotel
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-xl font-bold text-primary">
                    ${h.priceFrom.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">/night</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-secondary" />
                <span className="line-clamp-1">
                  {h.city}, {h.country}
                </span>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <span className="bg-secondary/10 text-secondary text-xs font-bold px-2 py-0.5 rounded-lg">
                    {h.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {getReviewLabel(h.rating)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    · {h.reviewCount.toLocaleString()} reviews
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16" data-ocid="hotels.empty_state">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-2">
              No hotels found
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Try adjusting your filters
            </p>
            <button
              type="button"
              onClick={() => {
                clearFilters();
                setActiveFilter("all");
              }}
              className="bg-primary text-white font-semibold px-6 py-2.5 rounded-full text-sm"
              data-ocid="hotels.reset_filters_button"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="h-4" />
      </div>

      {/* Sort Bottom Sheet */}
      {showSortSheet && (
        <div className="fixed inset-0 z-50" data-ocid="hotels.sort_sheet">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40 w-full"
            aria-label="Close sort sheet"
            onClick={() => setShowSortSheet(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <h3 className="font-display font-bold text-foreground text-base">
                Sort By
              </h3>
              <button
                type="button"
                onClick={() => setShowSortSheet(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                aria-label="Close"
                data-ocid="hotels.sort_sheet.close_button"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="px-4 pb-8">
              {SORT_OPTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setSortBy(value);
                    setShowSortSheet(false);
                  }}
                  className={[
                    "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl mb-1.5 text-sm font-medium transition-colors",
                    sortBy === value
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-muted",
                  ].join(" ")}
                  data-ocid={`hotels.sort_option.${value}`}
                >
                  <span>{label}</span>
                  {sortBy === value && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter Bottom Sheet */}
      {showFilterSheet && (
        <div className="fixed inset-0 z-50" data-ocid="hotels.filter_sheet">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40 w-full"
            aria-label="Close filter sheet"
            onClick={() => setShowFilterSheet(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-card flex items-center justify-between px-5 pt-5 pb-3 border-b border-border">
              <h3 className="font-display font-bold text-foreground text-base">
                Filters
              </h3>
              <button
                type="button"
                onClick={() => setShowFilterSheet(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                aria-label="Close"
                data-ocid="hotels.filter_sheet.close_button"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-foreground">
                    Price per night
                  </h4>
                  <span className="text-xs text-primary font-semibold">
                    ${priceRange[0]} – $
                    {priceRange[1] === 5000 ? "5000+" : priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={50}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-primary"
                  data-ocid="hotels.price_range_slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$0</span>
                  <span>$5000+</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-3">
                  Star Rating
                </h4>
                <div className="flex flex-wrap gap-2">
                  {([5, 4, 3, 2] as const).map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => toggleStar(star)}
                      className={[
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors",
                        selectedStars.includes(star)
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-muted border-transparent text-foreground",
                      ].join(" ")}
                      data-ocid={`hotels.star_filter.${star}`}
                    >
                      <Star
                        className={[
                          "w-3 h-3",
                          selectedStars.includes(star)
                            ? "fill-primary text-primary"
                            : "fill-amber-400 text-amber-400",
                        ].join(" ")}
                      />
                      {star} stars
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-3">
                  Amenities
                </h4>
                <div className="space-y-2">
                  {AMENITY_FILTERS.map((amenity) => (
                    <label
                      key={amenity}
                      htmlFor={`amenity-${amenity.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center gap-3 cursor-pointer py-1"
                    >
                      <input
                        id={`amenity-${amenity.toLowerCase().replace(/ /g, "-")}`}
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="w-5 h-5 rounded accent-primary"
                        data-ocid={`hotels.amenity_filter.${amenity.toLowerCase().replace(/ /g, "_")}`}
                      />
                      <span className="text-sm text-foreground">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-card border-t border-border p-4 flex gap-3">
              <button
                type="button"
                onClick={clearFilters}
                className="flex-1 border border-border rounded-2xl py-3 text-sm font-semibold text-foreground"
                data-ocid="hotels.clear_filters_button"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setShowFilterSheet(false)}
                className="flex-[2] bg-primary text-white rounded-2xl py-3 text-sm font-bold"
                data-ocid="hotels.apply_filters_button"
              >
                Show {filtered.length} Hotels
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
