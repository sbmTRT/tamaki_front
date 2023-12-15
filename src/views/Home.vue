<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm" class=”form-inline”>
      <div class="form-grou">
        <label for="name" class="form-label col-sm-4">Name</label>
        <input v-model="formData.name" type="text" class="form-control col-sm-8" id="name" placeholder="Enter your name">
      </div>

      <div class="form-grou">
        <label for="email" class="form-label col-sm-4">Email address</label>
        <input v-model="formData.email" type="email" class="form-control col-sm-8" id="email" placeholder="name@example.com">
      </div>

      <div class="form-grou">
        <label for="address" class="form-label col-sm-4">Address</label>
        <input v-model="formData.address" type="text" class="form-control col-sm-8" id="address" placeholder="123 Main St">
      </div>

      <div class="form-grou">
        <label for="city" class="form-label col-sm-4">City</label>
        <input v-model="formData.city" type="text" class="form-control col-sm-8" id="city" placeholder="City">
      </div>

      <div class="form-grou">
        <label for="state" class="form-label col-sm-4">State</label>
        <input v-model="formData.state" type="text" class="form-control col-sm-8" id="state" placeholder="State">
      </div>

      <div class="form-grou">
        <label for="zip" class="form-label col-sm-4">ZIP Code</label>
        <input v-model="formData.zip" type="text" class="form-control col-sm-8" id="zip" placeholder="ZIP Code">
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
