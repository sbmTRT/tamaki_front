  <template>
  <body class="container-sm">
    <hr>
    <h4>セクション情報一覧</h4> <br>
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

    <!-- delete modal -->
    <div class="modal fade" id="deleteModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content card-danger card-outline">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="far fa-trash-alt text-danger"></i>
              テーブル情報（削除）
            </h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row justify-content-center text-sm">
                <div class="col-sm-4"><b class="mr-1">[ユーザーID] : </b>{{selectedDataRow.USERID}}</div>
                <div class="col-sm-4"><b class="mr-1">[ユーザー名] : </b>{{selectedDataRow.USER_NAME}}</div>
                <div class="col-sm-4"><b class="mr-1">[メール] : </b>{{selectedDataRow.USER_EMAIL}}</div>
              </div>
              <div class="row justify-content-center text-sm">
                <div class="col-sm-4"><b class="mr-1">[役割] : </b>{{selectedDataRow.ROLE}}</div>
                <div class="col-sm-4"><b class="mr-1">[認証フラグ] : </b>{{selectedDataRow.AUTH_FLAG}}</div>
                <div class="col-sm-4"></div>
              </div>
              <br />
                <div class="form-check mt-3">
                    <input v-model="checkboxChecked" class="form-check-input" type="checkbox" id="check1" name="option1" value="something">
                    <label class="form-check-label">上記を削除いたします。</label>
                </div>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="dataDelete" :disabled="!checkboxChecked">削除</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->


    <!-- edit modal -->
    <div class="modal fade" id="editModal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content card-warning card-outline bg-ghostwhite">
          <div class="modal-header">
            <h4 class="modal-title"><i class="far fa-copy text-warning"></i> テーブル情報（編集）</h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-8"></div>
                <div class="col-sm-4">
                  <div class="container-fluid">
                    <div class="row float-right">
                      <div class="col-sm-auto text-sm"><b class="font-mistyrose">■</b>：入力必須項目</div>
                      <div class="col-sm-auto text-sm"><b class="font-lightcyan">■</b>：入力項目</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group text-sm">
                        <label for="user_id" class="form-label">ユーザーID</label>
                        <input type="text" class="form-control" id="user_id" name="user_id" v-model="selectedDataRow.USERID">
                        <div class="invalid-feedback">
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group text-sm">
                        <label for="user_id" class="form-label">ユーザー名</label>
                        <input type="text" class="form-control" id="user_id" name="user_id" v-model="selectedDataRow.USER_NAME">
                        <div class="invalid-feedback">
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group text-sm">
                        <label for="user_id" class="form-label">メール</label>
                        <input type="text" class="form-control" id="user_id" name="user_id" v-model="selectedDataRow.USER_EMAIL">
                        <div class="invalid-feedback">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-sm-3">
                      <div class="form-group text-sm">
                        <label for="user_id" class="form-label">役割</label>
                        <input type="text" class="form-control" id="user_id" name="user_id" v-model="selectedDataRow.ROLE">
                        <div class="invalid-feedback">
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group text-sm">
                        <label for="user_id" class="form-label">認証フラグ</label>
                        <input type="text" class="form-control" id="user_id" name="user_id" v-model="selectedDataRow.AUTH_FLAG">
                        <div class="invalid-feedback">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            <button type="button" class="btn btn-warning" @click="dataEdit">編集</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

  </body>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import toastr from 'toastr';
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";
import { dtOption, dtColumn } from '../../components/Update/js/dtOption.js';

const userData        = ref([]);
const sessionData     = ref([]);
const selectedData    = ref('');
const checkboxChecked = ref(false);
const authority       = ref(false);
const data = {};
const config = {
  withCredentials: true,
};

const selectedDataRow = ref({
  USERID     : '',
  USER_NAME  : '',
  USER_EMAIL : '',
  ROLE       : '',
  AUTH_FLAG  : '',
});

// const keyValue = 
// [
//   {
//     "key": "USERID",
//     "value": String(1111)
//   },
//   {
//     "key": "USER_NAME",
//     "value": String(1111)
//   }
// ];

// Datatables Package Activation
DataTable.use(DataTablesLib);

//Sessioon Start
const sessionStart = async () =>{
  const url = 'http://localhost:8082/start';
  await axios
    .post(url, data, config)
    .then((response) => {
      authority.value = true;
    })
    .catch((error) => {
      toastr.error('セクション設定エラー');
      authority.value = false;
    });
}

//Get API Response Data
const dataGet = async () => {
  const url = 'http://localhost:8082/getAll';
  await axios
    .get(url, config)
    .then((response) => {
      userData.value = [response.data];
    })
    .catch((error) => {
      toastr.error('セクションデータ取得エラー');
    });
};

//Sessioon Start
const dataEdit = async () =>{

  const keyValuesList = [
    { "key": "USERID",      "value": String(selectedDataRow.value.USERID) },
    { "key": "USER_NAME",   "value": String(selectedDataRow.value.USER_NAME) },
    { "key": "USER_EMAIL",  "value": String(selectedDataRow.value.USER_EMAIL) },
    { "key": "ROLE",        "value": String(selectedDataRow.value.ROLE) },
    { "key": "AUTH_FLAG",   "value": String(selectedDataRow.value.AUTH_FLAG) }
  ];

  const url = 'http://localhost:8082/setVar';
  await axios
    .post(url, keyValuesList, config)
    .then((response) => {

        if (response.data.msg === 'True') {
          // Close the modal after editing
          console.log(response.data);
          $("#editModal").modal("hide");
          toastr.success('セクションデータ編集しました');
        } else {
          console.log(response.data);
          toastr.error('セクションデータ編集エラー');
        }
    })
    .catch((error) => {
      toastr.error('セクション設定エラー');
    });
}

//Delete row from datatable
const dataDelete = async () => {
  // Check if the checkbox is checked
  if (checkboxChecked.value) {
    // Get the index of the selected row
    const selectedRowIndex = userData.value.indexOf(selectedDataRow.value);

    // Check if the selected row is found in the array
    if (selectedRowIndex !== -1) {
      // Remove the selected row from the array
      await axios
        .post('http://localhost:8082/delete', {}, { withCredentials: true })
        .then((response) => {
          if(response.data.msg == 'True') {
            $("#deleteModal").modal("hide");
            userData.value.splice(selectedRowIndex, 1);
            checkboxChecked.value = false;
            toastr.success('セクションデータ削除しました');
          }else{
            toastr.error('セクションデータ削除エラー');
          }
        })
        .catch((error) => {
          toastr.error('セクションデータ削除エラー');
        });
    } else {
      toastr.warning('選択した行が見つかりません');
    }
  } else {
    // Notify the user that the checkbox must be checked
    toastr.warning('選択した行が見つかりません');
  }
};

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
    // Session Start
    await sessionStart();

    if (authority.value == false){
      throw new Error('データにアクセスする権限がありません');
    }

    // Get Session Data
    await dataGet();

    // Handle click event for the "削除" button
    $(document).on("click", "#delete_btn", function () {
      const idx = $(this).data("jnum");
      selectedDataRow.value = userData.value[idx];
      // Show confirm modal
      $("#deleteModal").modal({ backdrop: 'static' });
      $("#deleteModal").modal("show");
    });

    // Handle click event for the "編集" button
    $(document).on("click", "#edit_btn", function () {
      const idx = $(this).data("jnum");
      selectedDataRow.value = userData.value[idx];
      // Show confirm modal
      $("#editModal").modal({ backdrop: 'static' });
      $("#editModal").modal("show");
    });

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>
