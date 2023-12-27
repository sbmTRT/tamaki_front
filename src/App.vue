<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
      <router-view />
    <Footer />
  </div>
</template>
