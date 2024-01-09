class JugadorCriquet{
    constructor(datos){
        this.nombre = datos.nombre
        this.apellidos = datos.apellidos
        this.edad = datos.edad
        this.posicion = datos.posicion
        this.equipo = datos.equipo
        this.imagen = datos.imagen
    }

    batear(){
        return `${this.nombre} batea`
    }

    lanzar(){
        return `${this.nombre} lanza`
    }
}

let jugador1 = new JugadorCriquet({nombre:"jugador1", apellidos:"apellidos1", edad:"26", posicion:"bateador", equipo:"equipo1", imagen:"img/equipo1/jugador1"})

let cadenaJugador1 = JSON.stringify(jugador1)
let jugador2 = new JugadorCriquet(JSON.parse(cadenaJugador1))

console.log(jugador2);
console.log(jugador2.batear());
console.log(jugador2.lanzar());