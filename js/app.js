const aboutUsSectionPosition = document
  .querySelector(".section-about")
  .getBoundingClientRect().top;

const aboutUsSectionPositionHalf = aboutUsSectionPosition / 2;
const navbarEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY > 700) {
    navbarEl.classList.add("navbar-fixed");
  }

  console.log(aboutUsSectionPositionHalf);
  console.log(scrollY);

  if (scrollY < 700) {
    navbarEl.classList.remove("navbar-fixed");
  }
});

const navbarMenuIcon = document.querySelector(".icon-menu");
const navbarMenuSmall = document.querySelector(".nav-list-small");

navbarMenuIcon.addEventListener("click", () => {
  let navbarMenuSmallDisplay = getComputedStyle(navbarMenuSmall).display;

  if (navbarMenuSmallDisplay == "none") {
    console.log("is none");
    navbarMenuSmall.style.display = "flex";
  } else if (getComputedStyle(navbarMenuSmall).display == "flex") {
    console.log("is flex");
    navbarMenuSmall.style.display = "none";
  }
});

const navLinkList = document.querySelectorAll(".nav-link");
navLinkList.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navbarMenuSmall.style.display = "none";
  });
});
