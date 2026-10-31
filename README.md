# Royal Auto Paints Qatar — Corporate Refinish & Coating Portal

> **Official Web Platform for Royal Auto Paints (Al-Haram Paints & Trading W.L.L.)**  
> Street 23, Wakalat St, Industrial Area, Doha, Qatar  
> **Contact:** [+974 4450 1669](tel:+97444501669) | **WhatsApp:** [+974 5039 5741](https://wa.me/97450395741) | **Email:** [royalpaints.qa@gmail.com](mailto:royalpaints.qa@gmail.com)

---

## 1. Executive Overview

Royal Auto Paints is Qatar's premier authorized distributor of automotive refinish coatings, computerized spectrophotometer color formulation systems, heavy industrial protective paints, luxury marine & yacht finishes, and premium polyurethane wood coatings.

This repository contains the production-grade static web portal, engineered with high performance, fluid animations, responsive layouts, and an **Automotive Minimal Industrial** design system.

---

## 2. Brand Design System & Color Palette

The entire portal follows a unified, high-contrast, professional palette with **0% unwanted navy or ashblue hues**:

| Role | Color Hex / RGB | Purpose & Usage |
| :--- | :--- | :--- |
| **Pure Canvas** | `#FFFFFF` | Primary card surfaces, modal windows, product cards, dropdowns |
| **Technical Light Gray** | `#F7F0F2` | Page canvas backgrounds, section backdrops, subtle contrast fills |
| **Master Graphite Gray** | `#58585A` | Primary logo color, corporate headings, secondary action buttons |
| **Deep Charcoal** | `#22272F` | Navigation headers, dark surface cards, brand marquee cards |
| **Carbon Base** | `#14171C` | Hero banners, dark contrast text on gold, corporate footer base |
| **Body Typography** | `#4A5568` | Descriptive paragraphs, specification lists, form labels |
| **Racing Yellow / Gold** | `#FFB800` / `#F59E0B` | Primary call-to-action buttons, active states, breadcrumb separators, accents |
| **Amber Dark on Light** | `#B45309` | High-contrast category tags & badges on white surfaces (WCAG AA compliant) |
| **WhatsApp Green** | `#25D366` | Direct RFQ & Technical Specialist WhatsApp messaging triggers |

### Universal Breadcrumbs Standard
All subpages implement the **Signature Gold Separator** breadcrumb standard:
- **Parent / Home Link:** Light Gray (`#D1D5DB`), transitioning to Racing Gold (`#FFB800`) on hover.
- **Separator (`/`):** Signature Gold (`#FFB800`, font-weight: 700).
- **Current Page Item:** Pure White (`#FFFFFF`, font-weight: 500).

---

## 3. Page Catalog & Architecture

```
royalautopaintsre/
├── index.html               # Main Homepage with GSAP-pinned 4 Specialized Services
├── about.html               # Corporate Heritage, Dealership Network & Color Lab
├── services.html            # 4 Core Divisions Overview & 4-Step Technical Workflow
├── service-detail.html      # Dynamic Service View (Automotive, Industrial, Marine, Wood)
├── products.html            # Searchable & Filterable Catalog with Quick View & Details
├── product-detail.html      # Dynamic Product Detail & Technical Specifications
├── gallery.html             # Project Portfolio with White/Gold Lightbox Modal
├── blog.html                # Technical Insights & Bodyshop Knowledge Hub
├── career.html              # Careers, Culture, Values, & Qatar Branches
├── career-detail.html       # Role Responsibilities & Application Modal
├── blog-detail.html         # Technical Insights: Spectrophotometer Color Matching
├── contact.html             # Doha Showroom, Warehouse Locations & RFQ Form
├── css/                     # Production stylesheets
│   ├── custom.css           # Global typography, navigation, mobile drawer, footer
│   ├── products-catalog.css # Filter system, product cards, quick view modal
│   ├── gallery.css          # Grid layout, filter buttons, lightbox popup
│   ├── service-detail.css   # Service tabs, technical specs, callout cards
│   ├── product-detail.css   # Product hero, zoom preview, spec sheets
│   ├── career-detail.css    # Job details, requirements list, application dialog
│   ├── blog-detail.css      # Technical article typography, author bio, related guides
│   └── ...                  # Vendor stylesheets (bootstrap, swiper, animations)
├── js/                      # Production scripts
│   ├── products-catalog.js  # Live catalog filtering, pagination, quick view triggers
│   ├── service-detail.js    # URL-based service state switching & RFQ wiring
│   ├── product-detail.js    # Dynamic product specification loader
│   ├── career-detail.js     # Job opening router & application modal controller
│   ├── blog-detail.js       # Technical article switcher & related posts
│   └── ...                  # Vendor libraries (GSAP, Isotope, jQuery, Swiper)
└── images/                  # High-resolution optimized assets, brand logos, branch photos
```

---

## 4. Key Functional Features

### 1. Interactive Product Catalog (`products.html` & `product-detail.html`)
- **Real-Time Client-Side Search:** Instant keyword lookup across titles, SKU codes, brands, and descriptions.
- **Multi-Category Filters:** Automotive Basecoats, High-Solid Clears, Primers & Putties, Polishing & Detailing, Abrasives & Masking, Spray Guns & Equipment.
- **Dual-Action Card Overlay:** Centered **Quick View** (opens glassmorphic modal preview) and **View Details** (navigates to standalone specification page).
- **One-Click WhatsApp RFQ:** Auto-formats pre-filled commercial quote requests with product title and SKU.

### 2. Specialized Services Suite (`services.html` & `service-detail.html`)
- Ordered per Qatar refinish hierarchy:
  1. **Automotive Paints & Refinishing Products** (Axalta Challenger, Motolux, OEM clears)
  2. **Industrial Paints & Anti-Corrosion Coatings** (Epoxies, polyurethanes, marine primers)
  3. **Marine Paints & Luxury Yacht Protection** (Sea-Line, osmosis barriers, gelcoat restorers)
  4. **Wood Coatings & Architectural Finishes** (2K PU lacquers, stains, sealers)
- Dynamic query routing (`?service=automotive`, `?service=industrial`, etc.) with seamless tab switching.

### 3. Lightbox Project Gallery (`gallery.html`)
- Interactive project showcase with category filtering.
- **White / Light Gray Lightbox Modal:** Pure white modal card (`#FFFFFF`), neutral frosted charcoal backdrop (`rgba(20, 23, 28, 0.78)`), gold category tag, and direct WhatsApp / Call buttons.

### 4. Technical Insights & Blog (`blog-detail.html`)
- Deep technical guides for bodyshop painters, colorists, and fleet managers.
- Featured guide: *Delta E Spectrophotometer Color Matching in the Gulf Climate*.

---

## 5. Local Development Setup

To preview and develop the website locally:

### Option A: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. Access at `http://127.0.0.1:5500/`.

### Option B: Node.js / NPX
```bash
# Run local HTTP server on port 5500
npx serve -l 5500 .
```

### Option C: Python HTTP Server
```bash
python -m http.server 5500
```

---

## 6. Automated Audit & Quality Verification

The repository includes automated Chrome DevTools Protocol (CDP) test scripts located in `scratch/`:
- **Full Site Health Audit (`scratch/full_site_audit.js`):** Inspects all 14 page variants, verifies 0 console errors, 0 HTTP 4xx/5xx network failures, and validates breadcrumb structure.
- **Links & Assets Health Check (`scratch/audit_html_links_images.js`):** Validates 100% of internal links, images, stylesheets, and scripts on disk.
- **Color Palette Compliance:** Zero unwanted blue/ashblue tones detected across the DOM.

---

## 7. License & Rights

&copy; Copyright 2026 **Royal Auto Paints (Al-Haram Paints & Trading W.L.L.)**. All Rights Reserved.  
Authorized partner for Axalta Coating Systems, Challenger, Motolux, GEM Auto Paints, and Sea-Line in Qatar.
