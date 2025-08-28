import { productos } from "../database/productos";

const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'lista_tareas';

function guardarAsignaciones(asignaciones) {
localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(productos));
}

function obtenerAsignaciones() {
return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS)) || [];
}

export { LOCAL_STORAGE_KEY_ASSIGNMENTS, guardarProducto, obtenerProducto };