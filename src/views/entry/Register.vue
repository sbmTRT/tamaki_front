<template>
<div class="container-fluid mt-1 mb-5 col-sm-9">
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">登録申込</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">登録事項変更届出</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">登録抹消申出</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">利用希望申込</button>
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
