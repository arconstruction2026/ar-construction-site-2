(function () {
  const page = (document.body.dataset.page || 'index').replace(/\.(html|php)$/i, '');

  const headerPlaceholder = document.querySelector('[data-site-shell="header"]');
  const footerPlaceholder = document.querySelector('[data-site-shell="footer"]');

  const headerClass = page === 'services' ? 'nav nav--light' : 'nav';

  const header = `
    <div class="scroll-progress"></div>
    <header class="${headerClass}">
      <div class="wrap">
        <a href="index.html" class="nav__brand">
          <img src="assets/logo.png" alt="AR Construction logo">
          <span>AR Construction</span>
        </a>
        <nav class="nav__links">
          <a href="projects.html">Projects</a>
          <a href="services.html">Services</a>
          <a href="about.html">About</a>
          <a href="contact.html" class="nav__cta">Contact Us</a>
        </nav>
        <button class="nav__toggle" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </header>
  `;

  const footer = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer__top">
          <div>
            <div class="footer__label">Address</div>
            <p>No.59 UK Lane, Karuwaddukkal-03,<br>Sammanthurai</p>
          </div>
          <div>
            <div class="footer__label">Contact</div>
            <a href="tel:+94751102922">+94 75 110 2922</a>
            <a href="mailto:info.arconstructionoffice@gmail.com">info.arconstructionoffice@gmail.com</a>
          </div>
          <div>
            <div class="footer__label">Navigation</div>
            <a href="projects.html">Projects</a>
            <a href="services.html">Services</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
          <div>
            <div class="footer__label">Follow Us</div>
            <div class="footer__social">
              <a href="https://www.linkedin.com/company/ar-construction-works/" target="_blank" rel="noopener" aria-label="AR Construction on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.4H3.56V20h3.38V8.4zM5.25 3C4.1 3 3.3 3.8 3.3 4.85c0 1.02.78 1.85 1.9 1.85h.02c1.16 0 1.94-.83 1.94-1.85C7.15 3.8 6.39 3 5.25 3zM20.45 20h-3.38v-6.2c0-1.56-.56-2.62-1.96-2.62-1.07 0-1.7.72-1.98 1.42-.1.25-.13.6-.13.95V20h-3.38s.05-10.72 0-11.6h3.38v1.64c.45-.7 1.25-1.7 3.04-1.7 2.22 0 3.88 1.45 3.88 4.57V20z"/></svg></a>
              <a href="https://www.facebook.com/share/1GDKPnzS3Y/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="AR Construction on Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94z"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer__wordmark"><img src="assets/logo.png" alt="">AR Construction</div>
        <div class="footer__bottom"><span>© AR Construction. All rights reserved.</span></div>
      </div>
    </footer>
  `;

  if (headerPlaceholder) {
    headerPlaceholder.insertAdjacentHTML('beforeend', header);
  }

  if (footerPlaceholder) {
    footerPlaceholder.insertAdjacentHTML('beforeend', footer);
  } else {
    document.body.insertAdjacentHTML('beforeend', footer);
  }

  const activeLink = document.querySelector(`.nav__links a[href="${page}.html"]`);
  if (activeLink) {
    activeLink.classList.add('is-active');
  }

  if (page === 'projects' || page.startsWith('project-')) {
    const projLink = document.querySelector('.nav__links a[href="projects.html"]');
    if (projLink) projLink.classList.add('is-active');
  }
})();
