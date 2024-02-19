
/* Modelo de paginación completa */
/* El tamaño de página y el número de páginas se definen con constantes.
  * La página actual se almacena en una variable global.
  * Los elementos que pedimos en cada petición dependen de las variables anteriores.
  * Para ello usamos los parámetros skip y limit de la API dummyjson.com
  * 
  * En este ejemplo se generan los botones de paginación dinámicamente
*/

var paginaActual=1;
var tamPagina=5;
var numeroPaginas=6;

window.addEventListener("load",cargaDocumento);


/* Manejador de evento de carga de página */
function cargaDocumento(){
  generaBotones();
  cargaPagina(paginaActual);
  actualizaBotones();
}


/* Generamos los botones de paginación dinámicamente */
function generaBotones(){
  var botones=document.querySelector("#paginacion");

  var anterior=document.createElement("li");
  anterior.classList.add("page-item");
  var enlace=document.createElement("a");
  enlace.classList.add("page-link");
  enlace.setAttribute("id","anterior");
  enlace.innerHTML="Anterior";
  enlace.href="#";
  enlace.addEventListener("click",paginaAnterior);
  anterior.appendChild(enlace);
  botones.appendChild(anterior);

  for(i=1;i<=numeroPaginas;i++){
    var item=document.createElement("li");
    item.classList.add("page-item");
    var enlace=document.createElement("a");
    enlace.classList.add("page-link");
    enlace.innerHTML=i;
    enlace.id="boton-"+i;
    if(i==1) item.classList.add("active");
    enlace.href="#";
    enlace.addEventListener("click",pulsaBoton);
    item.appendChild(enlace);
    botones.appendChild(item);
  }

  var siguiente=document.createElement("li");
  siguiente.classList.add("page-item");
  var enlace=document.createElement("a");
  enlace.classList.add("page-link");
  enlace.setAttribute("id","siguiente");
  enlace.innerHTML="Siguiente";
  enlace.href="#";
  enlace.addEventListener("click",paginaSiguiente);
  siguiente.appendChild(enlace);
  botones.appendChild(siguiente);

}

/* Manejador de evento de pulsación de botón de paginación 
 *   Calculamos la página a partir del texto del botón 
 */

function pulsaBoton(){
  document.querySelector(".active").classList.remove("active");
  this.classList.add("active");

   paginaActual=parseInt(this.innerHTML);
    cargaPagina(paginaActual);
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
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#boton-"+paginaActual).parentNode.classList.add("active");
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
    var cuerpo=document.querySelector("#cuerpo");
    cuerpo.innerHTML="";
     myJson.users.forEach(function(usuario){
     // console.log(usuario);
  
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

