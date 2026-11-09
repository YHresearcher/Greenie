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
    const status = document.getElementById('rfq-status');
    const button = form.querySelector('button[type="submit"]');
    const fields = ['company','contact','email','country','product','grade','quantity','port','incoterm','services','message'];
    let pending = false;
    let previousBody = '';
    let reference = '';
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (pending || !form.reportValidity()) return;
      const data = new FormData(form);
      const token = String(data.get('cf-turnstile-response') || '');
      if (!token) {
        status.textContent = 'Please complete the verification before sending.';
        return;
      }
      const payload = Object.fromEntries(fields.map(key => [key, String(data.get(key) || '').trim()]));
      const body = JSON.stringify(payload);
      if (body !== previousBody || !reference) {
        reference = 'rfq_' + crypto.randomUUID();
        previousBody = body;
      }
      payload.turnstileToken = token;
      pending = true;
      button.disabled = true;
      status.textContent = 'Sending your inquiry…';
      try {
        const response = await fetch('/api/rfq', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Idempotency-Key': reference},
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(20000)
        });
        const result = await response.json();
        if (!response.ok || result.ok !== true || result.reference !== reference) {
          throw new Error(result.error || 'Unable to send. Please try again.');
        }
        status.textContent = 'Inquiry received. Your reference: ' + result.reference;
        form.reset();
        previousBody = '';
        reference = '';
      } catch (error) {
        status.textContent = error.name === 'TimeoutError' || error.name === 'TypeError'
          ? 'Delivery could not be confirmed. Please verify again and retry without changing the form to avoid duplicates.'
          : error.message;
      } finally {
        pending = false;
        button.disabled = false;
        if (window.turnstile) window.turnstile.reset();
      }
    });
  }
});
