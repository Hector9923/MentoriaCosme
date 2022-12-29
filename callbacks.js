// pasarle como parametro una funcion a otra funcion
// function callBackFunction(array, laOtraFuncion) {
//     console.log(laOtraFuncion)
//     console.log('primero')
//     laOtraFuncion(2, 8)
//     laOtraFuncion(1, 9)
//     console.log('segundo')
// }


// callBackFunction([1, 2, 3], (numero) => {console.log(numero)} )

// function laCallback(numero) {
//     console.log(numero)
// }
// callBackFunction(laCallback)

// function useEffect(callback, dependencies) {
    
// }

// useEffect(() => {

// }, [])


function convertirNumeros(numeros, callback) {
    let numerosConvertidos = []
    for (numero of numeros) {
        let convertido = callback(numero)
        numerosConvertidos.push(convertido)
    }

    return numerosConvertidos
}

function mulitiplicacionPorDos(numero) {
    return numero * 2
}

function mulitiplicacionPorTres(numero) {
    return numero * 3
}

let numerosPorCuatro = convertirNumeros([1,2,3], (numero) => {return numero * 4} )

let numers = convertirNumeros([1, 2, 3], mulitiplicacionPorDos)
let multiplicadosPor3 = convertirNumeros([1, 2, 3], mulitiplicacionPorTres)

let numeros = [1, 2, 3]
let conElMap = numeros.map((any) => {
    console.log(any)
    return any * 4
})
console.log(conElMap)

// console.log(numers, multiplicadosPor3, numerosPorCuatro)