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
    imagen:"img/equipo1/jugador1"
}

let jugador3 = {
    nombre:"jugador1",
    apellidos:"apellidos1",
    edad:"26",
    posicion:"bateador",
    equipo:"equipo1",
    imagen:"img/equipo1/jugador1"
}

let cadenaJugador1 = JSON.stringify(jugador1)
let jugador2a = JSON.parse(cadenaJugador1)

console.log(jugador2);