const os = require('os')
const fs = require('fs')

const ramDisponibleGb = valor =>{
    valor = valor*(Math.pow(10,-9));
    return valor;
}
const procesador = os.cpus().slice(0,1).map((registro) => registro.model)
let memoriaTotal = ramDisponibleGb(os.totalmem());
const version =os.version();
const user = os.userInfo().username;

const fin = (`Procesador: ${procesador} \n Memoria Total: ${memoriaTotal} \n Version: ${version} \n Usuario: ${user}`).toString()

 fs.writeFileSync('../data/procesador.txt', fin)