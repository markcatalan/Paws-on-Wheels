"use strict";

// ---------------- GLOBAL DECLARATION --------------- //

// Smooth Scroll
const lnkHiw = document.querySelector("#section--hiw");
const lnkServices = document.querySelector("#section--services");
const lnkWcu = document.querySelector("#section--wcu");
const lnkTestimonials = document.querySelector("#section--testimonials");
const lnkPricing = document.querySelector("#section--pricing");

const sectHiw = document.querySelector("#hiw");
const sectServices = document.querySelector("#services");
const sectWcu = document.querySelector("#wcu");
const sectTestimonials = document.querySelector("#testimonials");
const sectPricing = document.querySelector("#pricing");

// Testimonial
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// ---------------- IMPLEMENTATION --------------- //

// Smooth Scroll
lnkHiw.addEventListener("click", function (e) {
  e.preventDefault();
  sectHiw.scrollIntoView({ behavior: "smooth" });
});

lnkServices.addEventListener("click", function (e) {
  e.preventDefault();
  sectServices.scrollIntoView({ behavior: "smooth" });
});

lnkWcu.addEventListener("click", function (e) {
  e.preventDefault();
  sectWcu.scrollIntoView({ behavior: "smooth" });
});

lnkTestimonials.addEventListener("click", function (e) {
  e.preventDefault();
  sectTestimonials.scrollIntoView({ behavior: "smooth" });
});

lnkPricing.addEventListener("click", function (e) {
  e.preventDefault();
  sectPricing.scrollIntoView({ behavior: "smooth" });
});

// Testimonial
let currSlide = 0;
const maxSlide = slides.length;

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (slide - i)}%)`)
  );
};

goToSlide(0);

// Next Slide
const nextSlide = function () {
  if (currSlide === maxSlide - 1) currSlide = 0;
  else currSlide++;

  goToSlide(currSlide);
};

// Prev Slide
const prevSlide = function () {
  if (currSlide === 0) currSlide = maxSlide - 1;
  else currSlide--;

  goToSlide(currSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);
