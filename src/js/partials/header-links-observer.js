const sections = document.querySelectorAll('[data-observer="section"]');
const links = document.querySelectorAll('[data-link]');

const observerProperties = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      links.forEach(link => {
        link.classList.remove('header-link-active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('header-link-active');
        }
      });
    }
  });
}, observerProperties);

sections.forEach(section => observer.observe(section));
