document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('featured-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots   = carousel.querySelectorAll('.carousel-dot');
  if (slides.length <= 1) return;

  let current = 0;

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  carousel.querySelector('.carousel-btn--prev')
    .addEventListener('click', () => goTo(current - 1));
  carousel.querySelector('.carousel-btn--next')
    .addEventListener('click', () => goTo(current + 1));

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Auto-advance every 5 seconds
  setInterval(() => goTo(current + 1), 5000);
});
