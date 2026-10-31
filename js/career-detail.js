/**
 * Royal Auto Paints Qatar - Dynamic Career Detail Controller
 */

(function () {
  'use strict';

  const jobsData = {
    'color-technician': {
      title: 'Senior Color Mixing & Formulation Technician',
      kicker: 'Technical Laboratory Division',
      location: 'Street 23, Industrial Area, Doha, Qatar',
      type: 'Full-Time (Direct Qatar Sponsorship)',
      dept: 'Colorimetry & Laboratory',
      experience: '3+ Years in Refinish Color Matching',
      lead: 'We are seeking an experienced automotive color matching technician to operate our computerized spectrophotometer and Axalta Challenger / HB Body mixing banks in Doha Industrial Area. You will formulate OEM automotive color matches, perform spray-out tests, and manage pressurized aerosol filling operations.',
      responsibilities: [
        'Perform high-accuracy digital scans on client vehicle body parts using spectrophotometer equipment.',
        'Retrieve, formulate, and micro-adjust color recipes against global OEM manufacturer formulas.',
        'Operate computerized precision dispensing scales for pearl, xiralic, metallic, and solid toners.',
        'Perform physical spray-out card tests and evaluate metamerism under multi-daylight simulation lamps.',
        'Operate automated aerosol spray paint filling machinery with custom mixed colors.',
        'Maintain laboratory cleanliness, calibration records, and paint inventory replenishment logs.'
      ],
      qualifications: [
        'Minimum 3 years of hands-on experience in automotive refinish paint mixing in Qatar or GCC.',
        'Proven working proficiency with computerized color software (Axalta Challenger or HB Body preferred).',
        'Exceptional visual color perception with ability to detect subtle tint variances under daylight.',
        'Working knowledge of 2K acrylics, basecoats, hardeners, thinners, and polyester putties.',
        'Valid Qatar ID (QID) with transferable sponsorship / NOC preferred.'
      ]
    },
    'sales-executive': {
      title: 'B2B Technical Sales Executive — Automotive & Marine',
      kicker: 'Commercial Sales Division',
      location: 'Doha & Greater Qatar Bodyshop Regions',
      type: 'Full-Time + Commission',
      dept: 'Commercial B2B Sales',
      experience: '2+ Years in Qatar Automotive Aftermarket',
      lead: 'Lead commercial sales expansion of HB Body and Axalta Challenger products across Doha collision centers, dealership bodyshops, fleet maintenance workshops, and marine drydocks.',
      responsibilities: [
        'Manage and grow key commercial accounts with collision workshops, dealerships, and fleet operators in Qatar.',
        'Conduct technical product demonstrations for bodyshop managers and master painters.',
        'Generate structured wholesale quotations, tenders, and volume supply contracts.',
        'Collaborate with the central logistics team in Street 23 to coordinate prompt daily deliveries.',
        'Achieve monthly sales targets across clear coats, primers, putties, and abrasives.'
      ],
      qualifications: [
        'Minimum 2 years of proven B2B sales experience in automotive refinish, paints, or industrial tools in Qatar.',
        'Strong network of collision repair center contacts and bodyshop managers in Industrial Area.',
        'Valid Qatar Driver’s License is mandatory.',
        'Bilingual communication skills (English required; Arabic or Hindi is an advantage).'
      ]
    },
    'equipment-specialist': {
      title: 'Spray Booth & Equipment Maintenance Specialist',
      kicker: 'Field Technical Engineering',
      location: 'Street 23 & Client Bodyshop Sites across Qatar',
      type: 'Full-Time',
      dept: 'Equipment & Facilities Support',
      experience: '2+ Years in Spray Booth Filtration & HVAC',
      lead: 'Provide expert installation, inspection, and maintenance of automotive spray painting booths, ceiling diffusion filtration, paint arrestor floor media, and pneumatic compressed air lines.',
      responsibilities: [
        'Conduct periodic airflow, static pressure, and particle filtration audits across client spray cabins.',
        'Install and replace ceiling fine filtration media (F5 / EU5) and floor paint stop glass fiber rolls.',
        'Inspect, service, and calibrate air compressor lines, oil/water separators, and desiccant dryers.',
        'Troubleshoot burner heating cycles, intake blower fans, and exhaust damper ventilation systems.'
      ],
      qualifications: [
        'Diploma or technical certification in Electrical/Mechanical/HVAC engineering.',
        'Hands-on experience servicing automotive down-draft or semi-downdraft spray booths in the GCC.',
        'Knowledge of pneumatic airline filtration and spray gun pressure regulators.',
        'Strong problem-solving attitude and commitment to on-site workshop safety standards.'
      ]
    },
    'logistics-coordinator': {
      title: 'Warehouse & Paint Inventory Logistics Coordinator',
      kicker: 'Supply Chain & Warehousing',
      location: 'Street 23 Central Logistics Warehouse, Doha',
      type: 'Full-Time',
      dept: 'Logistics & Supply Chain',
      experience: '2+ Years in Qatar Warehouse Operations',
      lead: 'Coordinate inventory receiving, batch tracking, hazardous materials storage compliance, and daily fleet dispatch of automotive refinish supplies across Qatar.',
      responsibilities: [
        'Manage incoming factory container shipments from HB Body (Greece) and Axalta Challenger (Germany).',
        'Maintain accurate digital stock levels, batch numbers, and expiry date monitoring for hardeners and clears.',
        'Coordinate order picking, packaging, and dispatch routing for same-day delivery vans in Doha.',
        'Enforce strict chemical storage safety regulations according to Qatar Civil Defense standards.'
      ],
      qualifications: [
        'Minimum 2 years experience in chemical, paint, or automotive parts warehousing in Qatar.',
        'Familiarity with warehouse management software and inventory barcoding systems.',
        'Knowledge of flammable liquids storage, ventilation, and material safety data sheet (MSDS) guidelines.'
      ]
    }
  };

  function initCareerDetail() {
    const params = new URLSearchParams(window.location.search);
    let key = (params.get('job') || '').toLowerCase();

    if (key.includes('color') || key.includes('tech') || key.includes('mix')) key = 'color-technician';
    else if (key.includes('sale') || key.includes('exec') || key.includes('b2b')) key = 'sales-executive';
    else if (key.includes('equip') || key.includes('booth') || key.includes('maint')) key = 'equipment-specialist';
    else if (key.includes('logis') || key.includes('ware') || key.includes('stock')) key = 'logistics-coordinator';
    else if (!jobsData[key]) key = 'color-technician';

    const data = jobsData[key];

    document.title = `${data.title} — Careers at Royal Auto Paints Qatar`;

    // DOM Elements
    const titleEl = document.getElementById('cdJobTitle');
    const kickerEl = document.getElementById('cdJobKicker');
    const locEl = document.getElementById('cdLocation');
    const typeEl = document.getElementById('cdType');
    const deptEl = document.getElementById('cdDept');
    const expEl = document.getElementById('cdExp');
    const leadEl = document.getElementById('cdLead');
    const bcTitle = document.getElementById('cdBreadcrumbTitle');
    const waBtn = document.getElementById('cdWaBtn');
    const formPositionInput = document.getElementById('cdFormPosition');

    if (titleEl) titleEl.textContent = data.title;
    if (kickerEl) kickerEl.textContent = data.kicker;
    if (locEl) locEl.textContent = data.location;
    if (typeEl) typeEl.textContent = data.type;
    if (deptEl) deptEl.textContent = data.dept;
    if (expEl) expEl.textContent = data.experience;
    if (leadEl) leadEl.textContent = data.lead;
    if (bcTitle) bcTitle.textContent = data.title;
    if (formPositionInput) formPositionInput.value = data.title;

    if (waBtn) {
      const msg = encodeURIComponent(`Hello Royal Auto Paints HR Team,\n\nI am applying for the position: ${data.title}.\n\nPlease let me know how to submit my CV.`);
      waBtn.href = `https://wa.me/97450395741?text=${msg}`;
    }

    // Responsibilities
    const respList = document.getElementById('cdRespList');
    if (respList) {
      respList.innerHTML = data.responsibilities.map(r => `<li>${r}</li>`).join('');
    }

    // Qualifications
    const qualList = document.getElementById('cdQualList');
    if (qualList) {
      qualList.innerHTML = data.qualifications.map(q => `<li>${q}</li>`).join('');
    }
  }

  document.addEventListener('DOMContentLoaded', initCareerDetail);
})();
