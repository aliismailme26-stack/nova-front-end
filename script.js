const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "شكرًا لك! هذا نموذج تجريبي؛ اربط النموذج بخدمة خلفية لاستقبال الرسائل فعليًا.";
  contactForm.reset();
});
