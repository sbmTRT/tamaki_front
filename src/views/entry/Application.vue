<template>
  <div class="container mt-5">
    <h2>Registration Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control-sm" id="username" v-model="formData.username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control-sm" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control-sm" id="password" v-model="formData.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData);
      // You can send the form data to the server or perform other actions
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
