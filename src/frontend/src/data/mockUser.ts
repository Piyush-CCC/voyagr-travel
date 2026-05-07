import type { User } from "@/types/travel";

export const mockUser: User = {
  id: "usr-001",
  firstName: "Alex",
  lastName: "Morgan",
  email: "alex.morgan@example.com",
  avatar: "AM",
  phone: "+1 (555) 234-5678",
  nationality: "American",
  passportNumber: "A12345678",
  loyaltyPoints: 24580,
  tier: "gold",
  savedCards: [
    {
      id: "card-1",
      last4: "4242",
      brand: "Visa",
      expiry: "12/27",
      isDefault: true,
    },
    {
      id: "card-2",
      last4: "5555",
      brand: "Mastercard",
      expiry: "09/26",
      isDefault: false,
    },
  ],
  preferences: {
    cabinClass: "business",
    mealPreference: "Standard",
    seatPreference: "Window",
    notifications: true,
  },
};
