// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del menú "VENDE TU ROPA"
    var vendeTuRopa = document.querySelector('.menu__item:nth-child(4)');
  
    // Agregar el evento de clic al elemento del menú
    vendeTuRopa.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
      // Obtener la sección de venta
      var seccionVenta = document.querySelector('.seccion-venta');
  
      // Desplazarse a la sección de venta
      seccionVenta.scrollIntoView({ behavior: 'smooth' });
    });
    // Obtener el elemento del menú "VENDE TU ROPA"
    var vendeTuRopa = document.querySelector('.menu__item:nth-child(5)');

    // Agregar el evento de clic al elemento del menú
    vendeTuRopa.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    
        // Obtener la sección de venta
        var seccionVenta = document.querySelector('.main-footer');
    
        // Desplazarse a la sección de venta
        seccionVenta.scrollIntoView({ behavior: 'smooth' });
    });
  // Obtener el elemento del menú "VENDE TU ROPA"
  var vendeTuRopaLinks = document.querySelectorAll('.menu__item:nth-child(4) a');

  // Agregar el evento de clic a cada enlace "VENDE TU ROPA"
  vendeTuRopaLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

      // Redirigir a index.html y luego desplazarse a la sección de venta
      window.location.href = 'index.html#seccion-venta';
      setTimeout(function() {
        var seccionVenta = document.getElementById('seccion-venta');
        seccionVenta.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Ajusta el tiempo según tus necesidades
    });
  });
    // Obtener el elemento del menú "VENDE TU ROPA"
    var vendeTuRopaLinks = document.querySelectorAll('.menu__item:nth-child(5) a');

    // Agregar el evento de clic a cada enlace "VENDE TU ROPA"
    vendeTuRopaLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
        // Redirigir a index.html y luego desplazarse a la sección de venta
        window.location.href = 'index.html#main-footer';
        setTimeout(function() {
          var seccionVenta = document.getElementById('main-footer');
          seccionVenta.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Ajusta el tiempo según tus necesidades
      });
    });
    // Obtener el elemento del menú "VENDE TU ROPA"
    var vendeTuRopaLinks = document.querySelectorAll('.titulo');

    // Agregar el evento de clic a cada enlace "VENDE TU ROPA"
    vendeTuRopaLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
        // Redirigir a index.html y luego desplazarse a la sección de venta
        window.location.href = 'index.html';
      });
    });
});

  
  