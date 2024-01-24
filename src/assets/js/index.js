

function toggleMenu() {
    var hamburger = document.querySelector('.header__hamburger');
    hamburger.classList.toggle('active');

    var mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}




