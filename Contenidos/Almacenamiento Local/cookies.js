let cookieNueva = document.getElementById("cookieNueva");
let contador = 1;

function agregarCookie()
{
    // "cookie1=valor1; cookie2=valor2; cookie3=valor; ..."
    document.cookie = `cookie${contador}=${cookieNueva.value}`;
    contador++;
    console.log(document.cookie);
}