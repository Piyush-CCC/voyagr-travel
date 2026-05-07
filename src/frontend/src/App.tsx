import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const FlightsPage = lazy(() => import("@/pages/FlightsPage"));
const HotelsPage = lazy(() => import("@/pages/HotelsPage"));
const HotelDetailPage = lazy(() => import("@/pages/HotelDetailPage"));
const BookingPage = lazy(() => import("@/pages/BookingPage"));
const ConfirmationPage = lazy(() => import("@/pages/ConfirmationPage"));
const TripsPage = lazy(() => import("@/pages/TripsPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const ExplorePage = lazy(() => import("@/pages/ExplorePage"));

const PageLoader = () => (
  <div className="mobile-container space-y-4 pt-4">
    <Skeleton className="h-7 w-40" />
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-32 rounded-2xl" />
      ))}
    </div>
  </div>
);

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});
const flightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/flights",
  component: () => <FlightsPage />,
});
const hotelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hotels",
  component: () => <HotelsPage />,
});
const hotelDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hotels/$id",
  component: () => <HotelDetailPage />,
});
const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking",
  component: () => <BookingPage />,
});
const confirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/confirmation",
  component: () => <ConfirmationPage />,
});
const tripsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trips",
  component: () => <TripsPage />,
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => <ProfilePage />,
});
const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/explore",
  component: () => <ExplorePage />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  flightsRoute,
  hotelsRoute,
  hotelDetailRoute,
  bookingRoute,
  confirmationRoute,
  tripsRoute,
  profileRoute,
  exploreRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
