let input = document.getElementById("dni");
let letras = [
    'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
]

function verificarDNI(){
    let dni = input.value;

    if (dni.length >= 2 && dni.length <=9){
        let letra = dni.charAt(dni.length - 1);
        let numero = parseInt(dni.substring(0, dni.length -1));
        let letraCalculada = letras[numero % 23];

        if (letra == letraCalculada){
            input.style.backgroundColor = "green";
        } else{
            input.style.backgroundColor = "red";
        }

    } else{
        input.style.backgroundColor = "red";
    }
}