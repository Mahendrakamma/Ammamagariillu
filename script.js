// ─── Navbar Scroll Effect ───
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Mobile Menu ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => mobileMenu.classList.add('active'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('active'));
mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('active')));

// ─── Scroll Reveal ───
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ─── Hero Parallax ───
const heroBg = document.querySelector('.hero-bg img');
window.addEventListener('scroll', () => {
  if (heroBg) {
    const scroll = window.scrollY;
    heroBg.style.transform = `scale(1.1) translateY(${scroll * 0.3}px)`;
  }
});

// ─── Menu Tab Filter ───
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCards = document.querySelectorAll('.menu-card');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    menuTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const category = tab.dataset.category;

    menuCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'flex';
        card.style.animation = 'fadeUp .5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ─── Counter Animation ───
const statNums = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + suffix;
      }, 25);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => counterObserver.observe(el));

// ─── Reservation Form ───
const form = document.getElementById('reservationForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = '✓ RESERVATION CONFIRMED';
    btn.style.background = '#2d8a4e';
    setTimeout(() => {
      btn.textContent = 'RESERVE A TABLE';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ─── Smooth Scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
