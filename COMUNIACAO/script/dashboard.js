document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function(event) {
    event.stopPropagation();
    var menu = document.querySelector('.menu');
    menu.classList.remove('active');
});

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index + 1 === slideIndex) ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index + 1 === slideIndex) {
            dot.className += ' active';
        }
    });
}

setInterval(() => {
    showSlides(++slideIndex);
}, 3000);


function toggleTom() {
  var tomPainel = document.querySelector('.texto-content');
  tomPainel.classList.toggle('hide');
}

function getGreeting() {
  var currentTime = new Date().getHours();
  var greeting;

  if (currentTime < 12) {
      greeting = "Bom dia";
  } else if (currentTime < 18) {
      greeting = "Boa tarde";
  } else {
      greeting = "Boa noite";
  }

  return greeting;
}

function displayGreeting() {
  var userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
      var greeting = getGreeting();
      document.querySelector('.barra-content h2').textContent = greeting + ", " + userData.name + "!";
  }
}

window.addEventListener('load', displayGreeting);