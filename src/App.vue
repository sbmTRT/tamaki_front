<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
import liff from "@line/liff";
import { useStore } from "vuex";

const store = useStore();

export default {
  mounted() {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        store.commit("app/setMessage", "LIFF init succeeded.");
      }).catch((e) => {
        store.commit("app/setMessage", "LIFF init failed.");
        store.commit("app/setError", "Error.");
      });
  }
};
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
      <router-view/>
    <Footer />
  </div>
</template>
