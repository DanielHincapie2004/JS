<template>
  <div class="about">
    <h1>{{ dato }}}</h1>
  </div>
</template>
<script>
import axios from 'axios'

// import {post} from '@/http/http.js'
export default{
  name: 'AbouT',
  data() {
    return{
      dato:[],
      lista:[{nombre:"Daniel",apellido:"Hincapie"}]
    }
  },
  components:{

  },
  methods:{
    // consulta(){
    //   axios.post('http://localhost:5355/help', this.lista).then(res => this.dato = res.data)
    // }
    consulta(){
      axios.get('http://localhost:5355/help').then(res => this.dato = res.data)
    }
  },
  created(){
   this.consulta()
  }
}
</script>