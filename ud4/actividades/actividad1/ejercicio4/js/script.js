
window.addEventListener("load", (e) => cargaPagina());


function cargaPagina(){

 // Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("jugador")){
        // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto en el HTML
    console.log("Hay datos del jugador en el localStorage");
    let jugador1=JSON.parse(localStorage.getItem("jugador"));

    // Usamos un componente card para mostrar la información
    // Al usar la comilla inversa podemos mostrar variables dentro de la cadena con ${variable}
    let texto = `nombre: ${jugador1.nombre} Equipo: ${jugador1.equipo} Edad: ${jugador1.edad} img: ${jugador1.urlImagen}`;
    console.log(texto);
  }
   // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  else{
    console.log("No hay datos de ningun jugador");

    let jugador1={
      nombre:"Fred Klaassen",
      equipo:"Selección de críquet de los Países Bajos",
      edad:31,
      urlImagen:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/331000/331020.jpg"
    };

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("jugador",JSON.stringify(jugador1));
  }
}