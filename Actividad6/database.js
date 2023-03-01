const mysql = require('mysql2/promise');


async function connetdb(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testeo'
      });


    const arrayObject = await connection.query('SELECT * FROM personas')
    const obj = arrayObject[0]

    // for (let i = 0; i < array0.length; i++) {
    //     const nombre = array0[i].nombre
    //     const apellido = array0[i].apellido
    //     console.log(nombre+" "+apellido)
    //     // console.log(arrayObject[i])
    // }
    for (let i =0; i < arrayObject.length;i++){
        const array = obj[i]
        console.log(`Persona${i+1}\nNombre: ${array.nombre} \nApellido: ${array.apellido}`)
        
    }

    
    //const resultado = await connection.query('INSERT INTO personas VALUES("Juan", "Holguin")')
    connection.end()
}

connetdb()
module.exports = connetdb




