

// Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("perro")){
    // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto por consola
    let perro1=JSON.parse(localStorage.getItem("perro"));
    console.log(perro1);
  }
  else{
    // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
    console.log("No hay datos del perro en el localStorage");
    let perro1={
      nombre:"Fosi",
      raza:"Pastor Alemán",
      edad:2,
      urlImagen:"https://t1.uc.ltmcdn.com/es/posts/5/6/7/como_saber_si_un_pastor_aleman_es_puro_44765_600.jpg"
    };

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("perro",JSON.stringify(perro1));
  }