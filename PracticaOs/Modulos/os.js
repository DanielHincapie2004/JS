const os = require('os');
const funciones = require('./funciones')

// console.log(os.machine());

//Arquitectura
//console.log(os.arch());

//Version de windows
//console.log(os.version());

//tiempo activo el sistema operativo o maquina
//console.log(os.uptime());

//Informacion de usuario
// console.log(os.userInfo());

//familia de sistema operativo
//console.log(os.type())

//memoria total disponible
//console.log(os.freemem())

//total de memoria disponnible 
//console.log(os.totalmem())

//version del sistema operatico
//console.log(os.release())

//plataforma sobre la que se trabaja
//console.log(os.platform())

//nombre de usuario
//console.log(os.hostname())

//info del procesador
// console.log(os.cpus());

// let mapIdUser = os.cpus().slice(0,1).map((registro) => registro.times)
// console.log(mapIdUser)

//capacidad de sub procesos
// console.log(os.availableParallelsim())

//directorio de archivos temporables
// console.log(os.tmpdir())

// const array = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
// const paresPositivos = (numero) =>{
//     if(numero % 2 === 0 && numero > 0){
//         return true
//     }
//     return false
// }

// console.log(array.filter(paresPositivos))

// const array = [1,2,3,4,5,6,7,8]
// array.map(aNum => {
//     return aNum * aNum
// })

// console.log(array)

// const myArray = [4,65,4,3,646,3]
// myArray.reduce((total,num)=>{
//     return total + num;
// })

// const hola={
//     saludo: "Hola"
// }

// const hola2={
//     saludo: "Hola2",
//     nombre: "Stefa"
// }

// console.log(Object.assign(hola, hola2)).

//ram disponible
//ram total
//sistema operativo
//datos de frecuencia 


let ramTotal = funciones.ramDispoGb(os.totalmem());
let ramDispo = funciones.ramDispoGb(os.freemem());
let sistemaOperativo = os.release()

const impresion = {
    RamTotal:{
        Resultados: ramTotal
    },
    ramDisponible:{
        Resultados: ramDispo
    },
    sistemaOperativo:{
        Resultados: sistemaOperativo
    },
    FrecuenciaUser:{
        Resultados: os.cpus().slice(0,1).map((registro) => registro.times.user)
    },
    FrecuenciaNice:{
        Resultados: os.cpus().slice(0,1).map((registro) => registro.times.nice)
    },
    FrecuenciaSys:{
        Resultados: os.cpus().slice(0,1).map((registro) => registro.times.sys)
    },
    FrecuenciaIdle:{
        Resultados: os.cpus().slice(0,1).map((registro) => registro.times.idle)
    },
    FrecuenciaIrq:{
        Resultados: os.cpus().slice(0,1).map((registro) => registro.times.irq)
    }   
}

console.table(impresion)