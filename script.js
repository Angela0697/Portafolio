//Modo oscuro
const botonTema = document.getElementById("boton-tema");
const icono = botonTema.querySelector("i");

botonTema.addEventListener("click", function() {
  document.body.classList.toggle("modo-oscuro");

  // Cambia el ícono según el modo
  if (document.body.classList.contains("modo-oscuro")) {
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
  } else {
    icono.classList.remove("fa-sun");
    icono.classList.add("fa-moon");
  }
});

//Mensaje contacto
document.getElementById("boton-contacto").addEventListener("click", function mostrarMensaje(event) {
    event.preventDefault();
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if (nombre) {
      const mensaje = "Hola " + nombre + ", gracias por contactarte conmigo. Recibirás una respuesta lo más pronto posible.";
      document.getElementById("mensaje-respuesta").innerHTML = mensaje;
      input.value = "";
    }
  });
  
//Menú colapsado
document.addEventListener("DOMContentLoaded", function () {
  const linksNav = document.querySelectorAll(".nav-link");
  const colapsoNav = document.querySelector(".navbar-collapse");

  linksNav.forEach((link) => {
    link.addEventListener("click", function() {
      const colapsoBoot = bootstrap.Collapse.getInstance(colapsoNav);
      if (colapsoBoot) {
        colapsoBoot.hide();
      }
    });
  });
});
