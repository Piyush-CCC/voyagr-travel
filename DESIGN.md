# Design Brief

## Direction
Voyagr Mobile App — iPhone 15 Pro mockup showcasing light, modern travel booking experience with Orange and Blue color palette, mobile-first responsive design inside realistic device frame.

## Tone
Clean, confident, and touch-optimized. Orange drives action (search/book CTAs), Blue establishes navigation context (headers, tabs). Large touch targets (44px min), readable typography, and card-based layout optimized for 390px viewport.

## Differentiation
Realistic iPhone 15 Pro frame centered on page displaying complete mobile app: Dynamic Island, status bar, hero search, featured destinations, popular hotels, bottom tab navigation (Home, Flights, Hotels, Trips, Profile). Progressive disclosure via bottom sheets and swipeable carousels. Every interaction scaled for thumb-friendly mobile usage.

## Color Palette

| Token              | OKLCH        | Role                                     |
| ------------------ | ------------ | ---------------------------------------- |
| primary (Orange)   | 0.62 0.22 30 | CTA buttons, search, book, active tab    |
| secondary (Blue)   | 0.45 0.24 260| Headers, status bar, trust indicators    |
| background         | 0.99 0 0     | Content backdrop, light surface          |
| card               | 0.98 0.005 0 | Search cards, hotel/flight results       |
| accent             | 0.62 0.22 30 | Highlights, badges, price emphasis       |
| muted              | 0.93 0.01 0  | Disabled states, secondary labels        |
| destructive        | 0.55 0.21 22 | Warnings, cancellation alerts            |
| foreground         | 0.18 0.015 280| Body text, primary content               |

## Typography

- Display: General Sans — hero text, section titles, price displays
- Body: Lora — descriptions, field labels, body copy
- Mono: GeistMono — confirmation codes, technical details
- Scale: hero `text-2xl font-bold`, label `text-xs font-semibold`, body `text-sm md:text-base`

## Elevation & Depth

Cards use shadow-md default, shadow-lg on hover. Status bar and tab bar use subtle border-top/border-bottom for separation. No depth layering — clarity and usability prioritized.

## Structural Zones

| Zone            | Width/Height | Background     | Notes                                  |
| --------------- | ------------ | -------------- | -------------------------------------- |
| iPhone Frame    | 430×932px    | Black bezel    | Centered, Dynamic Island + home indicator |
| Screen Viewport | 390×844px    | background     | Safe area content                      |
| Status Bar      | 390×44px     | card           | Time, carrier, battery                 |
| Content Area    | 390×724px    | background     | Scrollable search, cards, sections      |
| Tab Bar         | 390×76px     | card           | 5 tabs with icons (Home/Flights/Hotels/Trips/Profile) |

## Spacing & Rhythm

Mobile: 16px edge padding, 24px section gaps, 12px card padding. Tab bar 76px fixed height. Touch targets 44px minimum. Carousels 12px gap, horizontal scroll.

## Component Patterns

- Buttons: full-width on mobile, rounded-lg, primary orange or secondary blue, 44px touch target
- Search inputs: rounded-lg, white background, border-border, focus ring-primary, 44px height
- Cards: rounded-2xl, white background, border-border, shadow-card hover
- Badges: rounded-full, compact, secondary or accent background
- Tab bar items: icon + label, 60px min width, active state with orange highlight
- Bottom sheets: slide-in-up animation, max 80% viewport height

## Motion

- Entrance: fade-in 0.3s, slide-in-up 0.3s for bottom sheets
- Interaction: opacity-90 on buttons, scale-95 on active, 0.3s smooth transitions
- Feedback: badge pulse on updates, loading spinners in secondary blue
- Navigation: fade between tabs, slide-out-down 0.3s on close

## Constraints

- All colors via CSS variables (OKLCH, no hex/rgb)
- Viewport: 390px × 844px inside iPhone frame
- Safe area: 12px padding inside frame, 44px status bar, 76px tab bar
- Touch targets: minimum 44×44px
- Images: 16:9 ratio for destinations, 3:2 for hotels, lazy-load
- Responsive: mobile-first CSS, no desktop grid visible in frame

## Signature Detail
Realistic iPhone 15 Pro bezel with Dynamic Island at top, home indicator at bottom. Complete app visible without scrolling the frame itself — all content scrollable within the 844px viewport.

