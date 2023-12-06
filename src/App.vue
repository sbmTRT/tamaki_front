<template>
  <div id="app" class="wrapper">
    <Header />
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <router-view />
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Your dashboard content goes here -->
        </div>
      </section>
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
  },
  data() {
    return {
      currentView: 'home', // Set the default view
    };
  },
  // App-level logic goes here
}
</script>

<style>
</style>
