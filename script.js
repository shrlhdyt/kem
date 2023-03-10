// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#memu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function getDiskon(harga) {
  let musimPandemik = (harga * 30) / 100;
  return musimPandemik;
}

console.log(sayHiTo("eveything"));

function sayhiAgain(name) {
  console.log("hai again ${name}!!");
}
