const bars = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu")
})