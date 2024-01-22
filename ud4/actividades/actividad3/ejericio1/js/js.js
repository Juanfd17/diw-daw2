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

        tabla.innerHTML =
            "<table class=\"table table-striped\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">#</th>\n" +
            "      <th scope=\"col\">Nombre</th>\n" +
            "      <th scope=\"col\">Apellido</th>\n" +
            "      <th scope=\"col\">Imagen</th>\n" +
            "      <th scope=\"col\">Email</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>"

        for (let resultado of resultados) {
            tabla.innerHTML +=
                "<tr>\n" +
                    "<th scope=\"col\">" + n + "</th>\n" +
                    "<th scope=\"col\">" + resultado.name.first + "</th>\n" +
                    "<th scope=\"col\">" + resultado.name.last + "</th>\n" +
                    "<th scope=\"col\"><img src='" + resultado.picture.thumbnail + "'></th>\n" +
                    "<th scope=\"col\">" + resultado.email + "</th>\n" +
                    "<th scope=\"col\"><button type=\"button\" class=\"btn btn-primary\"><i class=\"bi bi-eye\"></i> Ver detalles</button></th>\n" +
                    "<th scope=\"col\"><button type=\"button\" class=\"btn btn-warning\"><i class=\"bi bi-pencil\"></i> Editar</button>\n</th>\n" +
                    "<th scope=\"col\"><button type=\"button\" class=\"btn btn-danger\"><i class=\"bi bi-trash3\"></i> Borrar</button>\n</th>\n" +

                "</tr>\n"
            n++
        }

        tabla.innerHTML +=
            "  </tbody>\n" +
            "</table>"

        document.body.append(tabla)
    })
    .catch((error) => {
        console.log(error);
    });