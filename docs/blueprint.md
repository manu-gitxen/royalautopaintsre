# Royal Auto Paints Qatar — Architectural Blueprint & Technical Specification (Flagship Redesign v5.0)

**Project Name:** Royal Auto Paints Qatar Website Flagship Redesign  
**Base Architecture:** High-Performance ThemeMascot Modern Luxury Framework / Custom Responsive Core / GSAP ScrollTrigger / Swiper.js / TwentyTwenty Slider / Standalone JSON-Driven Catalog Engine / Pure CSS Infinite Marquee Engine  
**Active Workspace:** `D:\manu\projects\royalautopaintsre` (Staging & Live Development Workspace: `http://127.0.0.1:5500/`)  
**Live Production Domain:** `https://www.royalautopaints.com/`  
**Physical Headquarters:** Street 23, Wakalat St, Industrial Area, Doha, Qatar  
**Direct Contacts:** Tel: `+974 4450 1669` | WhatsApp RFQ: `+974 5039 5741` | Email: `info@royalautopaints.com` / `royalpaints.qa@gmail.com`  
**Current Milestone:** Complete Enterprise Production Architecture v5.0 — Standardized 7-Page Navigation Sequence across All Pages; Dual-Logo Sticky Header System (Crisp White on Hero / Master Graphite Gray `#58585A` on Sticky); Ground-Up Modernization of `about.html` with Live Authentic Heritage, Infinite Brand/Branch Slider, 3-Card Advantage, 4 Facilities Cards, and Dark Gradient CTA; 3-Column Catalog Grid System (`products.html`) with 15-Item Pagination; Services Page Visual Synchronization (`services.html`); and 100% Elementor Corporate Footer Parity.

---

## 1. Executive Summary & Evolution History

Established in 2012 in the Doha Industrial Area, **Royal Auto Paints (Al-Haram Paints & Trading)** is Qatar's premier authorized distributor of world-class automotive refinish systems, commercial spray booth equipment, marine and yacht coatings, industrial protective coatings, and luxury wood finishes. The company represents global industry leaders including **HB Body, Axalta Challenger, Motolux, and Sea-Line**.

### The Redesign Evolution
1. **v1 (Legacy Site):** High organic SEO rankings and strong local authority, but dated layout, non-responsive design, and limited interactive product capability.
2. **v2 (Zay Shop Redesign):** Clean, minimalist Bootstrap framework (`zay_royal_paint_template_stock`) with custom corporate colors and structured sections.
3. **v3 (Luxury Flagship Redesign):** High-end corporate experience featuring interactive synchronized micro-sliders, authentic high-resolution studio photography, modern glassmorphism badges, and brand-first Royal Oceanic Navy & Paint Splash Warm Orange accents.
4. **v3.5 (Modern Interactive Engine):**
   - **GSAP ScrollTrigger Pinned Services Showcase:** 5 pinned division cards (1. Automotive Paints & Refinishing Products, 2. Industrial Paints & Surface Coatings, 3. Marine Paints & Coatings, 4. Wood Coatings & Finishes, 5. Spray Painting Booths & Air Filtration) with progressive stacking and seamless forward/reverse scroll pinning.
   - **Why Clients Trust Royal Auto Paints:** Refined organic curved mask with high-resolution spray mist photography, 4 capability feature boxes, and animated wholesale quote triggers.
   - **Stats Counter Section ("Our Experience Speaks for Itself"):** 4 high-credibility B2B automotive coating metrics with smooth scroll-animated counters and clean 1px vertical straight separators.
   - **Before & After Real Automotive Refinish Results:** Interactive TwentyTwenty comparison slider demonstrating factory-finish paint restoration on high-res vehicle imagery.
   - **Featured Products Showcase & Slider (`#products`):** Interactive Swiper carousel displaying 6 authentic Royal Auto Paints coatings (HB Body 691, HB Body F202, Challenger CL240, HB Body C496, HB Body C493, HB Body U951) with clean minimalist studio presentation.
5. **v4.0 (Full Flagship Production & Catalog Portal):**
   - **Full 83-Item Dynamic Product Catalogue (`products.html`):** Complete automotive refinish catalog powered by `data/products.json` and resilient `js/products-data.js` fallback (`window.royalProducts`). Features live instant search, 8 category filter pills with dynamic count badges, 19-brand dropdown filter, 4 sorting modes, and high-definition Quick View modal.
   - **Elementor Corporate Footer Parity:** Applied the exact `index.html` Elementor corporate footer (`<footer id="footer" class="footer ">`) across subpages, backed by Elementor core stylesheets (`custom-frontend.min.css`, `elementor-post-1693.css`, `navigation-menu.css`, etc.) for seamless 4-column layout parity.
   - **Zero-Radius Bottom Seam:** Clean vertical junction between the light blue container (`.elementor-element-ecae855`) and the lower dark copyright strip with `border-bottom-left-radius: 0 !important; border-bottom-right-radius: 0 !important;`.
   - **Floating Quick Actions Stack:** Static, non-flashing WhatsApp button (`#25D366`) and Deep Royal Navy (`#0A2942`) scroll-to-top button with smooth scroll physics.
6. **v5.0 (Unified Multi-Page Enterprise Specification & Brand Identity Parity — Current Standard):**
   - **Standardized 7-Page Navigation Sequence:** Synchronized desktop (`.luxore-nav-menu`) and mobile drawer (`.luxore-mobile-menu`) menus across all 7 pages to the strict corporate order: **1. HOME**, **2. ABOUT**, **3. PRODUCTS**, **4. SERVICES**, **5. GALLERY**, **6. CAREER**, **7. CONTACT**. Replaced all legacy in-page hash anchors (`#services`, `#about`, etc.) in `index.html` with direct standalone `.html` page links.
   - **Dual-Logo Sticky Header System:** Replaced the dark blue on-scroll logo with the official **Master Graphite Gray** logo (`images/royal_logo_gray.png`, `#58585A`). The header seamlessly displays the pure white logo (`images/royal_logo_white.png`) over dark hero canvases, and dynamically transitions to the gray logo upon scrolling past 75px onto the frosted white sticky navbar.
   - **Ground-Up Rebuild of `about.html` & `css/about.css`:** Fully decommissioned the legacy Zay shop template. Implemented a brand-aligned corporate experience featuring authentic copy from `https://www.royalautopaints.com/about`, 4 live stats, 2-column editorial story with authorized distributor emblem and floating contact card, an infinite CSS marquee logo slider (`#F7F0F2`) featuring 8 partner/branch logos, a 3-card factory-direct advantage section, 4 facilities cards matching `services.html` standards, and a signature dark gradient consultation CTA banner.
   - **Product Catalog 3-Card-Per-Row Layout (`products.html`, `css/products-catalog.css`):** Transitioned the catalog card grid from 4 columns to 3 columns (`grid-template-columns: repeat(3, 1fr)`) and updated pagination from 16 to 15 items per page (5 full rows of 3). This guarantees ample breathing room for complex dual-brand badges (such as `RUPES / PRO-CUT`), eliminating badge truncation and text overlap.
   - **Services Page Design Synchronization (`services.html`, `css/services.css`):** Centered all section eyebrow pills and titles, and adopted the signature dark gradient background (`linear-gradient(135deg, #58585A 0%, #071C2E 100%)`) for the consultation CTA card while preserving original technical refinish content.

---

## 2. Core Visual Identity & Design System

The visual design system merges industrial durability with automotive prestige, dominated by **Industrial Charcoal & Precision Grays** (derived directly from the "AUTO PAINTS" `#58585A` branding) and energized with **High-Visibility Automotive Racing Gold/Yellow (`#FFB800` / `#F59E0B`)**, completely eliminating any teal blue tones:

```
┌────────────────────────────────────────────────────────────────────────┐
│     ROYAL AUTO PAINTS MASTER COLOR SYSTEM (EXACT LOGO GREY & GOLD)     │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ Token Name        │ Hex Code          │ UI Application                 │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Logo Graphite Grey│ #58585A           │ Dominant Master Brand Color,   │
│ (--royal-blue-prim)                   │ Sticky Nav Logo, Headings, Text│
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Carbon Darkest    │ #14171C           │ Deepest Hero Canvas & Footer BG│
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Industrial Charc. │ #22272F           │ Supporting Deep Contrast Dark  │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Slate Gray Dark   │ #333A45           │ Dark Card Surfaces & Borders   │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Automotive Racing │ #FFB800           │ High-Visibility Signature Gold,│
│ Gold/Yellow       │                   │ Active Badges, CTA Hover Glow  │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Deep Golden Amber │ #F59E0B           │ High-contrast active borders   │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Technical Silver  │ #F4F6F8           │ Precision Light Section Canvas │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Brand Slider Silver│ #F7F0F2          │ Infinite Brand Marquee Canvas  │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Warm Cream Silver │ #FDFBF7           │ "How We Are Different" Cards   │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Dark Card Gradient│ linear-gradient(  │ Signature Consultation CTA Card│
│                   │ 135deg, #58585A   │ Background on About & Services │
│                   │ 0%, #071C2E 100%) │                                │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Official WhatsApp │ #25D366           │ Static WhatsApp CTAs & Badges  │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Pure Card White   │ #FFFFFF           │ Product Cards, Capability Boxes│
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Subtle Border Gray│ #E2E8F0           │ Component Separators & Dividers│
└───────────────────┴───────────────────┴────────────────────────────────┘
```

### Brand Typography Standards
- **Primary Serif Headlines:** `Marcellus`, serif — Used for brand authority headings, section titles, and product card titles.
- **Modern Sans Metadata & Body:** `DM Sans`, sans-serif — Used for navigation links, descriptive text, technical specifications, and filter pills.
- **Hero Title Strict Rule:** All subpage hero titles strictly use `color: #FFFFFF !important; font-family: 'Marcellus', serif; font-weight: 400;` to ensure razor-sharp readability against deep backdrop overlays.

### Key UI Architecture Rules
1. **Button Arrow-Reveal Animation & Spacing Guard (`.btn-style1`, `.btn-style2`):**
   - High-end pill buttons featuring dual hidden/visible SVG arrows (`height: 56px; border-radius: 50px`).
   - Normal State: Left arrow badge hidden (`scale: 0.3; opacity: 0; left: 8px`), right arrow badge visible (`width: 40px; margin-left: 14px`), button padding `0 16px 0 32px`.
   - Hover State: Button transitions to Racing Gold gradient (`#FFB800` to `#F59E0B`), text color shifts to Industrial Charcoal (`#14171C`), left arrow badge expands (`scale: 1; left: 8px; background: #14171C`) displaying a razor-sharp crisp white arrow (`stroke: #FFFFFF`), and right arrow badge cleanly collapses (`width: 0; scale: 0`).
   - Padding & Spacing Guard: Padding dynamically shifts to `padding-left: 58px !important; padding-right: 32px !important;` with `transform: none !important;` on text. This preserves an exact 32px breathing room between the text and the right rounded pill edge, completely preventing text overlap or boundary collision regardless of button text length.
2. **Standardized Card Geometry:**
   - 20px uniform rounded corners on homepage product cards and service division containers (`border-radius: 20px`).
   - 18px rounded corners on catalog product cards with soft ambient elevation (`box-shadow: 0 10px 30px rgba(10, 41, 66, 0.06)`).
   - Dynamic hover lift (`transform: translateY(-8px)`) with heightened shadow.
3. **Pill Eyebrow Subtitles:**
   - Centered pill badges (`background-color: #FFFFFF`, padding `7px 22px`, `border-radius: 50px`, box-shadow `0 2px 12px rgba(0,0,0,0.05)`).
   - Preceded by a circular orange accent dot (`width: 7px; height: 7px; background-color: #F68C50; border-radius: 50%`).
4. **Gold Star Rating Standards:**
   - Universal 5-star rating using Font Awesome 5 Free (`\f005`) in `#ffa700` with 100% fill width.

---

## 3. Information Architecture & Multi-Page Topology

The website operates as a high-performance multi-page portal with 7 dedicated HTML pages synchronized with direct cross-page navigation:

```mermaid
flowchart TD
    subgraph Header["Universal Sticky Glassmorphism Header"]
        WhiteLogo["White Logo (Hero Overlay)
royal_logo_white.png"]
        GrayLogo["Gray Logo (Sticky on Scroll)
royal_logo_gray.png"]
        NavLinks["Standardized 7-Page Navigation:
1. HOME | 2. ABOUT | 3. PRODUCTS | 4. SERVICES | 5. GALLERY | 6. CAREER | 7. CONTACT"]
        CallPill["Desktop & Mobile 'CALL NOW' Action Pill (+974 4450 1669)"]
    end

    subgraph Pages["Dedicated Standalone Pages"]
        HomePg["index.html
(14-Section Flagship Portal, GSAP Stacking, TwentyTwenty)"]
        AboutPg["about.html
(Authentic Heritage, Brand Marquee Slider, Advantage Cards)"]
        ProductsPg["products.html
(Full 83-Item JSON Catalog, 3-Column Grid, Modal)"]
        ServicesPg["services.html
(5 Core Divisions, Facilities Showcase, Dark Gradient CTA)"]
        GalleryPg["gallery.html
(Filterable Showroom & Project Showcase)"]
        CareerPg["career.html
(Qatar Vacancies & Application Portal)"]
        ContactPg["contact.html
(Wakalat St Showroom, Hours, Google Maps)"]
    end

    subgraph Footer["Universal Corporate Elementor Footer"]
        Col1["About Royal Paints
(Story, Get In Touch)"]
        Col2["Quick Links
(Products, About, Services, Brands)"]
        Col3["Refinish Solutions
(Clears, Putties, Primers, Tools)"]
        Col4["Showroom & Inquiries
(+974 4450 1669, WhatsApp, Street 23)"]
        NewsletterBar["Brand Logo + Social Icons + Newsletter Subscription"]
        CopyrightBar["© 2026 Royal Auto Paints. All Rights Reserved."]
    end

    Header --> HomePg
    Header --> AboutPg
    Header --> ProductsPg
    Header --> ServicesPg
    Header --> GalleryPg
    Header --> CareerPg
    Header --> ContactPg

    HomePg --> Footer
    AboutPg --> Footer
    ProductsPg --> Footer
    ServicesPg --> Footer
    GalleryPg --> Footer
    CareerPg --> Footer
    ContactPg --> Footer
```

### Multi-Page Route Matrix
| URL Route | Page Title | Primary Capabilities & Content Focus | Navigation Integration |
| :--- | :--- | :--- | :--- |
| `index.html` | Home — Royal Auto Paints | Flagship interactive portal: 5-Slide Hero, 5-Division GSAP Pinning Showcase, Why Choose Us, Animated Stats, Before/After Slider, Featured Swiper Carousel, Reviews, Brands, Location & Footer. | Links directly to all 6 subpages via standardized 7-page menu; zero anchor hashes. |
| `about.html` | About Us — Royal Auto Paints | Authentic heritage in Doha Industrial Area since 2012, live factory-direct mission, 2-column editorial story with stats, infinite 8-brand marquee slider, 3-card advantage, 4 facilities cards, and dark gradient CTA. | Menu item 2; active state highlight in Warm Orange `#F68C50`. |
| `products.html` | Products Catalogue | Full 83-item automotive catalog powered by JSON, optimized 3-in-a-row grid (15 per page), 8 category filter pills, 19-brand dropdown, instant search, and HD Quick View modal. | Menu item 3; active state highlight in Warm Orange `#F68C50`. |
| `services.html` | Specialized Services | In-depth engineering specifications for OEM color matching, spray booths, marine coatings, wood finishes, and industrial protective barriers. Centered headers and dark gradient CTA. | Menu item 4; active state highlight in Warm Orange `#F68C50`. |
| `gallery.html` | Project Gallery | Visual showcase with category filter tabs for collision centers, commercial spray booths, yacht refinishing, and industrial steel coatings. | Menu item 5; active state highlight in Warm Orange `#F68C50`. |
| `career.html` | Careers & Openings | 4 authentic Qatar job vacancies (Color Mixing Technician, B2B Sales Executive, Spray Booth Maintenance Specialist, Warehouse Logistics Coordinator) with direct CV application form. | Menu item 6; active state highlight in Warm Orange `#F68C50`. |
| `contact.html` | Contact Us & Showroom | Street 23 Wakalat St showroom details, operating hours, responsive Google Maps iframe, and technical inquiry dispatch form. | Menu item 7; active state highlight in Warm Orange `#F68C50`. |

---

## 4. Homepage Section Hierarchy & Specifications

```mermaid
flowchart TD
    S1["1. Top Utility Header
(Doha Industrial Area, Direct Phones, Email Desk)"]
    S2["2. Main Sticky Navigation
(White/Gray Dual-Logo, Standardized 7-Page Menu, 'CALL NOW' Pill)"]
    S3["3. Synchronized 5-Division Hero Banner
(Dynamic Full-Width Slider + Interactive Mini-Card Card)"]
    S4["4. 'Who We Are' Heritage & Strength Section
(3-Photo Collage, 2012 Doha History, Spectrophotometer Lab Copy)"]
    S5["5. Pinned Services Showcase (GSAP ScrollTrigger)
(5 Stacking Cards: 1. Automotive, 2. Industrial, 3. Marine, 4. Wood, 5. Spray Booths)"]
    S6["6. Why Clients Trust Royal Auto Paints
(Curved Arched Mask, 4 Capability Boxes, Wholesale Quote Button)"]
    S7["7. Animated Experience Counters
(500+ Workshops, 99% OEM Match, 4.9 Rating, 800+ Projects)"]
    S8["8. Before & After Refinish Results
(Interactive TwentyTwenty Draggable Split Slider)"]
    S9["9. Featured Products Showcase & Slider (#products)
(6 Editorial Studio Coatings, 5 Stars, Swiper Carousel, Link to products.html)"]
    S10["10. How It Works / Technical Refinish Steps
(3-Photo Technician Trio: Scan, Mix, Pack; 3 Refinish Workflow Steps)"]
    S11["11. Customer Reviews & Google Reputation
(Verified 4.7-Star Rating, 91+ Reviews, Technician Visual)"]
    S12["12. Technical FAQ & Consultation Desk
(Accordion FAQs, Heat Mixing Advice, Delivery Info)"]
    S13["13. Dealership & Authorized Brands Showcase
(Physical Storefront, Challenger, HB BODY, Authenticity)"]
    S14["14. Trusted By Leading Brands Carousel
(HB Body, Axalta, Challenger, Motolux, Sea-Line)"]
    S15["15. Corporate Consultation & RFQ Form
(Collision Center Inquiry Desk, Phone & WhatsApp Shortcuts)"]
    S16["16. Corporate Footer & Doha Location
(Street 23 Headquarters, Operating Hours, Google Maps, Legal Badges)"]

    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8 --> S9 --> S10 --> S11 --> S12 --> S13 --> S14 --> S15 --> S16
```

---

## 5. Detailed Component Specifications

### 5.1 Universal Luxury Navigation Header & Dual-Logo Architecture
- **Full-Width Glassmorphism Architecture:**
  - **Top Navigation State (Hero Overlay):**
    - Container: `max-width: 1720px`, `height: 80px`, `padding: 0 50px`.
    - Frosted oceanic glass material: `background: rgba(8, 28, 46, 0.45)` with `backdrop-filter: blur(18px) saturate(170%)`.
    - Edge highlight: `border-bottom: 1px solid rgba(255, 255, 255, 0.16)` and inner reflection `inset 0 1px 0 rgba(255, 255, 255, 0.14)`.
    - Active Logo: `images/royal_logo_white.png` (`.royal-nav-logo-white`, `display: block`). Dark logo is hidden (`display: none`).
    - Typography: Crisp white `DM Sans` links with animated underline hover sweep, and luxury frosted glass call button (`rgba(255, 255, 255, 0.12)`).
  - **Sticky Scrolled Navigation State (`.sticky-active`):**
    - Automatically triggered when scrolling past 75px, sliding down smoothly via `stickyNavSlideDown`.
    - Full-width fixed porcelain glass bar (`top: 0; left: 0; right: 0; width: 100%; height: 72px; z-index: 99999`).
    - Frosted white glass material: `background: rgba(255, 255, 255, 0.78)` with `backdrop-filter: blur(20px) saturate(180%)`, `border-bottom: 1px solid rgba(255, 255, 255, 0.45)`, and ambient elevation `0 10px 35px rgba(10, 41, 66, 0.08)`.
    - Active Logo: **Master Graphite Gray** logo (`images/royal_logo_gray.png`, `.royal-nav-logo-dark`, `display: block`, `#58585A`). White logo is hidden (`display: none`).
    - Typography: Deep charcoal/gray navigation links with warm orange (`#F68C50`) hover, and solid charcoal call button.
  - **Universal Standardized 7-Page Sequence:**
    Strictly deployed across desktop (`.luxore-nav-menu`) and mobile (`.luxore-mobile-menu`):
    1. `<a href="index.html">HOME</a>`
    2. `<a href="about.html">ABOUT</a>`
    3. `<a href="products.html">PRODUCTS</a>`
    4. `<a href="services.html">SERVICES</a>`
    5. `<a href="gallery.html">GALLERY</a>`
    6. `<a href="career.html">CAREER</a>`
    7. `<a href="contact.html">CONTACT</a>`
    - Subpages: Active page indicator highlighted in `#F68C50`.

### 5.2 Featured Products Showcase & Slider (`#products` on `index.html`)
- **Container:** `.elementor-element-257125c` with `id="products"` and distinct crisp white background (`#FFFFFF`).
- **Product Card Architecture (`.tm-woo-product-style1`):**
  - Tall vertical portrait card (`border-radius: 20px`, `padding: 12px 12px 20px 12px`, 1px border `rgba(10, 41, 66, 0.08)`, ambient shadow `0 10px 30px rgba(10, 41, 66, 0.06)`).
  - Portrait image container (`height: 310px`, `border-radius: 16px`, `overflow: hidden`, `object-fit: cover`).
  - Centered product title in `Marcellus`, 18px, `#0A2942`.
  - Dedicated action button below carousel (`VIEW ALL PRODUCTS`) linking directly to `products.html`.
- **6 Featured Items:** HB Body 691 HS SR Clear, HB Body Pro F202 Zinc Plus, Challenger CL240 2K Clear, HB Body C496 2K HS Clear, HB Body Pro C493 Matt Clear, HB Body U951 Auto Flex.

### 5.3 Full Dynamic Product Catalogue (`products.html`)
- **Dataset Architecture (`data/products.json` & `js/products-data.js`):**
  - Dynamic catalog powered by structured JSON comprising **83 genuine automotive refinish products**.
  - Dual-loading mechanism: Async `fetch('data/products.json')` for HTTP/HTTPS servers, with graceful fallback to `window.royalProducts` (`js/products-data.js`) for offline and `file://` local execution.
  - Comprehensive metadata per product: `id`, `name`, `brand`, `category`, `categoryName`, `image`, `badge`, `desc`, `features` array, and `specifications` object.
- **Optimized 3-Column Catalog Grid System:**
  - Layout: `grid-template-columns: repeat(3, 1fr)` across desktop screens (`>= 992px`).
  - Solves badge collisions: Provides ample horizontal card space for long compound badges like `RUPES / PRO-CUT`, ensuring zero badge clipping or overlapping with category tags.
  - Pagination Engine: Updated to **15 products per page** (5 complete rows of 3), accompanied by a "Show All 83" toggle.
- **8 Category Filter Pills (with Live Counts):**
  1. *All Products* (`all` — 83 products)
  2. *Primers & Fillers* (`fillers` — 19 products)
  3. *Solvents & Underbody* (`solvents` — 13 products)
  4. *Polishing & Detailing* (`polishing` — 11 products)
  5. *Equipment & Tools* (`tools` — 11 products)
  6. *Clear Coats & Topcoats* (`clearcoats` — 9 products)
  7. *Hardeners & Activators* (`hardeners` — 9 products)
  8. *Paint & Aerosols* (`paints` — 7 products)
  9. *Masking & Protection* (`masking` — 4 products)
- **Search, Filtering, and Sorting Controls:**
  - Real-time instant search input matching names, codes (e.g., C496, 615, CL240), and descriptions.
  - Brand filter dropdown listing all 19 catalog brands (HB Body, Challenger, Axalta, Mirka, 3M, Farecla, etc.).
  - Sort selector: Default Catalogue Order, Name A-Z, Name Z-A, Brand A-Z.
  - Active filter tags with one-click clear all filters.
- **HD Quick View Modal:**
  - Full-resolution product imagery with zoom capability.
  - Complete technical specifications table (Volume, Mixing Ratio, Dry Time, VOC, Application).
  - Direct WhatsApp RFQ trigger + Direct phone call shortcut (`+974 4450 1669`).

### 5.4 Redesigned Corporate Heritage & Profile Page (`about.html` & `css/about.css`)
- **Page Architecture:** Completely rebuilt from the ground up, discarding the legacy Zay shop template. Powered by dedicated design tokens in `css/about.css`.
- **Hero Section:**
  - Eyebrow Badge: Centered white pill with warm amber dot: `• CORPORATE HERITAGE & PROFILE`.
  - Main Headline: Pure white serif title (`color: #FFFFFF !important; font-family: 'Marcellus', serif; font-size: 52px; font-weight: 400;`): *"Crafting Automotive Refinish Excellence Since 2012"*.
  - Slogan & Value Chips: 4 glassmorphic chips: *"Doha Industrial Area (St. 23)"*, *"Direct European Factory Sourcing"*, *"Computerized Colorimetry Lab"*, *"Authorized Qatar Dealership"*.
- **2-Column Editorial Story Section:**
  - Left Visual Collage: Showroom exterior and mixing facility visuals with 2 floating credibility cards:
    1. Top-Left Floating Contact Card: `Contact Us` with green WhatsApp icon, direct phone `+974 5039 5741`, and *"Speak to Refinish Specialists"*.
    2. Bottom-Right Floating Experience Card: Dark gradient card with gold star and `14+ Years of Excellence — Serving Qatar Since 2012`.
  - Right Editorial Story:
    - Sourced authentic content directly from live domain `https://www.royalautopaints.com/about`.
    - Key narrative: Founded in 2012 on Wakalat Street, Royal Auto Paints has evolved into Qatar's leading distributor, sourcing factory-direct European coatings without mediators to ensure genuine trade pricing.
    - 4 Live Metric Stat Counters:
      - `14+`: Years Industry Leadership
      - `100%`: Direct Factory Imports
      - `80+`: Automotive Coating Products
      - `650+`: Bodyshops & Marine Clients
    - Bottom Action Row: Horizontal flex container (`flex-wrap: nowrap; gap: 20px;`) pairing the theme pill button (`OUR HERITAGE & BRANDS →`) side-by-side with the Authorized Distributor emblem (`images/royal_brand_swirl.png` + `AUTHORIZED DISTRIBUTOR — Royal Auto Paints — Doha, Qatar`).
- **Infinite Brand & Branch Marquee Slider (`.about-brands-slider`, `#F7F0F2`):**
  - Continuous CSS keyframe marquee animation (`@keyframes royalBrandsMarquee`, 28s linear infinite).
  - Seamless loop of 8 premier partner & branch brand marks:
    1. *Challenger* (`images/brand_challenger.png`)
    2. *Imlar* (`images/brand_imlar.png`)
    3. *New Auto Paint / Al-Haram* (`images/brand_new_auto_paint.png`)
    4. *Gemex Coatings* (`images/brand_gemex.png`)
    5. *MotoMax* (`images/brand_motomax.png`)
    6. *Sea-Line Yacht Coatings* (`images/brand_sealine.png`)
    7. *HB Body* (`images/brand_hbbody.png`)
    8. *Axalta* (`images/brand_axalta.png`)
  - Features pause-on-hover interaction and subtle grayscale-to-color transition.
- **3-Card Factory-Direct Advantage Section (`#FDFBF7`):**
  - Section Title: *"How We Are Different — Direct Factory Imports Without Mediators"*.
  - 3 Luxury Cards:
    1. *Factory-Direct European Imports:* Sourced direct from ISO-certified European production lines.
    2. *Computerized Colorimetry Precision:* High-resolution spectrophotometer formulations matched to global OEM codes.
    3. *Turnkey Bodyshop Partnership:* Technical support, custom aerosol filling, and same-day delivery across Doha.
- **4-Card Operational Facilities & Laboratory Standards Section (`#FFFFFF`):**
  - Architectural visual parity with `services.html`:
    1. *Color Matching & Spectrophotometry Lab* (`images/lab_spec_1.jpg`)
    2. *Automated Custom Aerosol Spray Line* (`images/lab_spec_2.jpg`)
    3. *Bulk Bodyshop Logistics & Stockyard* (`images/lab_spec_3.jpg`)
    4. *Spray Booth Technical Testing Facility* (`images/lab_spec_4.jpg`)
- **Dark Gradient Consultation CTA Section:**
  - Signature card background: `linear-gradient(135deg, #58585A 0%, #071C2E 100%)` with 24px border radius.
  - Centered headline in Marcellus serif: *"Need Custom Color Mixing or Spray Booth Support?"*.
  - Subtitle: *"Visit our colorimetry laboratory in Industrial Area (Street 23, Wakalat St) or connect directly with our technical refinish team for fast formula quotes and workshop supplies."*.
  - Dual Action Buttons: Green WhatsApp button (`#25D366`) and call button (`+974 4450 1669`).

### 5.5 Services Page Visual Synchronization (`services.html` & `css/services.css`)
- **Header Standardization:** All section eyebrow pills (`.services-pill-badge`) and section headlines (`.services-section-title`) centered for crisp architectural balance.
- **Consultation Banner Alignment:** Adopted the signature dark gradient card styling (`linear-gradient(135deg, #58585A 0%, #071C2E 100%)`) while retaining 100% of original technical services copy:
  - Eyebrow: `BODYSHOP WHOLESALE & TECHNICAL MIXING`
  - Headline: *"Need a Custom OEM Formula, Bulk Bodyshop Order, or Spray Booth System?"*
  - Body: *"Our Doha technical formulation laboratory and Wakalat Street warehouse provide computerized color formulation for all global automotive marques, bulk bodyshop pricing, and same-day delivery across Qatar."*
  - Dual CTAs: WhatsApp Technical Team (`#25D366`) and Call Showroom: `+974 4450 1669`.

### 5.6 Elementor Corporate Footer Parity (`#footer`, `.footer`)
- **Visual & Structural Parity:**
  - Standardized across `index.html`, `products.html`, `about.html`, `services.html`, and all subpages using the exact Elementor container markup:
    - Outer container: `.elementor-element-00ae94a` (`width: 100% !important; background: transparent !important;`).
    - Upper main footer container: `.elementor-element-ecae855` in Deep Royal Navy (`#0A3254`).
    - 4-Column Flex Layout (`.elementor-element-2c0d036`):
      1. **About Royal Paints:** Company background, official authorized partner statement, and "GET IN TOUCH" pill button.
      2. **Quick Links:** Direct navigation links to About, Product Catalog (`products.html`), Color Matching Lab, Authorized Brands, and Contact.
      3. **Refinish Solutions:** 2K Basecoats, High-Solid Clears, Primers & Putties, Abrasives & Masking, Spray Guns.
      4. **Showroom & Mixing Lab + Direct Inquiries:** Physical address (Street 23, Wakalat St, Industrial Area, Doha, Qatar), Landline `+974 4450 1669`, WhatsApp `+974 5039 5741`, Email `info@royalautopaints.com`.
    - Newsletter Bar: Sub-container with white Royal Auto Paints emblem, 4 circular social links (WhatsApp, Facebook, Instagram, LinkedIn), newsletter input, and Warm Orange submit button.
    - Watermark Typography: Subtle outline text `ROYAL AUTO PAINTS`.
    - Lower Copyright Strip: `.elementor-element-e0c3cbc` with copyright notice and policy links.
- **Zero-Radius Bottom Seam:**
  - Bottom-left and bottom-right border radii on `.elementor-element-ecae855` are strictly zero (`border-bottom-left-radius: 0 !important; border-bottom-right-radius: 0 !important;`), ensuring a perfectly vertical, seamless transition into the copyright bar with zero notch gaps.

### 5.7 Floating Quick Actions Stack
- **WhatsApp Floating Button (`.floating-whatsapp-btn`):**
  - 52px circular button in official WhatsApp green (`#25D366`).
  - Static, non-flashing icon presentation (`animation: none !important`), eliminating distracting visual pulsing.
  - Positioned at `bottom: 24px; right: 24px; z-index: 99998`.
  - Direct WhatsApp RFQ URL: `https://wa.me/97450395741`.
- **Scroll-to-Top Button (`.scroll-to-top`):**
  - 48px circular button in Deep Royal Navy (`#0A2942`) with crisp white chevron (`fas fa-chevron-up`).
  - Positioned directly above the WhatsApp button at `bottom: 86px; right: 26px; z-index: 99998`.
  - Fades in automatically when scrolling past 350px.
  - Smooth hardware-accelerated scroll to top (`window.scrollTo({ top: 0, behavior: 'smooth' })`).

---

## 6. Technical Engine & JavaScript Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE JAVASCRIPT LIBRARIES                       │
├─────────────────────┬───────────────────┬──────────────────────────────┤
│ Library             │ File              │ Functional Role              │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ GSAP 3.12+          │ gsap.min.js       │ ScrollTrigger pinned service │
│                     │ ScrollTrigger.js  │ cards & stacking animation   │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Swiper.js           │ swiper.min.js     │ Featured products carousel & │
│                     │                   │ brand partner ribbon         │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ TwentyTwenty        │ jquery.event.move │ Interactive Before & After   │
│                     │ twentytwenty.js   │ comparison image split slider│
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ jQuery CounterUp    │ jquery.counterup  │ Scroll-triggered statistic   │
│                     │ waypoints.min.js  │ metric counter animations    │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Lenis Smooth Scroll │ lenis.min.js      │ Hardware-accelerated fluid   │
│                     │                   │ in-page scroll physics       │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Catalog Engine      │ products-catalog.js│ Dynamic JSON rendering, live │
│                     │                   │ search, 3-col grid, modal    │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Catalog Dataset     │ products.json     │ 83 Refinish Products dataset │
│                     │ products-data.js  │ Resilient offline fallback   │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Custom Master Suite │ custom_1.js       │ Main theme orchestrator,     │
│                     │ custom.js         │ sticky nav, mobile drawer    │
└─────────────────────┴───────────────────┴──────────────────────────────┘
```

---

## 7. SEO Architecture, E-E-A-T & Google Search Preservation

To guarantee **zero loss of organic search ranking equity** from the live domain (`royalautopaints.com`), the redesign strictly preserves all Google Search signals:

1. **Strict 1:1 Route & Backlink Continuity:**
   - Every existing indexed route (`/`, `/about`, `/services`, `/products`, `/gallery`, `/career`, `/contact`) maps directly without 404s or redirect loops.
2. **Schema.org JSON-LD Structured Entity Graph:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": ["AutoPartsStore", "AutomotiveBusiness", "LocalBusiness"],
     "@id": "https://www.royalautopaints.com/#organization",
     "name": "Royal Auto Paints",
     "alternateName": ["Royal Auto Paints Qatar", "Royal Paints Qatar", "رويال لأصباغ السيارات"],
     "url": "https://www.royalautopaints.com/",
     "logo": "https://www.royalautopaints.com/images/royal_logo.png",
     "image": [
       "https://www.royalautopaints.com/images/storefront_dealership.jpg",
       "https://www.royalautopaints.com/images/Spray_gun_emitting_mist.jpg"
     ],
     "description": "Established in 2012, Royal Auto Paints is Qatar's premier authorized distributor of HB Body, Axalta Challenger, Motolux, and Sea-Line coatings. Complete computerized spectrophotometer color matching and collision center supplies.",
     "foundingDate": "2012",
     "telephone": ["+97450395741", "+97444501669"],
     "email": "info@royalautopaints.com",
     "address": {
       "@type": "PostalAddress",
       "streetAddress": "Street No. 23 (Wakalat St), Industrial Area",
       "addressLocality": "Doha",
       "addressRegion": "Doha",
       "addressCountry": "QA"
     },
     "geo": {
       "@type": "GeoCoordinates",
       "latitude": 25.1843,
       "longitude": 51.4428
     },
     "openingHoursSpecification": [
       {
         "@type": "OpeningHoursSpecification",
         "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
         "opens": "07:30",
         "closes": "12:30"
       },
       {
         "@type": "OpeningHoursSpecification",
         "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
         "opens": "15:30",
         "closes": "19:30"
       }
     ],
     "currenciesAccepted": "QAR",
     "paymentAccepted": "Cash, Credit Card, Bank Transfer",
     "areaServed": { "@type": "Country", "name": "Qatar" },
     "brand": [
       {"@type": "Brand", "name": "HB Body"},
       {"@type": "Brand", "name": "Challenger"},
       {"@type": "Brand", "name": "Axalta"},
       {"@type": "Brand", "name": "Sea-Line"},
       {"@type": "Brand", "name": "Motolux"}
     ]
   }
   ```
3. **Canonical URLs & Social Graph:** Complete Open Graph (`og:type`, `og:image`, `og:title`) and Twitter Card metadata for rich social previews.

---

## 8. Responsive Engineering & Breakpoint Matrix

### Responsive Viewport Rules
- **Large Desktop (>=1400px):** 3 product cards per row in catalog grid (`repeat(3, 1fr)`) ensuring wide badge clearance, full GSAP card width (`100%`), 42px section headings, full 4-column footer layout.
- **Desktop (992px – 1399px):** 3 product cards per row, 4-column footer layout, `white-space: nowrap` on about action row.
- **Tablet (768px – 991px):** 2 product cards per row, 2-column capability grids, 32px section headings, 2-column footer layout.
- **Mobile (<768px):** 1 product card per view with touch support, stacked capability boxes, 28px section headings, single-column footer layout, zero horizontal overflow (`0px`).

---

## 9. Asset Organization & Directory Structure

```
royalautopaints/
├── css/
│   ├── about.css                 (Dedicated About page styling, tokens, marquee slider)
│   ├── bootstrap.min.css         (Bootstrap 5 foundation)
│   ├── custom-frontend.min.css   (Elementor flexbox & container core layout engine)
│   ├── elementor-page.css        (Elementor inline page styles)
│   ├── elementor-post-1693.css   (Elementor corporate footer styling & column widths)
│   ├── custom.css                (Master styling overrides, GSAP pinning, footer seams, floating actions)
│   ├── products-catalog.css      (3-column catalog styles, search toolbar, modal, pagination)
│   ├── services.css              (Services page styles, facilities, dark gradient CTA)
│   ├── navigation-menu.css       (Footer menu typography & icons)
│   ├── newsletter.css            (Footer newsletter subscription bar)
│   ├── text-editor-advanced.css  (Footer typography & heading hierarchy)
│   ├── theme-button-style1.css   (Theme pill button style 1)
│   ├── theme-button-style2.css   (Theme pill button style 2)
│   ├── mascot-core-widgets-style.css (Core mascot widgets styling)
│   ├── wc-products-loader.css    (WooCommerce style 1 card architecture)
│   ├── widget-rating.min.css     (5-Star rating typography & Font Awesome styles)
│   ├── swiper.min.css            (Swiper slider layout)
│   ├── twentytwenty.css          (Before & After comparison slider styles)
│   └── style-main.css            (ThemeMascot core styling)
├── data/
│   └── products.json             (Full 83 genuine automotive refinish products dataset)
├── docs/
│   └── blueprint.md              (Master Technical Architecture & Specification v5.0)
├── images/
│   ├── favicon.ico               (Multi-resolution browser favicon 16x16, 32x32, 48x48)
│   ├── favicon-32x32.png         (Retina browser tab icon)
│   ├── favicon-16x16.png         (Standard browser tab icon)
│   ├── apple-touch-icon.png      (180x180 iOS home screen icon with solid navy fill)
│   ├── royal_brand_swirl.png     (332x332 RGBA master brand swirl emblem)
│   ├── royal_logo.png            (Official Royal Auto Paints color logo)
│   ├── royal_logo_gray.png       (Official Master Graphite Gray #58585A logo for sticky header)
│   ├── royal_logo_white.png      (Official Royal Auto Paints white logo for hero overlays)
│   ├── storefront_dealership.jpg (Official physical dealership exterior in Doha Industrial Area)
│   ├── dealership_showcase_wide.jpg (High-res 1600x900 responsive hero background)
│   ├── lab_spec_1.jpg to 4.jpg   (4 Operational Facilities & Laboratory Standards photos)
│   ├── workflow_step_1.jpg to 4.jpg (Refinish workflow process photos)
│   ├── brand_*.png               (Partner & branch brand logos: Challenger, Imlar, Axalta, etc.)
│   ├── products/                 (80+ High-resolution product photographs)
│   ├── Sedan_with_damaged_paint.jpg  (TwentyTwenty Before vehicle image)
│   ├── Sedan_with_repaired_paint.jpg (TwentyTwenty After vehicle image)
│   ├── Spray_gun_emitting_mist.jpg   (Why Choose Us arched mask feature)
│   └── mask3.png                     (Curved organic cut-out mask)
├── js/
│   ├── products-catalog.js       (Catalog rendering, instant search, 3-col grid, pagination, modal)
│   ├── products-data.js          (Offline/local fallback dataset: window.royalProducts)
│   ├── gsap.min.js               (GSAP animation core)
│   ├── ScrollTrigger.min.js      (ScrollTrigger pinning engine)
│   ├── swiper.min.js             (Swiper slider touch engine)
│   ├── jquery.twentytwenty.js    (Before/After split slider)
│   ├── custom_1.js               (Main theme orchestrator)
│   └── custom.js                 (Interactive event handlers, floating actions, smooth scroll)
├── index.html                    (Flagship 14-Section Interactive Homepage)
├── about.html                    (Modern Heritage, Live Stats, Brand Slider & Advantage Page)
├── products.html                 (Dedicated 83-Item Catalog, 3-in-a-Row Grid & Modal)
├── services.html                 (5 Specialized Refinish & Industrial Divisions)
├── gallery.html                  (Visual Project Portfolio)
├── career.html                   (Careers & Application Portal)
└── contact.html                  (Wakalat St Showroom & Inquiry Desk)
```

---

## 10. Verification & Quality Assurance Protocol

Automated headless Edge test scripts utilizing the Chrome DevTools Protocol (CDP) validate every release:
1. `scratch/test_nav_click.js`: Validates that clicking "PRODUCTS" in the `index.html` navigation bar successfully routes the browser to `products.html` and that the catalog loads with 0 errors.
2. `scratch/capture_footers.js` & `scratch/capture_bottom.js`: Confirms 100% visual parity of the Elementor corporate footer across all 7 pages, verifying 4-column horizontal distribution, zero bottom-corner radius, and flush alignment with the copyright bar.
3. `scratch/verify_products_page.js`: Validates catalog rendering (83 products), 3-card-per-row grid layout, live search matching, category filter switching, brand dropdown filtering, sort order, and Quick View modal opening.
4. `scratch/capture_snap.js`: Automated visual regression test suite capturing high-resolution snapshots across all key sections:
   - `sticky_nav_full_scrolled.png` & `services_sticky_logo.png`: Dual-logo transition validation showing Master Graphite Gray logo (`#58585A`) on sticky nav.
   - `index_reordered_nav.png`: Standardized 7-page menu order validation.
   - `about_hero_top.png`: Pure white hero title (`#FFFFFF !important`) and centered pill badge.
   - `about_story_action_row.png`: Side-by-side button and Authorized Distributor emblem alignment.
   - `about_slider_proof.png`: Continuous 8-brand marquee animation verification.
   - `about_advantage_proof.png`: 3-card factory-direct advantage section layout.
   - `about_facilities_proof.png`: 4-card laboratory standards visual parity with `services.html`.
   - `about_cta_proof.png`: Dark gradient consultation CTA card with WhatsApp and call triggers.
5. `scratch/verify_final_anim.js`: Captures all 5 steps of the GSAP service division pinning animation across scroll positions `scrollY: 2350` to `scrollY: 3755`, verifying that each card pins and unpins seamlessly.
6. `scratch/verify_floating_runtime.js`: Validates that the WhatsApp floating button has `animation: none` (no flashing) and that the scroll-to-top button uses Deep Royal Navy `#0A2942` with white chevron.
7. `scratch/check_facility_overflow.js`: Tests horizontal viewport bounding boxes on 390px, 768px, and 1440px to guarantee 0px horizontal scroll overflow.
8. **Console & Asset Verification:** Confirms that all images resolve with HTTP 200 and no missing asset or JavaScript runtime warnings occur across all 7 pages.
