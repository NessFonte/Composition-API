<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="error">{{ error }}</h5>

  <div v-if="users.length > 0">
    <user-list :users="users" v-slot="{ user }">
        <h3>{{ user.first_name }} {{ user.last_name }}</h3>
        <h5>{{ user.email }}</h5>
    </user-list>
  </div>

  <button @click="prevPage">Atrás</button>
  <button @click="nextPage">Siguiente</button>
  <span>Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/composables/useUsers.js'
import UserList from '@/components/UserList.vue'

export default {
    components: {UserList},

    setup() {
        const {users, isLoading, error, prevPage, nextPage, currentPage} = useUsers()

        return {users, isLoading, error, prevPage, nextPage, currentPage}
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}
</style>