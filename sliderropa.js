document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slide2');
    let currentIndex = 0;
  
    function plusSlide(n) {
      showSlide(currentIndex + n);
    }
  
    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      currentIndex = index;
      slider.style.transform = `translateX(-${slides[currentIndex].offsetLeft}px)`;
    }
  
    document.querySelector('.prev').addEventListener('click', function() {
      plusSlide(-1);
    });
  
    document.querySelector('.next').addEventListener('click', function() {
      plusSlide(1);
    });
  });
  