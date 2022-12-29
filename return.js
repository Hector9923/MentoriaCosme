// function multiplicationCuadrado(numero) {
//     return numero * numero
// }

// var number = 2

// let primerCuadrado = multiplicationCuadrado(number)
// let cuadradoDelCuadrado = multiplicationCuadrado(primerCuadrado)
// console.log('el resultado es:', primerCuadrado, cuadradoDelCuadrado)

// let nombre = "cosme"
// let replaced = nombre.replace('o', 'x')



function reemplazarMayusculasConMinusculas(palabraRandom) {
    palabraRandom = palabraRandom.replaceAll('a', 'A')
    palabraRandom = palabraRandom.replaceAll('m', 'M')
    return palabraRandom.replaceAll('O', 'o')
}

let palabraRandom = 'Orale Osmar Osman holo';

let aquiGuardoLaNuevaFrase = reemplazarMayusculasConMinusculas(palabraRandom)

console.log(reemplazarMayusculasConMinusculas(palabraRandom))
