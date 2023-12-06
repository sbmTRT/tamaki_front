<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name">
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="name@example.com">
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input v-model="formData.address" type="text" class="form-control" id="address" placeholder="123 Main St">
      </div>

      <div class="mb-3">
        <label for="city" class="form-label">City</label>
        <input v-model="formData.city" type="text" class="form-control" id="city" placeholder="City">
      </div>

      <div class="mb-3">
        <label for="state" class="form-label">State</label>
        <input v-model="formData.state" type="text" class="form-control" id="state" placeholder="State">
      </div>

      <div class="mb-3">
        <label for="zip" class="form-label">ZIP Code</label>
        <input v-model="formData.zip" type="text" class="form-control" id="zip" placeholder="ZIP Code">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      alert(`Form submitted with data: ${JSON.stringify(this.formData)}`);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles for this component */
</style>
