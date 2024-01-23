
let personajes=[
  {nombre:'Homer',
   apellido:'Simpson',
   thumbnail: 'https://www.hollywoodreporter.com/wp-content/uploads/2011/10/doh_a.jpg?w=2000&h=1126&crop=1'
  },
  {nombre:'Waylon',
   apellido:'Smithers',
   thumbnail:'https://media.revistagq.com/photos/5ca5fe757a3aecd79049755e/master/w_1600%2Cc_limit/smithers_8619.jpg'
  },
  {nombre:'Otto',
  apellido:'Mann',
  thumbnail:'https://pxccdn.ciudadano.news/ciudadano/012018/1516308738004.webp?cw=984&ch=553&extw=jpg'
 },
];

window.addEventListener("load",()=>{
  personajes.forEach((personaje)=>{
      let boton=document.createElement("button");
      boton.textContent=` ${personaje.nombre} ${personaje.apellido}`;
      boton.classList.add("btn","btn-danger","m-3");
      boton.dataset.bsNombre=personaje.nombre;
      boton.dataset.bsApellido=personaje.apellido;
      boton.dataset.bsThumb=personaje.thumbnail;


      boton.dataset.bsToggle="modal";
      boton.dataset.bsTarget="#ventanaModal";
      document.body.appendChild(boton);

      
  });


});





const ventanaModal = document.getElementById('ventanaModal')
if (ventanaModal) {
    ventanaModal.addEventListener('show.bs.modal', event => {
            const boton = event.relatedTarget
            const nombre = boton.getAttribute('data-bs-nombre');
            const apellido = boton.getAttribute('data-bs-apellido');
            const thumb = boton.getAttribute('data-bs-thumb');

            const contenido=ventanaModal.querySelector('.modal-body');

            let imagen=document.createElement("img");
            imagen.src=thumb;
            imagen.className="w-100";

            ventanaModal.querySelector('#titulo-modal').textContent = `${nombre} ${apellido}`
        
            while (contenido.firstChild) 
              contenido.removeChild(contenido.firstChild);
          
            contenido.appendChild(imagen);
  })
}