

const uri = 'https://jsonplaceholder.typicode.com/users';
var id=5; /* Id del usuario a borrar */



/* El método delete de axios solo recibe como parámetro la URL */
axios.delete(uri+'/'+id)
 .then(function(respuesta) { 
        console.log('JSON ya parseado:', respuesta.data) 
    })
  
 .catch(function(response) { 
    if (!response.status) {
        // Si el servidor no responde 'response' no es recibo un objeto sino texto
        console.error('Error: el servidor no responde '+response);
    }
    else {
        // Si el servidor responde 'response' es un objeto
            console.error('Error '+response.status+': '+response.message);
        }
 }); 
