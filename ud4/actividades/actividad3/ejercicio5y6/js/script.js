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
