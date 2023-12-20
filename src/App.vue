<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Register from './views/entry/Register.vue';

export default {
  components: {
    Header,
    Footer,
    Register,
  }
  // App-level logic goes here
}
</script>

<style>
</style>
