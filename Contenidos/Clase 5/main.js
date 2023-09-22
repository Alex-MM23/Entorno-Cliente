let persona = {nombre: "alex", edad: 20, trabajando: true};
let personas = [
    {nombre: "Alex", edad: 20, trabajando: true},
    {nombre: "Mario", edad: 34, trabajando: true}, 
    {nombre: "Pablo", edad: 25, trabajando: false}       
            ]
let indice = 0

function cargar(){
    document.getElementById("nombre").innerHTML = persona.nombre;
    document.getElementById("edad").innerHTML = persona.edad;
    document.getElementById("trabajando").innerHTML = persona.trabajando ? "Si" : "No";
}

function siguiente(){
    let pNombre = document.getElementById("nombre");
    let pEdad = document.getElementById("edad");
    let pTrabajo = document.getElementById("trabajando");

    pNombre.innerHTML = personas[indice].nombre;
    pEdad.innerHTML = personas[indice].edad;
    pTrabajo.innerHTML = personas[indice].trabajando ? "Si" : "No";

    indice++;

    if (indice == personas.length) {
        indice = 0;
    }

}

function anterior(){
    let pNombre = document.getElementById("nombre");
    let pEdad = document.getElementById("edad");
    let pTrabajo = document.getElementById("trabajando");

    pNombre.innerHTML = personas[indice].nombre;
    pEdad.innerHTML = personas[indice].edad;
    pTrabajo.innerHTML = personas[indice].trabajando ? "Si" : "No";

    indice--;

    if (indice == -1) {
        indice = personas.length;
    }
    
}