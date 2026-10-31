/**
 * Royal Auto Paints Qatar - Dynamic Product Detail Controller
 * Loads product specifications, media, and related items from data/products.json
 */

(function () {
  'use strict';

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  async function initProductDetail() {
    let products = [];
    try {
      const res = await fetch('data/products.json', { cache: 'no-cache' });
      if (res.ok) {
        products = await res.json();
      }
    } catch (e) {
      console.warn('Could not fetch data/products.json:', e);
      if (window.royalProducts) products = window.royalProducts;
    }

    if (!products || products.length === 0) {
      console.warn('No products available');
      return;
    }

    // Extract query parameter ?id= or ?slug=
    const params = new URLSearchParams(window.location.search);
    const queryId = params.get('id') || params.get('slug') || '';

    let currentProduct = null;

    if (queryId) {
      // Find by exact id or fuzzy title
      currentProduct = products.find(p => 
        String(p.id).toLowerCase() === queryId.toLowerCase() ||
        (p.slug && p.slug.toLowerCase() === queryId.toLowerCase()) ||
        p.title.toLowerCase().includes(queryId.toLowerCase())
      );
    }

    // Default to premier product if not found
    if (!currentProduct) {
      currentProduct = products.find(p => p.title.includes('496') || p.title.includes('Clear')) || products[0];
    }

    renderProduct(currentProduct, products);
  }

  function renderProduct(p, allProducts) {
    // 1. Update Document Title
    document.title = `${p.title} — Royal Auto Paints Qatar | Technical Specifications`;

    // 2. Breadcrumbs
    const bcCat = document.getElementById('pdBreadcrumbCat');
    const bcTitle = document.getElementById('pdBreadcrumbTitle');
    if (bcCat) bcCat.textContent = p.categoryName || 'Automotive Refinish';
    if (bcTitle) bcTitle.textContent = p.title;

    // 3. Badges & Header
    const brandBadge = document.getElementById('pdBadgeBrand');
    const specBadge = document.getElementById('pdBadgeSpec');
    const kicker = document.getElementById('pdBrandKicker');
    const titleEl = document.getElementById('pdTitle');
    const descEl = document.getElementById('pdDesc');
    const skuEl = document.getElementById('pdSku');
    const originEl = document.getElementById('pdOrigin');

    const brandName = p.brand || (p.title.toUpperCase().includes('CHALLENGER') ? 'AXALTA CHALLENGER' : 'HB BODY');
    const isChallenger = brandName.toUpperCase().includes('CHALLENGER');
    const originText = isChallenger ? 'Made in Germany' : 'Made in Greece (EU)';

    if (brandBadge) brandBadge.textContent = brandName;
    if (specBadge) specBadge.textContent = p.badge || 'Professional Refinish';
    if (kicker) kicker.textContent = `${brandName} • OEM COATINGS`;
    if (titleEl) titleEl.textContent = p.title;
    if (descEl) descEl.textContent = p.desc || 'High-performance European refinish technology engineered for professional bodyshop productivity and pristine gloss depth under Gulf climate conditions.';
    if (skuEl) skuEl.textContent = `SKU: RAP-${String(p.id).padStart(4, '0')}`;
    if (originEl) originEl.innerHTML = `<i class="fas fa-check-circle"></i> ${originText}`;

    // 4. Main Image
    const mainImg = document.getElementById('pdMainImg');
    const localImg = p.image || 'images/products/BODY 770.png';
    const remoteImg = p.remoteImage || localImg;

    if (mainImg) {
      mainImg.src = localImg;
      mainImg.alt = p.title;
      mainImg.onerror = function () {
        this.onerror = null;
        this.src = remoteImg;
      };
    }

    // 5. WhatsApp RFQ Link
    const waBtn = document.getElementById('pdWaBtn');
    if (waBtn) {
      const msg = encodeURIComponent(
        `Hello Royal Auto Paints Qatar,\n\nI would like to request an RFQ / quote for:\n- Product: ${p.title}\n- Brand: ${brandName}\n- SKU: RAP-${String(p.id).padStart(4, '0')}\n\nPlease provide pricing, availability, and delivery options in Doha.`
      );
      waBtn.href = `https://wa.me/97450395741?text=${msg}`;
    }

    // 6. Highlight values
    const hlRatio = document.getElementById('pdHlRatio');
    const hlCure = document.getElementById('pdHlCure');
    const hlPacking = document.getElementById('pdHlPacking');
    const hlSubstrate = document.getElementById('pdHlSubstrate');

    if (hlRatio) hlRatio.textContent = p.mixingRatio || (p.category === 'clears' ? '2:1 by volume' : 'Direct Ready-to-Spray');
    if (hlCure) hlCure.textContent = p.cureTime || '20-30 min @ 60°C Booth';
    if (hlPacking) hlPacking.textContent = p.packageSize || '1L Can / 5L Commercial Kit';
    if (hlSubstrate) hlSubstrate.textContent = p.substrate || 'OEM Paintwork, OEM Primer, 2K Putty';

    // 7. Render Related Products
    renderRelated(p, allProducts);
  }

  function renderRelated(current, all) {
    const grid = document.getElementById('pdRelatedGrid');
    if (!grid) return;

    // Filter products with same category or brand, excluding current
    const related = all.filter(p => p.id !== current.id && (p.category === current.category || p.brand === current.brand)).slice(0, 4);

    if (related.length === 0) {
      grid.innerHTML = '<p class="text-center text-muted">Explore our complete catalog in the products page.</p>';
      return;
    }

    grid.innerHTML = related.map(prod => {
      const waMsg = encodeURIComponent(`Hello Royal Auto Paints, I would like to inquire about ${prod.title}`);
      const link = `product-detail.html?id=${prod.id}`;
      const img = prod.image || 'images/products/BODY 770.png';
      const brand = prod.brand || 'Refinish System';

      return `
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style="background: #ffffff; border: 1px solid #E5E7EB !important;">
            <div style="height: 180px; padding: 20px; display: flex; align-items: center; justify-content: center; background: #F7F0F2;">
              <img src="${img}" alt="${escapeHtml(prod.title)}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
            </div>
            <div class="card-body p-3 d-flex flex-column">
              <span class="badge mb-2 text-uppercase" style="background: #E5E7EB; color: #58585A; width: fit-content; font-size: 10px;">${escapeHtml(brand)}</span>
              <h5 class="card-title text-truncate" style="font-size: 15px; font-weight: 600; color: #58585A;" title="${escapeHtml(prod.title)}">${escapeHtml(prod.title)}</h5>
              <p class="card-text text-muted small text-truncate" style="font-size: 12px; color: #58585A !important;">${escapeHtml(prod.desc || 'Premium automotive refinish.')}</p>
              <div class="mt-auto pt-2 d-flex gap-2">
                <a href="${link}" class="btn btn-sm flex-grow-1 btn-pd-related-details" style="background: #58585A; color: #ffffff; font-size: 12px; font-weight: 600; border-radius: 8px;">View Details</a>
                <a href="https://wa.me/97450395741?text=${waMsg}" target="_blank" class="btn btn-sm" style="background: #25d366; color: #ffffff; border-radius: 8px;" title="WhatsApp RFQ"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', initProductDetail);
})();
