import axios from "axios";

function consulta(){
    axios.get('http://localhost:5355/items').then(res => {
        this.item = res.data
    })
}

module.exports = consulta();