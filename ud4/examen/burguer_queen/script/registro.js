let botonRegistro = document.querySelector("#btnRegistrarse")
let correo = document.querySelector("#email")
let contrasenia = document.querySelector("#password")
let direccion = document.querySelector("#direccion")
let formulario = document.querySelector("#formulario")

botonRegistro.addEventListener("click", registro)

function registro() {
    if (formulario.checkValidity()){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": correo.value,
            "password": contrasenia.value,
            "address": direccion.value,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://44.221.4.154:3000/api/v1/users", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)

                login(correo.value, contrasenia.value)

            })
            .catch((error) => {
                console.error(error)
                document.append(document.createElement("p").innerHTML = error)
            });

    }
}

const storeData = (key, item) => {
    if (!localStorage) return;

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.error(`Error almacenando ${key} en localStorage`, err);
    }
};

function login(correo, contrasenia) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": correo,
        "password": contrasenia
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://44.221.4.154:3000/api/v1/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)

            storeData("token", {"email": correo, "token": result.accessToken})

            location.href="./productos.html"

        })
        .catch((error) => {
            console.error(error)
            document.append(document.createElement("p").innerHTML = error)
        });
}