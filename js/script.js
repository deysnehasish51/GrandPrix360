const toggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const tag = document.querySelector('.hero-content .tag');
const heading = document.querySelector('.hero-content h1');
const desc = document.querySelector('.hero-content .desc');

const heroContent = [
  {
    tag: 'PERFORMANCE',
    heading: 'HITTING THE<br>APEX HEAD ON',
    desc: ' At Grand Prix Riders, performance isn’t just a measure, it’s a mindset. From sharp turns to full-throttle straights, we chase perfection, precision, and pure adrenaline on every ride.'
  },
  {
    tag: 'SPEED',
    heading: 'RACING<br>BEYOND LIMITS',
    desc: 'Push the boundaries of power and precision with cutting-edge performance on every track and terrain.'
  },
  {
    tag: 'ADVENTURE',
    heading: 'CONQUER THE<br>OPEN ROAD',
    desc: 'Experience the thrill of the ride and the freedom of the journey with every twist and turn ahead.'
  }
];



let currentSlide = 0;

function updateSlide(index) {
  const hero = document.querySelector('.hero-content');
  hero.classList.add('fade');

  setTimeout(() => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    tag.textContent = heroContent[index].tag;
    heading.innerHTML = heroContent[index].heading;
    desc.textContent = heroContent[index].desc;
  }, 500);

  setTimeout(() => hero.classList.remove('fade'), 1000);
}


rightArrow.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

leftArrow.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}, 3000);


const section = document.querySelector('.gearheads-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);


  const sections = document.querySelectorAll('.culture-section');

const cultureObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach((section) => {
  cultureObserver.observe(section);
});

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
