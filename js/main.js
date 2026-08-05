// ============================================================
// AR CONSTRUCTION — shared interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  const setNavState = () => {
    if(!nav) return;
    if(window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  setNavState();
  window.addEventListener('scroll', setNavState, { passive:true });

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if(toggle && links){
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('is-open')));
  }

  /* ---------- Scroll progress bar ---------- */
  const progress = document.querySelector('.scroll-progress');
  if(progress){
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      progress.style.width = scrolled + '%';
    }, { passive:true });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Door-split reveal (Experience section) ---------- */
  const doorStages = document.querySelectorAll('.experience__stage');
  if(doorStages.length){
    if('IntersectionObserver' in window){
      const doorIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-open', entry.isIntersecting);
        });
      }, { threshold:0.45 });
      doorStages.forEach(el => doorIO.observe(el));
    } else {
      doorStages.forEach(el => el.classList.add('is-open'));
    }
  }

  /* ---------- Project filter (projects.html) ---------- */
  const filterBtns = document.querySelectorAll('.filter-bar button');
  const projectCards = document.querySelectorAll('.project-card');
  if(filterBtns.length){
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Contact: match the photo card height to the form (contact.html) ---------- */
  const contactForm = document.querySelector('.contact-form');
  const contactPhoto = document.querySelector('.contact-photo-card');
  if(contactForm && contactPhoto){
    const syncContactHeights = () => {
      if(window.innerWidth > 800){
        contactPhoto.style.height = contactForm.offsetHeight + 'px';
      } else {
        contactPhoto.style.height = '';
      }
    };
    syncContactHeights();
    window.addEventListener('resize', syncContactHeights, { passive:true });
    window.addEventListener('load', syncContactHeights);
    const sideImg = contactPhoto.querySelector('img');
    if(sideImg && !sideImg.complete) sideImg.addEventListener('load', syncContactHeights);
    if('fonts' in document) document.fonts.ready.then(syncContactHeights);
  }

});
