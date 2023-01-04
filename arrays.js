// let frutas = [ 'banana', 'mango', 'manzana', 'kiwi' ]

// const first = frutas[0]
// const second = frutas[1]
// const third = frutas[2]
// const fourth = frutas[3]

// EL FOR TIENE PARENTESIS () EN LOS QUE PONES CUANTAS VECES SE VA A ITERAR
// EN LOS () (ESTA LA VAR QUE DECLARAS CON SU VALOR, LUEGO ; TIENE SU CONDICION Y ; LA ACTUALIZACION
// EL CUERPO DEL FOR LOOP SE EJECUTA CUANDO PASA POR LA CONDICION: si la condicion es True sigue si es False se detiene
// Y LUEGO SE EJECUTA LA ; ACTUALIZACION) AL FIN DE CADA ITERACION
// Y EN EL CUERPO PONES LA OPERACION QUE QUIERES HACER

// for (let posicion = 0; posicion < frutas.length; posicion++) {
//     // let fruta = frutas[index]
//     // if (fruta != 'manzana') {
//     //     continue
//     // }
//     // console.log(fruta)
//     // console.log(posicion)
//     console.log(frutas[posicion])
// }

// console.log('Mis Frutas', first, second, third, fourth)

let frutas = [ 'banana', 'mango', 'manzana', 'kiwi' ]

let frutasEnUpperCase = []

let ejemplo = "ejemplo"
let EJEMPLO = ejemplo.toUpperCase()

for (let posicion = 0; posicion < frutas.length; posicion++) {
    let pasadorDeItems = frutas[posicion]
    let frutaEnMayuscula = pasadorDeItems.toUpperCase()
    //👇AQUI ESTOY GUARDANDO EL OUTPUT: LA LONGITUD DEL ARRAY EJ 1, 
    // let count = frutasEnUpperCase.push(frutaEnMayuscula)
    // console.log(count)
    // PERO AQUI 👇 NO GUARDO EL OUTPUT Y SE PIERDE, NO LO OCUPO
    // Y EL PUSH(AGREGA FRUTA EN MAYUSCULA A: FRUTAS EN UPPER CASE)
    frutasEnUpperCase.push(frutaEnMayuscula)
}

console.log(frutasEnUpperCase)
// function map(callback) {
//     let nuevoArray = []
//     for (let posicion = 0; posicion < frutas.length; posicion++) {
//         let resultado = callback(frutas[posicion], posicion)
//         nuevoArray.push(resultado)
//     }
//     return nuevoArray;
// }

let frutasEnUpperCaseMap = frutas.map((fruta, index) => {
    console.log(fruta)
    return fruta.toUpperCase()
})

let frutaFavorita = frutas.filter(fruta => fruta == 'manzana')
let mayoresDe25 = users.filter(user => user.edad > 25)
let hector = users.find(user => user.username == 'HectorSanchez')
let unaFrutaFavorita = frutas.find(fruta => fruta == 'manzana')
console.log(frutaFavorita, unaFrutaFavorita)