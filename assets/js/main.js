document.addEventListener('DOMContentLoaded', function() {

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.post-card, .post-content, .author-header');
  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    fadeEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      observer.observe(el);
    });
  }

});

// Polyfill for fade visible
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 50);
  });
});
