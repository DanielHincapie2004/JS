const fs = require('fs')

//leer contenido de archivo
// const dato = fs.readFileSync('../data/dato.txt')
// console.log(dato.toString())

//Crea archivo e inserta contenido
// const n = "hello"
// fs.writeFileSync('../data/tercero.js',n)

//crea un archivo y añade contenido

// for (let i = 1; i <= 10; i++) {
//     const hola = i + `\n`
//     fs.writeFileSync('../data/unoa10.js', hola,{
//     flag: 'a'
//     });   
// }

//Codigo sincrono

fs.readFile('../data/tercero.js', 'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
