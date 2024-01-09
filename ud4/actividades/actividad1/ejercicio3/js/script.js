// Comprobamos si existe en localStorage el elemento con clave "ju"
  if(localStorage.getItem("jugador")){
    // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto por consola
    let jugador=JSON.parse(localStorage.getItem("jugador"));
    console.log(jugador);
  }else{
    // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
    console.log("No hay datos del jugador en el localStorage");
    let jugador1={
      nombre:"Fred Klaassen",
      equipo:"Selección de críquet de los Países Bajos",
      edad:31,
      urlImagen:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/331000/331020.jpg"
    };

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("jugador",JSON.stringify(jugador1));
  }