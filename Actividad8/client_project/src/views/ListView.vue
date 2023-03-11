<template>
    <ul>
        
    </ul>
</template>

<script>
//import {consulta} from '@/http/index.js'

    export default {
        name: 'ListView',
        data() {
            return{
                items: []
            }
        },
        methods:{
            consulta(){

            }
        },
        created(){
            this.consulta();
        }
    }
</script>