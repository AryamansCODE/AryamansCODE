// Spider-Man: Beyond the Web — interactions

// Sticky nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}, { passive: true });

// Scroll-reveal animations with a slight stagger per section
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const siblings = [...el.parentElement.querySelectorAll(':scope > .reveal, :scope .reveal')];
    const delay = Math.min(siblings.indexOf(el), 6) * 110;
    el.style.transitionDelay = `${Math.max(delay, 0)}ms`;
    el.classList.add('reveal--visible');
    revealObserver.unobserve(el);
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Animated counters in the stats block
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__number').forEach((el) => counterObserver.observe(el));

// Subtle hero parallax on mouse move (desktop only)
const heroImage = document.getElementById('heroImage');
if (heroImage && matchMedia('(pointer: fine)').matches) {
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / innerWidth - 0.5) * 12;
    const y = (e.clientY / innerHeight - 0.5) * 8;
    heroImage.style.translate = `${-x}px ${-y}px`;
  });
  hero.addEventListener('mouseleave', () => {
    heroImage.style.translate = '0 0';
  });
}
