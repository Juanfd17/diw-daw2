
/* Modelo de paginación básica */
/* El tamaño de página y el número de páginas se definen con constantes.
  * La página actual se almacena en una variable global.
  * Los elementos que pedimos en cada petición dependen de las variables anteriores.
  * Para ello usamos los parámetros skip y limit de la API dummyjson.com
*/

var paginaActual=1;
const tamPagina=5; /* Número de elementos por página */
const numeroPaginas=6; /* Número de páginas */

window.addEventListener("load",cargaDocumento);

function cargaDocumento(){
  document.querySelector("#anterior").addEventListener("click",paginaAnterior);
  document.querySelector("#siguiente").addEventListener("click",paginaSiguiente);
  cargaPagina(paginaActual);
  actualizaBotones();
}


/* Manejador de evento de pulsación del botón anterior
* Actualizamos la página actual y la mostramos
* Actualizamos los botones */
function paginaAnterior(){
  paginaActual--;
  cargaPagina(paginaActual);
  actualizaBotones()
}

/* Manejador de evento de pulsación del botón siguiente
* Actualizamos la página actual y la mostramos
* Actualizamos los botones */
function paginaSiguiente(){
paginaActual++;
cargaPagina(paginaActual);
actualizaBotones();
}

/* Actualizamos los botones (habitiar/deshabilitar) en función de la página actual */
function actualizaBotones(){

  if(paginaActual==1){
    document.querySelector("#anterior").classList.add("disabled");
    document.querySelector("#siguiente").classList.remove("disabled");
  }
  else{ 
    if(paginaActual==numeroPaginas){ 
      document.querySelector("#anterior").classList.remove("disabled");;
      document.querySelector("#siguiente").classList.add("disabled");
    }
    else{
      document.querySelector("#anterior").classList.remove("disabled");
      document.querySelector("#siguiente").classList.remove("disabled");
  }
}
}

/* Carga la página indicada en el parámetro mediante la petición AJAX.
   No implica recarga de la página completa */
function cargaPagina(pagina){
 console.log("Cargo pagina "+pagina);
  var url = `https://dummyjson.com/users?skip=${(paginaActual-1)*tamPagina}&limit=${tamPagina}`;
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    var cuerpo=document.querySelector("#cuerpo");
    cuerpo.innerHTML="";
     myJson.users.forEach(function(usuario){
    
      cuerpo.innerHTML+=`<tr>
                          <td>${usuario.id}</td>
                          <td>${usuario.firstName}</td>
                          <td>${usuario.lastName}</td>
                          <td>${usuario.age}</td>
                          <td>${usuario.email}</td>
                        </tr>`;

  })
  });
}

