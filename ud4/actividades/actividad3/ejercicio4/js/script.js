var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
    .then(response => response.text())
    .then(result => {
        result = JSON.parse(result)
        let idPokemon = randomNumber(1, result.count)
        console.log(idPokemon)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon, requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                console.log(result)

                let template=document.getElementById('card').content;
                let clon= template.cloneNode(true);
                clon.querySelector('.card-body-text').textContent = result.base_experience + ' exp'
                clon.querySelector('.card-body-title').textContent = result.forms[0].name
                clon.querySelector('.card-body-img').src = result.sprites.back_default
                clon.querySelector('.ataque').textContent = result.stats[1].base_stat
                clon.querySelector('.defensa').textContent = result.stats[3].base_stat
                clon.querySelector('.ataqueEspecial').textContent = result.stats[4].base_stat
                document.querySelector('#contenedor').appendChild(clon);

            })

    })
    .catch(error => console.log('error', error));

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}