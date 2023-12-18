<template>
<form @submit.prevent="submitForm" class="col-md-12">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="form-group text-sm">
            <label class="d-block">区分</label>
          </div>
        </div>
        <div class="col-sm-12 col-md-9">
          <div class="form-group text-sm">
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="form-group text-sm">
            <label class="d-block">区分</label>
          </div>
        </div>
        <div class="col-sm-12 col-md-9">
          <div class="form-group text-sm">
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="form-group text-sm">
            <label class="d-block">区分</label>
          </div>
        </div>
        <div class="col-sm-12 col-md-9">
          <div class="form-group text-sm">
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
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
