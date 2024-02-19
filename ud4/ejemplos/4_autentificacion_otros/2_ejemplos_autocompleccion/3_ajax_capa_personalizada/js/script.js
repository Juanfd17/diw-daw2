var paises=[];

function cargaPaises(){
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        data.forEach(pais => {
            paises.push(pais.name.common);
        });
    })
    .catch(error => console.log(error));
}



var currentFocus=-1;

cargaPaises();
document.querySelector("#pais").addEventListener("input",pulsaTecla);
document.querySelector("#pais").addEventListener("keydown",bajaTecla);

document.addEventListener("click", function (e) {
    /* Cuando alguien pulsa en cualquier sitio de la página, cerramos las sugerencias */
    cierraSugerencias();
});


function pulsaTecla(e){
    // Borramos la lista completa
    cierraSugerencias();

    let valor=this.value;
    if(!valor)
        return false;
    
    /*Creamos un div que contendrá las sugerencias:*/
    let lista = document.createElement("div");
    lista.setAttribute("id","lista-autocompleccion");
    lista.classList.add("p-1", "border", "border-2", "border-dark","rounded","bg-light","w-100");
                             
    /*Añadimos el div como hijo del contenedor:*/
    this.parentNode.appendChild(lista);
    paises.forEach(pais => {
      if(pais.substring(0, valor.length).toUpperCase() == valor.toUpperCase()){
       
        /* Crea un div para cada pais que comienza igual que el texto que he introducido */
        let sugerencia = document.createElement("div");
        sugerencia.classList.add("p-1","rounded");
        /* Poinemos las letras que coinciden en negrita y el resto en texto normal*/
        sugerencia.innerHTML = "<strong>" + pais.substring(0, valor.length) + "</strong>";
        sugerencia.innerHTML += pais.substring(valor.length);

        /* Añadimos un campo a medida (data-*) para guardar el valor completo del pais*/
        sugerencia.dataset.pais=pais;
            /* Manejador de evento click sobre la sugerencia */
            sugerencia.addEventListener("click", function(e) {
            /* Insertamos el valor en el campo de texto*/
            document.querySelector("#pais").value = pais;
            
            /* Cierra la lista de sugerencias*/
           cierraSugerencias();
        });
        lista.appendChild(sugerencia);
      }
   });
   if(!lista.hasChildNodes())
   cierraSugerencias();
}

function bajaTecla(e){
   let sugerencias=null;
   let lista = document.querySelector("#lista-autocompleccion");
   
    if (lista) 
      sugerencias = lista.getElementsByTagName("div");
    if (e.keyCode == 40) { //down
        /* Si se pulsa la tecla de abajo, incrementamos la variable currentFocus */
        currentFocus++;
        /* Y destacamos el item actual */
        addActive(sugerencias);
    } else if (e.keyCode == 38) { //up
    /* Si se pulsa la tecla de abajo, decrementamos la variable currentFocus */
        currentFocus--;
        /* Y destacamos el item actual */
        addActive(sugerencias);
    } else if (e.keyCode == 13) { //ENTER
      /* Si se pulsa ENTER, evitamos que se envíe el formulario y simulamos un "Enter sobre el elemento actual" */
        e.preventDefault();
        if (currentFocus > -1) {
            if (lista) sugerencias[currentFocus].click();
       }
    }
}


/* Pongo el elemento actual como activo */
  function addActive(sugerencias) {
    /* Si no hay listado de sugerencias no hacemos nada */
    if (!sugerencias) return false;

    /* Eliminamos el elemento activo actual*/
    removeActive(sugerencias);

    /* Si hemos llegado al final del listado, volvemos al principio */
    if (currentFocus >= sugerencias.length) currentFocus = 0;

    /* Si hemos llegado al principio del listado, volvemos al final */
    if (currentFocus < 0) currentFocus = (sugerencias.length - 1);
    
    /* Establecemos el elemento actual como activo */
    sugerencias[currentFocus].classList.add("bg-primary");
    sugerencias[currentFocus].classList.add("text-light");

  }

/* Quita el elemento activo anterior*/
function removeActive(sugerencias) {
  
  for (var i = 0; i < sugerencias.length; i++) {
    sugerencias[i].classList.remove("bg-primary");
    sugerencias[i].classList.remove("text-light");
  }
}


/* Elimina la lista de sugerencias */
function cierraSugerencias() {
      var lista = document.querySelector("#lista-autocompleccion");
      if(lista)      
        lista.parentNode.removeChild(lista);
    
  }
  



 
  