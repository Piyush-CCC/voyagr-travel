export type CabinClass = "economy" | "premium_economy" | "business" | "first";
export type TripType = "one_way" | "round_trip" | "multi_city";
export type BookingStatus = "confirmed" | "pending" | "cancelled" | "completed";
export type PaymentStatus = "paid" | "pending" | "refunded";

export interface Airport {
  code: string;
  city: string;
  country: string;
  name: string;
}

export interface FlightSegment {
  departure: { airport: Airport; time: string; terminal?: string };
  arrival: { airport: Airport; time: string; terminal?: string };
  duration: string;
  flightNumber: string;
  aircraft: string;
}

export interface Flight {
  id: string;
  airline: string;
  airlineCode: string;
  airlineLogo: string;
  segments: FlightSegment[];
  stops: number;
  stopCities?: string[];
  totalDuration: string;
  price: number;
  originalPrice?: number;
  cabinClass: CabinClass;
  seatsLeft: number;
  baggage: { carry: string; checked: string };
  amenities: string[];
  refundable: boolean;
  mealIncluded: boolean;
  rating: number;
}

export interface HotelImage {
  url: string;
  alt: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
  bedType: string;
  size: number;
  price: number;
  originalPrice?: number;
  images: HotelImage[];
  amenities: string[];
  available: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  category: "location" | "cleanliness" | "service" | "value";
}

export interface Hotel {
  id: string;
  name: string;
  brand?: string;
  stars: number;
  rating: number;
  reviewCount: number;
  city: string;
  country: string;
  address: string;
  coordinates: { lat: number; lng: number };
  images: HotelImage[];
  description: string;
  shortDescription: string;
  amenities: string[];
  highlights: string[];
  rooms: Room[];
  priceFrom: number;
  tags: string[];
  distanceFromCenter: number;
  checkInTime: string;
  checkOutTime: string;
  reviews: Review[];
  featured?: boolean;
}

export interface Destination {
  id: string;
  city: string;
  country: string;
  code: string;
  image: string;
  tagline: string;
  flightFrom: string;
  popularFor: string[];
  badge?: string;
}

export interface Passenger {
  id: string;
  type: "adult" | "child" | "infant";
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  passportNumber?: string;
  nationality?: string;
  dateOfBirth?: string;
}

export interface Booking {
  id: string;
  type: "flight" | "hotel" | "bundle";
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  bookedAt: string;
  totalPrice: number;
  flight?: Flight;
  hotel?: Hotel;
  room?: Room;
  passengers?: Passenger[];
  checkIn?: string;
  checkOut?: string;
  guestCount?: number;
  nights?: number;
  confirmationCode: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  phone?: string;
  nationality?: string;
  passportNumber?: string;
  loyaltyPoints: number;
  tier: "bronze" | "silver" | "gold" | "platinum";
  savedCards: PaymentCard[];
  preferences: UserPreferences;
}

export interface PaymentCard {
  id: string;
  last4: string;
  brand: string;
  expiry: string;
  isDefault: boolean;
}

export interface UserPreferences {
  cabinClass: CabinClass;
  mealPreference: string;
  seatPreference: string;
  notifications: boolean;
}

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: { adults: number; children: number; infants: number };
  cabinClass: CabinClass;
  tripType: TripType;
}

export interface HotelSearchParams {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: { adults: number; children: number; rooms: number };
}

export interface SearchParams {
  activeTab: "flights" | "hotels";
  flight: FlightSearchParams;
  hotel: HotelSearchParams;
}
