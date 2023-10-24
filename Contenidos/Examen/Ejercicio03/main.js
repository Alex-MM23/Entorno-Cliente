function clickContar(){
    const img = document.getElementById("img-item");
    const content = document.getElementById("div-img")
    const numeroAleatorio = Math.floor(Math.random() * 501);

    img.style.top = numeroAleatorio + "px";
    img.style.left = numeroAleatorio + "px";

    content.addEventListener("click", function(){
        const valorA = document.getElementById("valor");
    let contador = 0;
    contador++;
    valorA.textContent = contador; 

    clickContar();
    });
};
