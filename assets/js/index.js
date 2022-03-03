const headerToggler = document.querySelector(
    "#header .left .traverseContainer i:nth-child(1)"
  ),
  header = document.querySelector("#header"),
  sideBar = document.querySelector("#sideBar"),
  sideBarHidder = document.querySelector("#sideBar .logo i");

function showSideBar() {
  sideBar.classList.add("active");
}

function hideSideBar() {
  sideBar.classList.remove("active");
}

headerToggler.addEventListener("click", showSideBar);
sideBarHidder.addEventListener("click", hideSideBar);
