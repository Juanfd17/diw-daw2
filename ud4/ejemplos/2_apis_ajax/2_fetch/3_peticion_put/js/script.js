
/* Ejemplo de petición PUT con Fetch 
    Fetch recibe como parámetros la URL y el objeto con opciones
    El objeto recibe el método y el cuerpo JSON que enviamos*/

fetch('https://jsonplaceholder.typicode.com/users/1',{ 
  headers: {
      'Content-type': 'application/json'
  },
  method: 'PUT',
  body: JSON.stringify({ username: 'javiergpi' })
 })
 .then(function(respuesta) { 
        return respuesta.json() 
}).then (function(jsonData) { 
        console.log('JSON ya parseado:', jsonData) 
}).catch(function(ex) { 
        console.error('Error', ex.message) }) 
