
import { header } from "./Componentes/header/headerComponents.js";
import { seccion1 } from "./Componentes/seccion1/seccion1Component.js";

function seccion(){

let seccion = document.createElement("section");

seccion.appendChild(header());




seccion.appendChild(seccion1());


return seccion;


}

document.body.appendChild(seccion());

