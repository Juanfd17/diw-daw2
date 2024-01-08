
// Creamos un objeto literal
let r = {
  altura:40,
  anchura:30
}

// Convertimos a JSON
var cadenaJSON=JSON.stringify(r);

// Mostramos la cadena en JSON
console.log("Cadena JSON: "+cadenaJSON)

// Parseamos la cadena JSON de vuelta a objeto
let r2=JSON.parse(cadenaJSON);

//Mostramos las propiedades del objeto
console.log("Altura: "+r2.altura+" Anchura: "+r2.anchura);



