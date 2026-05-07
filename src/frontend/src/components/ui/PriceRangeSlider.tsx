interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  prefix?: string;
  step?: number;
  "data-ocid"?: string;
}

export function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
  prefix = "$",
  step = 50,
  "data-ocid": dataOcid,
}: PriceRangeSliderProps) {
  const [low, high] = value;
  const range = max - min;
  const lowPct = ((low - min) / range) * 100;
  const highPct = ((high - min) / range) * 100;

  return (
    <div className="space-y-3" data-ocid={dataOcid}>
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-foreground">
          {prefix}
          {low.toLocaleString()}
        </span>
        <span className="font-semibold text-foreground">
          {prefix}
          {high.toLocaleString()}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        {/* Track */}
        <div className="absolute left-0 right-0 h-1.5 rounded-full bg-muted">
          <div
            className="absolute h-full rounded-full bg-secondary"
            style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
          />
        </div>
        {/* Low thumb */}
        <input
          type="range"
          min={min}
          max={high - step}
          step={step}
          value={low}
          onChange={(e) => onChange([Number(e.target.value), high])}
          className="absolute w-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-secondary [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-card"
          aria-label="Minimum price"
        />
        {/* High thumb */}
        <input
          type="range"
          min={low + step}
          max={max}
          step={step}
          value={high}
          onChange={(e) => onChange([low, Number(e.target.value)])}
          className="absolute w-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-secondary [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-card"
          aria-label="Maximum price"
        />
      </div>
    </div>
  );
}
