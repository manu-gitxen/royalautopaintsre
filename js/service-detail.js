/**
 * Royal Auto Paints Qatar - Dynamic Service Detail Controller
 * Handles query parameter switching (?service=automotive|industrial|marine|wood|spraybooth|color-mixing)
 * Synchronizes Hero Title, Lead, Breadcrumbs, Content Card, 4-Step Protocol, Equipment & WhatsApp RFQs
 */

(function () {
  'use strict';

  const servicesData = {
    'automotive': {
      title: 'Automotive Paints & 2K Refinishing Systems',
      badge: 'Automotive Refinish Division',
      heroImg: 'images/automotive_hero.png',
      breadcrumb: 'Automotive Refinishing',
      lead: 'Official authorized Qatar distributor of Axalta Challenger and HB Body European refinish systems. We supply Doha\'s leading automotive collision repair centers and bodyshops with computerized OEM spectrophotometer color formulation, high-solids clear coats, 2K isocyanate hardeners, and polyester fillers.',
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
      ]
    },
    'industrial': {
      title: 'Industrial Paints & Anti-Corrosion Surface Coatings',
      badge: 'Heavy Industrial & Steel Protection',
      heroImg: 'images/Industrial_steel_I-beams_positioned.jpg',
      breadcrumb: 'Industrial Coatings',
      lead: 'Heavy-duty industrial coating solutions engineered to withstand Qatar\'s extreme ambient heat, intense UV radiation, salinity, and sand abrasion. Specially formulated for structural steelwork, petrochemical storage tanks, commercial fleet chassis, and coastal installations.',
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
      ]
    },
    'marine': {
      title: 'Marine Paints & Luxury Yacht Protection',
      badge: 'Marine & Offshore Coatings',
      heroImg: 'images/marine_paint_hero.jpg',
      breadcrumb: 'Marine Coatings',
      lead: 'Specialized marine coating systems engineered for Arabian Gulf marine conditions. From luxury yacht hull fairing and high-gloss polyurethane superstructures to commercial vessel antifouling and cathodic hull preservation.',
      steps: [
        { num: 'STEP 01', title: 'Hull Substrate Decontamination', desc: 'High-pressure freshwater wash down and chemical degreasing to remove marine bio-fouling and salts.' },
        { num: 'STEP 02', title: 'Epoxy Barrier Priming', desc: 'Applying multi-coat high-build impermeable epoxy barrier coats to prevent fiberglass osmotic blistering.' },
        { num: 'STEP 03', title: 'High-Gloss Topcoat / Antifouling', desc: 'Application of self-polishing copper-free antifouling for underwater hulls or premium mirror polyurethane.' },
        { num: 'STEP 04', title: 'Inspection & Film Thickness Testing', desc: 'Wet and dry film thickness (WFT/DFT) measurement and gloss level inspection before vessel re-launch.' }
      ],
      capabilities: [
        'Sea-Line European marine high-build epoxy fillers and primers',
        'Self-polishing antifouling coatings for harsh warm-water Gulf marine environments',
        'Ultra-high gloss acrylic polyurethane yacht topcoats resistant to saltwater etching',
        'Osmosis prevention and structural fiberglass repair formulations',
        'Teak wood sealers, UV-blocking varnishes, and deck preservation systems',
        'Direct delivery to Doha, Al Wakra, and Lusail marinas'
      ]
    },
    'wood': {
      title: 'Architectural & Luxury Wood Coatings',
      badge: 'Fine Joinery & Wood Finishes',
      heroImg: 'images/wood_paint_hero.jpg',
      breadcrumb: 'Wood Coatings',
      lead: 'Premium Italian and European wood finishing systems for luxury interior millwork, palatial cabinetry, commercial fit-outs, and exterior hardwoods exposed to high Qatar temperatures.',
      steps: [
        { num: 'STEP 01', title: 'Timber Moisture & Grain Prep', desc: 'Substrate moisture level verification and precision DA orbital sanding with progressive grits.' },
        { num: 'STEP 02', title: 'Wood Grain Staining / Toning', desc: 'Application of lightfast solvent-borne or water-based pigment stains highlighting natural wood grain.' },
        { num: 'STEP 03', title: 'Polyurethane Insulating Sealer', desc: 'High-solids clear or white PU sealer application to block natural timber tannins and grain raising.' },
        { num: 'STEP 04', title: 'Topcoat Sheen Application', desc: 'Finishing with Dead Flat (5%), Satin (30%), or High-Gloss (100% Mirror) non-yellowing acrylic clearcoat.' }
      ],
      capabilities: [
        '2K Polyurethane and Acrylic non-yellowing clear coats for interior joinery',
        'High-gloss 100% wet-look polyester coatings for luxury furniture',
        'Water-based exterior wood stains and decking oils resistant to solar bleaching',
        'White and customized RAL/NCS color pigmented lacquers in any gloss level',
        'Special effect metallic, pearlescent, and textured architectural finishes',
        'Technical application guidance on spray viscosity and pot-life management'
      ]
    },
    'spraybooth': {
      title: 'Commercial Spray Booth Media, Filters & Maintenance',
      badge: 'Spray Booth Engineering',
      heroImg: 'images/Paint_Booth_Hero.png',
      breadcrumb: 'Spray Booth Solutions',
      lead: 'Complete filtration media, air handling solutions, burner service, and certified maintenance for commercial automotive downdraft spray booths across Qatar.',
      steps: [
        { num: 'STEP 01', title: 'Booth Differential Pressure Audit', desc: 'Measuring airflow velocity (m/s) and static pressure differential to identify filter saturation.' },
        { num: 'STEP 02', title: 'Intake Ceiling Media Replacement', desc: 'Installing EU5/F5 certified thermally-bonded ceiling diffusion media for 99% airborne dust filtration.' },
        { num: 'STEP 03', title: 'Floor Paint-Stop Filter Overhaul', desc: 'Replacing saturated glass fiber paint-arrestor floor rolls to maintain clean exhaust draft.' },
        { num: 'STEP 04', title: 'Burner & Temperature Calibration', desc: 'Calibrating diesel/gas heat exchangers to ensure steady 60°C bake cycle temperature control.' }
      ],
      capabilities: [
        'EU5 / F5 fine ceiling diffusion media rolls with woven mesh scrim',
        'Glass fiber Paint-Stop exhaust floor filters (2-inch and 4-inch thickness)',
        'Pocket filters and pre-filtration intake rolls for high-dust desert conditions',
        'High-temperature booth ceiling lights and protective peelable booth coatings',
        'Exhaust fan duct cleaning and impeller balancing service',
        'Scheduled preventative maintenance contracts for commercial collision centers'
      ]
    },
    'color-mixing': {
      title: 'Computerized Spectrophotometer Color Lab',
      badge: 'Laboratory Formulation Division',
      heroImg: 'images/Technician_scanning_car_paint_color.jpg',
      breadcrumb: 'Color Formulation Lab',
      lead: 'State-of-the-art computerized spectrophotometer color matching laboratory in our Doha Street 23 facility. Instant formulation of OEM automotive colors, custom color matching from physical samples, and pressurized spray can filling.',
      steps: [
        { num: 'STEP 01', title: 'Sample Cleaning & Polishing', desc: 'Polishing sample surface to remove micro-scratches and restore true original pigment reflectance.' },
        { num: 'STEP 02', title: '5-Angle Optical Spectro Measurement', desc: 'Multi-angle optical sensor reads pearl, metallic, and solid pigment distribution against global databases.' },
        { num: 'STEP 03', title: 'Digital Recipe Formulation', desc: 'Software retrieves optimal formula and calculates micro-tint additions for aged paint compensation.' },
        { num: 'STEP 04', title: 'Precision Dispensing & Test Card Spray', desc: 'Computerized dispensing to 0.01g followed by test card spray-out and D65 daylight lamp verification.' }
      ],
      capabilities: [
        'Over 250,000 global OEM automotive, motorcycle, and commercial vehicle formulations',
        'Digital spectrophotometer on-site vehicle body scanning across Doha',
        'Custom aerosol spray paint filling (1K and 2K button-activated spray cans)',
        'Micro-tinting for sun-aged and weathered Gulf vehicles',
        'RAL, NCS, and Pantone color formulation in automotive and industrial resins',
        'Immediate collection at Street 23 showroom or same-day workshop delivery'
      ]
    }
  };

  function getQueryParam(param) {
    const search = window.location.search.substring(1);
    const vars = search.split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === param) {
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  }

  function initServiceDetail() {
    let key = getQueryParam('service') || 'automotive';
    if (!servicesData[key]) key = 'automotive';

    const data = servicesData[key];

    // Document Title
    document.title = `${data.title} — Royal Auto Paints Qatar`;

    // 1. Hero Elements
    const heroTitle = document.getElementById('sdHeroTitle');
    if (heroTitle) heroTitle.textContent = data.title;

    const heroLead = document.getElementById('sdHeroLead');
    if (heroLead) heroLead.textContent = data.lead;

    const heroBreadcrumb = document.getElementById('sdHeroBreadcrumb');
    if (heroBreadcrumb) heroBreadcrumb.textContent = data.breadcrumb;

    // 2. Content Card Elements
    const titleEl = document.getElementById('sdTitle');
    if (titleEl) titleEl.textContent = data.title;

    const badgeEl = document.getElementById('sdBadge');
    if (badgeEl) badgeEl.textContent = data.badge;

    const imgEl = document.getElementById('sdImg');
    if (imgEl) {
      imgEl.src = data.heroImg;
      imgEl.alt = data.title;
    }

    const leadEl = document.getElementById('sdLead');
    if (leadEl) leadEl.textContent = data.lead;

    // 3. Process Steps Grid
    const stepsGrid = document.getElementById('sdStepsGrid');
    if (stepsGrid) {
      stepsGrid.innerHTML = data.steps.map(s => `
        <div class="sd-step-box">
          <div class="sd-step-num">${s.num}</div>
          <div class="sd-step-heading">${s.title}</div>
          <p class="sd-step-desc">${s.desc}</p>
        </div>
      `).join('');
    }

    // 4. Equipment & Capabilities List
    const capsList = document.getElementById('sdCapabilitiesList');
    if (capsList) {
      capsList.innerHTML = data.capabilities.map(c => `
        <li class="sd-cap-item">
          <i class="fas fa-check-circle"></i>
          <span>${c}</span>
        </li>
      `).join('');
    }

    // 5. Sidebar Menu Active State
    document.querySelectorAll('.sd-services-menu a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href.includes(`service=${key}`)) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });

    // 6. WhatsApp Hotline Button Pre-filled Message
    const waHotlineBtn = document.getElementById('sdWaHotlineBtn');
    if (waHotlineBtn) {
      const text = encodeURIComponent(`Hello Royal Auto Paints Qatar, I am inquiring about your ${data.title} (${data.badge}) services.`);
      waHotlineBtn.href = `https://wa.me/97450395741?text=${text}`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceDetail);
  } else {
    initServiceDetail();
  }
})();
