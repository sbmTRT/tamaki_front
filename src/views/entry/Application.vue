<script setup>
import { useStore } from 'vuex';

const store = useStore();

// Access the message and error from the Vuex store
const message = store.state.app.message;
const error = store.state.app.error;

</script>

<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ error }}</p>
    </div>
</template>
