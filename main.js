// Main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Concepts Tutorial loaded");

  // Highlight current page in navigation
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".sidebar a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.style.backgroundColor = "#e9ecef";
      link.style.color = "#4a6fa5";
      link.style.fontWeight = "bold";
    }
  });
});
