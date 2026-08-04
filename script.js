/* ============================================================
   JMML — small bits of interactivity
   1. Mobile menu open/close
   2. Close the menu after clicking a link
   3. Auto-update the year in the footer
   ============================================================ */

// 1 & 2: Mobile navigation menu
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu when any link inside it is clicked (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// 3: Keep the footer copyright year current automatically
document.getElementById("year").textContent = new Date().getFullYear();

// 4: Submit the contact form to Formspree without leaving the page
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    formStatus.textContent = "Sending…";
    formStatus.className = "form-note";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "Thanks! Your message has been sent.";
        formStatus.className = "form-note is-success";
        contactForm.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again or email us directly.";
        formStatus.className = "form-note is-error";
      }
    } catch (error) {
      formStatus.textContent = "Something went wrong. Please try again or email us directly.";
      formStatus.className = "form-note is-error";
    } finally {
      submitButton.disabled = false;
    }
  });
}

// 5: Fade/slide elements into view as the user scrolls to them
const revealEls = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealEls.length && "IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
