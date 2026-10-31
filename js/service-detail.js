/**
 * Royal Auto Paints Qatar - Dynamic Service Detail Controller
 */

(function () {
  'use strict';

  const servicesData = {
    'automotive': {
      title: 'Automotive Paints & 2K Refinishing Systems',
      badge: 'Automotive Refinish Division',
      heroImg: 'images/automotive_hero.png',
      breadcrumb: 'Automotive Refinishing',
      lead: 'Official authorized Qatar distributor of Axalta Challenger and HB Body European refinish systems. We supply Doha’s leading automotive collision repair centers and bodyshops with computerized OEM spectrophotometer color formulation, high-solids clear coats, 2K isocyanate hardeners, and polyester fillers.',
      steps: [
        { num: 'STEP 01', title: 'Substrate Inspection & Cleaning', desc: 'Thorough chemical degreasing using HB Body 770 Antisil to remove silicone, oil, and road contaminants.' },
        { num: 'STEP 02', title: 'Multi-Angle Digital Color Scan', desc: 'Precision scanning with calibrated digital spectrophotometer against global OEM manufacturer color libraries.' },
        { num: 'STEP 03', title: 'Automated Micro-Dosing Mixing', desc: 'Exact formula dispensing of pearl, metallic, xiralic, and solid toners with automated precision scales.' },
        { num: 'STEP 04', title: 'Quality Spray-Out & Dispatch', desc: 'Test spray card verification under multi-angle daylight simulation lamps before daily fleet delivery.' }
      ],
      capabilities: [
        'OEM-certified paint formulations (Toyota, Nissan, Porsche, Mercedes-Benz, Land Rover)',
        'Axalta Challenger European 2K solvent-borne mixing bank',
        'HB Body High-Solid and Ultra-Fast Clear Coats (C496, 691, 698)',
        'Scratch-resistant ceramic nano-particle clearcoat systems',
        'Custom aerosol spray paint can pressurized filling',
        'Daily morning and afternoon dispatch across Doha Industrial Area'
      ],
      relatedCategory: 'clears'
    },
    'industrial': {
      title: 'Industrial Paints & Anti-Corrosion Surface Coatings',
      badge: 'Heavy Industrial & Marine Protection',
      heroImg: 'images/Industrial_steel_I-beams_positioned.jpg',
      breadcrumb: 'Industrial Coatings',
      lead: 'Heavy-duty industrial coating solutions engineered to withstand Qatar’s extreme ambient heat, intense UV radiation, salinity, and sand abrasion. Specially formulated for structural steelwork, petrochemical storage tanks, commercial fleet chassis, and coastal installations.',
      steps: [
        { num: 'STEP 01', title: 'Surface Profile Assessment', desc: 'Evaluating blast cleaning standard (Sa 2.5 / SSPC-SP 10) and steel surface salt contamination levels.' },
        { num: 'STEP 02', title: 'Zinc-Rich Primer Application', desc: 'Applying high-solids zinc phosphate and epoxy primers for cathodic corrosion barrier protection.' },
        { num: 'STEP 03', title: 'Intermediate Epoxy Tie-Coat', desc: 'Building high dry film thickness (DFT) barrier protection with heavy-duty polyamide-cured epoxies.' },
        { num: 'STEP 04', title: 'Aliphatic Polyurethane Finish', desc: 'Applying UV-stabilized aliphatic polyurethane topcoat ensuring long-term color and gloss retention.' }
      ],
      capabilities: [
        'High-build 2K epoxy primers with active zinc phosphate corrosion inhibitors',
        'High-temperature silicone coatings for exhaust stacks and industrial pipes',
        'Polyurethane finishes resistant to chemicals, oils, and hydraulic fluids',
        'Fast-curing shop primers for pre-fabrication structural steel processing',
        'Corrosion protection certified for harsh coastal and marine environments',
        'Bulk drum packaging and on-site technical inspection service'
      ],
      relatedCategory: 'primers'
    },
    'marine': {
      title: 'Marine Paints & Luxury Yacht Protection',
      badge: 'Marine & Offshore Coatings',
      heroImg: 'images/Shipyard_worker_applying_protective_coating.jpg',
      breadcrumb: 'Marine Coatings',
      lead: 'Specialized marine coating systems engineered for Arabian Gulf marine conditions. From luxury yacht hull fairing and high-gloss polyurethane superstructures to commercial vessel antifouling and cathodic hull preservation.',
      steps: [
        { num: 'STEP 01', title: 'Hull Substrate Decontamination', desc: 'High-pressure freshwater wash down and chemical degreasing to remove marine bio-fouling and salts.' },
        { num: 'STEP 02', title: 'Epoxy Barrier Priming', desc: 'Application of impervious high-build epoxy barrier coats to eliminate fiberglass osmosis risks.' },
        { num: 'STEP 03', title: 'Self-Polishing Antifouling', desc: 'Application of cuprous oxide biocidal antifouling matrix preventing barnacle and algae growth in Gulf waters.' },
        { num: 'STEP 04', title: 'Mirror Superstructure Finish', desc: 'High-solids marine polyurethane finish offering supreme gloss, chemical resistance, and non-yellowing durability.' }
      ],
      capabilities: [
        'Self-polishing copolymer (SPC) antifouling paints for warm, high-salinity sea water',
        'Gelcoat and fiberglass fairing compounds with zero shrinkage',
        'High-gloss marine polyurethane finishes for luxury yachts and speedboats',
        'Aluminium boat primers formulated to prevent galvanic corrosion',
        'Nonskid deck coatings for commercial barges, workboats, and fishing dhows',
        'On-site technical inspection at Qatar shipyards and marinas'
      ],
      relatedCategory: 'undercoats'
    },
    'wood': {
      title: 'Luxury Architectural & Furniture Wood Coatings',
      badge: 'Architectural & Carpentry Finishes',
      heroImg: 'images/close-up-of-carpenter-using-spray-gun-applying-varnish-or-primer-to-wood-door-2023-11-27-05-18-09-utc.jpg',
      breadcrumb: 'Wood Coatings',
      lead: 'Premium wood coatings, stains, sealers, and protective lacquers formulated for luxury interior joinery, architectural villa fitouts, bespoke cabinetry, and hospitality woodwork in Qatar.',
      steps: [
        { num: 'STEP 01', title: 'Timber Sanding & Grain Fill', desc: 'Calibrated progressive sanding and grain filling to achieve flawless flatness across hardwood substrates.' },
        { num: 'STEP 02', title: 'Penetrating Wood Staining', desc: 'Application of UV-fast solvent or oil stains highlighting natural grain patterns (walnut, oak, teak).' },
        { num: 'STEP 03', title: 'High-Build Sanding Sealer', desc: 'Spraying high-solids polyurethane or NC sealers with fast dry times and effortless sandability.' },
        { num: 'STEP 04', title: 'Polyurethane Topcoat (Gloss/Matte)', desc: 'Applying non-yellowing polyurethane finish ranging from dead matte (5% sheen) to piano high gloss (95%).' }
      ],
      capabilities: [
        'Non-yellowing acrylic-polyurethane clears for light natural woods (white oak, maple)',
        'Deep piano gloss black and luxury pigmented lacquer formulations',
        'Stain resistant finishes certified for kitchen cabinets and luxury vanity units',
        'Fast-curing nitrocellulose (NC) lacquers for quick-turnaround carpentry fitouts',
        'Comprehensive wood stain color matching lab in Street 23',
        'Water-based eco-friendly interior wood finishes with low VOC emissions'
      ],
      relatedCategory: 'clears'
    },
    'spraybooth': {
      title: 'Spray Painting Booth Media & Air Filtration Systems',
      badge: 'Bodyshop Equipment & Filtration',
      heroImg: 'images/automotive-paint-technician-applying-clear-coat-in-spray-booth.jpg',
      breadcrumb: 'Spray Booth Media',
      lead: 'Complete spray painting booth consumable supply and filtration media. Essential for ensuring clean, dust-free paint finishes, controlled air laminar flow, and environmental compliance across Qatar collision workshops.',
      steps: [
        { num: 'STEP 01', title: 'Airflow & Pressure Differential Audit', desc: 'Diagnosing intake static pressure, airflow CFM, and filter saturation to prevent paint overspray defects.' },
        { num: 'STEP 02', title: 'Pre-Filter & Ceiling Media Installation', desc: 'Fitting progressive-density fiberglass pre-filters and thermally bonded ceiling diffusion media.' },
        { num: 'STEP 03', title: 'Paint Arrestor Floor Media Setup', desc: 'Installing glass fiber paint stop floor media designed to capture heavy paint overspray particles.' },
        { num: 'STEP 04', title: 'Air Cleanliness & Particle Testing', desc: 'Laser particle counter verification ensuring Class M5 / F5 filtration standards inside the spray cabin.' }
      ],
      capabilities: [
        'Ceiling fine filtration media (EN 779 Class F5 / ISO 16890 ePM10)',
        'Floor paint arrestor exhaust rolls (green/white fiberglass media)',
        'Intake pocket and panel pre-filters for extreme desert dust environments',
        'Activated carbon exhaust filters for solvent odor reduction',
        'High-temperature oven baking filtration media (up to 200°C)',
        'Custom roll slitting and full roll deliveries to Qatar collision centers'
      ],
      relatedCategory: 'masking-materials'
    },
    'color-mixing': {
      title: 'Computerized Spectrophotometer Color Formulation Lab',
      badge: 'Precision Colorimetry Division',
      heroImg: 'images/Technician_scanning_car_paint_color.jpg',
      breadcrumb: 'Color Mixing Lab',
      lead: 'State-of-the-art computerized paint formulation laboratory located on Street 23, Industrial Area, Doha. Combining multi-angle spectrophotometers with automated micro-dispensing scales to deliver perfect OEM color matches on demand.',
      steps: [
        { num: 'STEP 01', title: 'Digital Surface Colorimeter Scan', desc: 'Multi-angle spectral reading directly from the vehicle fuel flap or reference sample.' },
        { num: 'STEP 02', title: 'Formula Retrieval & Variance Correction', desc: 'Accessing Axalta Challenger and HB Body global databases with automated aging/fading adjustment.' },
        { num: 'STEP 03', title: 'Precision Micro-Gram Dispensing', desc: 'Computerized digital scales ensure exact droplet precision for micro-toners, pearls, and metallic flakes.' },
        { num: 'STEP 04', title: 'Spray-Out Test & Card Archive', desc: 'Physical spray-out card inspected under multi-daylight D65 lamps and archived with customer record.' }
      ],
      capabilities: [
        'Over 150,000 global OEM automotive formulas updated continuously via cloud',
        'Accurate formulation for pearl, xiralic, candy, tri-coat, and matte satin colors',
        'Aerosol spray can pressurized filling with custom mixed paints in under 5 minutes',
        'Small touch-up bottles with precision brush caps for minor scratch repair',
        'Industrial RAL and British Standard (BS) color matching for commercial clients',
        'Same-day collection at Street 23 showroom or direct delivery across Qatar'
      ],
      relatedCategory: 'custom-color'
    }
  };

  function initServiceDetail() {
    const params = new URLSearchParams(window.location.search);
    let key = (params.get('service') || '').toLowerCase();

    // Map common aliases
    if (key.includes('auto') || key.includes('refinish') || key.includes('car')) key = 'automotive';
    else if (key.includes('indust')) key = 'industrial';
    else if (key.includes('marin') || key.includes('yacht')) key = 'marine';
    else if (key.includes('wood') || key.includes('furn')) key = 'wood';
    else if (key.includes('booth') || key.includes('filter')) key = 'spraybooth';
    else if (key.includes('mix') || key.includes('color') || key.includes('spectro')) key = 'color-mixing';
    else if (!servicesData[key]) key = 'automotive';

    const data = servicesData[key];

    // Document Title
    document.title = `${data.title} — Royal Auto Paints Qatar | Technical Service Specifications`;

    // DOM Updates
    const titleEl = document.getElementById('sdTitle');
    const badgeEl = document.getElementById('sdBadge');
    const imgEl = document.getElementById('sdImg');
    const leadEl = document.getElementById('sdLead');
    const bcTitle = document.getElementById('sdBreadcrumbTitle');
    const waHotlineBtn = document.getElementById('sdWaHotlineBtn');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (imgEl) {
      imgEl.src = data.heroImg;
      imgEl.alt = data.title;
    }
    if (leadEl) leadEl.textContent = data.lead;
    if (bcTitle) bcTitle.textContent = data.breadcrumb;

    if (waHotlineBtn) {
      const msg = encodeURIComponent(`Hello Royal Auto Paints Qatar, I would like to inquire about your ${data.title} service.`);
      waHotlineBtn.href = `https://wa.me/97450395741?text=${msg}`;
    }

    // Process Steps
    const stepsGrid = document.getElementById('sdStepsGrid');
    if (stepsGrid) {
      stepsGrid.innerHTML = data.steps.map(s => `
        <div class="sd-step-box">
          <div class="sd-step-num">${s.num}</div>
          <h4 class="sd-step-heading">${s.title}</h4>
          <p class="sd-step-desc">${s.desc}</p>
        </div>
      `).join('');
    }

    // Capabilities
    const capsList = document.getElementById('sdCapabilitiesList');
    if (capsList) {
      capsList.innerHTML = data.capabilities.map(c => `
        <li class="sd-cap-item">
          <i class="fas fa-check-circle"></i>
          <span>${c}</span>
        </li>
      `).join('');
    }

    // Active Sidebar Link
    document.querySelectorAll('.sd-services-menu a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href.includes(`service=${key}`)) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initServiceDetail);
})();
