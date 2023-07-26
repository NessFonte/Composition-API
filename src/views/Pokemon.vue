<template>
  <h1 v-if="!pokemon && !error">Buscando...</h1>
  <h1 v-else-if="error">{{ error }}</h1>
  
  <template v-else>
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" alt="pokemon.name">
    <h2></h2>
    <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
  </template>
</template>

<script>
import { useRoute } from 'vue-router';
import usePokemon from '@/composables/usePokemon';
import { watch } from 'vue';

export default {
  setup() {
    const route = useRoute()
    console.log(route.params.id);
    const {error, isLoading, pokemon, searchPokemon} = usePokemon(route.params.id)

    watch(
      () => route.params.id,
      () => {
        searchPokemon(route.params.id)
      }
    )

    return {
      error,
      isLoading,
      pokemon,

    }
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>