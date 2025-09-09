const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // remove active class from all
    navLinks.forEach((l) => l.classList.remove("active"));
    // add to clicked one
    link.classList.add("active");
  });
});

const toggleBtn = document.getElementById("dark-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
