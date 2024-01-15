const uri = 'http://jsonplaceholder.typicode.com/users';


/* Llamamos al método get de axios y le pasamos la uri */
axios.get(uri)
 .then(function(respuesta) { 
    /* Dentro de la promesa recibimos la respuesta del servidor 
    El JSON ya está parseado y convertido */
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


        
