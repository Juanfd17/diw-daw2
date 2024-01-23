const ventanaModal = document.getElementById('ventanaModal')
if (ventanaModal) {
     ventanaModal.addEventListener('show.bs.modal', event => {
            let boton = event.relatedTarget
            let nombre = boton.getAttribute('data-bs-nombre');
            ventanaModal.querySelector('#titulo-modal').textContent = `Persona: ${nombre}`
           
  })
}