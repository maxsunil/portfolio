
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  }
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
