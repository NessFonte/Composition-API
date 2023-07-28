<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>

    <modal title="Hola mundo">
        <template v-slot:footer>
            <button>Salir</button>
        </template>
        <template v-slot:header>
            <h2>Título del modal</h2>
        </template>
        <template v-slot:body>
            <p>Aliquip ad dolor nostrud aute ad nostrud laborum.</p>
        </template>
    </modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

export default {
    components: {Modal},

    setup() {
        
    }

}
</script>

<style>

</style>