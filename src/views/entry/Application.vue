<script setup>
import { useStore } from 'vuex'

const store = useStore()

// Use computed to create reactive properties
const message = store.getters['app/getMessage']
const error = store.getters['app/getError']
</script>

<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ error }}</p>
    </div>
</template>
