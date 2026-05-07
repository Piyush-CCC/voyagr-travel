import { d as React } from "./index-C4w8056_.js";
const mockUser = {
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
      isDefault: true
    },
    {
      id: "card-2",
      last4: "5555",
      brand: "Mastercard",
      expiry: "09/26",
      isDefault: false
    }
  ],
  preferences: {
    cabinClass: "business",
    mealPreference: "Standard",
    seatPreference: "Window",
    notifications: true
  }
};
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
const defaultSearchParams = {
  activeTab: "flights",
  flight: {
    origin: "New York (JFK)",
    destination: "Dubai (DXB)",
    departureDate: "2025-12-18",
    returnDate: "2026-01-03",
    passengers: { adults: 1, children: 0, infants: 0 },
    cabinClass: "economy",
    tripType: "round_trip"
  },
  hotel: {
    destination: "Dubai",
    checkIn: "2025-12-18",
    checkOut: "2025-12-25",
    guests: { adults: 2, children: 0, rooms: 1 }
  }
};
const defaultFlightFilters = {
  maxPrice: 5e3,
  stops: [],
  airlines: [],
  sortBy: "price"
};
const defaultHotelFilters = {
  priceRange: [0, 5e3],
  minRating: 0,
  amenities: [],
  hotelSortBy: "rating"
};
const useTravelStore = create((set) => ({
  searchParams: defaultSearchParams,
  setSearchParams: (params) => set((state) => ({ searchParams: { ...state.searchParams, ...params } })),
  setFlightSearch: (params) => set((state) => ({
    searchParams: {
      ...state.searchParams,
      flight: { ...state.searchParams.flight, ...params }
    }
  })),
  setHotelSearch: (params) => set((state) => ({
    searchParams: {
      ...state.searchParams,
      hotel: { ...state.searchParams.hotel, ...params }
    }
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
  addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
  currentUser: mockUser,
  setCurrentUser: (user) => set({ currentUser: user }),
  filterState: { ...defaultFlightFilters, ...defaultHotelFilters },
  setFlightFilters: (filters) => set((state) => ({ filterState: { ...state.filterState, ...filters } })),
  setHotelFilters: (filters) => set((state) => ({ filterState: { ...state.filterState, ...filters } }))
}));
export {
  useTravelStore as u
};
