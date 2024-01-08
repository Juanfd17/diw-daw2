
// 1. Crear un array de objetos con los datos de los estudiantes de la clase
let claseJSON=`[ {"primerNombre":"Pedro", "Apellido":"Lopez"},
                   {"primerNombre":"Ana", "Apellido":"Perez"},
                    {"primerNombre":"Luis", "Apellido":"Fernandez"} ]`;


                    
// 2. Convertir el JSON a un objeto
let estudiantes=JSON.parse(claseJSON);



//3. Recorrer el array de estudiantes y mostrar por consola el nombre y el apellido de cada uno de ellos
estudiantes.forEach(function(e){
  console.log(`Estudiante: ${e.primerNombre} ${e.Apellido}`);

})


//4. Recorrer el array de estudiantes y mostrar por consola el nombre y el apellido de cada uno de ellos
// Usando arrow function
estudiantes.forEach(e => {
  console.log(`Estudiante: ${e.primerNombre} ${e.Apellido}`);
});
