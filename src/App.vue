<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
import liff from "@line/liff";

const { message, error } = reactive({
  message: "",
  error: "",
});

export default {
  data() {
    return {
      message: "",
      error: "",
    };
  },
  mounted() {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        message.value = "LIFF init succeeded.";
      }).catch((e) => {
        message.value = "LIFF init failed.";
        error.value = `${e}`;
      });
  }
};
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
      <router-view :message="message"/>
    <Footer />
  </div>
</template>
