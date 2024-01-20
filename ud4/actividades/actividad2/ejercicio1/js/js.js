var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://dummyjson.com/products", requestOptions)
    .then(response => response.text())
    .then((result) => {
        result = JSON.parse(result)
        console.log(result)

        let divProductos = document.querySelector("#productos")
        result.products.forEach(p => {
            let productCard = 
            `<div class="col-4 p-3" style="height: 40vh">
                <div class="card" style="height: 100%">
                    <div class="card-body">
                        <h5 class="card-title">${p.brand}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${p.category}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">${p.description}</h6>
                        <div style="background-image: url(${p.images[0]}); height: 50%; background-size: contain; background-repeat: no-repeat;"></div>
                    </div>
                </div>
            </div>`;

            divProductos.innerHTML += productCard
        });
    })
    .catch(error => console.log('error', error));