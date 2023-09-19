alert("Se va a cambiar el texto del parrafo")
document.getElementById("content").innerHTML = "Nuevo Texto";
document.getElementById("div").innerHTML = "Nuevo contenido";

let array = [1,4,"hola",true];

function cambiarTexto(){

    document.getElementById("content").innerHTML = "Nuevo Texto";
    document.getElementById("div").innerHTML = "Nuevo contenido";
}

// Ejemplo Profe

let contador = 0;
function incrementar(){
    let parrafo = document.getElementById("p");

    contador++;
    parrafo.innerHTML = contador;
}

// bucles

for (let i=1; i <10; i++){
    console.log(i);
}

function add(){
    let parrafo = document.getElementById("lista");
    let input = document.getElementById("entrada");

    parrafo.innerHTML = input.value + parrafo.innerHTML;
}

// Añadir elementos a array

array.push(5);

// Array

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Ejercicio añadir elementos

let contenido = [];

function agregar(){
    
    let value = document.getElementById("input-array").value;
    let p = document.getElementById("parrafo");
    contenido.push(value);

    p.innerHTML = contenido;
    console.log(contenido);

}

// Ejercicio eliminar elementos

function eliminar(){
    let cont = document.getElementById("input-array-eliminar").value;
    let p = document.getElementById("text");

    contenido.splice(cont, 1);
    p.innerHTML = contenido;

    console.log(contenido);
}