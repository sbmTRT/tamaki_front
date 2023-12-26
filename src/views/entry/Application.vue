<template>
  <div>
    <h2>Application Page</h2>
    <p>Welcome to the application page. This is where your main content goes.</p>
    <button @click="showAgreementModal">Show Agreement</button>

    <!-- BootstrapVue Modal -->
    <b-modal v-model="agreementModalVisible" title="Agreement">
      <p>Agree to the policy:</p>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="agreed">
        <label class="form-check-label" for="agreed">I agree to the policy</label>
      </div>
      <div class="mt-3">
        <b-button @click="handleAgreement">OK</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BButton } from 'bootstrap-vue';

export default {
  components: {
    'b-modal': BModal,
    'b-button': BButton,
  },
  data() {
    return {
      agreementModalVisible: false,
      agreed: false,
    };
  },
  methods: {
    showAgreementModal() {
      this.agreementModalVisible = true;
    },
    handleAgreement() {
      if (this.agreed) {
        alert('You have agreed to the policy. Processing...');
      } else {
        alert('Please agree to the policy to proceed.');
      }
      this.agreementModalVisible = false;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
h2 {
  color: #333;
}

p {
  color: #666;
}
</style>
