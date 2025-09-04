const CARRITO = 'carrito';

function guadarProducto(CARRITO) {
localStorage.setItem(CARRITO, JSON.stringify(CARRITO));
}

function obtenerProducto() {
return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

export { CARRITO, guadarProducto, obtenerProducto };