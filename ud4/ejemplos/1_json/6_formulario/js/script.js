// Array que almacena los objetos mascota
let mascotas = [];

// Evento de carga de página
window.addEventListener("load", (e) => cargaPagina());


 
//  Controlador de evento de carga de página
function cargaPagina() {
  // Carga los datos del localStorage
  cargaLocalStorage();
  // Actualiza la lista de mascotas
  actualizaMascotas();
  // Añade el controlador de evento al botón de guardar
  document.getElementById("btnGuardar").addEventListener("click", (e) => {
    guardarMascota();
  });
}

// Controlador de evento de botón de guardar
function guardarMascota() {
  const formulario = document.getElementById("frmMascota");
  const alertaExito = document.getElementById("alertaExito");

  // Marco el formulario como validado
  formulario.classList.add("was-validated");

  // Si el formulario no tiene errores..
  if (formulario.checkValidity()) {
    let nombre = document.getElementById("txtNombre").value;
    let edad = document.getElementById("txtEdad").value;
    let raza = document.getElementById("raza").value;
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
    let mascota = { nombre, edad, raza, urlImagen };
    mascotas.push(mascota);

    // Guardamos los datos en el localStorage
    guardarLocalStorage();

    // Actualizamos la lista de mascotas en el HTML
    actualizaMascotas();
  }
}

/* Guardo el listado de mascotas en localStorage */
function guardarLocalStorage(){
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
}


/* Cargo el listado de mascotas desde localStorage */
function cargaLocalStorage(){
  if(localStorage.getItem("mascotas"))
      mascotas=JSON.parse(localStorage.getItem("mascotas"));
}

/* Actualizamos las mascotas mostradas en el HTML */
function actualizaMascotas(){

  if(mascotas.length == 0) 
    document.getElementById("mascotas").innerHTML="<h3>No hay mascotas</h3>"; 
  else{
    document.getElementById("mascotas").innerHTML="";
    mascotas.forEach((mascota) => {
      let html = `<div class="col-4 p-3">
                  <div class="card">
                   <div class="card-body">
                    <h5 class="card-title">${mascota.nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${mascota.raza}</h6>
                    <p class="card-text">Edad: ${mascota.edad} </p>
                    <img src="${mascota.urlImagen}" class="w-100 align-center card-img-top" alt="${mascota.nombre}">
                   </div>
                   </div>
                  </div>`;
      document.getElementById("mascotas").innerHTML += html;
    });
  }
}
