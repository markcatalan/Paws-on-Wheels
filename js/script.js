"use strict";

const slides = document.querySelectorAll(".slide");

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (slide - i)}%)`)
  );
};

goToSlide(0);
