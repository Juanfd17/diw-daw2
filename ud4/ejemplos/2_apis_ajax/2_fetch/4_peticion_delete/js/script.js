
/* Ejemplo de petición DELETE con Fetch */

fetch('https://jsonplaceholder.typicode.com/users/2',{ 
  method: 'DELETE'})
 .then(function(respuesta) { 
        return respuesta.json() 
}).then (function(jsonData) { 
        console.log('JSON ya parseado:', jsonData) 

}).catch(function(ex) { 
        console.error('Error', ex.message) }) 

