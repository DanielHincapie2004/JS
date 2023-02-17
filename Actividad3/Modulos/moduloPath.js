const path = require('path')
console.log(path)

//crea, junta una salida adecuada de acuerdo al sistema operativo
const unirRuta = path.join('consumible','/propiedades','etc.js')
// console.log(unirRuta)

//la base de la ruta(Final de ruta)
// const fileBasename = path.basename(unirRuta)
// console.log(fileBasename)

//dar la ruta sin el archivo
// const filedirname = path.dirname(unirRuta)
// console.log(filedirname)

//Da la ruta en forma de objeto
// const fileParse = path.parse(unirRuta)
// console.log(fileParse)

//Completar la ruta
// const fileResolve =  path.resolve(unirRuta)
// console.log(fileResolve)