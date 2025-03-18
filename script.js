
let slideIndex = 0;
const slides = document.querySelectorAll(".slide-text");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);

// JavaScript to toggle the menu visibility
document.getElementById('hamburger-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide-text");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change text every 3 seconds
});

