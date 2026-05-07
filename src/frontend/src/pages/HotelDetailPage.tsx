import { mockHotels } from "@/data/mockHotels";
import { useTravelStore } from "@/store/travel-store";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bed,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Dumbbell,
  MapPin,
  Maximize2,
  Share2,
  Sparkles,
  Star,
  Users,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import { useState } from "react";

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  Pool: <Waves className="w-4 h-4" />,
  "Infinity Pool": <Waves className="w-4 h-4" />,
  "Indoor Pool": <Waves className="w-4 h-4" />,
  "3 Pools": <Waves className="w-4 h-4" />,
  "Olympic Pool": <Waves className="w-4 h-4" />,
  "Wi-Fi": <Wifi className="w-4 h-4" />,
  "Fitness Center": <Dumbbell className="w-4 h-4" />,
  "Fine Dining": <Utensils className="w-4 h-4" />,
  Restaurant: <Utensils className="w-4 h-4" />,
  Parking: <Car className="w-4 h-4" />,
  "Tea Ceremony": <Coffee className="w-4 h-4" />,
  Spa: <Sparkles className="w-4 h-4" />,
};

const AVATAR_COLORS = [
  "bg-secondary",
  "bg-primary",
  "bg-amber-500",
  "bg-green-600",
  "bg-purple-600",
];

function getReviewLabel(rating: number) {
  if (rating >= 4.9) return "Exceptional";
  if (rating >= 4.7) return "Excellent";
  if (rating >= 4.5) return "Very Good";
  return "Good";
}

export default function HotelDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams({ from: "/hotels/$id" });
  const { setSelectedHotel, setSelectedRoom, searchParams } = useTravelStore();
  const hotel = mockHotels.find((h) => h.id === id) ?? mockHotels[0];
  const { hotel: hotelSearch } = searchParams;

  const [activeImg, setActiveImg] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const nights = Math.max(
    1,
    Math.round(
      (new Date(hotelSearch.checkOut).getTime() -
        new Date(hotelSearch.checkIn).getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  );

  const galleryImages = [
    ...hotel.images,
    ...hotel.rooms
      .flatMap((r) => r.images)
      .filter((_img, idx) => idx < 4 - hotel.images.length),
  ].slice(0, 5);

  const selectedRoom = hotel.rooms.find((r) => r.id === selectedRoomId);
  const basePrice = (selectedRoom ?? hotel.rooms[0])?.price ?? hotel.priceFrom;
  const taxAmount = Math.round(basePrice * nights * 0.15);
  const totalPrice = basePrice * nights + taxAmount;

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    const room = hotel.rooms.find((r) => r.id === roomId);
    if (room) setSelectedRoom(room);
  };

  const handleBookNow = () => {
    setSelectedHotel(hotel);
    if (selectedRoom) setSelectedRoom(selectedRoom);
    else if (hotel.rooms[0]) setSelectedRoom(hotel.rooms[0]);
    navigate({ to: "/booking" });
  };

  return (
    <div
      className="bg-background min-h-screen pb-24"
      data-ocid="hotel_detail.page"
    >
      {/* Full-bleed image carousel */}
      <div
        className="relative h-72 overflow-hidden"
        data-ocid="hotel_detail.image_gallery"
      >
        {galleryImages.length > 0 ? (
          <img
            src={galleryImages[activeImg]?.url ?? ""}
            alt={galleryImages[activeImg]?.alt ?? hotel.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
            <MapPin className="w-14 h-14 text-secondary/40" />
          </div>
        )}

        {/* Dark gradient overlay at top */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Back + Share buttons */}
        <div className="absolute top-0 left-0 right-0 px-4 pt-12 flex items-center justify-between z-10">
          <button
            type="button"
            onClick={() => navigate({ to: "/hotels" })}
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            aria-label="Go back"
            data-ocid="hotel_detail.back_button"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            aria-label="Share hotel"
            data-ocid="hotel_detail.share_button"
          >
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Carousel prev/next */}
        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setActiveImg((p) => Math.max(0, p - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              aria-label="Previous image"
              data-ocid="hotel_detail.gallery_prev"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveImg((p) => Math.min(galleryImages.length - 1, p + 1))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              aria-label="Next image"
              data-ocid="hotel_detail.gallery_next"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {galleryImages.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
            {galleryImages.map((img, i) => (
              <button
                key={img.url}
                type="button"
                onClick={() => setActiveImg(i)}
                aria-label={`Image ${i + 1}`}
                className={[
                  "rounded-full transition-all",
                  activeImg === i ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50",
                ].join(" ")}
                data-ocid={`hotel_detail.dot.${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 py-5 space-y-5">
        {/* Hotel name + rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-foreground text-xl leading-tight">
                {hotel.name}
              </h1>
              {hotel.brand && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {hotel.brand}
                </p>
              )}
            </div>
            <div className="flex-shrink-0 bg-primary/10 border border-primary/20 rounded-xl px-3 py-1.5 text-center">
              <div className="text-xl font-bold text-primary">
                {hotel.rating.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">
                {getReviewLabel(hotel.rating)}
              </div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].slice(0, hotel.stars).map((n) => (
              <Star
                key={n}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              {hotel.stars}-star · {hotel.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0 text-secondary" />
            <span className="line-clamp-1">{hotel.address}</span>
          </div>
        </div>

        {/* Amenity chips — horizontal scroll */}
        <div className="overflow-x-auto -mx-4 px-4 scrollbar-none">
          <div className="flex gap-2 w-max">
            {hotel.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex-shrink-0 flex items-center gap-1.5 bg-secondary/8 border border-secondary/15 text-secondary text-xs font-medium px-3 py-2 rounded-full"
              >
                {AMENITY_ICONS[amenity] ?? <CheckCircle2 className="w-4 h-4" />}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-2">
            About
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {hotel.description}
          </p>
        </div>

        {/* Check-in info */}
        <div className="bg-secondary/6 border border-secondary/15 rounded-2xl p-4">
          <h2 className="font-display font-bold text-foreground text-sm mb-3">
            Stay Details
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Check-in</p>
              <p className="text-sm font-semibold text-foreground flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-secondary" />{" "}
                {hotel.checkInTime}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {hotelSearch.checkIn}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Check-out</p>
              <p className="text-sm font-semibold text-foreground flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />{" "}
                {hotel.checkOutTime}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {hotelSearch.checkOut}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">
                {nights} night{nights > 1 ? "s" : ""}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Guests</p>
              <p className="text-sm font-semibold text-foreground flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-secondary" />{" "}
                {hotelSearch.guests.adults} adults
              </p>
            </div>
          </div>
        </div>

        {/* Rooms section */}
        <div data-ocid="hotel_detail.rooms_section">
          <h2 className="font-display font-bold text-foreground text-base mb-3">
            Choose Your Room
          </h2>
          <div className="space-y-4">
            {hotel.rooms.map((room, i) => (
              <div
                key={room.id}
                className={[
                  "bg-card border-2 rounded-2xl overflow-hidden transition-all",
                  selectedRoomId === room.id
                    ? "border-primary"
                    : "border-border",
                ].join(" ")}
                data-ocid={`hotel_detail.room_card.${i + 1}`}
              >
                {/* Room image */}
                <div className="relative h-40 overflow-hidden">
                  {room.images[0]?.url ? (
                    <img
                      src={room.images[0].url}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                      <Bed className="w-10 h-10 text-secondary/30" />
                    </div>
                  )}
                  {selectedRoomId === room.id && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Selected
                    </div>
                  )}
                  {room.originalPrice && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Sale
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-display font-bold text-foreground text-base">
                    {room.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {room.description}
                  </p>

                  <div className="flex items-center gap-4 mt-2.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5" /> {room.bedType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" /> {room.size} m²
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Max {room.maxGuests}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {room.amenities.map((a) => (
                      <span
                        key={a}
                        className="text-xs bg-secondary/8 text-secondary border border-secondary/15 px-2 py-0.5 rounded-full"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between mt-4 pt-3 border-t border-border">
                    <div>
                      {room.originalPrice && (
                        <p className="text-xs line-through text-muted-foreground">
                          ${room.originalPrice}/night
                        </p>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">
                          ${room.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          /night
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectRoom(room.id)}
                      className={[
                        "text-sm font-bold px-5 py-2.5 rounded-2xl transition-colors",
                        selectedRoomId === room.id
                          ? "bg-primary/15 text-primary border-2 border-primary"
                          : "bg-primary text-white",
                      ].join(" ")}
                      data-ocid={`hotel_detail.select_room_button.${i + 1}`}
                    >
                      {selectedRoomId === room.id ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews section */}
        <div data-ocid="hotel_detail.reviews_section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-foreground text-base">
              Guest Reviews
            </h2>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-foreground">
                {hotel.rating.toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">
                ({hotel.reviewCount.toLocaleString()})
              </span>
            </div>
          </div>

          {/* Score bar */}
          <div className="bg-card border border-border rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">
                  {hotel.rating.toFixed(1)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {getReviewLabel(hotel.rating)}
                </div>
              </div>
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground w-3">
                      {star}
                    </span>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{
                          width: star === 5 ? "80%" : star === 4 ? "15%" : "5%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {hotel.reviews.map((review, i) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-2xl p-4"
                data-ocid={`hotel_detail.review.${i + 1}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0",
                      AVATAR_COLORS[i % AVATAR_COLORS.length],
                    ].join(" ")}
                  >
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-foreground text-sm">
                        {review.author}
                      </p>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {[1, 2, 3, 4, 5]
                          .slice(0, Math.round(review.rating))
                          .map((n) => (
                            <Star
                              key={n}
                              className="w-3 h-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {review.date}
                    </p>
                    <h4 className="text-sm font-semibold text-foreground mt-2">
                      {review.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {review.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location stub */}
        <div data-ocid="hotel_detail.location_section">
          <h2 className="font-display font-bold text-foreground text-base mb-3">
            Location
          </h2>
          <div
            className="relative h-36 rounded-2xl overflow-hidden border border-border flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.06 260) 0%, oklch(0.88 0.04 200) 50%, oklch(0.82 0.07 240) 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.45 0.24 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.24 260) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white/95 rounded-xl px-3 py-1.5 text-center shadow">
                <p className="text-xs font-bold text-foreground">
                  {hotel.city}, {hotel.country}
                </p>
                <p className="text-xs text-muted-foreground">
                  {hotel.distanceFromCenter}km from center
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Book Now CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-4 z-30"
        data-ocid="hotel_detail.sticky_footer"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">from</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-primary">
                ${basePrice.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground">/night</span>
            </div>
            <p className="text-xs text-muted-foreground">
              ${totalPrice.toLocaleString()} total · {nights} nights
            </p>
          </div>
          <button
            type="button"
            onClick={handleBookNow}
            className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl text-base active:opacity-90 transition-opacity"
            data-ocid="hotel_detail.book_now_button"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
