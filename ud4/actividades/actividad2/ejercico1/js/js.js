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
            `<div class="col-4 p-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${p.brand}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${p.category}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">${p.description}</h6>
                        <img src="${p.images[0]}" class="w-100 align-center card-img-top">
                    </div>
                </div>
            </div>`;

            divProductos.innerHTML += productCard
        });
    })
    .catch(error => console.log('error', error));