let nav = document.querySelector("#nav")
let home = document.querySelector("#home")
let logout = document.querySelector("#logout")
let productos = document.querySelector("#productos")

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

logout.addEventListener("click", funLogout)

function funLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("carrito")
    location.href="./productos.html"
}

home.addEventListener("click", funHome)

function funHome() {
    location.href="./productos.html"
}

let carrito = getData("carrito")
getCesta()
function getCesta() {
    if (carrito){
        for (const producto of carrito) {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch("http://44.221.4.154:3000/api/v1/products/" + producto, requestOptions)
                .then((response) => response.json())
                .then((result) =>{
                    console.log(result)

                    let template =document.querySelector("#producto").content;
                    let clon = template.cloneNode(true);

                    clon.querySelector('img').src = "./img/products/" + result.img
                    clon.querySelector('.card-title').textContent = i18next.t(result.name)
                    clon.querySelector("#delCarrito").addEventListener("click", () => delCarrito(producto))


                    productos.appendChild(clon);
                })
                .catch((error) => console.error(error));
        }
    } else {
        console.log("no cesta")
    }
}

function delCarrito(productoId) {
    carrito = carrito.filter(producto => producto !== productoId);
    storeData("carrito", carrito)
    location.href="./cesta.html"
}