
let listP = require('./modulos/profesion.js');
let listU = require('./modulos/usuarios.js');

let personasCantidad = (Usuarios,Profesiones)=>{
    let keys =Object.keys(Usuarios);
    let keys2=Object.keys(Profesiones);
    for (let i=0; i<keys.length;i++){
    
    
        let resultado2= Math.floor(Math.random()* keys.length);
        
        auxClave1=keys[resultado2];
        let resultado= Math.floor(Math.random()* keys.length);
        
        auxClave2=keys2[resultado]
        console.log(Object.values(listP[auxClave2]))
        console.log(Object.values(listU[auxClave1])) 
        console.log("------------------------------------------------------------------------------------------------------------")
    }

      
}
personasCantidad(listU,listP);