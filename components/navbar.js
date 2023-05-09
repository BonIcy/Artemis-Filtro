export function navbar(){
    let navbarToggle = document.querySelector(".navbar-toggle");
    let navbarNav = document.querySelector(".navbar-nav");

    navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarNav.classList.toggle("active");
});

}
