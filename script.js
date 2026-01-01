// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Background cursor glow
  const cursorGlow = document.getElementById("cursorGlow");
  const isCoarsePointer =
    window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (cursorGlow && !isCoarsePointer && !prefersReducedMotion) {
    let targetX = -999;
    let targetY = -999;
    let rafId = null;

    const render = () => {
      rafId = null;
      document.documentElement.style.setProperty("--cursor-x", `${targetX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${targetY}px`);
    };

    const queueRender = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(render);
    };

    window.addEventListener(
      "mousemove",
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        cursorGlow.classList.add("is-visible");
        queueRender();
      },
      { passive: true }
    );

    window.addEventListener(
      "mouseleave",
      () => {
        cursorGlow.classList.remove("is-visible");
      },
      { passive: true }
    );

    // If a touch happens, hide it (prevents odd behavior on hybrid devices)
    window.addEventListener(
      "touchstart",
      () => {
        cursorGlow.classList.remove("is-visible");
      },
      { passive: true }
    );
  }

  // Smooth scroll for all navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Only smooth scroll for links within the same page (starting with #)
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Learn More button smooth scroll
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  // Add active state to navigation items on scroll
  const sections = document.querySelectorAll(".section, .hero");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollOffset = window.innerHeight * 0.2; // Responsive offset based on viewport

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - scrollOffset) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  console.log("Portfolio website loaded successfully!");
  console.log("All content is editable via IDs for easy customization.");
});
