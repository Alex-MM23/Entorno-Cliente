let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contadorColor1 = true;
let contadorColor2 = true;
let contadorColor3 = true;

function clickContador1(boton) {
    contador1++;
    document.querySelector("#contador1").innerHTML = contador1;
    if (contadorColor1 == true){
        document.querySelector("#contador1").style.backgroundColor = "violet";
        contadorColor1 = false;
    }else{
        document.querySelector("#contador1").style.backgroundColor = "orange";
        contadorColor1 = true;
    }
    if (contador1 == 10){
       boton.disabled = true;
    }
}

function clickContador2(boton) {
    contador2++;
    document.querySelector("#contador2").innerHTML = contador2;
    if (contadorColor2 == true){
        document.querySelector("#contador2").style.backgroundColor = "violet";
        contadorColor2 = false;
    }else{
        document.querySelector("#contador2").style.backgroundColor = "orange";
        contadorColor2 = true;
    }
    if (contador2 == 10){
       boton.disabled = true;
    }
}

function clickContador2(boton) {
    contador3++;
    document.querySelector("#contador3").innerHTML = contador3;
    if (contadorColor3 == true){
        document.querySelector("#contador3").style.backgroundColor = "violet";
        contadorColor3 = false;
    }else{
        document.querySelector("#contador3").style.backgroundColor = "orange";
        contadorColor3 = true;
    }
    if (contador3 == 10){
       boton.disabled = true;
    }
}


function reset() {
    let parrafo1 = document.getElementById("contador1");
    let parrafo2 = document.getElementById("contador2");
    let parrafo3 = document.getElementById("contador3");

    parrafo1.innerHTML = "0";
    parrafo2.innerHTML = "0";
    parrafo3.innerHTML = "0";

    contador1 = 0;
    contador2 = 0;
    contador3 = 0;
}