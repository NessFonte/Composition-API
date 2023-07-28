<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Pendientes: {{ pending.length }}</h4>
    <hr>
    <button 
    :class="{'active': currentTab === 'all'}"
    @click="currentTab = 'all'"    
    >Todos</button>
    <button 
    :class="{'active': currentTab === 'pending'}"
    @click="currentTab = 'pending'"
    >Pendientes</button>
    <button 
    :class="{'active': currentTab === 'completed'}"
    @click="currentTab = 'completed'"
    >Completados</button>

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

</template>

<script>
import useTodos from '@/composables/useTodos.js'

export default {
    setup() {
        const {pending, currentTab, toggleTodo, getTodosByTab} = useTodos()

        return {pending, currentTab, toggleTodo, getTodosByTab}
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
    border: none;
}

.active {
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}
</style>