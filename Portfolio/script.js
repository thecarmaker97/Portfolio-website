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

// ---------- Navbar title hover / click behavior ----------
const siteTitle = document.querySelector(".site-title");
if (siteTitle) {
  const originalTitle = siteTitle.textContent.trim();
  const fullName = "Yugant Solanki";

  // native tooltip for accessibility & keyboard users
  siteTitle.setAttribute("title", fullName);

  // change text on hover
  siteTitle.addEventListener("mouseenter", () => {
    siteTitle.textContent = fullName;
    siteTitle.classList.add("title-hovered");
  });
  siteTitle.addEventListener("mouseleave", () => {
    siteTitle.textContent = originalTitle;
    siteTitle.classList.remove("title-hovered");
  });

  // optional: click shows a dialog (non-blocking)
  siteTitle.addEventListener("click", () => {
    // simple alert — you can replace with a custom modal later
    alert(fullName);
  });

  // keyboard accessibility: also respond to Enter/Space
  siteTitle.setAttribute("tabindex", "0"); // make it focusable
  siteTitle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      alert(fullName);
    }
  });
}
