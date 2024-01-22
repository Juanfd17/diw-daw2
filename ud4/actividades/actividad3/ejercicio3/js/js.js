let botonRespusta = document.querySelector("#responder")
botonRespusta.addEventListener("click", pregunta)

let nuevaPregunta = document.querySelector("#nuevaPregunta")
nuevaPregunta.disabled = true
nuevaPregunta.addEventListener("click", reiniciar)

async function pregunta() {
    let form = document.querySelector("#form");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let tituloRespuesta = document.querySelector("#tituloRespuesta");
    let img = document.querySelector("#img");

    try {
        let response = await fetch('https://yesno.wtf/api');
        let data = await response.json();

        if (data.answer === "yes"){
            tituloRespuesta.innerText = "Respuesta: SI"
            tituloRespuesta.className = "bg-success"
        } else {
            tituloRespuesta.innerText = "Respuesta: NO"
            tituloRespuesta.className = "bg-danger"
        }

        img.src = data.image

        botonRespusta.disabled = true
        nuevaPregunta.disabled = false
    } catch (error) {
        console.log(error);
    }
}

function reiniciar() {
    nuevaPregunta.disabled = true
    botonRespusta.disabled = false

    let tituloRespuesta = document.querySelector("#tituloRespuesta")
    tituloRespuesta.innerText = ""

    let img= document.querySelector("#img")
    img.src = ""
}