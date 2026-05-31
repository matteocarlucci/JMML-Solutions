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
