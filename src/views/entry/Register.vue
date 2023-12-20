<template>
<div class="container-fluid col-sm-9 mt-1 mb-5">
<div class="card">
  <div class="card-body">
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">登録申込</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">登録事項変更届出</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">登録抹消申出</button>
    </div>
    <div class="row mb-10">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-3">利用希望申込</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-secondary btn-sm shadow-sm col-sm-3">閉じる</button>
    </div>
  </div>
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
