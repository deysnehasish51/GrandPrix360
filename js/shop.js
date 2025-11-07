const slides = document.querySelectorAll('.hero-slide');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
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

document.addEventListener("DOMContentLoaded", () => {
  const ridingImg = document.querySelector(".riding-image img");
  if (!ridingImg) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pop-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(ridingImg);
});

const imgs = document.querySelectorAll('.rev img, .riding-image > img');

const observerImg = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pop-in');
      observerImg.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

imgs.forEach(img => observerImg.observe(img));

