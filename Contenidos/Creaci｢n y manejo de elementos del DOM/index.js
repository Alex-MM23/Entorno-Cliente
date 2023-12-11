let contenedor = document.getElementById("contenedor");

function agregar()
{
    // Creamos el elemento
    let pNuevo = document.createElement("p");

    // Modificamos su contenido y el estilo CSS
    pNuevo.innerHTML = "TEXTO NUEVO";
    pNuevo.style.backgroundColor = "yellow";
    // Si queremos asociar una clase CSS
    pNuevo.className = "parrafo";

    contenedor.appendChild(pNuevo);
}

function verHijosContenedor()
{
    console.log(contenedor.children);

    // IMPORTANTE:
    // ".children", aunque se puede usar como un array, es una HTMLCollection.
    // Para convertirlo en array y usar "forEach()" podemos usar "Array.from()".
    Array.from(contenedor.children).forEach(element => {
        element.innerHTML = "PARRAFO MODIFICADO";
        element.style.color = "blue";
    });

    /*
    for (let i = 0; i < contenedor.children.length; i++) {
        contenedor.children[i].innerHTML = "PARRAFO MODIFICADO";
        contenedor.children[i].style.color = "blue";
    }
    */

}

function agregarPrincipio()
{
    // Creamos el elemento
    let pNuevo = document.createElement("p");

    // Modificamos su contenido y el estilo CSS
    pNuevo.innerHTML = "TEXTO COMIENZO";
    pNuevo.style.backgroundColor = "lightgreen";

    contenedor.insertBefore(pNuevo, contenedor.children[0]);
}

function eliminar(/*producto*/)
{
    //producto.remove();
    contenedor.children[contenedor.children.length - 1].remove();
}

function clonar()
{
    // "true" es para clonar la etiqueta y todos sus descendientes.
    let clon = contenedor.cloneNode(true);

    document.body.appendChild(clon);
}