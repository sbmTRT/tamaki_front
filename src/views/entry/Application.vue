<template>
  <div id="app">
    <button @click="openModal" class="btn btn-primary">Open Register Modal</button>

    <!-- Vue Component for Modal -->
    <register-modal @close="closeModal"></register-modal>
  </div>
</template>

<script>
import RegisterModal from './Update.vue';

export default {
  components: {
    RegisterModal,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
/* Add any global styles here */
</style>
