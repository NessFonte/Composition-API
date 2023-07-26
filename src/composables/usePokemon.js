import { ref } from "vue"
import axios from "axios"

const usePokemon = (pokemonId = '1') => {
    const pokemon = ref()
    const isLoading = ref(false)
    const error = ref()

    const searchPokemon = async (id) => {
        if(!id) return

        isLoading.value = true
        pokemon.value = null

        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            error.value = null
        }   
        catch(error) {
            error.value = 'No se pudo cargar ese pokémon'
        }

        isLoading.value = false
    }

    searchPokemon(pokemonId)

    return {
        pokemon,
        isLoading,
        error,

        searchPokemon,
    }
}

export default usePokemon