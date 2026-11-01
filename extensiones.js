const path = require('path')
const fs = require('fs')

var ruta = process.argv[2]
if (!ruta) {
    ruta = __dirname
}

const dir = fs.readdirSync(ruta)
var extensiones = {}

dir.forEach(f => {
    var ext = path.extname(f)
    if (ext === '') {
        ext = '(sin extension)'
    }
    if (extensiones[ext] == undefined) {
        extensiones[ext] = 1
    }
    else {
        extensiones[ext]++
    }
})
console.table(extensiones)