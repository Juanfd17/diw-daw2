
window.addEventListener("load", (e) => cargaPagina());


function cargaPagina(){

//* Guardamos el elemento del DOM donde vamos a colgar la información
 const divJugadores=document.getElementById("jugador");

 // Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("jugadores")){
        // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto en el HTML
    console.log("Hay datos de los jugadores en el localStorage");
    let jugadores=JSON.parse(localStorage.getItem("jugadores"));

    // Usamos un componente card para mostrar la información
    // Al usar la comilla inversa podemos mostrar variables dentro de la cadena con ${variable}
    jugadores.map(jugador => {
      let divJugador = document.createElement("div")
      let html = `<div class="card col-4 m-3">
          <div class="card-body">
          <h5 class="card-title">${jugador.nombre}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${jugador.equipo}</h6>
       <p class="card-text">Edad: ${jugador.edad} </p>
       <img src="${jugador.urlImagen}" class="w-100 align-center card-img-top" alt="${jugador.nombre}">
      </div>
     </div>`;

     divJugador.innerHTML = html

     divJugadores.append(divJugador)
    })
    
  }
   // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  else{
   divJugadores.innerHTML='<h2 class="p-3">No hay datos de ningun jugador</h2>';
    let jugador1 = {
      nombre:"jugador1",
      apellidos:"apellidos1",
      edad:"26",
      posicion:"bateador",
      equipo:"equipo1",
      imagen:"img/equipo1/jugador1"
    }

    let jugador2 = {
      nombre:"jugador2",
      apellidos:"apellidos2",
      edad:"27",
      posicion:"bateador",
      equipo:"equipo1",
      imagen:"img/equipo1/jugador2"
    }

    let jugador3 = {
      nombre:"jugador3",
      apellidos:"apellidos3",
      edad:"28",
      posicion:"bateador",
      equipo:"equipo1",
      imagen:"img/equipo1/jugador3"
    }

    let jugadores = [jugador1, jugador2, jugador3]

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("jugadores",JSON.stringify(jugadores));
  }
}