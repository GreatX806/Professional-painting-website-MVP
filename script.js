// Add fade-in animation when elements come into view
const elements = document.querySelectorAll('.fade-in, .slide-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach(el => observer.observe(el));
