

window.addEventListener("load",(e)=>{
  cargaPagina();
});


function cargaPagina(){
  document.getElementById("btnNuevoTodo").addEventListener("click",(e)=>{
    nuevaNota(e);
});
}

function nuevaNota(e){
  e.preventDefault();

  let userId=document.getElementById("txtUserId").value;
  let title=document.getElementById("txtTitle").value;
  let completed=document.getElementById("completed").checked;

  if(userId && title){

    let newTodo={userId,title,completed};
   
      // 1. Crear el objeto XMLHttpRequest
      var miXHR=new XMLHttpRequest();

      // 2. Establecemos el callback de cambio de estado.
      miXHR.onreadystatechange=miXHRCambiaEstado;

      // 3. Realizamos una llamada POST para subir el objeto.
      let url=`https://jsonplaceholder.typicode.com/todos`;
    
      miXHR.open("POST",url);
      miXHR.setRequestHeader("Content-type", "application/json; charset=UTF-8");


      // 5. Al ser POST enviamos el objeto en formato JSON.
      miXHR.send(JSON.stringify(newTodo));
    }
    else{
      document.getElementById("contenedor").innerHTML='<h4>Completa los datos del formulario</h4>';

    }
}



// Manejador de cambio de estado
function miXHRCambiaEstado(){

  // Imprimimos un mensaje cada vez que cambia el estado
    console.log("Cambio de estado: "+this.readyState);
    console.log("Cambio de estado: "+this.status);


    if((this.readyState===4)&&(this.status===201)){
      // Si el estado es 4 y el código de estado es 201, es que el recurso ha sido dado de alta con éxito
      let todo=JSON.parse(this.responseText);
      var capa=document.createElement("div");
    
      let completado=todo.completed?"Sí":"No";

      let html=`<h6>Se ha dado de alta la tarea</h6>
          <div class="card col-3 p-3 m-3">
          <h5>Id de nota: ${todo.id}</h5>
          <h6>Id de usuario: ${todo.userId}</h6>
          <p>Título: ${todo.title}</p>
          <p>Completada?: ${completado}</p>
        </div>`;

  
      document.getElementById("contenedor").innerHTML=html;
    

    }
}



