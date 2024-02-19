let btnIniciar = document.querySelector("#login")
let btnRegistrarse = document.querySelector("#registrarse")
let correo = document.querySelector("#email")
let contrasenia = document.querySelector("#password")
formulario = document.querySelector("#form")

btnRegistrarse.addEventListener("click", irRegistrarse)
function irRegistrarse() {
    location.href="./registro.html"
}

btnIniciar.addEventListener("click", () => {
    login(correo.value, contrasenia.value)
})

const getData = (key) => {
    if (!localStorage) return;

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.error(`Error obteniendo ${key} de localStorage`, err);
    }
};

if (getData("token")){
    location.href="./productos.html"
}

function login(correo, contrasenia) {
    if (formulario.checkValidity()){
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
}

const storeData = (key, item) => {
    if (!localStorage) return;

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.error(`Error almacenando ${key} en localStorage`, err);
    }
};