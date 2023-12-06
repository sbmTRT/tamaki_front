<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>

<template>
    <div class="wrapper">
      <Header />
        <Sidebar />
          <router-view />
      <Footer />
    </div>
</template>

<style scoped>
/* */
</style>