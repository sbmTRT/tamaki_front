<script setup>
import { useStore } from 'vuex'

const store = useStore()

// Use computed to create reactive properties
const message = store.getters['app/getMessage']
const error = store.getters['app/getError']
const info = store.getters['app/getProfile']
</script>

<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ error }}</p>
        <p>{{ info }}</p>
    </div>
</template>
