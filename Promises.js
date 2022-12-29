function descargarArchivoFalso() {
    //
    return new Promise((resolve, reject) => {
        var start = new Date().getTime();
        var end = start;
        while(end < start + 1000) {
          end = new Date().getTime();
       }

       resolve(end);
    })
    
}

descargarArchivoFalso().then((resultado) => {
    console.log("resultado", resultado)
}).catch((err) => {

})

console.log("promesa", result)