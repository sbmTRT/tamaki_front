<template>
<form @submit.prevent="submitForm">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>区分</label>
            <Select2 v-model="r_m001c.ope_type" :options="ope_type_list.r" id="r_c_ope_type_m001c" name="r_c_ope_type_m001c" :settings="r_m001c_class.ope_type" />
            <div id="r_ope_type"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.ope_type}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>処理日</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>支社局</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>事務所</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>道路</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>ＩＣ(自)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>ＩＣ(至)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>盛土番号</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>上下線区分</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>ルート区分</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>完成暫定区分</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <label class="text-info">管理</label>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＫＰ(自)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＫＰ(至)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ランプ</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＮＯ(自)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＮＯ(至)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <label class="text-info">建設</label>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＳＴＡ(自)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＳＴＡ(至)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ランプ</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＮＯ(自)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group text-sm">
            <label>ＮＯ(至)</label>
            <input type="text" class="form-control form-control-sm bg-mistyrose" readonly="readonly" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group text-sm">
            <label>支社局</label>
            <input type="text" class="form-control form-control-sm bg-lightcyan" readonly="readonly" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group text-sm">
            <label>事務所</label>
            <input type="text" class="form-control form-control-sm bg-lightcyan" readonly="readonly" />
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
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
