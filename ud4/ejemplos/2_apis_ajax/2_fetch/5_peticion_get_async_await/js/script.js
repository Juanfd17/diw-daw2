const uri = 'http://jsonplaceholder.typicode.com/users';
let options = { method: 'get' }


async function fetchUSers(){
    const result =await fetch(uri,options);
    const jsonData=await result.json();

    console.log('JSON ya parseado:', jsonData);
}

fetchUSers();








