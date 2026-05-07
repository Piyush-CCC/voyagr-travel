import { Switch } from "@/components/ui/switch";
import { useTravelStore } from "@/store/travel-store";
import {
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  Globe,
  HelpCircle,
  Lock,
  LogOut,
  Phone,
  Plus,
  Shield,
  Star,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const TIER_CONFIG: Record<
  string,
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    next: string;
    nextPts: number;
  }
> = {
  bronze: {
    label: "Bronze",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    next: "Silver",
    nextPts: 10000,
  },
  silver: {
    label: "Silver",
    color: "text-slate-500",
    bg: "bg-slate-50",
    border: "border-slate-200",
    next: "Gold",
    nextPts: 25000,
  },
  gold: {
    label: "Gold",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    next: "Platinum",
    nextPts: 50000,
  },
  platinum: {
    label: "Platinum",
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20",
    next: "—",
    nextPts: 0,
  },
};

// ── Settings row (iOS-style) ──────────────────────────────────────────────────
function SettingsRow({
  icon: Icon,
  iconBg,
  label,
  value,
  chevron = true,
  danger = false,
  right,
  onClick,
  ocid,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  label: string;
  value?: string;
  chevron?: boolean;
  danger?: boolean;
  right?: React.ReactNode;
  onClick?: () => void;
  ocid?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-muted/60 transition-colors"
      data-ocid={ocid}
    >
      <div
        className={[
          "w-8 h-8 rounded-xl flex items-center justify-center shrink-0",
          iconBg,
        ].join(" ")}
      >
        <Icon
          className={[
            "w-4 h-4",
            danger ? "text-destructive" : "text-foreground",
          ].join(" ")}
        />
      </div>
      <span
        className={[
          "flex-1 text-sm font-medium text-left",
          danger ? "text-destructive" : "text-foreground",
        ].join(" ")}
      >
        {label}
      </span>
      {value && (
        <span className="text-xs text-muted-foreground mr-1">{value}</span>
      )}
      {right}
      {chevron && !right && (
        <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0" />
      )}
    </button>
  );
}

function SectionBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden divide-y divide-border shadow-sm">
      {children}
    </div>
  );
}

// ── Edit Profile Sheet ────────────────────────────────────────────────────────
function EditSheet({
  open,
  onClose,
  form,
  onChange,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  form: { firstName: string; lastName: string; email: string; phone: string };
  onChange: (k: string, v: string) => void;
  onSave: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end"
      data-ocid="profile.edit_modal"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card rounded-t-3xl w-full max-w-[390px] mx-auto p-6 pb-8">
        <div className="w-12 h-1 bg-border rounded-full mx-auto mb-5" />
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold font-display text-foreground">
            Edit Profile
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
            data-ocid="profile.close_button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="edit-fname"
                className="text-xs text-muted-foreground font-medium mb-1 block"
              >
                First Name
              </label>
              <input
                id="edit-fname"
                value={form.firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
                className="w-full input-travel text-sm"
                data-ocid="profile.edit_firstname_input"
              />
            </div>
            <div>
              <label
                htmlFor="edit-lname"
                className="text-xs text-muted-foreground font-medium mb-1 block"
              >
                Last Name
              </label>
              <input
                id="edit-lname"
                value={form.lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
                className="w-full input-travel text-sm"
                data-ocid="profile.edit_lastname_input"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="edit-email"
              className="text-xs text-muted-foreground font-medium mb-1 block"
            >
              Email
            </label>
            <input
              id="edit-email"
              type="email"
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
              className="w-full input-travel text-sm"
              data-ocid="profile.edit_email_input"
            />
          </div>
          <div>
            <label
              htmlFor="edit-phone"
              className="text-xs text-muted-foreground font-medium mb-1 block"
            >
              Phone
            </label>
            <input
              id="edit-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className="w-full input-travel text-sm"
              data-ocid="profile.edit_phone_input"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 border border-border rounded-xl text-sm font-semibold text-foreground"
            data-ocid="profile.cancel_button"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold"
            data-ocid="profile.save_button"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const { currentUser, setCurrentUser } = useTravelStore();

  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone ?? "",
  });
  const [notifs, setNotifs] = useState({
    email: true,
    sms: false,
    deals: true,
    reminders: true,
  });
  const [cards, setCards] = useState(currentUser.savedCards);

  const tier = TIER_CONFIG[currentUser.tier] ?? TIER_CONFIG.gold;
  const pointsProgress =
    tier.nextPts > 0
      ? Math.min(100, (currentUser.loyaltyPoints / tier.nextPts) * 100)
      : 100;

  const handleSave = () => {
    setCurrentUser({ ...currentUser, ...editForm });
    setEditOpen(false);
  };

  const initials = `${currentUser.firstName[0]}${currentUser.lastName[0]}`;

  return (
    <div className="bg-background min-h-screen pb-24" data-ocid="profile.page">
      <EditSheet
        open={editOpen}
        onClose={() => setEditOpen(false)}
        form={editForm}
        onChange={(k, v) => setEditForm((f) => ({ ...f, [k]: v }))}
        onSave={handleSave}
      />

      {/* Blue Header */}
      <div
        className="bg-secondary px-4 pt-4 pb-8"
        data-ocid="profile.header_section"
      >
        <h1 className="text-xl font-display font-bold text-secondary-foreground mb-4">
          Profile
        </h1>
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground text-xl font-display font-bold shadow-lg">
              {initials}
            </div>
            <div
              className={[
                "absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-[11px] font-bold border shadow-sm",
                tier.bg,
                tier.color,
                tier.border,
              ].join(" ")}
            >
              {tier.label}
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-secondary-foreground truncate">
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p className="text-xs text-secondary-foreground/70 truncate">
              {currentUser.email}
            </p>
            <p className="text-xs text-secondary-foreground/60 mt-0.5">
              Member since Jan 2021
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setEditForm({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                phone: currentUser.phone ?? "",
              });
              setEditOpen(true);
            }}
            className="shrink-0 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-xl"
            data-ocid="profile.edit_profile_button"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="px-4 space-y-4 -mt-2">
        {/* Loyalty Card */}
        <div
          className={[
            "rounded-2xl border p-4 shadow-sm",
            tier.bg,
            tier.border,
          ].join(" ")}
          data-ocid="profile.loyalty_card"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Star className={["w-5 h-5", tier.color].join(" ")} />
              <p
                className={["font-bold font-display text-sm", tier.color].join(
                  " ",
                )}
              >
                {tier.label} Member
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold font-display text-foreground">
                {currentUser.loyaltyPoints.toLocaleString()}
              </p>
              <p className="text-[11px] text-muted-foreground">points</p>
            </div>
          </div>
          {tier.nextPts > 0 && (
            <div>
              <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5">
                <span>{tier.label}</span>
                <span>
                  {tier.next} —{" "}
                  {(tier.nextPts - currentUser.loyaltyPoints).toLocaleString()}{" "}
                  pts to go
                </span>
              </div>
              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${pointsProgress}%` }}
                />
              </div>
            </div>
          )}
          {tier.nextPts === 0 && (
            <div className="flex items-center gap-1 text-xs text-primary">
              <Check className="w-3.5 h-3.5" /> Highest tier reached! 🎉
            </div>
          )}
        </div>

        {/* Personal Info */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Personal Info
          </p>
          <SectionBlock>
            <SettingsRow
              icon={User}
              iconBg="bg-secondary/10"
              label="Full Name"
              value={`${currentUser.firstName} ${currentUser.lastName}`}
              ocid="profile.personal_info_name"
            />
            <SettingsRow
              icon={Globe}
              iconBg="bg-secondary/10"
              label="Email"
              value={currentUser.email}
              ocid="profile.personal_info_email"
            />
            <SettingsRow
              icon={Phone}
              iconBg="bg-secondary/10"
              label="Phone"
              value={currentUser.phone ?? "Not set"}
              ocid="profile.personal_info_phone"
            />
          </SectionBlock>
        </div>

        {/* Payment Methods */}
        <div data-ocid="profile.payment_card">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Payment
          </p>
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className="flex items-center gap-3 px-4 py-3.5 border-b border-border last:border-0"
                data-ocid={`profile.payment_card.${i + 1}`}
              >
                <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {card.brand} ···· {card.last4}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expires {card.expiry}
                  </p>
                </div>
                {card.isDefault && (
                  <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Default
                  </span>
                )}
                <button
                  type="button"
                  onClick={() =>
                    setCards(cards.filter((c) => c.id !== card.id))
                  }
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
                  aria-label="Remove card"
                  data-ocid={`profile.remove_card_button.${i + 1}`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="w-full flex items-center gap-3 px-4 py-3.5 text-primary"
              data-ocid="profile.add_card_button"
            >
              <div className="w-8 h-8 rounded-xl border-2 border-dashed border-primary/40 flex items-center justify-center shrink-0">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Add New Card</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div data-ocid="profile.notifications_card">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Notifications
          </p>
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm divide-y divide-border">
            {[
              {
                id: "email",
                label: "Email Notifications",
                key: "email" as const,
              },
              { id: "sms", label: "SMS Alerts", key: "sms" as const },
              { id: "deals", label: "Deal Alerts", key: "deals" as const },
              {
                id: "reminders",
                label: "Trip Reminders",
                key: "reminders" as const,
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-4 py-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <span className="flex-1 text-sm font-medium text-foreground">
                  {item.label}
                </span>
                <Switch
                  id={item.id}
                  checked={notifs[item.key]}
                  onCheckedChange={(v) =>
                    setNotifs({ ...notifs, [item.key]: v })
                  }
                  data-ocid={`profile.${item.key}_notif_toggle`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Settings links */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Account
          </p>
          <SectionBlock>
            <SettingsRow
              icon={Lock}
              iconBg="bg-muted"
              label="Change Password"
              ocid="profile.change_password_button"
            />
            <SettingsRow
              icon={Shield}
              iconBg="bg-muted"
              label="Security & 2FA"
              ocid="profile.security_button"
            />
            <SettingsRow
              icon={HelpCircle}
              iconBg="bg-muted"
              label="Help & Support"
              ocid="profile.help_button"
            />
          </SectionBlock>
        </div>

        {/* Sign Out */}
        <div>
          <SectionBlock>
            <SettingsRow
              icon={LogOut}
              iconBg="bg-destructive/10"
              label="Sign Out"
              danger
              chevron={false}
              ocid="profile.logout_button"
            />
          </SectionBlock>
        </div>
      </div>
    </div>
  );
}
