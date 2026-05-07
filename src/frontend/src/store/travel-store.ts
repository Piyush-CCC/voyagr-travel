import { mockUser } from "@/data/mockUser";
import type {
  Booking,
  Flight,
  FlightSearchParams,
  Hotel,
  HotelSearchParams,
  Room,
  SearchParams,
  User,
} from "@/types/travel";
import { create } from "zustand";

interface TravelState {
  // Search
  searchParams: SearchParams;
  setSearchParams: (params: Partial<SearchParams>) => void;
  setFlightSearch: (params: Partial<FlightSearchParams>) => void;
  setHotelSearch: (params: Partial<HotelSearchParams>) => void;

  // Selection
  selectedFlight: Flight | null;
  setSelectedFlight: (flight: Flight | null) => void;
  selectedHotel: Hotel | null;
  setSelectedHotel: (hotel: Hotel | null) => void;
  selectedRoom: Room | null;
  setSelectedRoom: (room: Room | null) => void;

  // Booking
  bookingStep: number;
  setBookingStep: (step: number) => void;
  bookings: Booking[];
  addBooking: (booking: Booking) => void;

  // User
  currentUser: User;
  setCurrentUser: (user: User) => void;

  // UI
  filterState: FlightFilters & HotelFilters;
  setFlightFilters: (filters: Partial<FlightFilters>) => void;
  setHotelFilters: (filters: Partial<HotelFilters>) => void;
}

export interface FlightFilters {
  maxPrice: number;
  stops: number[];
  airlines: string[];
  sortBy: "price" | "duration" | "departure" | "rating";
}

export interface HotelFilters {
  priceRange: [number, number];
  minRating: number;
  amenities: string[];
  hotelSortBy: "price" | "rating" | "distance" | "popularity";
}

const defaultSearchParams: SearchParams = {
  activeTab: "flights",
  flight: {
    origin: "New York (JFK)",
    destination: "Dubai (DXB)",
    departureDate: "2025-12-18",
    returnDate: "2026-01-03",
    passengers: { adults: 1, children: 0, infants: 0 },
    cabinClass: "economy",
    tripType: "round_trip",
  },
  hotel: {
    destination: "Dubai",
    checkIn: "2025-12-18",
    checkOut: "2025-12-25",
    guests: { adults: 2, children: 0, rooms: 1 },
  },
};

const defaultFlightFilters: FlightFilters = {
  maxPrice: 5000,
  stops: [],
  airlines: [],
  sortBy: "price",
};

const defaultHotelFilters: HotelFilters = {
  priceRange: [0, 5000],
  minRating: 0,
  amenities: [],
  hotelSortBy: "rating",
};

export const useTravelStore = create<TravelState>((set) => ({
  searchParams: defaultSearchParams,
  setSearchParams: (params) =>
    set((state) => ({ searchParams: { ...state.searchParams, ...params } })),
  setFlightSearch: (params) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        flight: { ...state.searchParams.flight, ...params },
      },
    })),
  setHotelSearch: (params) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        hotel: { ...state.searchParams.hotel, ...params },
      },
    })),

  selectedFlight: null,
  setSelectedFlight: (flight) => set({ selectedFlight: flight }),
  selectedHotel: null,
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
  selectedRoom: null,
  setSelectedRoom: (room) => set({ selectedRoom: room }),

  bookingStep: 1,
  setBookingStep: (step) => set({ bookingStep: step }),
  bookings: [],
  addBooking: (booking) =>
    set((state) => ({ bookings: [...state.bookings, booking] })),

  currentUser: mockUser,
  setCurrentUser: (user) => set({ currentUser: user }),

  filterState: { ...defaultFlightFilters, ...defaultHotelFilters },
  setFlightFilters: (filters) =>
    set((state) => ({ filterState: { ...state.filterState, ...filters } })),
  setHotelFilters: (filters) =>
    set((state) => ({ filterState: { ...state.filterState, ...filters } })),
}));
