<template>
    <Header />
    <!-- The main app component includes the router view -->
    <router-view />
    </div>
    <Footer />
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
