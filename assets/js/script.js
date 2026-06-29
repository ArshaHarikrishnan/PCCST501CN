// PCCST501 Website JavaScript

console.log("PCCST501 Website Loaded");

// Highlight active navigation
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});