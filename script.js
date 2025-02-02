const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoByn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener("clik", comprarElemento);
    carrito.addEventListener("clik", eliminarElemento);
    vaciarCarritoByn
}
