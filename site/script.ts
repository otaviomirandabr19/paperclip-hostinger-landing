const animatedSections = document.querySelectorAll(".hero, .slab, .grid");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  },
);

animatedSections.forEach((section) => observer.observe(section));
