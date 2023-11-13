'use strict'
// Función para generar un número aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Número que el usuario debe adivinar
const numeroCorrecto = generarNumeroAleatorio();

// Juego con bucle for
console.log("Juego de adivinanza con bucle for:");
for (let intento = 1; intento <= 3; intento++) {
    const intentoUsuario = parseInt(prompt("Intento #" + intento + ": Adivina el número (entre 1 y 10):"));

    if (intentoUsuario === numeroCorrecto) {
        console.log("¡Felicidades! Adivinaste el número.");
        break;
    } else {
        console.log("Intento incorrecto. Sigue intentando.");
    }
}

// Juego con bucle while
console.log("\nJuego de adivinanza con bucle while:");
let intento = 1;
while (intento <= 3) {
    const intentoUsuario = parseInt(prompt("Intento #" + intento + ": Adivina el número (entre 1 y 10):"));

    if (intentoUsuario === numeroCorrecto) {
        console.log("¡Felicidades! Adivinaste el número.");
        break;
    } else {
        console.log("Intento incorrecto. Sigue intentando.");
        intento++;
    }
}

// Juego con bucle do-while
console.log("\nJuego de adivinanza con bucle do-while:");
let intentoDoWhile = 1;
do {
    const intentoUsuario = parseInt(prompt("Intento #" + intentoDoWhile + ": Adivina el número (entre 1 y 10):"));

    if (intentoUsuario === numeroCorrecto) {
        console.log("¡Felicidades! Adivinaste el número.");
        break;
    } else {
        console.log("Intento incorrecto. Sigue intentando.");
        intentoDoWhile++;
    }
} while (intentoDoWhile <= 3);
