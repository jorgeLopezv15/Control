export function item(title,image, description, price) {

    let item = document.createElement('div');
    item.className = "item";


    let titulo = document.createElement('h1');
    titulo.textContent = title;
    item.appendChild(titulo);


    let img = document.createElement('img');
    img.className = "iamgenes"
    img.src = image;
    item.appendChild(img);

    let descriptions = document.createElement('p');
    descriptions.className = "descripcion"
    descriptions.textContent = description;
   item.appendChild(descriptions);

   let precio=document.createElement("p");
   precio.textContent = price;
   item.appendChild(precio);





    item.addEventListener('click', ()=>{
        item.classList.add("verde");
        let rHeader = document.querySelector('.header');
        rHeader.classList.add("ocultar");
    })












    return item;

}