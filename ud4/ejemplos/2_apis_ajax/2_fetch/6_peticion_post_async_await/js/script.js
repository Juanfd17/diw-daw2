
async function fetchUSers(){

    let uri='https://jsonplaceholder.typicode.com/users';

    let opciones={ 
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: 'Javier Gonzalez', 
                                    username: 'javiergpi' })
    };

const result = await fetch(uri,opciones);

const jsonData=await result.json();
console.log('JSON ya parseado:', jsonData);
}

function manejaError(error){
    console.error('He tenido un error', error.message) 
}

fetchUSers().catch(manejaError);

 