document.addEventListener("DOMContentLoaded", function() {
    // Define las rutas de las imágenes en un array
    const imagenes = ["cuadro.jpg", "gato.jpg", "leon.jpg"];
    
    // Selecciona el elemento de la imagen
    const imagen = document.getElementById("imagenCambiante");
    
    // Inicializa el índice de la imagen actual
    let indice = 0;
    
    // Cambia la imagen cada segundo
    setInterval(function() {
        // Actualiza la fuente de la imagen con la siguiente ruta
        imagen.src = imagenes[indice];
        
        // Incrementa el índice, reiniciándolo si alcanza el final del array
        indice = (indice + 1) % imagenes.length;
    }, 1000); // Cambia cada segundo (1000 milisegundos)
});