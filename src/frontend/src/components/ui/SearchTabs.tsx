import { Hotel, Plane } from "lucide-react";

interface SearchTabsProps {
  active: "flights" | "hotels";
  onChange: (tab: "flights" | "hotels") => void;
}

export function SearchTabs({ active, onChange }: SearchTabsProps) {
  return (
    <div className="inline-flex bg-muted rounded-xl p-1 gap-1" role="tablist">
      <button
        type="button"
        role="tab"
        aria-selected={active === "flights"}
        onClick={() => onChange("flights")}
        data-ocid="search.flights_tab"
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-smooth ${
          active === "flights"
            ? "bg-card text-primary shadow-sm border border-border"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Plane className="w-4 h-4" />
        Flights
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={active === "hotels"}
        onClick={() => onChange("hotels")}
        data-ocid="search.hotels_tab"
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-smooth ${
          active === "hotels"
            ? "bg-card text-primary shadow-sm border border-border"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Hotel className="w-4 h-4" />
        Hotels
      </button>
    </div>
  );
}
