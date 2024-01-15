console.log("hola mundo");

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = cambiaEstado;

xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
xhr.send(null);

function cambiaEstado() {
    if (this.readyState === 4 && this.status === 200) {
        console.log("Todo correcto");
        console.log(this.responseText);

        let fotos = JSON.parse(this.responseText);

        let divFotos = document.querySelector("#fotos");
        fotos.forEach(foto => {
            let fotoDiv = document.createElement("img")
            fotoDiv.src = foto.thumbnailUrl

            divFotos.append(fotoDiv)
        });
    }
}
