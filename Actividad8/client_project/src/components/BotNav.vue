<template>
    <div>
        <v-btn v-for="ruta,i in rutas" :key="i" color="black" @click="InsertarRuta(ruta.ruta)" class="ma-3" width="90%">
            <span>{{ ruta.name }}</span>
        </v-btn>
    </div>
</template>

<script>
    export default{
        name:'BotNav',
        data: ()=>({
            rutas: [
                {name: 'home', ruta:'/'},
                {name: 'about', ruta:'/about'},
                {name: 'help', ruta:'/help'},
                {name: 'consulta', ruta: '/consulta'},
                {name: 'list', ruta: '/list'}
            ]
        }),
        methods: {
            InsertarRuta(ruta){
                this.$router.push(ruta)
            }
        },
    }
</script>