<template>
  <Header />
  <Home />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

export default {
  components: {
    Header,
    Footer,
    Home,
    About,
  }
  // App-level logic goes here
}
</script>

<style>
</style>
