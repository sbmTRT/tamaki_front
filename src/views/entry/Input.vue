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
                            <button type="button" class="btn btn-success shadow-sm" @click="redirectTo('register')">登録カード入力</button>
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
                <button type="button" class="form-control btn btn-success shadow-sm" @click="showConfirmationModal">登録</button>
            </div>
            <div class="form-group d-grid gap-2 col-10 mx-auto">
                <button type="button" class="form-control btn btn-secondary shadow-sm" @click="redirectTo('register')">戻る</button>
            </div>
        </div>
    </div>
</form>
</body>

<!-- m001c delete modal -->
<div class="modal fade" id="confirmation-modal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content card-danger card-outline">
      <div class="modal-header">
        <h4 class="modal-title">
          <i class="far fa-trash-alt text-danger"></i>
          盛土基本情報（削除）
        </h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row justify-content-center text-sm">
            <div class="col-sm-4"><b class="text-info mr-1">[支社局]</b></div>
            <div class="col-sm-4"><b class="text-info mr-1">[事務所]</b></div>
            <div class="col-sm-4"><b class="text-info mr-1">[道路]</b></div>
          </div>
          <div class="row justify-content-center text-sm">
            <div class="col-sm-4"><b class="text-info mr-1">[ＩＣ(自)]</b></div>
            <div class="col-sm-4"><b class="text-info mr-1">[盛土番号]</b></div>
            <div class="col-sm-4"></div>
          </div>
          <br />
          <p class="font-weight-bold text-lg text-center">上記データを削除します。<br />よろしいでしょうか。</p>
        </div>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

</template>

<script>

export default {
    methods: {
        redirectTo(routeName) {
            this.$router.push({ name: routeName });
        },
        showConfirmationModal() {
            $("#confirmation-modal").modal("show");
        },
    },
    mounted() {
        // Show the modal when the component is mounted
        $("#confirmation-modal").modal("show");
    },
};
</script>

<style scoped>
/* View-specific styles go here */
</style>
