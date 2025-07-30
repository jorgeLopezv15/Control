import { item } from '../modulos/item/itemModulo.js';

export function seccion1(){

    let seccion = document.createElement('seccion');
    seccion.className = "seccion1";

    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());

    return seccion;
    

}
