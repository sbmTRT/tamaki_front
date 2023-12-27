<script setup>
import { onMounted } from 'vue';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import liff from "@line/liff";
import { useStore } from "vuex";

const store = useStore();

async function initializeLIFF() {
  try {
    await liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        store.commit("app/setMessage", "LIFF init succeeded.");
        if (liff.isLoggedIn()) {
          // Get user profile
          liff.getProfile().then((profile) => {
            const displayName = profile.displayName;
            const userId = profile.usereId;
            store.commit("app/setProfile", displayName);
            store.commit("app/setProfileID", userId);
          }).catch((error) => {
            store.commit("app/setMessage", "LIFF init failed.");
          });
        } else {
            store.commit("app/setProfile", "Empty User Name");
            store.commit("app/setProfileID", "Empty User ID");
        }
      }).catch((e) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });
  } catch (e) {
    store.commit("app/setMessage", "LIFF init failed.");
    store.commit("app/setError", "Error.");
  }
}

// Call the initialization function when the component is mounted
onMounted(() => {
  initializeLIFF();
});
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
