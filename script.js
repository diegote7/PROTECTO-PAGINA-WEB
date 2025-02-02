const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoByn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener("clik", comprarElemento);
    carrito.addEventListener("clik", eliminarElemento);
    vaciarCarritoByn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if.(e.target.classList.contains("agregar-carrito"))
}
