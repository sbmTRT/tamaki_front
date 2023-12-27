<template>
<div class="container-sm">
  <div class="card">
    <div class="card-body">
      <form class="mt-5">
          <div class="form-group mb-3">
            <p>{{ message }}</p>
          </div>
          <div class="form-group mb-3">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('input')">登録申込</button>
          </div>
          <div class="form-group mb-3">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('update')">登録事項変更届出</button>
          </div>
          <div class="form-group mb-3">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('delete')">登録抹消申出</button>
          </div>
          <div class="form-group mb-3">
              <button type="button" class="form-control btn btn-outline-success shadow-sm" @click="redirectTo('application')">利用希望申込</button>
          </div>
          <div class="form-group col-8 mx-auto">
              <button type="button" class="form-control btn btn-secondary shadow-sm mt-5" @click="closeTab">閉じる</button>
          </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    redirectTo(routeName) {
      this.$router.push({ name: routeName });
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
