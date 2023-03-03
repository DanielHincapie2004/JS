<!-- <script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    incrementar() {
      this.contador++
    },
    decrementar() {
      this.contador--
    }
  }
}
</script> -->

<!-- <template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template> -->

<script setup>

import {ref ,computed} from "vue";
let dato = ref(0)
let array = ref([])

const sumar = ()=>{
  return dato.value++
}
const restar = ()=>{
  return dato.value--
}

const restablecer = ()=>{
  return dato.value = 0
}

const agregar = ()=>{
  array.value.push(dato.value)
}

const desabilitarBoton = computed(()=> {
  const datoEncontrado = array.value.find(n => n=== dato.value)

  return datoEncontrado || datoEncontrado === 0;
  
});
</script>

<template>
  <h1 :class="dato >= 0 ? 'verde':'rojo'">{{ dato }}</h1>
  <h2>{{ array }}</h2>
  <button @click="sumar">+</button>
  <button @click="restar">-</button>
  <button @click="restablecer">Res</button>
  <button @click="agregar" :disabled="desabilitarBoton">Agregar</button>


</template>



<style scoped>
.verde{
  color: green;
}
.rojo{
  color:red;
}
</style>
