<script>
import { useStore } from 'vuex';

const store = useStore();

// Access the message and error from the Vuex store
const message = store.getters['app/getMessage'];
const error = store.getters['app/getError'];

</script>

<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ error }}</p>
    </div>
</template>
