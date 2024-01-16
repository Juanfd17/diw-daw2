fetch("https://jsonplaceholder.typicode.com/users", {method:"GET"})
.then(function(respuesta) {
    return respuesta.json()
})

.then(function(usuarios){
    console.log(usuarios);
    let calles = document.querySelector("#calles")

    usuarios.forEach(u => {
        let calle = document.createElement("div")
        calle.innerText = u.address["street"]

        calles.appendChild(calle)
    });
})

.catch(error => console.log('error', error));