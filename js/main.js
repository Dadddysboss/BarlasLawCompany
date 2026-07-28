document.addEventListener('DOMContentLoaded', () => {

  // Header scroll shadow
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Mobile hamburger
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });

  // --- Practice Area Filter & Search ---
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.service-card');
  const resultsCount = document.getElementById('resultsCount');

  if (!searchInput || !cards.length) return;

  const ITEMS_PER_PAGE = 15;
  let currentCategory = 'all';
  let currentSearch = '';
  let currentPageNum = 1;

  function filterCards() {
    let visible = [];
    cards.forEach(card => {
      const cat = card.dataset.category;
      const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent?.toLowerCase() || '';
      const categoryMatch = currentCategory === 'all' || cat === currentCategory;
      const searchMatch = !currentSearch || title.includes(currentSearch) || desc.includes(currentSearch);
      const match = categoryMatch && searchMatch;
      card.style.display = match ? '' : 'none';
      if (match) visible.push(card);
    });

    // Pagination
    const totalPages = Math.ceil(visible.length / ITEMS_PER_PAGE) || 1;
    if (currentPageNum > totalPages) currentPageNum = 1;

    visible.forEach((card, i) => {
      const pageIdx = Math.floor(i / ITEMS_PER_PAGE) + 1;
      card.style.display = pageIdx === currentPageNum ? '' : 'none';
    });

    const start = (currentPageNum - 1) * ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPageNum * ITEMS_PER_PAGE, visible.length);
    resultsCount.textContent = visible.length > 0
      ? `Showing ${start}–${end} of ${visible.length} service${visible.length !== 1 ? 's' : ''}`
      : 'No services found';

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    let container = document.getElementById('pagination');
    if (!container) {
      container = document.createElement('div');
      container.id = 'pagination';
      container.className = 'pagination';
      document.getElementById('servicesGrid')?.after(container);
    }
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = '';
    html += `<button class="pagination-btn" data-page="prev" ${currentPageNum <= 1 ? 'disabled' : ''}>Prev</button>`;
    html += `<span class="pagination-info">Page ${currentPageNum} of ${totalPages}</span>`;
    html += `<button class="pagination-btn" data-page="next" ${currentPageNum >= totalPages ? 'disabled' : ''}>Next</button>`;
    container.innerHTML = html;

    container.querySelectorAll('.pagination-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.page === 'prev' && currentPageNum > 1) currentPageNum--;
        if (btn.dataset.page === 'next' && currentPageNum < totalPages) currentPageNum++;
        filterCards();
        document.querySelector('.filter-bar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    currentPageNum = 1;
    filterCards();
  });

  // Category filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      currentPageNum = 1;
      filterCards();
    });
  });

  // Initial render
  filterCards();

});