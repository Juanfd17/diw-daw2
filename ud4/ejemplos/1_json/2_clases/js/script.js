


//Definimos la clase Rectangulo
class Rectangulo {
  constructor(altura, anchura) {
    this.altura = altura;
    this.anchura = anchura;
  }

  area(){
    return this.altura*this.anchura;
  }

}

let r=new Rectangulo(40,30);
console.log("El area del rectantulo r es "+r.area()+" m2")


// Convertimos a JSON
var cadenaJSON=JSON.stringify(r);


// Mostramos la cadena en JSON
console.log("Cadena JSON: "+cadenaJSON)

// Parseamos la cadena JSON de vuelta a objeto
let r2=JSON.parse(cadenaJSON);


//Mostramos las propiedades del objeto
console.log("El area del rectantulo r2 es "+r2.area()+" m2")


// ¿QUE PROBLEMA ESTAMOS TENIENDO? ARREGLALO
