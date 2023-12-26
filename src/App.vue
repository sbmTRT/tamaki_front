<template>
  <body>
    <div id="app-wrapper">
      <Header />
      <div id="main-content">
        <router-view />
      </div>
      <Footer />
    </div>
  </body>
</template>

<script>
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
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex: 1;
}
</style>
