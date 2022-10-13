const burgerMenu = document.querySelector(".burger-menu");
const ulMobile = document.querySelector(".index ul");

burgerMenu.addEventListener("click", function () {
    ulMobile.classList.toggle('active')
})