const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function( ) {
    nav.classList.toggle('slide');
});

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu")
}
const activePage = window.location.pathname;
console.navLinks = document.querySelectorAll('nav ul li a').forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  const translateXValue = -slideIndex * 100;
  document.querySelector(".carousel").style.transform = `translateX(${translateXValue}%)`;
}

function prevSlide() {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = 2; // Adjust the number based on the number of slides
  }

  showSlides();
}

function nextSlide() {
  slideIndex++;

  if (slideIndex >= 3) { // Adjust the number based on the number of slides
    slideIndex = 0;
  }

  showSlides();
}

// Automatically advance the slides every 3 seconds
setInterval(nextSlide, 3000); // Adjust the interval as needed
  