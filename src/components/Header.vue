<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <div class="row col-md-12">
      <img src="../assets/img/logo.jpeg" alt="Logo of Tamaki System">
      <h5>玉城町空き家バンク登録システム</h5>
    </div>
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
import liff from "@line/liff";

export default {
  data() {
    return {
      userid: "",
      message: "",
      error: "",
      displayname: "",
      pictureurl: "",
      statusmessage: ""

    };
  },
  mounted() {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        this.message = "LIFF init succeeded.";
        if (liff.isLoggedIn()) {
          // Get user profile
          liff.getProfile().then((profile) => {
            const displayName = profile.displayName;
            this.displayname = displayName;
          }).catch((error) => {
            console.error('Error getting user profile', error);
          });
        }
      }).catch((e) => {
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>