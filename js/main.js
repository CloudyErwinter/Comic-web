var dropdownButton = document.getElementById("dropdown-button");
var dropdownContent = document.getElementById("dropdown-content");

dropdownButton.addEventListener("click", function () {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

window.addEventListener("click", function (event) {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function( ) {
    nav.classList.toggle('slide');
});
