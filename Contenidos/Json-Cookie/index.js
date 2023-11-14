let nickname = document.getElementById("nickname");
let password = document.getElementById("password");
let email = document.getElementById("email");
let nacimiento = document.getElementById("nacimiento");
let divCredenciales = document.getElementById("credenciales");

function login(){
    if (nickname.value && password.value && email.value && nacimiento.value){
        //localStorage.setItem("nickname", nickname.value);
        //localStorage.setItem("password", password.value);

        localStorage.setItem("user", JSON.stringify({
            "nickname": nickname.value,
            "password": password.value,
            "email": email.value,
            "nacimiento": nacimiento.value,
        }));

        alert("Usuario guardado.");

        // borrar el formulario entero y saldrá el bienvenido!
        divCredenciales.innerHTML = "Bienvenido " + nickname.value;
    } else {
        alert("ERROR: los campos no pueden estar vacíos.");
    }
}

window.addEventListener("load", () => {
    //let usuario = localStorage.getItem("nickname");
    //let pswd = localStorage.getItem("password");

    let userJSON = JSON.parse(localStorage.getItem("user"));

    if (userJSON && password){
        divCredenciales.innerHTML = "Bienvenido " + userJSON.nickname;  
    }
});