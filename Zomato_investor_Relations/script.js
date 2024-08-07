const nav = document.querySelector("nav");
const logoWhite = document.getElementById("Logo-white");
const logoBlack = document.getElementById("Logo-black");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    logoWhite.style.display = "none";
    logoBlack.style.display = "block";
  } else {
    nav.classList.remove("scrolled");
    logoWhite.style.display = "block";
    logoBlack.style.display = "none";
  }
});
