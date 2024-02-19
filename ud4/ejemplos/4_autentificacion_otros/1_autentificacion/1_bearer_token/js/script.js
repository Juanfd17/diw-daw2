
/* Ejemplo de autentificación con token (Bearer) */

window.addEventListener("load", cargaPagina);


/* Manejador de evento de carga de página */
function cargaPagina() {
  document.querySelector("#btnToken").addEventListener("click",obtenerToken);
  document.querySelector("#btnDatos").addEventListener("click",obtenerDatos);
  if(localStorage.getItem('token'))
    document.querySelector("#btnDatos").classList.remove("disabled");
};


/* Obtiene el token de autentificación a partir de las credenciales de usuario.
  Una vez que lo hemos obtenido, lo almacenamos en el localStorage.
  Cuando obtenemos el token, habilitamos el botón para obtener los datos
  */
function obtenerToken(){
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: document.querySelector("#txtLogin").value.trim(""),
      password: document.querySelector("#txtPassword").value.trim("")
    })
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.token){
        localStorage.setItem('token', data.token);
        document.querySelector("#btnDatos").classList.remove("disabled");
        document.querySelector("#datos").innerHTML="Token obtenido";
      }
      else{
        document.querySelector("#datos").innerHTML = data.message;
      }
  })
  .catch(err => {
    console.log("ERROR: "+err);
    document.querySelector("#datos").innerHTML = err;
  });
}


/* Obtiene los datos utilizando la API privada */
/* Para ello pasamos el token en el header de la petición */  
function obtenerDatos(){
  const token = localStorage.getItem('token');
  fetch('https://dummyjson.com/auth/quotes', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  .then(function(respuesta) { 
    return respuesta.json() 
})
.then (function(jsonData) { 
    console.log('JSON ya parseado:', jsonData);
    divSalida=document.querySelector("#datos");
    divSalida.innerHTML=`<ul class="list-group">`;

    jsonData.quotes.forEach(quote => {
      divSalida.innerHTML+=`<li class="list-group-item">${quote.quote} </li>`    
    });
    divSalida.innerHTML+=`</ul>`;

  })
  .catch(err => {
    console.log(err)
    document.querySelector("#datos").innerHTML = err;

  });
}


