<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
import { useStore } from 'vuex';


const store = useStore();

// Dispatch the Vuex action to initialize LIFF
store.dispatch('app/initLiff');

</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
      <router-view/>
    <Footer />
  </div>
</template>
