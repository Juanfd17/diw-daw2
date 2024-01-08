
// 1. Crear un array de objetos con los datos de los estudiantes de la clase
let claseJSON=`{"estudiantes":[ {"primerNombre":"Pedro", "Apellido":"Lopez"},
                   {"primerNombre":"Ana", "Apellido":"Perez"},
                    {"primerNombre":"Luis", "Apellido":"Fernandez"} ]}`;


                    
// 2. Convertir el JSON a un objeto
let clase=JSON.parse(claseJSON);

// 3. Sacar el array de estudiantes
let estudiantes=clase.estudiantes;

  

//4. Recorrer el array de estudiantes y mostrar por consola el nombre y el apellido de cada uno de ellos
estudiantes.forEach(function(e){
  console.log(`Estudiante: ${e.primerNombre} ${e.Apellido}`);

})


//5. Recorrer el array de estudiantes y mostrar por consola el nombre y el apellido de cada uno de ellos
// USO DE FUNCIÓN FLECHA
estudiantes.forEach(e => {
  console.log(`Estudiante: ${e.primerNombre} ${e.Apellido}`);
});
