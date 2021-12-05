const toggle = document.querySelector(".toggle")
const ul = document.querySelector("ul");

toggle.addEventListener("click", () => {
  ul.classList.toggle("showMenu");
});