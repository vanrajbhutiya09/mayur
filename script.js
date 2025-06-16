// Responsive burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

// Close menu after clicking link (on mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
});

// Simple contact form feedback (no backend)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.textContent = "Thank you! Your message has been sent.";
  formMessage.style.color = "#e50914";
  contactForm.reset();
});
