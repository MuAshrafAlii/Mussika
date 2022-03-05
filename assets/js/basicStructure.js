// Constants & Variables
const navBar = document.querySelector("#navBar"),
  navBarShower = document.querySelector(
    "#header .left .traverseContainer i:nth-child(1)"
  ),
  navBarHidder = document.querySelector("#navBar .logo i");

// Functions
function shownavBar() {
  navBar.classList.add("active");
}

function hidenavBar() {
  navBar.classList.remove("active");
}

// Event Listners
navBarShower.addEventListener("click", shownavBar);
navBarHidder.addEventListener("click", hidenavBar);
