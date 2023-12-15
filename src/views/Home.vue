<template>
  <div class="container mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <form @submit.prevent="submitForm" class="form-inline">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="form-group text-sm">
                      <label for="name">Name</label>
                      <input v-model="formData.name" type="text" class="form-control form-control-sm bg-mistyrose" id="name" placeholder="Enter your name">
                  <div class="col-sm-3">
                    <div class="form-group text-sm">
                  <label for="email">Email address</label>
                  <input v-model="formData.email" type="email" class="form-control form-control-sm bg-mistyrose" id="email" placeholder="name@example.com">
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="form-group text-sm">
                      <label for="address">Address</label>
                      <input v-model="formData.address" type="text" class="form-control form-control-sm bg-mistyrose" id="address" placeholder="123 Main St">
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group text-sm">
                      <label for="city">City</label>
                      <input v-model="formData.city" type="text" class="form-control form-control-sm bg-mistyrose" id="city" placeholder="City">
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="form-group text-sm">
                      <button type="submit" class="btn btn-primary w-25">Submit</button>
                    </div>
                </div>
              </div>
            </form>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div>
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
