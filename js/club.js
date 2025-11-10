window.addEventListener('scroll', function() {
  const stickyHeader = document.querySelector('.sticky-header');
  if (window.scrollY > 150) {
    stickyHeader.classList.add('active');
  } else {
    stickyHeader.classList.remove('active');
  }
});

const slides = document.querySelectorAll('.hero-slide');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');

    void slide.offsetWidth;
    if (idx === i) slide.classList.add('active');
  });
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);
