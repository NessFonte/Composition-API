<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import useCounter from '@/composables/useCounter.js'

export default {
  // Elementos que van fuera del setup(), todos los demás elementos se desarrollan dentro de este método
  name: "Counter",
  props: {},
  emits: [],
  
  setup() {
    const {counter, increase, decrease} = useCounter()

    return {
      counter, increase, decrease
    }
  }
}
</script>

<style>

</style>