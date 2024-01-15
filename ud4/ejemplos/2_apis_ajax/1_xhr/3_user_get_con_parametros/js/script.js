


// 1. Crear el objeto XMLHttpRequest
var miXHR=new XMLHttpRequest();

// 2. Establecemos el callback de cambio de estado.
miXHR.onreadystatechange=miXHRCambiaEstado;

// 3. Realizamos una llamada GET para obtener el usuario con un id determinado.
miXHR.open("GET","https://jsonplaceholder.typicode.com/users/1");

// 4. Al ser GET no enviamos parámetros)
miXHR.send(null);


// Manejador de cambio de estado
function miXHRCambiaEstado(){

  // Imprimimos un mensaje cada vez que cambia el estado
    console.log("Cambio de estado: "+this.readyState);
    if((this.readyState===4)&&(this.status===200)){
      // Si el estado es 4 y el código de estado es 200, es que la respuesta ha sido recibida correctamente.
      //console.log("Respuesta recibida "+this.responseText);

      let user=JSON.parse(this.responseText);
      var capa=document.createElement("div");
    
    
      let html=`<div class="card col-3 p-3 m-3">
          <h5>Nombre: ${user.name}</h5>
          <h6>Email: ${user.email}</h6>
          <p>Teléfono: ${user.phone}</p>
          <p>Empresa: ${user.company.name}</p>
        </div>`;

  
      document.getElementById("contenedor").innerHTML=html;
    

    }
}



