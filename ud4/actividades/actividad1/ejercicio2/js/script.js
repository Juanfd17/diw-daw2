let jugador1 = {
    nombre:"jugador1",
    apellidos:"apellidos1",
    edad:"26",
    posicion:"bateador",
    equipo:"equipo1",
    imagen:"img/equipo1/jugador1"
}

let jugador2 = {
    nombre:"jugador2",
    apellidos:"apellidos2",
    edad:"27",
    posicion:"bateador",
    equipo:"equipo1",
    imagen:"img/equipo1/jugador2"
}

let jugador3 = {
    nombre:"jugador3",
    apellidos:"apellidos3",
    edad:"28",
    posicion:"bateador",
    equipo:"equipo1",
    imagen:"img/equipo1/jugador3"
}

let jugadores = [jugador1, jugador2, jugador3]

let cadenaArray = JSON.stringify(jugadores)

let jugadores2 = JSON.parse(cadenaArray)

console.log(jugadores2);