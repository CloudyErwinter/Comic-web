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

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper i");
const firstCardsWidth = carousel.querySelector(".cards").offsetWidth;
// const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

// get number of the card that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardsWidth);

// // insert copies of the last few cards to beginning of the carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(cards => {
//   carousel.insertAdjacentHTML("afterbegin", cards.outerHTML);
// });
// // insert copies of the first few cards to end of the carousel for infinite scrolling
// carouselChildrens.slice(0, -cardPerView).forEach(cards => {
//   carousel.insertAdjacentHTML("beforeend", cards.outerHTML);
// });

// add event listeners for the arrow buttons to scroll to the carousel left and right
arrowBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardsWidth : firstCardsWidth;
  })
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
  if(!isDragging) return; // if isDragging is false return from here
  // update the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX- startX);
}
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}
const autoPlay = () => {
  if(window.innerWidth < 800) return; // kembali ketika layar lebih kecil dari 800
  // autoplay the carousel after 2500ms
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardsWidth, 2500);
}
autoPlay();
const infiniteScroll = () => {
  if(carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (1 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);