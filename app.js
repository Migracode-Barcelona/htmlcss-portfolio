const findMe = document.querySelector(".find-me");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (window.pageYOffset > 1800) {
    // Show backToTopButton
    findMe.style.display = "none";
  } else {
    // Hide backToTopButton
   findMe.style.display = "block";
  }
}