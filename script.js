const form = document.getElementById("cta-form");
const message = document.getElementById("hero-message");
const yearLabel = document.getElementById("year");

yearLabel.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");

  message.textContent = `Thanks, ${email}! We'll keep you updated.`;
  form.reset();
});
