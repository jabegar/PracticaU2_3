var segundos = process.argv[2]
var mensaje = process.argv.slice(3)

if (mensaje == undefined || mensaje == '') {
    mensaje = '¡Tiempo!'
}
else {
    var men = ''
    mensaje.forEach(m => {
        men += m + ' '
        
    })
    mensaje = men
}

if (isNaN(segundos) || segundos < 0) {
    console.error('Segundos no validos')
    process.exit(1)
}

console.time('temporizador')
setTimeout(() => {
    console.log("¡Ya vas por la mitad!")
}, segundos / 2 * 1000);

const intervalo = setInterval(() => {
    console.log(`Quedan ${segundos} segundos`)
    segundos--

    if(segundos == 0) {
        console.log(mensaje)
        console.timeEnd('temporizador')
            clearInterval(intervalo)
    }
}, 1000)