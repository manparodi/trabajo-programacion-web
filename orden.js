// Espera a que el documento HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
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
  });
  

  
  
  


