
/* Autentificación con API Key. Pasos previos:
  * 1. Registro en la plataforma
  * 2. Obtener API key publica y la API privada
  * 3. Añadimos *.* a la lista de dominios permitidos
  */
  
PUBLIC_KEY="X"; /* Reemplaza con tu API key pública */
PRIVATE_KEY="Y"; /* Reemplaza con tu API key privada */
  /* Habitualmente no guardariamos estos datos en el código cliente, sino que los 
      almacenamos en un fichero de configuración (servidor) o guardamos directamente el Hash en la BD  */


/* Cada petición a la API debe incluir estos parámetros:
 *   ts --> Timestamp (un número cualquiera, habitualmente hacemos que sea la hora) 
 *   apikey --> La clave pública
 *   hash --> El hash MD5 de ts+privateKey+publicKey. 
          Lo encriptamos usando la librería CryptoJS
*/      
// var ts = new Date().getTime();
// var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
// var sufijoURL=`ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

let sufijoURL=`apikey=${PUBLIC_KEY}`;


/* Dirección base de la API */
var baseURL= "http://gateway.marvel.com/v1/public"


let tamPagina=100;
let paginaActual=1;


window.addEventListener("load",function(){
    this.document.querySelector("#anterior").addEventListener("click",pulsaAnterior);
    this.document.querySelector("#siguiente").addEventListener("click",pulsaSiguiente);
    cargaResultados();
});


function cargaResultados(){
  let url = `${baseURL}/characters?${sufijoURL}&limit=${tamPagina}&offset=${(paginaActual-1)*tamPagina}`;
  console.log(url);
fetch(url, {method: 'GET'})
  .then(res => res.json())
  .then(data => {
     console.log(data);
     muestraPersonajes(data.data.results);
     actualizaPaginacion(data);
  })
  .catch(err => console.log(err));
}

/* Muestra los personajes en el DOM 
  * @param {Array} personajes Array de objetos con los personajes
*/
function muestraPersonajes(personajes){
  let contenedor=document.querySelector("#personajes");
 vacia(contenedor);
  let plantilla=document.querySelector(".plantilla-panel").content;
  
  personajes.forEach(personaje => {
    let clon=plantilla.cloneNode(true);
   
    clon.querySelector("img").src=`${personaje.thumbnail.path}/landscape_xlarge.${personaje.thumbnail.extension}`;
    clon.querySelector("h5").textContent=personaje.name;
    clon.querySelector("p").textContent=personaje.description?personaje.description.substring(0,100)+"...":"No description available";
    clon.querySelector("a").addEventListener("click",function(){
        console.log(personaje);
        url= `${baseURL}/characters/${personaje.id}/comics?${sufijoURL}`;
      fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            console.log(data.data.results);
            muestraComics(personaje,data.data.results); 
        })
        .catch(err => console.log(err));
    });
    contenedor.appendChild(clon);
  });

}

function muestraComics(personaje,comics){
  let modal=document.querySelector("#modal-comics");
  let plantillaFila=document.querySelector(".plantilla-fila").content;
  modal.querySelector("tbody").innerHTML="";
  modal.querySelector("h5").textContent=`Comics de ${personaje.name}`;
  comics.forEach(comic => {
      let clon=plantillaFila.cloneNode(true);
      clon.querySelector(".numero").textContent=comic.issueNumber;
      clon.querySelector(".titulo").textContent=comic.title;
      clon.querySelector(".formato").textContent=comic.format;
      clon.querySelector(".portada").src=`${comic.thumbnail.path}/standard_small.${comic.thumbnail.extension}`;
      modal.querySelector("tbody").appendChild(clon);
  });
}

function actualizaPaginacion(data){
  if(paginaActual==1)
    document.querySelector("#anterior").classList.add("disabled");
  else{
    if(paginaActual==Math.ceil(data.data.total/tamPagina))
      document.querySelector("#siguiente").classList.add("disabled");
    else{
      document.querySelector("#anterior").classList.remove("disabled");
      document.querySelector("#siguiente").classList.remove("disabled");
    }
  }
}

function pulsaAnterior(){
 paginaActual--;
 cargaResultados();

}

function pulsaSiguiente(){
  paginaActual++;
  cargaResultados();
}

function vacia(elemento){
  while(elemento.firstChild)
    elemento.removeChild(elemento.lastChild)
}