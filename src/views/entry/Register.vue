<template>
<div class="container-fluid col-sm-6 mt-1 mb-5">
<div class="card">
  <div class="card-body">
    <div class="row mb-2 mt-5">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-12" @click="redirectTo('input')">登録申込</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-12" @click="redirectTo('update')">登録事項変更届出</button>
    </div>
    <div class="row mb-2">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-12" @click="redirectTo('delete')">登録抹消申出</button>
    </div>
    <div class="row mb-10">
        <button type="button" class="btn btn-outline-success shadow-sm col-sm-12" @click="redirectTo('application')">利用希望申込</button>
    </div>
    <div class="row mb-2 col-sm-6 ml-0 mt-5">
        <button type="button" class="btn btn-secondary btn-sm shadow-sm col-sm-12">閉じる</button>
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
    redirectTo(routeName) {
      this.$router.push({ name: routeName });
    },
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
