<template>
<body class="container-sm">
<form>
    <div class="card">
        <div class="card-header bg-success text-white">
            登録申込
        </div>
        <div class="card-body">
            <div class="card mt-2">
                <div class="card-body">
                    <label class="text-success"> 申込者 </label>
                        <div class="form-group">
                            <label>氏名</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>住所</label>
                            <input type="text" class="form-control">
                        </div>
                </div>
            </div>
            <div class="card mt-2">
                <div class="card-body">
                    <label class="text-success"> 対象物件 </label>
                        <div class="form-group">
                            <button type="button" class="btn btn-success shadow-sm" data-toggle="modal" data-target="#registerModal">登録カード入力</button>
                            <button type="button" class="btn btn-secondary shadow-sm ml-2">未入力</button>
                        </div>
                    <label class="text-success"> 契約交渉の方法 </label><br>
                    <label class="text-success"> . </label><br>
                    <label class="text-success"> . </label><br>
                    <label class="text-success"> . </label><br>
                    <label class="text-success"> . </label>
                </div>
            </div>
            <div class="form-group mt-4  d-grid gap-2 col-10 mx-auto">
                <button type="button" class="form-control btn btn-success shadow-sm" @click="redirectTo('application')">登録</button>
            </div>
            <div class="form-group d-grid gap-2 col-10 mx-auto">
                <button type="button" class="form-control btn btn-secondary shadow-sm" @click="redirectTo('register')">戻る</button>
            </div>
        </div>
    </div>
</form>

<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="registerModalLabel">Register</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>

</body>
</template>

<script>

export default {
    methods: {
        redirectTo(routeName) {
            this.$router.push({ name: routeName });
        }
    },
};
</script>

<style scoped>
/* View-specific styles go here */
</style>
