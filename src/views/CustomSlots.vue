<template>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir Modal</button>

    <modal v-if="isOpen" title="Hola mundo" @on-close="closeModal">
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2>Título del modal</h2>
        </template>
        <template v-slot:body>
            <p>Aliquip ad dolor nostrud aute ad nostrud laborum.</p>
        </template>
        
        <template v-slot:exposed="{newTitle}">
            <h2>{{ newTitle }}</h2>
        </template>
    </modal>
</template>

<script>
import Modal from "@/components/Modal.vue"
import { ref } from "vue";

export default {
    components: {Modal},

    setup() {
        const isOpen = ref(false)

        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }

}
</script>

<style scoped>
button {
    width: 100px;
    height: 25px;
    margin: 2px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgb(155, 154, 154);
}
</style>