function Fbt1(){
    const cuadrado1 = document.getElementById("cd1");
    const bt1 = document.getElementById("bt1");
    const vl1 = bt1.value

    if (vl1 === "true") {
        cuadrado1.style.backgroundColor = "#FFFF00";
        bt1.innerHTML = "Apagar";
        bt1.style.backgroundColor = "#FF0000";
        bt1.value = "false";
    } else if (vl1 === "false") {
        cuadrado1.style.backgroundColor = "#000";
        bt1.innerHTML = "Encender";
        bt1.style.backgroundColor = "#4CAF50";
        bt1.value = "true";
    }   
}

function Fbt2(){
    const cuadrado2 = document.getElementById("cd2");
    const bt2 = document.getElementById("bt2");
    const vl2 = bt2.value

    if(vl2 === "encend"){
        cuadrado2.style.backgroundColor = "#FFFF00";
        bt2.innerHTML = "Apagar";
        bt2.style.backgroundColor = "#FF0000";
        bt2.value = "apag";
    }   else if (vl2 === "apag") {
        cuadrado2.style.backgroundColor = "#000";
        bt2.innerHTML = "Encender";
        bt2.style.backgroundColor = "#4CAF50";
        bt2.value = "encend";
    }   
}

function Fbt3(){
    const cuadrado3 = document.getElementById("cd3");
    const bt3 = document.getElementById("bt3");
    const vl3 = bt3.value

    if(vl3 === "uno"){
        cuadrado3.style.backgroundColor = "#FFFF00";
        bt3.innerHTML = "Apagar";
        bt3.style.backgroundColor = "#FF0000";
        bt3.value = "dos";
    }   else if (vl3 === "dos") {
        cuadrado3.style.backgroundColor = "#000";
        bt3.innerHTML = "Encender";
        bt3.style.backgroundColor = "#4CAF50";
        bt3.value = "uno";
    }   
}