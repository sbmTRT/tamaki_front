<template>
  <Header />
  <Sidebar target="sm_home" menu="open" />
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-md-12 col-sm-12 col-12">
          <h2><i class="fas fa-edit"></i> マイページ</h2>
        </div>
      </div>
    </div>
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid k_header">
          <div class="col-md-12 col-sm-12 col-12">
            <div class="info-box shadow  mt-4">
              <span class="info-box-icon bg-warning">
                <i class="fas fa-wrench"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text text-sm">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-auto"><b>【契約番号】</b> 03408349398</div>
                      <div class="col-sm-auto"><b>【件名】</b> Home Tester </div>
                      <div class="col-sm-auto"><b>【受注者】</b> KK2322422552</div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <!-- /.info-box -->
            <div class="info-box shadow  mt-4">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-sm-auto"><b><label for="userId">User ID:</label></b><input type="text" id="userId" v-model="userId" required></div>
                </div>
                <div class="row">
                  <div class="col-sm-auto"><b><label for="password">Password:</label></b><input type="password" id="password" v-model="password" required></div>
                </div>
                <div class="row">
                  <div class="col-sm-auto"><button type="submit">Submit</button></div>
                </div>
              </form>
            </div>
            <!-- Home.vue -->
              <!-- /.info-box-content -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Dispatch an action to update the store with form data
      this.$store.commit('setFormData', {
        userId: this.userId,
        password: this.password,
      });
      // Redirect to the About route
      this.$router.push('/about');
    },
  },
};
</script>

<style>
#toastrButton {
  outline: 0.1rem solid;
}
.tooltip .tooltip-inner {
  font-size: small;
}
</style>