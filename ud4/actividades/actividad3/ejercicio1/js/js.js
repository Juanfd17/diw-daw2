let usuarios = []

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://randomuser.me/api/?results=10',
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
            "      <th scope=\"col\">Apellido</th>\n" +
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
                    "<th scope=\"col\">" + resultado.name.first + "</th>\n" +
                    "<th scope=\"col\">" + resultado.name.last + "</th>\n" +
                    "<th scope=\"col\"><img src='" + resultado.picture.thumbnail + "'></th>\n" +
                    "<th scope=\"col\">" + resultado.email + "</th>\n" +
                    "<th scope=\"col\"><button data-bs-toggle=\"modal\" data-bs-target=\"#modal\" type=\"button\" id=\"" + resultado.login.uuid + "\" class=\"btn btn-primary botonModal\"><i class=\"bi bi-eye\"></i> Ver detalles</button></th>\n" +
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
    .catch((error) => {
        console.log(error);
    });

function manejadores() {
    let botones = document.querySelectorAll(".botonModal")

    botones.forEach((boton) =>{
        boton.addEventListener("click", ()=>{
            let usuario = usuarios.find(usuario=> usuario.login.uuid === boton.id)

            let modalTitulo = document.querySelector("#modalTitulo")
            modalTitulo.innerText= usuario.name.title + " " + usuario.name.first + " " + usuario.name.last

            let modalText = document.querySelector("#modalText")

            let correo = document.createElement("p")
            correo.innerText = usuario.email
            modalText.append(correo)

            let telefono = document.createElement("p")
            telefono.innerText = usuario.phone
            modalText.append(telefono)

            console.log(boton.id)
        })
    })
}