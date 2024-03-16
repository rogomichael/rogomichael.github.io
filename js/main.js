const toggleButton = document.getElementById("toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("show"); // Toggle show class on click
});