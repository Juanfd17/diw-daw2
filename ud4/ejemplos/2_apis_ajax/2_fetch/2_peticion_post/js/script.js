
/* Ejemplo de petición POST con Fetch 
    Fetch recibe como parámetros la URL y el objeto con opciones
    El objeto recibe el método y el cuerpo JSON que enviamos*/

fetch('https://jsonplaceholder.typicode.com/users/',{ 
    headers: {
        'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ username: 'javiergpi' })
   })
   .then(function(respuesta) { 
          return respuesta.json() 
  }).then (function(jsonData) { 
          console.log('JSON ya parseado:', jsonData) 
  }).catch(function(ex) { 
          console.error('Error', ex.message) }) 
  