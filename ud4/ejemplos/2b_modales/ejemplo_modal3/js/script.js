
class PersonajesSimpson{

 personajes=[
  { id:1,
    nombre:'Homer',
    apellido:'Simpson',
    thumbnail: 'https://www.hollywoodreporter.com/wp-content/uploads/2011/10/doh_a.jpg?w=2000&h=1126&crop=1'
  },
  { id:2,
    nombre:'Waylon',
    apellido:'Smithers',
    thumbnail:'https://media.revistagq.com/photos/5ca5fe757a3aecd79049755e/master/w_1600%2Cc_limit/smithers_8619.jpg'
  },
  {
    id:3,
    nombre:'Otto',
    apellido:'Mann',
    thumbnail:'https://pxccdn.ciudadano.news/ciudadano/012018/1516308738004.webp?cw=984&ch=553&extw=jpg'
 },
];

getPersonajeById(id){
  let personaje=null;
  this.personajes.forEach((p)=>{
    
      if(p.id==id)
        personaje=p;
  });
  return personaje;
}
}


let personajesSimpson=new PersonajesSimpson();


window.addEventListener("load",()=>{
  personajesSimpson.personajes.forEach((personaje)=>{
      let boton=document.createElement("button");
      boton.textContent=` ${personaje.nombre} ${personaje.apellido}`;
      boton.classList.add("btn","btn-danger","m-3");
      boton.dataset.bsId=personaje.id;
      
      boton.dataset.bsToggle="modal";
      boton.dataset.bsTarget="#ventanaModal";
      document.body.appendChild(boton);

      
  });


});





let ventanaModal = document.getElementById('ventanaModal')
if (ventanaModal) {
    ventanaModal.addEventListener('show.bs.modal', event => {
            let boton = event.relatedTarget
            let id = boton.getAttribute('data-bs-id');
            let personaje=personajesSimpson.getPersonajeById(id);

            if(personaje){
              let contenido=ventanaModal.querySelector('.modal-body');

              let imagen=document.createElement("img");
              imagen.src=personaje.thumbnail;
              imagen.className="w-100";

              ventanaModal.querySelector('#titulo-modal').textContent = `${personaje.nombre} ${personaje.apellido}`
              
              while (contenido.firstChild) 
                  contenido.removeChild(contenido.firstChild);
               contenido.appendChild(imagen);           
            }

           

           
  })
}