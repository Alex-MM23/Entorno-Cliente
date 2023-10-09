let parrafo1 = document.getElementById("parrafo1");
let parrafo2 = document.getElementById("parrafo2");
let info = document.getElementById("info");
let campText = document.getElementById("campoTexto");

function fParrafo(elemento){
    info.innerHTML = "1 Doble click " + elemento.id ; 
}

function raton(e){
    info.innerHTML = "raton encima de " + e.target.id;
}

function ratonFuera(){
    info.innerHTML = "info";
}

function teclaAbajo(){
    info.innerHTML = "tecla abajo";
}

function teclaArriba(){
    info.innerHTML = "tecla arriba";
}

input.addEventListener("dbclick", fParrafo);
input.addEventListener("mouseover", raton);
input.addEventListener("mouseout", ratonFuera);

function mouseDown(elemento){

    info.innerHTML = elemento.id + " Raton abajo";
}

function mouseUp(elemento){

    info.innerHTML = elemento.target.id + " Raton arriba";
}

parrafo1.addEventListener("mouseup", mouseUp);
parrafo2.addEventListener("mouseup", mouseUp);
info.addEventListener("mouseup", mouseUp);