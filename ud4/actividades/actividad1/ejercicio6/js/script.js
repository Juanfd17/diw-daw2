// Array que almacena los objetos mascota
let jugadores = [];

// Evento de carga de página
window.addEventListener("load", (e) => cargaPagina());



//  Controlador de evento de carga de página
function cargaPagina() {
  // Carga los datos del localStorage
  cargaLocalStorage();
  // Actualiza la lista de mascotas
  actualizaJugadores();
  // Añade el controlador de evento al botón de guardar
  document.getElementById("btnGuardar").addEventListener("click", (e) => {
    guardarMascota();
  });
}

// Controlador de evento de botón de guardar
function guardarMascota() {
  const formulario = document.getElementById("frmJugador");
  const alertaExito = document.getElementById("alertaExito");

  // Marco el formulario como validado
  formulario.classList.add("was-validated");

  // Si el formulario no tiene errores..
  if (formulario.checkValidity()) {
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = document.getElementById("txtEdad").value;
    let posicion = document.getElementById("posicion").value;
    let equipo = document.getElementById("equipo").value;
    let urlImagen = document.getElementById("txtURL").value;

    // Reseteo el formulario
    formulario.reset();
    formulario.classList.remove("was-validated");

    /* Muestro el mensaje de éxito. Hago que desaparezca a los 3 segundos */
    alertaExito.classList.remove("hide");
    alertaExito.classList.add("show");
    setTimeout(() => {
        alertaExito.classList.remove("show");
        alertaExito.classList.add("hide");
    }, 3000);


    // Creo una nueva mascota con los datos del formulario y la añadimos al array 
    let jugador = { nombre, apellido, edad, posicion, equipo, urlImagen };
    jugadores.push(jugador);

    // Guardamos los datos en el localStorage
    guardarLocalStorage();

    // Actualizamos la lista de mascotas en el HTML
    actualizaJugadores();
  }
}

/* Guardo el listado de mascotas en localStorage */
function guardarLocalStorage(){
  localStorage.setItem("jugadores", JSON.stringify(jugadores));
}


/* Cargo el listado de mascotas desde localStorage */
function cargaLocalStorage(){
  if(localStorage.getItem("jugadores"))
      jugadores=JSON.parse(localStorage.getItem("jugadores"));
}

/* Actualizamos las mascotas mostradas en el HTML */
function actualizaJugadores(){

  if(jugadores.length == 0) 
    document.getElementById("jugadores").innerHTML="<h3>No hay jugadores</h3>"; 
  else{
    document.getElementById("jugadores").innerHTML="";
    jugadores.forEach((jugador) => {
      let html = `<div class="col-4 p-3">
                  <div class="card">
                   <div class="card-body">
                    <h5 class="card-title">${jugador.nombre}</h5>
                    <p class="card-text">Edad: ${jugador.edad} </p>
                    <h6 class="card-subtitle mb-2 text-muted">${jugador.posicion}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${jugador.equipo}</h6>
                    <img src="${jugador.urlImagen}" class="w-100 align-center card-img-top" alt="${jugador.nombre}">
                   </div>
                   </div>
                  </div>`;
      document.getElementById("jugadores").innerHTML += html;
    });
  }
}
