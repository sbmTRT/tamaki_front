
<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="header">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button">
          <i class="fas fa-bars"></i>
        </a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" v-on:click.stop.prevent="logout" href="#" role="button" id="alert" data-toggle="tooltip" data-html="true" data-container="body" title="ログアウト">
          <i class="fas fa-power-off"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
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