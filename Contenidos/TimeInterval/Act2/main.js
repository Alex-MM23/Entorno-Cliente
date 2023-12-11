let writingInterval;
let accumulator = '';

document.addEventListener('DOMContentLoaded', function () {
    writingInterval = setInterval(writeCharacter, 500);
});

function juego() {
    if (!writingInterval) {
        writingInterval = setInterval(writeCharacter, 500);
        document.getElementById('status').textContent = 'Los emoticonos están apareciendo...';
        document.querySelector('button').textContent = 'Detener';
    } else {
        clearInterval(writingInterval);
        writingInterval = null;
        document.getElementById('status').textContent = 'Detenido. Puedes reactivar la escritura.';
        document.querySelector('button').textContent = 'Reactivar';
    }
}

function writeCharacter() {
    const randomCharacter = String.fromCodePoint(0x1F60E); // el código del emoji
    accumulator += randomCharacter;
    document.getElementById('output').textContent = accumulator;
}