const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".slider__btn--right");
const prevBtn = document.querySelector(".slider__btn--left");
const modal = document.getElementById("booking-modal");
const openModalButtons = document.querySelectorAll(".open-modal-btn");
const closeModalButton = document.querySelector(".modal__close");

let currentSlide = 0;

const renderDots = () => {
  if (!dotsContainer) return;

  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (index === currentSlide) dot.classList.add("dot--active");
    dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });
};

const showSlide = (index) => {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("slide--active", slideIndex === currentSlide);
  });

  renderDots();
};

if (slides.length) {
  if (nextBtn) {
    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  }

  showSlide(0);
}

const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav__links--open");
    navToggle.classList.toggle("nav__toggle--open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav__links--open");
      navToggle.classList.remove("nav__toggle--open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (modal) {
  const openModal = (targetId) => {
    const targetModal = document.getElementById(targetId);
    if (!targetModal) return;

    targetModal.classList.add("modal--open");
    targetModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = button.dataset.modalTarget;
      if (targetId) openModal(targetId);
    });
  });

  closeModalButton?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.dataset.closeModal === "true"
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("modal--open")) {
      closeModal();
    }
  });
}
