<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Pendientes: {{ pending.length }}</h4>
    <hr>
    <button 
        :class="{'active': currentTab === 'all'}"
        @click="currentTab = 'all'">
        Todos
    </button>
    
    <button 
        :class="{'active': currentTab === 'pending'}"
        @click="currentTab = 'pending'">
        Pendientes
    </button>

    <button 
        :class="{'active': currentTab === 'completed'}"
        @click="currentTab = 'completed'">
        Completados
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id" 
            :class="{'completed': todo.completed}"
            @dblclick="toggleTodo(todo.id)"
            >
            {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="isOpen = true">Crear Tarea</button>

    <modal title="New-Todo" v-if="isOpen" @on-close="isOpen = false">
        <template v-slot:header>
            <h1>Nueva tarea</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(newTodoText); isOpen = false">
                <input type="text" placeholder="Nueva tarea" v-model="newTodoText">
                <br><br>
                <button type="submit">Crear</button>
            </form> 
        </template>
    </modal>
</template>

<script>
import useTodos from '@/composables/useTodos.js'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components: {Modal},

    setup() {
        const {pending, currentTab, toggleTodo, getTodosByTab, createTodo} = useTodos()

        return {
            pending, 
            currentTab, 
            toggleTodo, 
            getTodosByTab,
            createTodo,
            
            isOpen: ref(false),
            newTodoText: ref(''),
        }
    }

}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 100px;
}

ul {
    width: 350px;
    text-align: left;
}

li {
    cursor: pointer;
}

button {
    width: 100px;
    height: 25px;
    margin: 2px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgb(155, 154, 154);
}

input {
    width: 80%;
    height: 25px;
    margin-top: 5px;
    border-radius: 3px;
    outline: none;
}

.active {
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}
</style>