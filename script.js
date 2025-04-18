document.getElementById("boton-contacto").addEventListener('click', function mostrarMensaje(event){
    event.preventDefault();
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if(nombre){
        const mensaje = "Hola " + nombre + ", gracias por contactarte conmigo.";
        document.getElementById("mensaje-respuesta").innerHTML = mensaje;
        input.value = '';
    }
})