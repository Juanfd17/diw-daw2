let jugador1 = {
    nombre:"jugador1",
    apellidos:"apellidos1",
    edad:"26",
    posicion:"bateador",
    equipo:"equipo1",
    imagen:"img/equipo1/jugador1"
}

let cadenaJugador1 = JSON.stringify(jugador1)
let jugador2 = JSON.parse(cadenaJugador1)

console.log(jugador2);