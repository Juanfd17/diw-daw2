var pokemonInicio = 0;
var limitePokemons= 0
cargarCards()
function cargarCards(pagina = -1) {
    document.querySelector('#contenedor').innerHTML = ""

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result)
            if (pagina === -1){
                pokemonInicio = randomNumber(1, result.count -8)
            } else {
                pokemonInicio = pagina
            }

            limitePokemons = result.count
            document.querySelector("#pagina").innerHTML = "Pagina " + parseInt((pokemonInicio / 8)+ 1) + " de " + parseInt((limitePokemons / 8))

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://pokeapi.co/api/v2/pokemon/?limit=8&offset=" + pokemonInicio, requestOptions)
                .then(response => response.text())
                .then(result => {
                    result = JSON.parse(result).results

                    for (let pokemon of result) {
                        var requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };

                        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name, requestOptions)
                            .then(response => response.text())
                            .then(result => {
                                result = JSON.parse(result)

                                let template=document.getElementById('card').content;
                                let clon= template.cloneNode(true);
                                clon.querySelector('.card-body-text').textContent = result.base_experience + ' exp'
                                clon.querySelector('.card-body-title').textContent = result.forms[0].name
                                clon.querySelector('.card-header').src = result.sprites.back_default
                                clon.querySelector('.ataque').textContent = result.stats[1].base_stat
                                clon.querySelector('.defensa').textContent = result.stats[3].base_stat
                                clon.querySelector('.ataqueEspecial').textContent = result.stats[4].base_stat
                                let tipo = clon.querySelector('.tipo')
                                let traduccion = obtenerTraduccionTipo(result.types[0].type.name)
                                tipo.textContent = traduccion
                                let color = obtenerColorTipo(result.types[0].type.name)
                                tipo.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                                document.querySelector('#contenedor').appendChild(clon);

                            })
                    }
                })
        })
}

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let botonAnterior = document.querySelector("#anterior")
let botonSiguinte = document.querySelector("#siguiente")

botonAnterior.addEventListener("click", pagAnterior)
botonSiguinte.addEventListener("click", pagSiguiente)

function pagAnterior() {
    if (pokemonInicio < 8){
        cargarCards(0)
    } else {
        cargarCards(pokemonInicio - 8)
    }
}

function pagSiguiente() {
    if (pokemonInicio + 8 >= limitePokemons){
        cargarCards(limitePokemons - 8)
    } else {
        cargarCards(pokemonInicio + 8)
    }
}

function obtenerColorTipo(tipo) {
    switch (tipo) {
        case "normal":
            return [200, 200, 200];
        case "fire":
            return [255, 0, 0];
        case "water":
            return [0, 0, 255];
        case "electric":
            return [255, 255, 0];
        case "grass":
            return [0, 255, 0];
        case "ice":
            return [255, 255, 255];
        case "fighting":
            return [139, 0, 0];
        case "poison":
            return [128, 0, 128];
        case "ground":
            return [139, 69, 19];
        case "flying":
            return [173, 216, 230];
        case "psychic":
            return [255, 182, 193];
        case "bug":
            return [107, 142, 35];
        case "rock":
            return [169, 169, 169];
        case "ghost":
            return [148, 0, 211];
        case "dragon":
            return [0, 0, 139];
        case "dark":
            return [0, 0, 0];
        case "steel":
            return [192, 192, 192];
        case "fairy":
            return [255, 182, 193];
        default:
            return [0, 0, 0];
    }
}

function obtenerTraduccionTipo(tipo) {
    switch (tipo) {
        case "normal":
            return "Normal";
        case "fire":
            return "Fuego";
        case "water":
            return "Agua";
        case "electric":
            return "Eléctrico";
        case "grass":
            return "Planta";
        case "ice":
            return "Hielo";
        case "fighting":
            return "Lucha";
        case "poison":
            return "Veneno";
        case "ground":
            return "Tierra";
        case "flying":
            return "Volador";
        case "psychic":
            return "Psíquico";
        case "bug":
            return "Bicho";
        case "rock":
            return "Roca";
        case "ghost":
            return "Fantasma";
        case "dragon":
            return "Dragón";
        case "dark":
            return "Siniestro";
        case "steel":
            return "Acero";
        case "fairy":
            return "Hada";
        default:
            return tipo;
    }
}
