<template>
<body class="container-sm">
    <h4>入力編集画面</h4><br>
    <a href='https://tame-planets-share.loca.lt/user_info'>データ管理API</a>
    <DataTable :options="dtOption" :columns="dtColumn" :data="userData" ref="table" class="table table-bordered table-hover table-striped table-sm text-nowrap">
      <thead class="table-dark">
        <tr>
          <th></th>
          <th>ユーザーID</th>
          <th>役割</th>
          <th>ユーザー名</th>
          <th>メール</th>
          <th>認証フラグ</th>
        </tr>
      </thead>
    </DataTable>
    <div>
      <div class="text-center">
        <button type="button" class="btn btn-primary btn-sm w-25" @click="selection()">データ選択</button>
      </div>
    </div>
    <!-- The Modal -->
    <div class="modal" id="editModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-body">
                <div class="card">
                    <div class="card-body">
                        ＜注意＞。玉城町では、情報の。。。。。
                    </div>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">
                    <label class="form-check-label">上記を確認しました。</label>
                </div>
                <div class="col-6 mx-auto mt-5">
                    <button type="button" class="form-control btn btn-success btn-block" data-bs-dismiss="modal" @click="redirectTo('/application')">承認</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</body>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import toastr from 'toastr';
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";
import { dtOption, dtColumn } from '../../components/Update/js/dtOption.js';

const userData = ref([]);

// Datatables Package Activation
DataTable.use(DataTablesLib);

const dataGet = async () => {
  //dotbm001c 取得
  await axios
    .get('https://tame-planets-share.loca.lt/user_info')
    .then((response) => {
      userData.value = response.data;
      toastr.success('データ取得されました');
    })
    .catch((error) => {
      toastr.error('システムエラー');
    });
};

const selection = () => {
  toastr.success('データが選択されました');
}

onMounted(async () => {
  // Toastr Option
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    positionClass: "toast-top-center mt-4",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "10000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  try {
    await dataGet();
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>
