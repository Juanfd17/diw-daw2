
window.addEventListener("load", (e) => cargaPagina());


function cargaPagina(){

//* Guardamos el elemento del DOM donde vamos a colgar la información
 const divPerro=document.getElementById("perro");

 // Comprobamos si existe en localStorage el elemento con clave "perro"
  if(localStorage.getItem("perro")){
        // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto en el HTML
    console.log("Hay datos del perro en el localStorage");
    let perro1=JSON.parse(localStorage.getItem("perro"));

    // Usamos un componente card para mostrar la información
    // Al usar la comilla inversa podemos mostrar variables dentro de la cadena con ${variable}
    let html = `<div class="card col-4 m-3">
        <div class="card-body">
        <h5 class="card-title">${perro1.nombre}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${perro1.raza}</h6>
     <p class="card-text">Edad: ${perro1.edad} </p>
     <img src="${perro1.urlImagen}" class="w-100 align-center card-img-top" alt="${perro1.nombre}">
    </div>
   </div>`;

   divPerro.innerHTML=html;
    
  }
   // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  else{
   divPerro.innerHTML='<h2 class="p-3">No hay datos de ningun perro</h2>';
    let perro1={
      nombre:"Fosi",
      raza:"Pastor Alemán",
      edad:2,
      urlImagen:"https://t1.uc.ltmcdn.com/es/posts/5/6/7/como_saber_si_un_pastor_aleman_es_puro_44765_600.jpg"
    };

    // La proxima vez que recarguemos la página la clave existirá
    localStorage.setItem("perro",JSON.stringify(perro1));
  }
}