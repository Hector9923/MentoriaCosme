function printProcesando() {
    console.log('procesando...')
    miFuncion('skylar', 'gutierrez')
}

function miFuncion(name, lastName) {
    console.log('hola', name, lastName)
    printProcesando()
};

var apellido = 'Escobedo'
var nombre = 'Cosme';
let segundaPersona = 'Hector';
let segundoApellido = 'Sanchez';

// se llama la funcion miFuncion y se ejecuta varias veces en orden Cascade
miFuncion(nombre, apellido)
miFuncion(segundaPersona, segundoApellido)
miFuncion('Damian', 'Escobedo')