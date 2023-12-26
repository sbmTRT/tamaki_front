<template>
  <div id="app-wrapper">
    <Header />
    <div id="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import liff from "@line/liff";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
      redirectTo(routeName) {
          this.$router.push({ name: routeName });
      }
  },
  data() {
      return {
      message: "",
      error: "",
      };
  },
  mounted() {
      liff
      .init({
          liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
          this.message = "LIFF init succeeded.";
      }).catch((e) => {
          this.message = "LIFF init failed.";
          this.error = `${e}`;
      });
  }
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
