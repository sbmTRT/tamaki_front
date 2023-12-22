<template>
<body class="container-sm">
  <div class="card">
    <div class="card-body">
      <form class="mt-3 mb-3">
          <div class="form-group">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('input')">登録申込</button>
          </div>
          <div class="form-group">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('update')">登録事項変更届出</button>
          </div>
          <div class="form-group">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('delete')">登録抹消申出</button>
          </div>
          <div class="form-group">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('application')">利用希望申込</button>
          </div>
          <div class="form-group mt-3">
              <button type="button" class="form-control btn btn-secondary shadow-sm" @click="closeTab">閉じる</button>
          </div>
      </form>
    </div>
  </div>
</body>
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
    closeTab() {
      window.close();
    },
  },
};
</script>

<style scoped>
/* Add any custom styles for this component */
</style>
