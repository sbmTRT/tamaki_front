<script setup>
import { onMounted } from 'vue';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import liff from "@line/liff";
import { useStore } from "vuex";

const store = useStore();

async function initializeLIFF() {
  try {
    await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID
    });
    store.commit("app/setMessage", "LIFF init succeeded.");
  } catch (e) {
    store.commit("app/setMessage", "LIFF init failed.");
    store.commit("app/setError", "Error.");
  }
}

// Call the initialization function when the component is mounted
onMounted(() => {
  initializeLIFF();
});
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
