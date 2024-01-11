class JugadorCriquet{
  constructor(datos){
      this.nombre = datos.nombre
      this.apellidos = datos.apellidos
      this.edad = datos.edad
      this.posicion = datos.posicion
      this.equipo = datos.equipo
      this.urlImagen = datos.urlImagen
  }

  toHTML(){
    let html =
      `<div class="card col-4 m-3">
      <div class="card-body">
      <h5 class="card-title">${this.nombre}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.equipo}</h6>
      <p class="card-text">Edad: ${this.edad} </p>
      <img src="${this.urlImagen}" class="w-100 align-center card-img-top" alt="${this.nombre}">
      </div>
      </div>`
    return html
  }
}
window.addEventListener("load", (e) => cargaPagina());

function cargaPagina(){
  //* Guardamos el elemento del DOM donde vamos a colgar la información
  const divJugadores=document.getElementById("jugador");

  // Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("jugadores")){
    // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto en el HTML
    console.log("Hay datos del jugador en el localStorage");
    let jugadores = JSON.parse(localStorage.getItem("jugadores"))
    let jugadoresArray = []

    jugadores.map(jugador =>{
      let jugadorClase = new JugadorCriquet(jugador);
      let divJugador = document.createElement("div")
      divJugador.innerHTML = jugadorClase.toHTML()

      divJugadores.append(divJugador)
    })


    // Usamos un componente card para mostrar la información
    // Al usar la comilla inversa podemos mostrar variables dentro de la cadena con ${variable}
    divJugadores.innerHTML=jugador1.toHTML();
    
  }
    // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  else{
    divJugadores.innerHTML='<h2 class="p-3">No hay datos de ningun jugador</h2>';
    let jugador1= new JugadorCriquet({
      nombre:"jugador1",
      apellidos:"apellidos1",
      edad:"26",
      posicion:"bateador",
      equipo:"equipo1",
      imagen:"img/equipo1/jugador1"
    })

    let jugador2= new JugadorCriquet({
      nombre:"jugador2",
      apellidos:"apellidos2",
      edad:"27",
      posicion:"bateador",
      equipo:"equipo1",
      imagen:"img/equipo1/jugador2"
    })

    let jugador3= new JugadorCriquet({
      nombre:"jugador3",
      apellidos:"apellidos3",
      edad:"28",
      posicion:"bateador",
      equipo:"equipo1",
      imagen:"img/equipo1/jugador3"
    })

    let jugadores = [jugador1, jugador2, jugador3]

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("jugadores",JSON.stringify(jugadores));
  }
}