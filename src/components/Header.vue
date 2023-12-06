<template>
  <header>
    <div>
      <h1>create-liff-app</h1>
      <p v-if="message">{{ message }}</p>
      <p v-if="userid">{{ userid }}</p>
      <p v-if="diaplayname">{{ diaplayname }}</p>
      <p v-if="pictureurl">{{ pictureurl }}</p>
      <p v-if="statusmessage">{{ statusmessage }}</p>
      <p v-if="error">
        <code>{{ error }}</code>
      </p>
      <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
        LIFF Documentation
      </a>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        Hello! {{ displayname }}  {{ message }}  {{ error }}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <!-- Add any navigation links or components here -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
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
            const userId = profile.userId;
            const displayName = profile.displayName;
            const pictureUrl = profile.pictureUrl;
            const statusMessage = profile.statusMessage;
            this.userid = 'User ID:'+ userId;
            this.diaplayname = 'User Name:'+ displayName;
            this.pictureurl = 'Picture url:'+ pictureUrl;
            this.statusmessage = 'Status Message:'+ statusMessage;
            // this.client = "isInClient", liff.isInClient();
          }).catch((error) => {
            console.error('Error getting user profile', error);
          });
        } else {
          this.userid = 'User ID: empty';
        }
      }).catch((e) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
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