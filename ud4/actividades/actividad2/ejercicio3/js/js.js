var botonForm = document.querySelector("#btnGuardar")

botonForm.addEventListener("click", enviar)

function enviar() {
  resetearMensajesError();

  let formulario = document.querySelector("#frmJugador");
  let mensage = document.querySelector("#mensage")
  if (!formulario.checkValidity()) {
    mensage.innerHTML = "Ha habido un error al dar de alta el usuario"
    mensage.className="alert alert-danger"
    mostrarErrores(formulario);
    return;
  }

  let nombre = document.querySelector("#firstName")
  let apellido = document.querySelector("#lastName")
  let edad = document.querySelector("#age")
  let email = document.querySelector("#email")
  let image = document.querySelector("#image")

  var formdata = new FormData();
  formdata.append("firstName", nombre.value);
  formdata.append("lastName", apellido.value);
  formdata.append("age", edad.value);
  formdata.append("email", email.value);
  formdata.append("image", image.value);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://dummyjson.com/users/add", requestOptions)
    .then(response => response.text())
    .then(result => {
      result = JSON.parse(result)
      console.log(result)
      mensage.innerHTML = "Usuario dado de alta con el id " + result.id
      mensage.className="alert alert-success"
    })
    .catch(error => console.log('error', error));
}

function resetearMensajesError() {
  document.querySelectorAll('.invalid-feedback').forEach(function (div) {
    div.style.display = 'none';
  });
}

function mostrarErrores(formulario) {
  formulario.querySelectorAll(':invalid').forEach(function (element) {
    var errorDiv = element.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
      errorDiv.style.display = 'block';
    }
  });
}