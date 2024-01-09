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
  const divJugador=document.getElementById("jugador");

  // Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("jugador")){
    // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto en el HTML
    console.log("Hay datos del jugador en el localStorage");
    let jugador1= new JugadorCriquet(JSON.parse(localStorage.getItem("jugador")));

    // Usamos un componente card para mostrar la información
    // Al usar la comilla inversa podemos mostrar variables dentro de la cadena con ${variable}
    divJugador.innerHTML=jugador1.toHTML();
    
  }
    // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  else{
    divJugador.innerHTML='<h2 class="p-3">No hay datos de ningun jugador</h2>';
    let jugador1= new JugadorCriquet({
      nombre:"Fred Klaassen",
      equipo:"Selección de críquet de los Países Bajos",
      edad:31,
      urlImagen:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/331000/331020.jpg"
    })

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("jugador",JSON.stringify(jugador1));
  }
}