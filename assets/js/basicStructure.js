// Constants & Variables
const navBar = document.querySelector("#navBar"),
  navBarShower = document.querySelector("#header .traverseDown"),
  navBarHidder = document.querySelector("#navBar .navUpIcon"),
  mainContainer = document.querySelector("main"),
  header = document.querySelector("#header"),
  loader = document.querySelector("#loader");

// Event Listners
navBarShower.addEventListener("click", () => navBar.classList.add("active"));
navBarHidder.addEventListener("click", () => navBar.classList.remove("active"));
mainContainer.addEventListener("scroll", (e) => {
  if (e.target.scrollTop > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => loader.classList.add("hidden"));
