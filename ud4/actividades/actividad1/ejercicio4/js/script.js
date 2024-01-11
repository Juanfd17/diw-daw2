
window.addEventListener("load", (e) => cargaPagina());


function cargaPagina(){

 // Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("jugadores")){
        // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto en el HTML
    console.log("Hay datos de los jugadores en el localStorage");
    let jugadores=JSON.parse(localStorage.getItem("jugadores"));    
    console.log(jugadores);
  }
   // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  else{
    console.log("No hay datos de ningun jugador");

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