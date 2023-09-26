let seleccion = document.getElementById("seleccion");
let imagen = document.getElementById("imagen");
let rango = document.getElementById("rango")
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");

let paths = ["gato.gif", "loro.gif", "perro.gif"]

function seleccionar(){

    switch (seleccion.value) {
        case "opc1":
            imagen.src = paths[0];
            break;
        case "opc2":
            imagen.src = paths[1];
            break;
        case "opc3":
            imagen.src = paths[2];
            break;
    }

}

function cambiarTamaño(){
    imagen.style.width = rango.value + "px"
}

function checked1(){

    if(check1.checked == true){
        imagen.style.filter = "blur(5px)";
    }else{
        imagen.style.filter = ""
    }
}

function checked2(){

    if(check2.checked == true){
        imagen.style.filter = "invert(100%)";
    }else{
        imagen.style.filter = ""
    }
}

function checked3(){

    if(check3.checked == true){
        imagen.style.filter = "grayscale(100%)";
    }else{
        imagen.style.filter = ""
    }
}