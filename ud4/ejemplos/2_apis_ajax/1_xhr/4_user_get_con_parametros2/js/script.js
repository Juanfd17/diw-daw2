
/* Eventop de carga de página */
window.addEventListener("load",(e)=>{
  cargaPagina();
});


/* Manejador de evento de carga de página */
function cargaPagina(){
  document.getElementById("txtId").addEventListener("input",(e)=>{
    cargaDatosUsuario();
});
}


/* Función que carga los datos del usuario */
function cargaDatosUsuario(){
  if(document.getElementById("txtId").value){

    let id=document.getElementById("txtId").value;
    if((parseInt(id)>0)&&(parseInt(id)<=10)){

      // 1. Crear el objeto XMLHttpRequest
      var miXHR=new XMLHttpRequest();

      // 2. Establecemos el callback de cambio de estado.
      miXHR.onreadystatechange=miXHRCambiaEstado;

      // 3. Realizamos una llamada GET para obtener el usuario con un id determinado.
      let url=`https://jsonplaceholder.typicode.com/users/${id}`;
     
      miXHR.open("GET",url);


      // 4. Al ser GET no enviamos parámetros)
      miXHR.send(null);
    }
    else{
      document.getElementById("contenedor").innerHTML='<h4>No hay datos del usuario</h4>';

    }
}
}


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



