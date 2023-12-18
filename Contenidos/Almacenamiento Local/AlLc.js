let input = document.getElementById("usuario");
let parrafo = document.getElementById("usuarios");
let usuario = [];

function Enviar() {
    if (input.value){
        
        usuario.push(input.value);
        
        parrafo.innerHTML = usuario;
        
        localStorage.setItem("usuarios", JSON.stringify(usuario));

        input.value = "";
    }
}

window.addEventListener("load", () => {

    usuario = JSON.parse(localStorage.getItem("usuarios"));
    if(!usuario){
        usuario = [];
    }
    parrafo.innerHTML = usuario;
});