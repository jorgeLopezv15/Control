
import { header } from "./Componentes/header/headerComponents.js";
import { seccion1 } from "./Componentes/seccion1/seccion1Component.js";
import { nav } from "./navComponentes/navConponentes.js";

function seccion(){

let seccion = document.createElement("section");


       let listaDeCompras = localStorage.getItem("carrolista");

        if(! listaDeCompras){
            listaDeCompras = [];
            localStorage.setItem("carrito", JSON.stringify(listaDeCompras));

        }else{
            listaDeCompras = JSON.parse(listaDeCompras);
        }

        console.log(listaDeCompras);



seccion.appendChild(header());




seccion.appendChild(seccion1());

seccion.appendChild(nav());




return seccion;


}

document.body.appendChild(seccion());

