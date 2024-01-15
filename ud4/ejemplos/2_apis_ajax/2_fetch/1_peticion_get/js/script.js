/* URL de la API a la que se va a hacer la petición */
const uri = 'http://jsonplaceholder.typicode.com/users';


/* Se hace la petición GET a la API 
    El único parámetro en peticiones GET es la URI
    El método fetch devuelve una promesa que trataremos con .then
    Cuando la promesa se cumpla se ejecutará la funciòn que tenemos dentro de .then
*/
fetch(uri,{ method: 'get' })
 .then(function(respuesta) { 
        //El método json() devuelve otra promesa que trataremos con .then
        // La promesa se cumple una vez que se ha parseado el JSON   
        return respuesta.json() 
    })
  .then (function(jsonData) { 
        //Usamos la información recibida como necesitemos
        console.log('JSON ya parseado:', jsonData) 
    })
    .catch(function(ex) { 
        console.error('Error', ex.message) }) 


        
