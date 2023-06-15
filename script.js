// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del menú "VENDE TU ROPA"
    let vendeTuRopa = document.querySelector('.menu__item:nth-child(4)');
  
    // Agregar el evento de clic al elemento del menú
    vendeTuRopa.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
      // Obtener la sección de venta
      let seccionVenta = document.querySelector('.seccion-venta');
  
      // Desplazarse a la sección de venta
      seccionVenta.scrollIntoView({ behavior: 'smooth' });
    });
    // Obtener el elemento del menú "VENDE TU ROPA"
    let vendeTuRopa = document.querySelector('.menu__item:nth-child(5)');

    // Agregar el evento de clic al elemento del menú
    vendeTuRopa.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    
        // Obtener la sección de venta
        let seccionVenta = document.querySelector('.main-footer');
    
        // Desplazarse a la sección de venta
        seccionVenta.scrollIntoView({ behavior: 'smooth' });
    });
  // Obtener el elemento del menú "VENDE TU ROPA"
  let vendeTuRopaLinks = document.querySelectorAll('.menu__item:nth-child(4) a');

  // Agregar el evento de clic a cada enlace "VENDE TU ROPA"
  vendeTuRopaLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

      // Redirigir a index.html y luego desplazarse a la sección de venta
      window.location.href = 'index.html#seccion-venta';
      setTimeout(function() {
        let seccionVenta = document.getElementById('seccion-venta');
        seccionVenta.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Ajusta el tiempo según tus necesidades
    });
  });
    // Obtener el elemento del menú "VENDE TU ROPA"
    let vendeTuRopaLinks = document.querySelectorAll('.menu__item:nth-child(5) a');

    // Agregar el evento de clic a cada enlace "VENDE TU ROPA"
    vendeTuRopaLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
        // Redirigir a index.html y luego desplazarse a la sección de venta
        window.location.href = 'index.html#main-footer';
        setTimeout(function() {
          let seccionVenta = document.getElementById('main-footer');
          seccionVenta.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Ajusta el tiempo según tus necesidades
      });
    });
    // Obtener el elemento del menú "VENDE TU ROPA"
    let vendeTuRopaLinks = document.querySelectorAll('.titulo');

    // Agregar el evento de clic a cada enlace "VENDE TU ROPA"
    vendeTuRopaLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
        // Redirigir a index.html y luego desplazarse a la sección de venta
        window.location.href = 'index.html';
      });
    });
});

//SLIDER ROPA
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

//ORDEN
// Espera a que el documento HTML se haya cargado completamente
  // Obtener elementos del DOM
  const sortButton = document.querySelector(".sort");
  const ordenOptions = document.querySelector(".orden-options");
  const ordenOptionElements = document.querySelectorAll(".orden-option");

  // Agregar evento de clic al botón de Ordenar
  sortButton.addEventListener("click", function () {
    toggleOrdenOptions();
  });

  // Agregar evento de clic a las opciones de ordenamiento
  ordenOptionElements.forEach(function (option) {
    option.addEventListener("click", function () {
      const selectedOption = option.dataset.option;
      sortProducts(selectedOption);
      updateSortButton(option.textContent);
      closeOrdenOptions();
    });
  });

  // Agregar evento de clic al documento para cerrar el menú
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (
      !target.closest(".sort") &&
      !target.closest(".orden-options") &&
      ordenOptions.classList.contains("show")
    ) {
      closeOrdenOptions();
    } else if (target.closest(".orden-option")) {
      closeOrdenOptions();
    }
  });

  // Función para alternar la visibilidad del menú de ordenamiento
  function toggleOrdenOptions() {
    ordenOptions.classList.toggle("show");
  }

  // Función para cerrar el menú de ordenamiento
  function closeOrdenOptions() {
    ordenOptions.classList.remove("show");
  }

  // Función para ordenar los productos
  function sortProducts(selectedOption) {
    const gridContainer = document.querySelector(".grid-container");
    const products = Array.from(gridContainer.querySelectorAll(".grid-item"));

    products.sort(function (a, b) {
      const aTitle = a.querySelector(".titulo-producto").textContent;
      const bTitle = b.querySelector(".titulo-producto").textContent;
      const aPrice = parseFloat(a.querySelector(".precio").textContent.slice(1));
      const bPrice = parseFloat(b.querySelector(".precio").textContent.slice(1));

      switch (selectedOption) {
        case "titulo-asc":
          return aTitle.localeCompare(bTitle);
        case "titulo-desc":
          return bTitle.localeCompare(aTitle);
        case "precio-asc":
          return aPrice - bPrice;
        case "precio-desc":
          return bPrice - aPrice;
        default:
          return 0;
      }
    });

    // Vaciar el grid container
    while (gridContainer.firstChild) {
      gridContainer.firstChild.remove();
    }

    // Agregar los productos ordenados
    products.forEach(function (product) {
      gridContainer.appendChild(product);
    });
  }

  // Función para actualizar el texto del botón de Ordenar
  function updateSortButton(text) {
    sortButton.querySelector("span").textContent = text;
  }
  
  