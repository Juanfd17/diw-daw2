
/* Petición GET con Fetch y Async Await, manejo de errores incluidos */

const uri = 'http://jsonplaceholder.typicode.co/users';
let options = { method: 'get' }


async function fetchUSers(){
    const result =await fetch(uri,options).catch(manejaError);
    const jsonData=await result.json();
    
    console.log('JSON ya parseado:', jsonData);
}


function manejaError(error){
    console.error('Error', error.message) 
}

fetchUSers();






