
/* Petición GET con Fetch y Async Await, manejo de errores incluidos (completo) */

const uri = 'http://jsonplaceholder.typicode.co/users';
let options = { method: 'get' }


async function fetchUSers(){
    const result =await fetch(uri,options);
    const jsonData=await result.json();
    console.log('JSON ya parseado:', jsonData);
}

function manejaError(error){
    console.error('He tenido un error', error.message) 
}

fetchUSers()
    .catch(manejaError);








