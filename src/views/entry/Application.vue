<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from 'vuex';

// Access the router
const router = useRouter();

// Access the store
const store = useStore();

const uploadedImages = store.getters['app/getImages'];

const redirectTo = (routePath) => {
    router.push(routePath);
};
</script>

<template>
    <div>
        <h2>Uploaded Images</h2>
        <div v-for="(image, index) in uploadedImages" :key="index">
        <img :src="image.url" alt="Uploaded" class="uploaded-image w-100" />
        </div>
        <button type="button" class="form-control btn btn-secondary shadow-sm  mx-auto rounded-0" @click="redirectTo('/input')">戻る</button>
    </div>
</template>

