import { useTravelStore } from "@/store/travel-store";
import type { Booking, Passenger } from "@/types/travel";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  CreditCard,
  Hotel,
  Lock,
  Plane,
  Tag,
  X,
} from "lucide-react";
import { useState } from "react";

const STEP_LABELS = ["Details", "Seats", "Payment", "Review"];

type FormErrors = Record<string, string>;

const SEAT_COLS = ["A", "B", "C", "D", "E", "F"];
const TAKEN_SEATS = new Set([
  "1A",
  "1C",
  "2B",
  "2E",
  "3A",
  "3F",
  "4C",
  "4D",
  "5B",
  "5E",
  "6A",
  "6C",
  "7B",
  "7D",
  "8A",
  "8F",
]);

function formatCardNumber(val: string) {
  return val
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(val: string) {
  const digits = val.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

export default function BookingPage() {
  const navigate = useNavigate();
  const {
    selectedFlight,
    selectedHotel,
    selectedRoom,
    searchParams,
    bookingStep,
    setBookingStep,
    addBooking,
    currentUser,
  } = useTravelStore();

  const passengerCount = searchParams.flight.passengers.adults || 1;

  const [passengers, setPassengers] = useState<Partial<Passenger>[]>(
    Array.from({ length: passengerCount }, (_, i) =>
      i === 0
        ? {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            phone: currentUser.phone,
            dateOfBirth: "1990-05-15",
          }
        : {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
          },
    ),
  );

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
  const [cardName, setCardName] = useState(
    `${currentUser.firstName} ${currentUser.lastName}`,
  );
  const [cardExpiry, setCardExpiry] = useState("12/27");
  const [cardCvv, setCardCvv] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [promoOpen, setPromoOpen] = useState(false);

  const nights = Math.max(
    1,
    Math.round(
      (new Date(searchParams.hotel.checkOut).getTime() -
        new Date(searchParams.hotel.checkIn).getTime()) /
        86400000,
    ),
  );

  const flightTotal = selectedFlight
    ? selectedFlight.price * passengerCount
    : 0;
  const hotelTotal = selectedRoom ? selectedRoom.price * nights : 0;
  const subtotal = flightTotal + hotelTotal;
  const taxes = Math.round(subtotal * 0.08);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + taxes - discount;

  const toggleSeat = (seat: string) => {
    if (TAKEN_SEATS.has(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : prev.length < passengerCount
          ? [...prev, seat]
          : [...prev.slice(1), seat],
    );
  };

  const updatePassenger = (
    idx: number,
    field: keyof Passenger,
    value: string,
  ) => {
    setPassengers((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
    if (formErrors[`${idx}-${field}`]) {
      setFormErrors((e) => {
        const n = { ...e };
        delete n[`${idx}-${field}`];
        return n;
      });
    }
  };

  const validateStep1 = () => {
    const errors: FormErrors = {};
    passengers.forEach((p, i) => {
      if (!p.firstName?.trim()) errors[`${i}-firstName`] = "Required";
      if (!p.lastName?.trim()) errors[`${i}-lastName`] = "Required";
      if (!p.email?.trim()) errors[`${i}-email`] = "Required";
      if (!p.phone?.trim()) errors[`${i}-phone`] = "Required";
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "VOYAGE10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try VOYAGE10");
      setPromoApplied(false);
    }
  };

  const handleConfirm = () => {
    const booking: Booking = {
      id: `bk-${Date.now()}`,
      type:
        selectedFlight && selectedHotel
          ? "bundle"
          : selectedFlight
            ? "flight"
            : "hotel",
      status: "confirmed",
      paymentStatus: "paid",
      bookedAt: new Date().toISOString(),
      totalPrice: total,
      confirmationCode: `VY2025-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      flight: selectedFlight ?? undefined,
      hotel: selectedHotel ?? undefined,
      room: selectedRoom ?? undefined,
      passengers: passengers.map((p, i) => ({
        id: `p-${i + 1}`,
        type: "adult" as const,
        ...p,
        firstName: p.firstName || "",
        lastName: p.lastName || "",
      })) as Passenger[],
      checkIn: searchParams.hotel.checkIn,
      checkOut: searchParams.hotel.checkOut,
      nights,
      guestCount: searchParams.hotel.guests.adults,
    };
    addBooking(booking);
    navigate({ to: "/booking/confirmation" });
  };

  if (!selectedFlight && !selectedHotel) {
    return (
      <div
        className="flex flex-col items-center justify-center px-6 py-16 text-center"
        data-ocid="booking.empty_state"
      >
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
          <Plane className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-lg font-display font-bold text-foreground mb-2">
          No booking selected
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Search for a flight or hotel to continue.
        </p>
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="mobile-button-primary"
          data-ocid="booking.go_home_button"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-muted/20">
      {/* Blue header */}
      <div
        className="flex-shrink-0 px-4 pt-3 pb-4"
        style={{ background: "#1B4FD8" }}
        data-ocid="booking.header"
      >
        <div className="flex items-center gap-3 mb-4">
          <button
            type="button"
            onClick={() =>
              bookingStep > 1
                ? setBookingStep((bookingStep - 1) as 1 | 2 | 3 | 4)
                : navigate({ to: "/" })
            }
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white"
            aria-label="Go back"
            data-ocid="booking.back_button"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-white font-display font-bold text-lg flex-1">
            {selectedFlight ? "Book Flight" : "Book Hotel"}
          </h1>
          <span className="text-white/70 text-sm">{bookingStep}/4</span>
        </div>

        {/* Step progress */}
        <div className="flex items-center gap-1" data-ocid="booking.stepper">
          {STEP_LABELS.map((label, i) => {
            const stepNum = i + 1;
            const isCompleted = bookingStep > stepNum;
            const isActive = bookingStep === stepNum;
            return (
              <div key={label} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className={[
                      "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-smooth",
                      isCompleted
                        ? "bg-white border-white text-blue-700"
                        : isActive
                          ? "border-transparent text-blue-700 shadow-sm"
                          : "border-white/30 text-white/50 bg-transparent",
                    ].join(" ")}
                    style={
                      isActive
                        ? {
                            background: "#FF6B35",
                            borderColor: "#FF6B35",
                            color: "white",
                          }
                        : {}
                    }
                    data-ocid={`booking.step_${stepNum}_indicator`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : stepNum}
                  </div>
                  <span
                    className={[
                      "text-[10px] font-medium leading-none",
                      isActive
                        ? "text-white"
                        : isCompleted
                          ? "text-white/90"
                          : "text-white/40",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div
                    className="h-0.5 flex-1 mx-1 rounded-full"
                    style={{
                      background: isCompleted
                        ? "#FF6B35"
                        : "rgba(255,255,255,0.25)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-4 px-4 pt-4 space-y-3">
        {/* ── STEP 1: Passenger Details ── */}
        {bookingStep === 1 && (
          <div data-ocid="booking.step1_traveler_details">
            {/* Trip mini-summary */}
            {selectedFlight && (
              <div className="mobile-card p-4 mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "#1B4FD8" }}
                  >
                    <Plane className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">
                    {selectedFlight.airline}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {selectedFlight.segments[0].flightNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">
                      {selectedFlight.segments[0].departure.airport.code}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selectedFlight.segments[0].departure.time}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col items-center px-3">
                    <p className="text-xs text-muted-foreground mb-1">
                      {selectedFlight.totalDuration}
                    </p>
                    <div className="w-full flex items-center gap-1">
                      <div className="flex-1 h-px bg-border" />
                      <Plane className="w-3 h-3 text-muted-foreground" />
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedFlight.stops === 0
                        ? "Direct"
                        : `${selectedFlight.stops} stop`}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">
                      {
                        selectedFlight.segments[
                          selectedFlight.segments.length - 1
                        ].arrival.airport.code
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {
                        selectedFlight.segments[
                          selectedFlight.segments.length - 1
                        ].arrival.time
                      }
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center border-t border-border pt-2">
                  <span className="text-xs text-muted-foreground">
                    {passengerCount} passenger{passengerCount > 1 ? "s" : ""}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: "#FF6B35" }}
                  >
                    ${flightTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {selectedHotel && selectedRoom && (
              <div className="mobile-card p-4 mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "#FF6B35" }}
                  >
                    <Hotel className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">
                    {selectedHotel.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedRoom.name} · {nights} nights · ${selectedRoom.price}
                  /night
                </p>
                <p
                  className="text-right font-bold text-sm mt-2"
                  style={{ color: "#FF6B35" }}
                >
                  ${hotelTotal.toLocaleString()}
                </p>
              </div>
            )}

            {/* Passenger form(s) */}
            {passengers.map((p, idx) => (
              <div
                key={`passenger-form-${idx + 1}`}
                className="mobile-card p-4"
                data-ocid={`booking.passenger_form.${idx + 1}`}
              >
                <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center font-bold"
                    style={{ background: "#1B4FD8" }}
                  >
                    {idx + 1}
                  </div>
                  {idx === 0 ? "Primary Passenger" : `Passenger ${idx + 1}`}
                </h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    {(
                      [
                        {
                          field: "firstName",
                          label: "First Name",
                          type: "text",
                          placeholder: "John",
                        },
                        {
                          field: "lastName",
                          label: "Last Name",
                          type: "text",
                          placeholder: "Doe",
                        },
                      ] as {
                        field: keyof Passenger;
                        label: string;
                        type: string;
                        placeholder: string;
                      }[]
                    ).map(({ field, label, type, placeholder }) => (
                      <div key={field}>
                        <label
                          htmlFor={`p${idx}-${field}`}
                          className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
                        >
                          {label}
                        </label>
                        <input
                          id={`p${idx}-${field}`}
                          type={type}
                          placeholder={placeholder}
                          value={(p[field] as string) || ""}
                          onChange={(e) =>
                            updatePassenger(idx, field, e.target.value)
                          }
                          className={[
                            "mobile-input text-sm",
                            formErrors[`${idx}-${field}`]
                              ? "border-destructive"
                              : "",
                          ].join(" ")}
                          data-ocid={`booking.${field}_input.${idx + 1}`}
                        />
                        {formErrors[`${idx}-${field}`] && (
                          <p
                            className="text-[10px] text-destructive mt-0.5"
                            data-ocid={`booking.${field}_field_error.${idx + 1}`}
                          >
                            {formErrors[`${idx}-${field}`]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  {(
                    [
                      {
                        field: "email",
                        label: "Email Address",
                        type: "email",
                        placeholder: "john@example.com",
                      },
                      {
                        field: "phone",
                        label: "Phone Number",
                        type: "tel",
                        placeholder: "+1 (555) 000-0000",
                      },
                      {
                        field: "dateOfBirth",
                        label: "Date of Birth",
                        type: "date",
                        placeholder: "",
                      },
                      {
                        field: "passportNumber",
                        label: "Passport No.",
                        type: "text",
                        placeholder: "A12345678",
                      },
                    ] as {
                      field: keyof Passenger;
                      label: string;
                      type: string;
                      placeholder: string;
                    }[]
                  ).map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label
                        htmlFor={`p${idx}-${field}`}
                        className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
                      >
                        {label}
                      </label>
                      <input
                        id={`p${idx}-${field}`}
                        type={type}
                        placeholder={placeholder}
                        value={(p[field] as string) || ""}
                        onChange={(e) =>
                          updatePassenger(idx, field, e.target.value)
                        }
                        className={[
                          "mobile-input text-sm",
                          formErrors[`${idx}-${field}`]
                            ? "border-destructive"
                            : "",
                        ].join(" ")}
                        data-ocid={`booking.${field}_input.${idx + 1}`}
                      />
                      {formErrors[`${idx}-${field}`] && (
                        <p
                          className="text-[10px] text-destructive mt-0.5"
                          data-ocid={`booking.${field}_field_error.${idx + 1}`}
                        >
                          {formErrors[`${idx}-${field}`]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                if (validateStep1()) setBookingStep(2);
              }}
              className="mobile-button-primary mt-2"
              style={{ background: "#FF6B35" }}
              data-ocid="booking.step1_continue_button"
            >
              Continue to Seat Selection{" "}
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {/* ── STEP 2: Seat Selection ── */}
        {bookingStep === 2 && (
          <div data-ocid="booking.step2_seat_room">
            {selectedFlight ? (
              <div className="mobile-card p-4">
                <h2 className="font-display font-bold text-foreground text-base mb-1">
                  Choose Your Seat
                </h2>
                <p className="text-xs text-muted-foreground mb-3">
                  Select up to {passengerCount} seat
                  {passengerCount > 1 ? "s" : ""}.
                </p>

                {/* Legend */}
                <div className="flex items-center gap-4 mb-4">
                  {[
                    { style: { background: "#e5e7eb" }, label: "Taken" },
                    {
                      style: {
                        background: "#dbeafe",
                        border: "1px solid #93c5fd",
                      },
                      label: "Available",
                    },
                    { style: { background: "#FF6B35" }, label: "Selected" },
                  ].map(({ style, label }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded" style={style} />
                      <span className="text-xs text-muted-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Seat map */}
                <div className="overflow-x-auto -mx-1 px-1">
                  {/* Column headers */}
                  <div className="flex gap-1 mb-1 pl-7">
                    {SEAT_COLS.map((col, ci) => (
                      <div key={col} className="flex items-center">
                        <div className="w-9 h-5 flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                          {col}
                        </div>
                        {ci === 2 && <div className="w-5" />}
                      </div>
                    ))}
                  </div>

                  {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
                    <div
                      key={`row-${row}`}
                      className="flex items-center gap-1 mb-1"
                    >
                      <div className="w-6 text-[10px] font-bold text-muted-foreground text-center flex-shrink-0">
                        {row}
                      </div>
                      {SEAT_COLS.map((col, ci) => {
                        const seatId = `${row}${col}`;
                        const isTaken = TAKEN_SEATS.has(seatId);
                        const isSelected = selectedSeats.includes(seatId);
                        return (
                          <div key={seatId} className="flex items-center">
                            <button
                              type="button"
                              disabled={isTaken}
                              onClick={() => toggleSeat(seatId)}
                              data-ocid={`booking.seat_${seatId}`}
                              className="w-9 h-9 rounded-t-lg text-[10px] font-semibold transition-smooth border flex items-center justify-center"
                              style={{
                                background: isTaken
                                  ? "#e5e7eb"
                                  : isSelected
                                    ? "#FF6B35"
                                    : "#dbeafe",
                                borderColor: isTaken
                                  ? "#d1d5db"
                                  : isSelected
                                    ? "#FF6B35"
                                    : "#93c5fd",
                                color: isTaken
                                  ? "#9ca3af"
                                  : isSelected
                                    ? "white"
                                    : "#1B4FD8",
                                cursor: isTaken ? "not-allowed" : "pointer",
                              }}
                            >
                              {seatId}
                            </button>
                            {ci === 2 && <div className="w-5" />}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {selectedSeats.length > 0 && (
                  <div
                    className="mt-3 p-3 rounded-xl border"
                    style={{ background: "#fff7f4", borderColor: "#ffceba" }}
                  >
                    <p className="text-sm font-medium text-foreground">
                      Selected:{" "}
                      <span className="font-bold" style={{ color: "#FF6B35" }}>
                        {selectedSeats.join(", ")}
                      </span>
                      {selectedSeats.length < passengerCount && (
                        <span className="text-xs text-muted-foreground ml-2">
                          ({passengerCount - selectedSeats.length} more needed)
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              selectedHotel &&
              selectedRoom && (
                <div className="mobile-card p-4">
                  <h2 className="font-display font-bold text-foreground text-base mb-3">
                    Room Confirmation
                  </h2>
                  <div
                    className="h-32 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #fde8dd 100%)",
                    }}
                  >
                    <Hotel className="w-10 h-10" style={{ color: "#1B4FD8" }} />
                  </div>
                  <p className="font-semibold text-foreground">
                    {selectedRoom.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {selectedRoom.bedType} · {selectedRoom.size} m²
                  </p>
                  <div className="flex justify-between items-center mt-3 border-t border-border pt-3">
                    <span className="text-sm text-muted-foreground">
                      {nights} nights × ${selectedRoom.price}
                    </span>
                    <span className="font-bold" style={{ color: "#FF6B35" }}>
                      ${hotelTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )
            )}

            <button
              type="button"
              onClick={() => setBookingStep(3)}
              className="mobile-button-primary mt-2"
              style={{ background: "#FF6B35" }}
              data-ocid="booking.step2_continue_button"
            >
              Continue to Payment <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {/* ── STEP 3: Payment ── */}
        {bookingStep === 3 && (
          <div data-ocid="booking.step3_payment">
            {/* Card inputs */}
            <div className="mobile-card p-4 mb-3">
              <h2 className="font-display font-bold text-foreground text-base mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" style={{ color: "#1B4FD8" }} />
                Payment Details
              </h2>

              {/* Card brand chips */}
              <div className="flex items-center gap-2 mb-3">
                {["VISA", "MC", "AMEX", "JCB"].map((b) => (
                  <div
                    key={b}
                    className="px-2 py-1 border border-border rounded text-[10px] font-bold text-muted-foreground bg-muted/30"
                  >
                    {b}
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Lock className="w-3 h-3 text-green-500" /> Secure
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="card-number"
                    className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
                  >
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      id="card-number"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      maxLength={19}
                      className="mobile-input text-sm pr-10"
                      data-ocid="booking.card_number_input"
                    />
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="card-holder"
                    className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
                  >
                    Cardholder Name
                  </label>
                  <input
                    id="card-holder"
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="mobile-input text-sm"
                    data-ocid="booking.card_name_input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="card-expiry"
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
                    >
                      Expiry (MM/YY)
                    </label>
                    <input
                      id="card-expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) =>
                        setCardExpiry(formatExpiry(e.target.value))
                      }
                      maxLength={5}
                      className="mobile-input text-sm"
                      data-ocid="booking.card_expiry_input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="card-cvv"
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
                    >
                      CVV
                    </label>
                    <input
                      id="card-cvv"
                      type="password"
                      placeholder="•••"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.slice(0, 4))}
                      maxLength={4}
                      className="mobile-input text-sm"
                      data-ocid="booking.card_cvv_input"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Promo code */}
            <div className="mobile-card p-4 mb-3">
              <button
                type="button"
                onClick={() => setPromoOpen(!promoOpen)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground"
                data-ocid="booking.promo_toggle_button"
              >
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" style={{ color: "#FF6B35" }} />
                  Apply Promo Code
                </span>
                <ChevronRight
                  className={[
                    "w-4 h-4 text-muted-foreground transition-smooth",
                    promoOpen ? "rotate-90" : "",
                  ].join(" ")}
                />
              </button>
              {promoOpen && (
                <div
                  className="mt-3 flex gap-2"
                  data-ocid="booking.promo_section"
                >
                  <input
                    type="text"
                    placeholder="e.g. VOYAGE10"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      setPromoError("");
                    }}
                    className="mobile-input text-sm flex-1"
                    data-ocid="booking.promo_code_input"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-3 rounded-lg text-sm font-semibold text-white transition-smooth"
                    style={{ background: "#1B4FD8" }}
                    data-ocid="booking.apply_promo_button"
                  >
                    Apply
                  </button>
                </div>
              )}
              {promoApplied && (
                <p
                  className="text-green-600 text-xs mt-2 flex items-center gap-1"
                  data-ocid="booking.promo_success_state"
                >
                  <Check className="w-3.5 h-3.5" /> VOYAGE10 applied — 10% off!
                </p>
              )}
              {promoError && (
                <p
                  className="text-destructive text-xs mt-2"
                  data-ocid="booking.promo_error_state"
                >
                  {promoError}
                </p>
              )}
            </div>

            {/* Order summary */}
            <div className="mobile-card p-4 mb-3">
              <h3 className="font-semibold text-sm text-foreground mb-3">
                Order Summary
              </h3>
              <div className="space-y-2 text-sm">
                {selectedFlight && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-xs">
                      {selectedFlight.airline} × {passengerCount} pax
                    </span>
                    <span className="font-medium">
                      ${flightTotal.toLocaleString()}
                    </span>
                  </div>
                )}
                {selectedHotel && selectedRoom && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-xs">
                      {selectedHotel.name} × {nights} nights
                    </span>
                    <span className="font-medium">
                      ${hotelTotal.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Taxes & fees (8%)</span>
                  <span>${taxes.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-xs text-green-600 font-medium">
                    <span>Promo VOYAGE10 (−10%)</span>
                    <span>−${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-base border-t border-border pt-2 mt-1">
                  <span>Total Due</span>
                  <span style={{ color: "#FF6B35" }}>
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 px-1">
              <Lock className="w-3 h-3 text-green-500 flex-shrink-0" />
              Protected with 256-bit SSL encryption
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              className="mobile-button-primary font-bold text-base"
              style={{ background: "#FF6B35" }}
              data-ocid="booking.pay_now_button"
            >
              <Lock className="w-4 h-4 mr-2" /> Pay Now · $
              {total.toLocaleString()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
