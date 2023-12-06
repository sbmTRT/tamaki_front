<template>
    <Header />
    <Sidebar />
    <div class="wrapper">
    <!-- The main app component includes the router view -->
    <router-view />
    </div>
    <Footer />
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

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

<style>
/* Add your custom styles here */
</style>
