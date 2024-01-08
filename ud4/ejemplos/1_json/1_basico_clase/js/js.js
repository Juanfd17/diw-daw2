// class Monstruo {
//     #color
//     #nombre
//     #poderes

//     constructor(color, nombre, poderes){
//         this.#color = color
//         this.#nombre = nombre
//         this.#poderes = poderes
//     }

//     set Color(color){
//         this.#color = color
//     }

//     get Color(){
//         return this.#color
//     }

//     set Nombre(nombre){
//         this.#nombre = nombre
//     }

//     get Nombre(){
//         return this.#nombre
//     }

//     set Poderes(poderes){
//         this.#poderes = poderes
//     }

//     get Poderes(){
//         return this.#poderes
//     }

//     presentarse(){
//         let poderes = ""

//         this.#poderes.forEach((poder) => {
//             poderes += ` ${poder}`
//         })

//         return `Hola soy ${this.#nombre} y soy de color ${this.#color} y mis poderss son ${poderes} `
//     }
// }

// let godzilla = new Monstruo("Verde", "Godzilla", ["ruge", "destroza", "escupe"])
// let kinKong = new Monstruo("Marron", "King Kong", ["trepa", "destroza", "escupe", "salta"]) 

// console.log(godzilla.presentarse());

let godzilla={
    nombre: "Godzilla",
    color: "verde" ,
    poderes: ["ruge" , "destroza" , "escupe"]
}

let kingKong={
    nombre: "King Kong",
    color: "marron" ,
    poderes: ["ruge" , "destroza", "escupe", "salta"]
}

function presentarMoustro(monstruo){
    let poderes = ""

    monstruo.poderes.forEach((poder) => {
        poderes += ` ${poder}`
    });

    return `Mi nombre es ${monstruo.nombre} soy de color ${monstruo.color} y mis poderes son ${poderes}`
}

console.log(presentarMoustro(godzilla));
console.log(JSON.stringify(godzilla));

let moustros = [godzilla, kingKong]
let monstrosJSON = JSON.stringify(moustros)
console.log(monstrosJSON);

let moustros2 = JSON.parse(monstrosJSON)
console.log(moustros2[0]);
console.log(moustros2[1]);