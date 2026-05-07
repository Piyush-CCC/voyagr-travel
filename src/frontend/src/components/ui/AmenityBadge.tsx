import {
  Accessibility,
  Baby,
  Car,
  Coffee,
  Dog,
  Dumbbell,
  Shield,
  Star,
  Tv,
  Utensils,
  UtensilsCrossed,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AmenityBadgeProps {
  amenity: string;
  size?: "sm" | "md";
  variant?: "pill" | "icon-only" | "full";
}

const amenityMap: Record<
  string,
  { Icon: LucideIcon; label: string; color: string }
> = {
  "Wi-Fi": { Icon: Wifi, label: "Wi-Fi", color: "text-secondary" },
  Pool: { Icon: Waves, label: "Pool", color: "text-blue-500" },
  "Fitness Center": { Icon: Dumbbell, label: "Fitness", color: "text-primary" },
  "Fine Dining": {
    Icon: Utensils,
    label: "Fine Dining",
    color: "text-amber-600",
  },
  Parking: { Icon: Car, label: "Parking", color: "text-muted-foreground" },
  "Air Conditioning": { Icon: Wind, label: "AC", color: "text-sky-500" },
  Breakfast: { Icon: Coffee, label: "Breakfast", color: "text-amber-700" },
  TV: { Icon: Tv, label: "TV", color: "text-muted-foreground" },
  "Pet Friendly": { Icon: Dog, label: "Pets OK", color: "text-amber-600" },
  "Kids Club": { Icon: Baby, label: "Kids Club", color: "text-pink-500" },
  Accessible: {
    Icon: Accessibility,
    label: "Accessible",
    color: "text-secondary",
  },
  Spa: { Icon: Star, label: "Spa", color: "text-primary" },
  Restaurant: {
    Icon: UtensilsCrossed,
    label: "Restaurant",
    color: "text-amber-700",
  },
  Security: { Icon: Shield, label: "Security", color: "text-green-600" },
};

export function AmenityBadge({
  amenity,
  size = "sm",
  variant = "pill",
}: AmenityBadgeProps) {
  const config = amenityMap[amenity];
  const Icon = config?.Icon ?? Wifi;
  const label = config?.label ?? amenity;
  const color = config?.color ?? "text-muted-foreground";

  if (variant === "icon-only") {
    return (
      <span title={label} className={`inline-flex ${color}`}>
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-muted border border-border font-medium text-foreground ${
        size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1"
      }`}
    >
      <Icon
        className={`${size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} ${color}`}
      />
      {variant === "full" ? label : label}
    </span>
  );
}
