import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const sizeClasses = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function RatingStars({
  rating,
  maxStars = 5,
  size = "sm",
  showValue = true,
}: RatingStarsProps) {
  const pct = Math.min(100, Math.max(0, (rating / maxStars) * 100));

  return (
    <span className="inline-flex items-center gap-1">
      <span className="relative inline-flex gap-0.5">
        {/* Background stars */}
        {[1, 2, 3, 4, 5].slice(0, maxStars).map((n) => (
          <Star
            key={`bg-${n}`}
            className={`${sizeClasses[size]} text-muted-foreground/20`}
          />
        ))}
        {/* Filled overlay */}
        <span
          className="absolute inset-0 overflow-hidden flex gap-0.5"
          style={{ width: `${pct}%` }}
        >
          {[1, 2, 3, 4, 5].slice(0, maxStars).map((n) => (
            <Star
              key={`filled-${n}`}
              className={`${sizeClasses[size]} fill-amber-400 text-amber-400 flex-shrink-0`}
            />
          ))}
        </span>
      </span>
      {showValue && (
        <span className="text-xs font-semibold text-foreground ml-0.5">
          {rating.toFixed(1)}
        </span>
      )}
    </span>
  );
}
