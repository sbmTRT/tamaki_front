<template>
  <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="registerModalLabel">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Your registration form goes here -->
          <form>
            <!-- Form fields, labels, etc. -->
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter your username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password">
            </div>
            <!-- Add more form fields as needed -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" @click="register">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      // Emit close event to the parent
      this.$emit('close');
    },
    register() {
      // Your registration logic goes here
      // You can make an API call or perform client-side validation
      // Close the modal after registration is successful
      this.closeModal();
    }
  }
};
</script>

<style scoped>
/* Add any custom styles specific to this component */
</style>
