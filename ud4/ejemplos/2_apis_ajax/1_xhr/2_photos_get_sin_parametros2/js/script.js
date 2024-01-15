
var fotos;
var tamPagina=50;
var paginaActual=1;

window.addEventListener("load",(e)=>{
  cargaPagina();
});


function cargaPagina(){
  peticionAJAX();
  document.getElementById("btnCargar").addEventListener("click",(e)=>{
    cargaFotos();
});
}

function cargaFotos(){
  for(let i=(paginaActual-1)*tamPagina;i<paginaActual*tamPagina;i++){
  // Recorremos el array de fotos y las mostramos en la página
    element=fotos[i];
    let img=document.createElement("img");
    img.setAttribute("src",element.thumbnailUrl);
    img.setAttribute("alt",element.title);
    img.className="p-3";
    document.getElementById("divFotos").appendChild(img);

  };


}

function peticionAJAX(){

// 1. Crear el objeto XMLHttpRequest
var miXHR=new XMLHttpRequest();

// 2. Establecemos el callback de cambio de estado.
miXHR.onreadystatechange=miXHRCambiaEstado;

// 3. Realizamos una llamada GET para obtener un listado de fotos.
miXHR.open("GET","https://jsonplaceholder.typicode.com/photos");

// 4. Al ser GET no enviamos parámetros)
miXHR.send(null);


// Manejador de cambio de estado
function miXHRCambiaEstado(){

  // Imprimimos un mensaje cada vez que cambia el estado
    console.log("Cambio de estado: "+this.readyState);
    if((this.readyState===4)&&(this.status===200)){
      // Si el estado es 4 y el código de estado es 200, es que la respuesta ha sido recibida correctamente.
      console.log("Respuesta recibida "+this.responseText);

    fotos=JSON.parse(this.responseText);

    }
}
}


