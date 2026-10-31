/**
 * Royal Auto Paints - Technical Articles & Refinish Insights Controller
 * Manages dynamic rendering for technical articles based on URL query (?post=1|2|3)
 */

(function() {
  'use strict';

  var articlesData = {
    '1': {
      id: '1',
      category: 'Color Formulation Lab',
      date: 'October 24, 2026',
      readTime: '6 min read',
      author: 'Tariq Al-Mansoor',
      authorRole: 'Chief Colorimetry & OEM Technical Lead',
      authorBio: 'Specialist in European refinish formulation with 14+ years of spectrophotometer calibration experience across HB Body and Axalta mixing banks in Qatar.',
      title: 'Precision Color Matching: How Digital Spectrophotometers Ensure OEM Accuracy',
      lead: 'In the extreme ultraviolet environment of the Arabian Gulf, matching aged clear coats against OEM formulations requires optical spectrophotometry down to Delta E < 0.3 tolerances.',
      image: 'images/Technician_scanning_car_paint_color.jpg',
      caption: 'Digital 5-angle spectrophotometer reading metallic flake orientation in our Doha Industrial Area technical laboratory.',
      content: [
        {
          heading: 'The Challenge of Gulf Color Fading and Metamerism',
          text: 'Automotive finishes in Qatar are exposed to intense UV radiation and ambient temperatures regularly exceeding 48°C during peak summer months. Over time, clear coats yellow microscopically and pigment molecules shift in spectral reflectance. When a bodyshop repairs a damaged fender or door panel, simply mixing according to the factory paint code often results in noticeable mismatches due to solar aging.'
        },
        {
          heading: 'Multi-Angle Optical Analysis',
          text: 'Our Wakalat Street technical center utilizes 5-angle digital spectrophotometers calibrated against Axalta and HB Body cloud formula databases containing over 250,000 global OEM variants. By capturing reflected light at 15°, 25°, 45°, 75°, and 110°, the optical sensor analyzes both the base pigment color and the flop-effect of metallic and pearlescent flakes.'
        },
        {
          callout: {
            title: 'Delta E Tolerances Explained',
            text: 'A Delta E (ΔE) value below 1.0 is generally undetectable by the human eye under direct sunlight. Our automated mixing protocols consistently achieve ΔE < 0.3 on European luxury, Japanese, and American automotive finishes.'
          }
        },
        {
          heading: 'Computerized Dispensing & Micro-Tinting',
          text: 'Once the closest match is calculated by software, our automated scales meter high-pigment toners with 0.01g precision. Test spray-out cards are dried using infrared curing lamps and evaluated under D65 daylight simulation booths before final formulation delivery to client workshops.'
        }
      ]
    },
    '2': {
      id: '2',
      category: 'Protective Clear Coats',
      date: 'October 18, 2026',
      readTime: '8 min read',
      author: 'David Vance',
      authorRole: 'European Technical Training Director',
      authorBio: 'Certified HB Body technical instructor advising Gulf commercial bodyshops and luxury dealerships on high-solid acrylic resin performance.',
      title: 'Choosing High-Solid Clear Coats for Qatar\'s Desert Climate',
      lead: 'Selecting the correct 2K acrylic urethane clear coat is the single most critical factor in preventing premature chalking, sandblast hazing, and stone chip penetration in Qatar.',
      image: 'images/Technician_scanning_car_paint_color.jpg',
      caption: 'Application of HB Body C496 2K HS Clear Coat inside a downdraft commercial spray booth at 60°C bake cycle.',
      content: [
        {
          heading: 'Solid Content vs. Film Build: The Physics of Protection',
          text: 'Standard Medium Solid (MS) clears often flash off too quickly in high Gulf ambient temperatures, trapping volatile solvents and leaving a porous micro-structure vulnerable to airborne silica sand erosion. High Solid (HS) and Ultra High Solid (UHS) 2K acrylic urethanes maintain a dense, cross-linked polyurethane matrix that resists micro-abrasions.'
        },
        {
          heading: 'Thermal Shock Resistance at 50°C Ambient',
          text: 'Vehicles parked in direct Doha sunlight endure sheet-metal temperatures reaching 75°C, followed by rapid cooling during evening humidity cycles. Premium clears like HB Body C496 and Proline 698 incorporate specialized UV absorbers and hindered amine light stabilizers (HALS) that preserve high gloss without embrittlement.'
        },
        {
          callout: {
            title: 'Hardener & Thinner Selection Rule',
            text: 'In Qatar bodyshops during summer (May–October), always pair 2K HS clears with Slow (H754) or Extra Slow (H755) hardeners and Slow Thinners (741 Slow) to permit optimal leveling and bubble release before film skinning.'
          }
        },
        {
          heading: 'Mirror Finish Leveling & Polishing Window',
          text: 'Thanks to modern acrylic resin chemistry, our HS clears cure to full mechanical hardness within 30 minutes at 60°C booth bake or 4 hours at ambient temperature, allowing detailing technicians to sand and buff with 2000-3000 grit abrasives without risking edge burn-through.'
        }
      ]
    },
    '3': {
      id: '3',
      category: 'Bodyshop Preparation',
      date: 'October 12, 2026',
      readTime: '5 min read',
      author: 'Farooq Qasim',
      authorRole: 'Industrial Application & Surface Preparation Specialist',
      authorBio: 'Expert in anti-corrosion primers, epoxy barriers, and polyester filler chemistry for automotive and heavy fleet restoration in Qatar.',
      title: 'Surface Preparation Standards for Commercial Bodyshops',
      lead: 'Over 85% of paint defects—including edge mapping, pinholing, and adhesion loss—originate not in the spray booth, but during metal prep and filler application.',
      image: 'images/Technician_scanning_car_paint_color.jpg',
      caption: 'Application of 2K zinc-rich epoxy barrier primer over bare steel chassis prior to intermediate surfacer.',
      content: [
        {
          heading: 'Eliminating Substrate Contaminants',
          text: 'The combination of coastal humidity, saline air, and airborne dust in Doha necessitates strict multi-stage degreasing. Soluble salts and silicone residues from prior tire dressings must be neutralized using waterborne and solventborne cleaners before any mechanical abrasion begins.'
        },
        {
          heading: 'Selecting the Right Polyester Filler',
          text: 'Modern lightweight vehicles feature aluminum panels, galvanized sheet metal, and carbon composites. Using standard talc-heavy body fillers on galvanized surfaces leads to osmotic blistering. Technicians must apply zinc-compatible polyester fillers such as HB Body 211 Soft or 255 Zinc-Fill.'
        },
        {
          callout: {
            title: 'Guide Coat Discipline',
            text: 'Never sand high-build 2K surfacers without dry guide coat powder. The contrasting powder reveals microscopic low spots and orange peel irregularities before topcoat application, preventing expensive re-sprays.'
          }
        },
        {
          heading: 'Final Pre-Booth Inspection Checklist',
          text: 'Prior to entering the downdraft booth, vehicle panels should receive final dry sanding with P400–P500 DA abrasives, followed by compressed air blow-down with anti-static ionizing nozzles and a gentle wipe with solvent-free tack rags.'
        }
      ]
    }
  };

  function getQueryParam(param) {
    var search = window.location.search.substring(1);
    var vars = search.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === param) {
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  }

  function renderArticle() {
    var postId = getQueryParam('post') || '1';
    var article = articlesData[postId] || articlesData['1'];

    // Update document title
    document.title = article.title + ' — Technical Insights | Royal Auto Paints Qatar';

    // Breadcrumb title
    var bcTitle = document.getElementById('bdBreadcrumbTitle');
    if (bcTitle) bcTitle.textContent = article.title;

    // Header Meta
    var catBadge = document.getElementById('bdCategory');
    if (catBadge) catBadge.textContent = article.category;

    var dateEl = document.getElementById('bdDate');
    if (dateEl) dateEl.textContent = article.date;

    var readEl = document.getElementById('bdReadTime');
    if (readEl) readEl.textContent = article.readTime;

    var titleEl = document.getElementById('bdTitle');
    if (titleEl) titleEl.textContent = article.title;

    var leadEl = document.getElementById('bdLead');
    if (leadEl) leadEl.textContent = article.lead;

    // Image
    var imgEl = document.getElementById('bdFeaturedImg');
    if (imgEl) {
      imgEl.src = article.image;
      imgEl.alt = article.title;
    }

    var capEl = document.getElementById('bdImgCaption');
    if (capEl) capEl.textContent = article.caption;

    // Author
    var authorName = document.getElementById('bdAuthorName');
    if (authorName) authorName.textContent = article.author;

    var authorRole = document.getElementById('bdAuthorRole');
    if (authorRole) authorRole.textContent = article.authorRole;

    var authorBio = document.getElementById('bdAuthorBio');
    if (authorBio) authorBio.textContent = article.authorBio;

    // Body Content
    var bodyWrap = document.getElementById('bdBodyContent');
    if (bodyWrap) {
      var html = '';
      article.content.forEach(function(section) {
        if (section.heading) {
          html += '<h2>' + section.heading + '</h2>';
        }
        if (section.text) {
          html += '<p>' + section.text + '</p>';
        }
        if (section.callout) {
          html += '<div class="bd-callout-box">';
          html += '<h4><i class="fas fa-lightbulb"></i> ' + section.callout.title + '</h4>';
          html += '<p>' + section.callout.text + '</p>';
          html += '</div>';
        }
      });
      bodyWrap.innerHTML = html;
    }

    // Sidebar WhatsApp prefilled link
    var waLink = document.getElementById('bdSidebarWa');
    if (waLink) {
      var msg = encodeURIComponent('Hello Royal Auto Paints, I am reading the technical article "' + article.title + '" and would like to discuss this coating system for our bodyshop.');
      waLink.href = 'https://wa.me/97450395741?text=' + msg;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderArticle);
  } else {
    renderArticle();
  }
})();
