<template>
  <div id="app" class="wrapper">
    <Header />
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <!-- <router-view /> -->
        <!-- Main content -->
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
</style>
