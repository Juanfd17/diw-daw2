var paises = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var currentFocus=-1;

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
        
        /*Cuando alguien pulsa sobre el elemento*/
            sugerencia.addEventListener("click", function(e) {
            
            /* Insertamos el valor en el campo de texto */
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
  



 
  