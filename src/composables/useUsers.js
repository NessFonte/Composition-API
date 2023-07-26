import {ref} from 'vue'
import axios from 'axios'

const useUsers = () => {
    const isLoading = ref(true)
        const currentPage = ref(1)
        const users = ref([])
        const error = ref()

        const getUsers = async(page = 1) => {
            if(page <= 0) page = 1
            isLoading.value = true

            const {data} = await axios.get(`https://reqres.in/api/users?page=${page}`)

            if(data.data.length > 0) {
                users.value = data.data
                currentPage.value = page
                error.value = null
            }
            else if(currentPage.value > 0) {
                error.value = 'No hay más usuarios'
            }
            
            isLoading.value = false
        }

        getUsers()

        return {
            users,
            isLoading,
            currentPage,
            error,

            nextPage: () => getUsers(currentPage.value + 1),
            prevPage: () => getUsers(currentPage.value - 1),
        }
}

export default useUsers