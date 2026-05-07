import type { BookingStatus, PaymentStatus } from "@/types/travel";
import { Archive, CheckCircle2, Clock, XCircle } from "lucide-react";

type StatusType = BookingStatus | PaymentStatus;

interface StatusBadgeProps {
  status: StatusType;
  size?: "sm" | "md";
}

const statusConfig: Record<
  StatusType,
  {
    label: string;
    className: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  confirmed: {
    label: "Confirmed",
    className: "bg-green-50 text-green-700 border-green-200",
    Icon: CheckCircle2,
  },
  pending: {
    label: "Pending",
    className: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Icon: Clock,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-destructive/10 text-destructive border-destructive/20",
    Icon: XCircle,
  },
  completed: {
    label: "Completed",
    className: "bg-secondary/10 text-secondary border-secondary/20",
    Icon: Archive,
  },
  paid: {
    label: "Paid",
    className: "bg-green-50 text-green-700 border-green-200",
    Icon: CheckCircle2,
  },
  refunded: {
    label: "Refunded",
    className: "bg-muted text-muted-foreground border-border",
    Icon: Archive,
  },
};

export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const config = statusConfig[status];
  if (!config) return null;
  const { label, className, Icon } = config;
  const sizeClass =
    size === "sm" ? "text-xs px-2 py-0.5" : "text-xs px-2.5 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${className} ${sizeClass}`}
    >
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}
