let usuarios = []

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://rickandmortyapi.com/api/character',
    headers: { }
};

axios.request(config)
    .then((response) => {
        let resultados = response.data.results
        let n = 1

        let tabla = document.createElement("table")
        tabla.className= "table table-striped"

        tabla.innerHTML =
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">#</th>\n" +
            "      <th scope=\"col\">Nombre</th>\n" +
            "      <th scope=\"col\">Imagen</th>\n" +
            "      <th scope=\"col\">Email</th>\n" +
            "    </tr>\n" +
            "  </thead>\n"


        let tableBody = document.createElement("tbody")
        for (let resultado of resultados) {
            usuarios.push(resultado)
            let tr = document.createElement("tr")
            tr.innerHTML +=
                "<tr id='" + n + "'>\n" +
                    "<th scope=\"col\">" + n + "</th>\n" +
                    "<th scope=\"col\">" + resultado.name + "</th>\n" +
                    "<th scope=\"col\"><img src='" + resultado.image + "'></th>\n" +
                    "<th scope=\"col\">" + resultado.species + "</th>\n" +
                    "<th scope=\"col\"><button data-bs-toggle=\"modal\" data-bs-target=\"#modal\" type=\"button\" id=\"" + resultado.id + "\" class=\"btn btn-primary botonModal\"><i class=\"bi bi-eye\"></i> Ver detalles</button></th>\n" +
                    "<th scope=\"col\"><button type=\"button\" class=\"btn btn-warning\"><i class=\"bi bi-pencil\"></i> Editar</button>\n</th>\n" +
                    "<th scope=\"col\"><button type=\"button\" class=\"btn btn-danger\"><i class=\"bi bi-trash3\"></i> Borrar</button>\n</th>\n" +
                    "</tr>\n"
            n++

            tableBody.append(tr)
        }

        tabla.append(tableBody)
        document.body.append(tabla)

        manejadores()
    })

function manejadores() {
    let botones = document.querySelectorAll(".botonModal")

    botones.forEach((boton) =>{
        boton.addEventListener("click", ()=>{
            let usuario = usuarios.find(usuario=> usuario.id === parseInt(boton.id))

            let modalTitulo = document.querySelector("#modalTitulo")
            modalTitulo.innerText= usuario.name

            let modalText = document.querySelector("#modalText")

            let genero = document.querySelector("#genero")
            genero.innerText = "Genero: " + usuario.gender

            let ubicacion = document.querySelector("#ubicacion")
            ubicacion.innerText = "Ubicacion: " + usuario.location.name

            let origen = document.querySelector("#origen")
            origen.innerText = "Origen: " + usuario.origin.name

            let episodios = document.querySelector("#episodios")
            episodios.innerHTML = "Episodios:"
            for (let episodio of usuario.episode) {
                episodios.innerHTML += "<li>" + episodio + "</li>"
            }

            console.log(boton.id)
        })
    })
}