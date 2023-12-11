let datos = document.getElementById("datos");

window.addEventListener("load", () => {
    let userJSON = JSON.parse(localStorage.getItem("user"));

    if (userJSON) {
        datos.innerHTML = `Nombre de usuario: ${userJSON.nickname}<br>Email: ${userJSON.email}<br>Nacimiento: ${userJSON.nacimiento}`;
    } else {
        datos.innerHTML = "No existe el usuario en almacenamiento local.";
    }

});