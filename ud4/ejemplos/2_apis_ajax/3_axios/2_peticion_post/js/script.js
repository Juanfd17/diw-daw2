

const uri = 'https://jsonplaceholder.typicode.com/users';
let datos={ username: "javiergpi", 
            lastName:"Gonzalez Pisano"};


/* El método post de axios recibe dos parámetros: la uri y los datos a enviar */
axios.post(uri,JSON.stringify(datos))
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
    
