/* Greenie Vietnam — progressive enhancement for the static B2B website. */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', setHeader, { passive: true });
  setHeader();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fadeElements = document.querySelectorAll('.fade-up');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    fadeElements.forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    fadeElements.forEach(el => observer.observe(el));
  }

  const menuButton = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.nav-links');
  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const fields = [
        ['Company', 'company'], ['Contact', 'contact'], ['Business email', 'email'],
        ['Country', 'country'], ['Product', 'product'], ['Grade / specifications', 'grade'],
        ['Target quantity', 'quantity'], ['Destination port', 'port'],
        ['Incoterm', 'incoterm'], ['Requirements', 'services'], ['Message', 'message']
      ];
      const body = fields.map(([label, key]) =>
        label + ': ' + (String(data.get(key) || '').trim() || 'Not specified')
      ).join('\n');
      const subject = 'Greenie wholesale inquiry - ' + String(data.get('company') || '').trim();
      const url = 'mailto:hello@greenievietnam.biz.vn?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      const status = document.getElementById('rfq-status');
      if (url.length > 1900) {
        if (status) status.textContent = 'Your inquiry is too long for an email link. Please shorten the message or contact us at hello@greenievietnam.biz.vn.';
        return;
      }
      if (status) status.textContent = 'Your email app should open with a draft. Please review and press Send there. Your inquiry has not been submitted by this website.';
      window.location.href = url;
    });
  }
});
