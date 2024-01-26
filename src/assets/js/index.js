

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


// document.addEventListener('DOMContentLoaded', function () {
//     window.addEventListener('scroll', function () {
//         // Check if element is in viewport
//         const element = document.querySelector('.subtract__title');
//         const bounding = element.getBoundingClientRect();

//         if (
//             bounding.top >= 0 &&
//             bounding.left >= 0 &&
//             bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//             bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         ) {
//             // Add animation class when element is in viewport
//             element.classList.add('animate__backInLeft'); // Replace with desired animation class
//         } else {
//             // Remove animation class when element is out of viewport
//             element.classList.remove('animate__backInLeft'); // Replace with desired animation class
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     var animatedElements = document.querySelectorAll('.animate__animated');

//     function animateOnScroll() {
//         animatedElements.forEach(function (element) {
//             var bounding = element.getBoundingClientRect();
//             var isInViewport = (
//                 bounding.top >= 0 &&
//                 bounding.left >= 0 &&
//                 bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//                 bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//             );

//             if (isInViewport) {
//                 element.classList.add('animate__fadeInUp'); // Add desired animation class
//             } else {
//                 element.classList.remove('animate__fadeInUp'); // Remove animation class if element is out of viewport
//             }
//         });
//     }

//     // Initial animation check
//     animateOnScroll();

//     // Listen for scroll events
//     window.addEventListener('scroll', animateOnScroll);
// });


document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('.animate__animated');
    var scrollTimeout;

    function debounce(func, delay) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(func, delay);
    }

    function animateOnScroll() {
        animatedElements.forEach(function (element) {
            var bounding = element.getBoundingClientRect();
            var isInViewport = (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );

            if (isInViewport) {
                element.classList.add('animate__backInLeft'); // Add desired animation class
            } else {
                element.classList.remove('animate__fadeInUp'); // Remove animation class if element is out of viewport
            }
        });
    }

    // Initial animation check
    animateOnScroll();

    // Listen for debounced scroll events
    window.addEventListener('scroll', function () {
        debounce(animateOnScroll, 50); // Adjust debounce delay as needed
    });
});