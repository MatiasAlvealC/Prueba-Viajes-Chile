// Js del carrucel le agrega movilidad con los botones, ademas de agregarle movilidad automatica despues de X milisegundos

const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const slides = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const intervalTime = 5000; // valor del tiempo de intervalo en milisegundos
let slideInterval;

function nextSlide() {
  slides[counter].style.display = 'none';
  counter = (counter + 1) % slides.length;
  slides[counter].style.display = 'block';
}


function prevSlide() {
  slides[counter].style.display = 'none';
  counter = (counter - 1 + slides.length) % slides.length;
  slides[counter].style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
});

function startSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, intervalTime);
}

carouselSlide.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

carouselSlide.addEventListener('mouseleave', () => {
  startSlide();
});

startSlide();

