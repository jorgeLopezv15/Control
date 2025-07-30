function header(){


  let header = document.createElement("header");


  //Tiulo

  let Titulo = document.createElement("h1");
  Titulo. className ="Titulo ";
  Titulo.innerText = "Jorge";
  header.appendChild(Titulo);



  //div 
  let divLog = document.createElement("divLogo");
  divLog. className ="divLog ";
  divLog.innerText = "Jorge";
  header.appendChild(Titulo);


  //IMG

  let img = document.createElement("img");
  img.className = "logo";
  img.src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  header.appendChild(img);
    
    

    


    return header;
    
}

export { header }