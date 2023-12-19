let contador = 0;
let numero = document.getElementById("contador1");
let botonContador = document.querySelector(".botonContador");
let cambio = true;
let cambioEstrella = true; 

function sumarContador() {
    contador++;
    if (cambio == true){
        numero.style.fontWeight = "bold";
        cambio = false;
    }else{
        numero.style.fontWeight = "normal";
        cambio = true;
    }

    if(contador == 15){
        numero.style.backgroundColor = "red";    
        botonContador.disabled = true;
    }

    numero.innerHTML = contador;
}

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let imagenUsuario = document.getElementById("avatar");
let paneles = document.getElementById("paneles");

function usuarios() {
    html = "";
    if(nombre != null || edad != null || imagenUsuario != null){
        html += "<div><img src='imgs/" + imagenUsuario.value + "'><p>" + nombre.value + "</p><p>" + edad.value + "</p></div>"
    }else{
        paneles.innerHTML += "<p>Rellena todos los campos</p>";
    }

    paneles.innerHTML += html;
    nombre.value = "";
    edad.value = "";
    imagenUsuario.value = "";
}

let imagen = document.getElementById("imgs");
let botonEstrella = document.getElementById("botonEstrella");
let contadorEstrella = 0;

function NubesEstrella() {
    html = "";
    if(cambioEstrella == true){
        cambioEstrella = false;
        html += "<img src='imgs/estrella.svg'>";
        contadorEstrella++;
    }else{
        cambioEstrella = true;
        html += "<img src='imgs/nube.svg'>";
        contadorEstrella++;
    }

    imagen.innerHTML += html;

    if(contadorEstrella == 15){
        botonEstrella.disabled = true;
    }
}