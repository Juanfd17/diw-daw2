let nav = document.querySelector("#nav")
let cesta = document.querySelector("#miCesta")
let logout = document.querySelector("#logout")
let seletCategorias = document.querySelector("#categorias")
let productos = document.querySelector("#productos")
let login = false
getCategorias()
const getData = (key) => {
    if (!localStorage) return;

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.error(`Error obteniendo ${key} de localStorage`, err);
    }
};

const storeData = (key, item) => {
    if (!localStorage) return;

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.error(`Error almacenando ${key} en localStorage`, err);
    }
};


if (!getData("token")){
    nav.className = "d-none"
} else {
    let mensage = document.querySelector("#mensage")
    mensage.className = "bg-warning"

    let mensageTexto = document.querySelector("#mensageTexto")
    mensageTexto.innerText = "Bienvenido " + getData("token").email

    login = true
}

logout.addEventListener("click", funLogout)

function funLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("carrito")
    location.href="./productos.html"
}

cesta.addEventListener("click", funCesta)

function funCesta() {
    location.href="./cesta.html"
}

function getCategorias() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("http://44.221.4.154:3000/api/v1/categories", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)

            for (const categoria of result) {
                let option = document.createElement("option")
                option.value = categoria._id
                option.innerText = i18next.t(categoria.name)

                seletCategorias.append(option)
            }
            desactivarSpinnerfv()

        })
        .catch((error) => console.error(error));
}

function getProductos(categoria) {
    activarSpinnerfv()
    url = "http://44.221.4.154:3000/api/v1/products/category/" + categoria

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)

            productos.innerHTML = ""

            for (const producto of result) {
                let template =document.querySelector("#producto").content;
                let clon = template.cloneNode(true);

                clon.querySelector('img').src = "./img/products/" + producto.img
                clon.querySelector('.card-title').textContent = i18next.t(producto.name)

                if (!login){
                    clon.querySelector("#addCarrito").className = "d-none"
                } else {
                    clon.querySelector("#addCarrito").addEventListener("click",() => addCarrito(producto._id))
                }

                let mensageAdd = document.createElement("p")
                mensageAdd.innerText = "Producto añadido a la cesta"
                mensageAdd.className = "d-none"
                mensageAdd.id = "p" + producto._id

                clon.append(mensageAdd)

                productos.appendChild(clon);
            }
            desactivarSpinnerfv()
        })
        .catch((error) => console.error(error));

}

seletCategorias.addEventListener("change", (e) => {
    getProductos(e.currentTarget.value)
})

function activarSpinnerfv() {
    let spinner = document.getElementById('spinnerfv');
    spinner.className = "ms-3";
}

function desactivarSpinnerfv() {
    let spinner = document.getElementById('spinnerfv');
    spinner.className = "d-none";
}

function addCarrito(idProducto) {
    let carrito = []

    if (getData("carrito")){
        carrito = getData("carrito")
    }

    carrito = [...carrito, idProducto]

    storeData("carrito", carrito)

    let mensage = document.querySelector("#p" + idProducto)
    mensage.className = "d-blok"
}