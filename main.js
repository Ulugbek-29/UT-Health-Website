const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

openNavBtn.addEventListener("click", () => {
  // console.log("clicked");
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

// Closing Nav Menu when one menu item is clicked:
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav__items li a").forEach((navItemLink) => {
    navItemLink.addEventListener("click", () => {
      closeNav();
    });
  });
}

// Change Navbar styles on scroll:
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// console.log(this);
