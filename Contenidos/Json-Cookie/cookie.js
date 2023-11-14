let cookieNueva = document.querySelector("#cookieNuevo");
let contador = 1;

function agregar(){
    document.cookie = `cookie${contador}=${cookieNueva}`
    contador++;
    console.log(document.cookie);
;}