/**
 * Royal Auto Paints Qatar - Interactive Product Catalogue Controller
 * Fully loads from data/products.json with graceful offline fallback
 */

(function () {
  'use strict';

  let allProducts = [];
  let filteredProducts = [];
  let currentCategory = 'all';
  let currentBrand = 'all';
  let currentSort = 'default';
  let searchTerm = '';
  let currentPage = 1;
  const itemsPerPage = 16;
  let isShowingAll = false;

  // DOM Elements
  const gridEl = document.getElementById('catalogueGrid');
  const emptyStateEl = document.getElementById('catalogueEmptyState');
  const searchInput = document.getElementById('catalogueSearchInput');
  const searchBox = document.getElementById('catalogueSearchBox');
  const searchClearBtn = document.getElementById('catalogueSearchClear');
  const brandSelect = document.getElementById('catalogueBrandSelect');
  const sortSelect = document.getElementById('catalogueSortSelect');
  const categoryPillsContainer = document.getElementById('catalogueCategoryPills');
  const visibleCountEl = document.getElementById('visibleCount');
  const totalCountEl = document.getElementById('totalCount');
  const activeTagsEl = document.getElementById('catalogueActiveTags');
  const resetFiltersBtn = document.getElementById('catalogueResetBtn');
  const paginationBar = document.getElementById('cataloguePaginationBar');
  const paginationPages = document.getElementById('paginationPages');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const toggleAllBtn = document.getElementById('toggleAllBtn');

  // Quick View Modal Elements
  const quickViewModalEl = document.getElementById('productQuickViewModal');
  const modalImg = document.getElementById('modalProductImg');
  const modalBrand = document.getElementById('modalProductBrand');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalCategory = document.getElementById('modalProductCategory');
  const modalBadge = document.getElementById('modalProductBadge');
  const modalDesc = document.getElementById('modalProductDesc');
  const modalWaBtn = document.getElementById('modalWaBtn');
  let bsQuickViewModal = null;

  /**
   * Safe HTML Escaping
   */
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Fetch Products JSON with window.royalProducts Fallback
   */
  async function loadProductsData() {
    try {
      const response = await fetch('data/products.json', { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error('HTTP ' + response.status + ' loading products.json');
      }
      allProducts = await response.json();
    } catch (err) {
      console.warn('Direct fetch of data/products.json failed, checking window.royalProducts:', err);
      if (window.royalProducts && Array.isArray(window.royalProducts)) {
        allProducts = window.royalProducts;
      } else {
        console.error('No fallback products data found!');
        allProducts = [];
      }
    }

    if (totalCountEl) {
      totalCountEl.textContent = allProducts.length;
    }

    // Populate Brand Filter Dropdown dynamically with counts
    populateBrandDropdown();

    // Check URL parameters (e.g. ?search=C496, ?category=clearcoats, ?brand=HB+Body)
    handleUrlParams();

    // Initial Filter & Render
    applyFilters();
  }

  /**
   * Populate Brand Select Dropdown
   */
  function populateBrandDropdown() {
    if (!brandSelect) return;
    const brandCounts = {};
    allProducts.forEach(p => {
      const b = p.brand || 'Other';
      brandCounts[b] = (brandCounts[b] || 0) + 1;
    });

    const sortedBrands = Object.keys(brandCounts).sort((a, b) => {
      // Prioritize primary partners HB Body and Challenger
      if (a === 'HB Body') return -1;
      if (b === 'HB Body') return 1;
      if (a === 'Challenger') return -1;
      if (b === 'Challenger') return 1;
      return a.localeCompare(b);
    });

    // Clear existing except first "All Brands" option
    brandSelect.innerHTML = `<option value="all">All Brands (${allProducts.length})</option>`;
    sortedBrands.forEach(brand => {
      const opt = document.createElement('option');
      opt.value = brand;
      opt.textContent = `${brand} (${brandCounts[brand]})`;
      brandSelect.appendChild(opt);
    });
  }

  /**
   * Handle URL Parameters on Load
   */
  function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search');
    const category = params.get('category');
    const brand = params.get('brand');

    if (search) {
      searchTerm = search.trim();
      if (searchInput) {
        searchInput.value = searchTerm;
        searchBox?.classList.add('has-val');
      }
    }

    if (category) {
      currentCategory = category;
      updateActiveCategoryPill();
    }

    if (brand && brandSelect) {
      currentBrand = brand;
      brandSelect.value = brand;
    }
  }

  /**
   * Update Category Pill Visual State
   */
  function updateActiveCategoryPill() {
    if (!categoryPillsContainer) return;
    const pills = categoryPillsContainer.querySelectorAll('.cat-pill-btn');
    pills.forEach(pill => {
      if (pill.getAttribute('data-category') === currentCategory) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  /**
   * Filter and Sort Products
   */
  function applyFilters() {
    filteredProducts = allProducts.filter(p => {
      // Category filter
      if (currentCategory !== 'all' && p.category !== currentCategory) {
        return false;
      }
      // Brand filter
      if (currentBrand !== 'all' && p.brand !== currentBrand) {
        return false;
      }
      // Search term filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const titleMatch = (p.title || '').toLowerCase().includes(term);
        const brandMatch = (p.brand || '').toLowerCase().includes(term);
        const catMatch = (p.categoryName || '').toLowerCase().includes(term);
        const descMatch = (p.desc || '').toLowerCase().includes(term);
        const badgeMatch = (p.badge || '').toLowerCase().includes(term);
        if (!titleMatch && !brandMatch && !catMatch && !descMatch && !badgeMatch) {
          return false;
        }
      }
      return true;
    });

    // Apply Sorting
    if (currentSort === 'name-asc') {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === 'name-desc') {
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (currentSort === 'brand-asc') {
      filteredProducts.sort((a, b) => (a.brand || '').localeCompare(b.brand || '') || a.title.localeCompare(b.title));
    } else {
      // default: original dataset id order
      filteredProducts.sort((a, b) => a.id - b.id);
    }

    // Reset to page 1 on filter changes
    currentPage = 1;

    renderCatalog();
    renderStatusAndTags();
  }

  /**
   * Render Product Grid and Pagination
   */
  function renderCatalog() {
    if (!gridEl) return;

    if (filteredProducts.length === 0) {
      gridEl.innerHTML = '';
      if (emptyStateEl) emptyStateEl.classList.add('show');
      if (paginationBar) paginationBar.style.display = 'none';
      if (visibleCountEl) visibleCountEl.textContent = '0';
      return;
    }

    if (emptyStateEl) emptyStateEl.classList.remove('show');
    if (paginationBar) paginationBar.style.display = 'flex';

    // Calculate Slice
    let displayList = filteredProducts;
    if (!isShowingAll) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      displayList = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    }

    if (visibleCountEl) {
      visibleCountEl.textContent = displayList.length;
    }

    // Build Cards HTML
    const cardsHtml = displayList.map(prod => {
      const encodedMsg = encodeURIComponent(
        `Hello Royal Auto Paints, I would like to request an RFQ for ${prod.title} (Brand: ${prod.brand || 'Refinish System'})`
      );
      const waLink = `https://wa.me/97450395741?text=${encodedMsg}`;
      const escapedTitle = escapeHtml(prod.title);
      const escapedBrand = escapeHtml(prod.brand || 'Royal Auto');
      const escapedCat = escapeHtml(prod.categoryName || 'Refinish');
      const escapedBadge = escapeHtml(prod.badge || 'Professional Refinish');
      const escapedDesc = escapeHtml(prod.desc || 'Premium automotive refinish system formulation.');
      const localImg = prod.image || 'images/products/placeholder.png';
      const remoteImg = prod.remoteImage || localImg;

      return `
        <div class="catalogue-card" data-id="${prod.id}">
          <div class="card-img-box">
            <span class="card-badge-category">${escapedCat}</span>
            <span class="card-badge-brand">${escapedBrand}</span>
            <img src="${localImg}" alt="${escapedTitle}" loading="lazy" onerror="this.onerror=null; this.src='${remoteImg}';">
            <div class="card-quickview-overlay">
              <button type="button" class="btn-card-quickview" data-quickview-id="${prod.id}">
                <i class="fas fa-eye"></i> Quick View
              </button>
            </div>
          </div>
          <div class="card-content">
            <div class="card-brand-kicker">${escapedBrand}</div>
            <h3 class="card-title" title="${escapedTitle}">${escapedTitle}</h3>
            <span class="card-badge-spec">${escapedBadge}</span>
            <p class="card-desc">${escapedDesc}</p>
            <div class="card-actions">
              <a href="${waLink}" target="_blank" class="btn-card-rfq" title="Instant WhatsApp RFQ">
                <i class="fab fa-whatsapp"></i> Request RFQ
              </a>
              <button type="button" class="btn-card-inspect" data-quickview-id="${prod.id}" title="Product Details">
                <i class="fas fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    gridEl.innerHTML = cardsHtml;

    // Attach Quick View Events
    gridEl.querySelectorAll('[data-quickview-id]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = parseInt(this.getAttribute('data-quickview-id'), 10);
        openQuickViewModal(id);
      });
    });

    // Render Pagination
    renderPagination();
  }

  /**
   * Render Pagination Buttons
   */
  function renderPagination() {
    if (!paginationPages || !paginationBar) return;

    if (isShowingAll || filteredProducts.length <= itemsPerPage) {
      paginationBar.style.display = filteredProducts.length > itemsPerPage ? 'flex' : 'none';
      paginationPages.innerHTML = '';
      if (prevPageBtn) prevPageBtn.style.display = 'none';
      if (nextPageBtn) nextPageBtn.style.display = 'none';
      if (toggleAllBtn) {
        toggleAllBtn.innerHTML = '<i class="fas fa-th"></i> Paginate (16 / page)';
      }
      return;
    }

    paginationBar.style.display = 'flex';
    if (prevPageBtn) prevPageBtn.style.display = 'inline-flex';
    if (nextPageBtn) nextPageBtn.style.display = 'inline-flex';
    if (toggleAllBtn) {
      toggleAllBtn.innerHTML = `<i class="fas fa-list"></i> Show All (${filteredProducts.length})`;
    }

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Prev / Next button state
    if (prevPageBtn) prevPageBtn.disabled = (currentPage === 1);
    if (nextPageBtn) nextPageBtn.disabled = (currentPage === totalPages);

    let pagesHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      pagesHtml += `
        <button type="button" class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
          ${i}
        </button>
      `;
    }
    paginationPages.innerHTML = pagesHtml;

    paginationPages.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const page = parseInt(this.getAttribute('data-page'), 10);
        if (page !== currentPage) {
          currentPage = page;
          renderCatalog();
          scrollToCatalogue();
        }
      });
    });
  }

  /**
   * Render Active Filter Chips & Reset Button
   */
  function renderStatusAndTags() {
    if (!activeTagsEl) return;
    const chips = [];

    if (currentCategory !== 'all') {
      const catBtn = document.querySelector(`.cat-pill-btn[data-category="${currentCategory}"]`);
      const catLabel = catBtn ? catBtn.textContent.trim().replace(/\d+$/, '').trim() : currentCategory;
      chips.push(`
        <span class="active-tag-chip">
          Category: ${escapeHtml(catLabel)}
          <span class="chip-remove" data-remove="category">&times;</span>
        </span>
      `);
    }

    if (currentBrand !== 'all') {
      chips.push(`
        <span class="active-tag-chip">
          Brand: ${escapeHtml(currentBrand)}
          <span class="chip-remove" data-remove="brand">&times;</span>
        </span>
      `);
    }

    if (searchTerm) {
      chips.push(`
        <span class="active-tag-chip">
          Search: "${escapeHtml(searchTerm)}"
          <span class="chip-remove" data-remove="search">&times;</span>
        </span>
      `);
    }

    activeTagsEl.innerHTML = chips.join('');

    // Attach click to remove chip
    activeTagsEl.querySelectorAll('.chip-remove').forEach(remover => {
      remover.addEventListener('click', function () {
        const type = this.getAttribute('data-remove');
        if (type === 'category') {
          currentCategory = 'all';
          updateActiveCategoryPill();
        } else if (type === 'brand') {
          currentBrand = 'all';
          if (brandSelect) brandSelect.value = 'all';
        } else if (type === 'search') {
          searchTerm = '';
          if (searchInput) {
            searchInput.value = '';
            searchBox?.classList.remove('has-val');
          }
        }
        applyFilters();
      });
    });

    // Show/hide Reset All Filters button
    const hasActiveFilters = (currentCategory !== 'all' || currentBrand !== 'all' || searchTerm !== '');
    if (resetFiltersBtn) {
      resetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';
    }
  }

  /**
   * Smooth Scroll to Catalogue Main Container
   */
  function scrollToCatalogue() {
    const el = document.getElementById('catalog-main');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }

  /**
   * Open Quick View Modal with Multi-Engine Support (Bootstrap 5, jQuery, or Vanilla JS)
   */
  function openQuickViewModal(productId) {
    const prod = allProducts.find(p => p.id === productId);
    if (!prod) return;

    if (modalImg) {
      modalImg.src = prod.image || 'images/products/placeholder.png';
      modalImg.alt = prod.title;
      modalImg.onerror = function () {
        this.onerror = null;
        this.src = prod.remoteImage || 'images/products/placeholder.png';
      };
    }
    if (modalBrand) modalBrand.textContent = prod.brand || 'Royal Auto';
    if (modalTitle) modalTitle.textContent = prod.title;
    if (modalCategory) modalCategory.textContent = prod.categoryName || 'Refinish System';
    if (modalBadge) modalBadge.textContent = prod.badge || 'Automotive Grade';
    if (modalDesc) modalDesc.textContent = prod.desc || 'Premium refinish system formulation.';

    if (modalWaBtn) {
      const msg = encodeURIComponent(
        `Hello Royal Auto Paints, I am interested in ${prod.title} (Brand: ${prod.brand}). Please provide technical specs and pricing.`
      );
      modalWaBtn.href = `https://wa.me/97450395741?text=${msg}`;
    }

    if (!quickViewModalEl) return;

    // Check Bootstrap 5 Modal
    if (window.bootstrap && window.bootstrap.Modal) {
      try {
        if (!bsQuickViewModal) {
          bsQuickViewModal = new window.bootstrap.Modal(quickViewModalEl);
        }
        bsQuickViewModal.show();
        return;
      } catch (e) {
        console.warn('Bootstrap modal constructor failed, falling back:', e);
      }
    }

    // Check jQuery Modal
    if (window.jQuery && typeof window.jQuery(quickViewModalEl).modal === 'function') {
      try {
        window.jQuery(quickViewModalEl).modal('show');
        return;
      } catch (e) {
        console.warn('jQuery modal failed, falling back:', e);
      }
    }

    // Rock-Solid Vanilla JS Modal Fallback
    quickViewModalEl.classList.add('show');
    quickViewModalEl.style.display = 'block';
    quickViewModalEl.style.backgroundColor = 'rgba(6, 23, 38, 0.7)';
    quickViewModalEl.style.zIndex = '99999';
    document.body.classList.add('modal-open');

    // Attach vanilla close handler
    const closeBtns = quickViewModalEl.querySelectorAll('[data-bs-dismiss="modal"], .btn-close');
    closeBtns.forEach(btn => {
      btn.onclick = function () {
        closeQuickViewModal();
      };
    });

    quickViewModalEl.onclick = function (e) {
      if (e.target === quickViewModalEl) {
        closeQuickViewModal();
      }
    };
  }

  function closeQuickViewModal() {
    if (!quickViewModalEl) return;
    quickViewModalEl.classList.remove('show');
    quickViewModalEl.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  /**
   * Event Listeners Registration
   */
  function setupEventListeners() {
    // Live Search with instantaneous response
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchTerm = e.target.value.trim();
        if (searchTerm) {
          searchBox?.classList.add('has-val');
        } else {
          searchBox?.classList.remove('has-val');
        }
        applyFilters();
      });
    }

    // Search Clear Button
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', function () {
        searchTerm = '';
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        searchBox?.classList.remove('has-val');
        applyFilters();
      });
    }

    // Category Filter Pills Click
    if (categoryPillsContainer) {
      categoryPillsContainer.addEventListener('click', function (e) {
        const btn = e.target.closest('.cat-pill-btn');
        if (!btn) return;
        const cat = btn.getAttribute('data-category');
        if (cat && cat !== currentCategory) {
          currentCategory = cat;
          updateActiveCategoryPill();
          applyFilters();
        }
      });
    }

    // Brand Select Change
    if (brandSelect) {
      brandSelect.addEventListener('change', function (e) {
        currentBrand = e.target.value;
        applyFilters();
      });
    }

    // Sort Select Change
    if (sortSelect) {
      sortSelect.addEventListener('change', function (e) {
        currentSort = e.target.value;
        applyFilters();
      });
    }

    // Reset All Filters
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', function () {
        currentCategory = 'all';
        currentBrand = 'all';
        searchTerm = '';
        currentSort = 'default';
        if (searchInput) searchInput.value = '';
        searchBox?.classList.remove('has-val');
        if (brandSelect) brandSelect.value = 'all';
        if (sortSelect) sortSelect.value = 'default';
        updateActiveCategoryPill();
        applyFilters();
      });
    }

    // Pagination: Prev & Next
    if (prevPageBtn) {
      prevPageBtn.addEventListener('click', function () {
        if (currentPage > 1) {
          currentPage--;
          renderCatalog();
          scrollToCatalogue();
        }
      });
    }

    if (nextPageBtn) {
      nextPageBtn.addEventListener('click', function () {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderCatalog();
          scrollToCatalogue();
        }
      });
    }

    // Toggle All vs Paginated
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', function () {
        isShowingAll = !isShowingAll;
        currentPage = 1;
        renderCatalog();
      });
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setupEventListeners();
      loadProductsData();
    });
  } else {
    setupEventListeners();
    loadProductsData();
  }

})();
