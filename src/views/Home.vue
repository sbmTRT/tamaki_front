<template>
<form>
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
            <Datepicker v-model="r_m001c.syori_date" locale="ja" :format="Com.format" :enableTimePicker="false" autoApply hideInputIcon inputClassName="form-control form-control-sm bg-mistyrose" name="r_syori_date_m001c" uid="r_syori_date_m001c" />
            <div id="r_syori_date"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.syori_date}}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>支社局</label>
            <Select2 v-model="r_m001c.c_shisyakyoku" :options="shisyakyoku_list.r" id="r_c_shisyakyoku_m001c" name="r_c_shisyakyoku_m001c" :settings="r_m001c_class.c_shisyakyoku" />
            <div id="r_c_shisyakyoku"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_shisyakyoku}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>事務所</label>
            <Select2 v-model="r_m001c.c_jimusyo" :options="jimusyo_list.r" id="r_c_jimusyo_m001c" name="r_c_jimusyo_m001c" :settings="r_m001c_class.c_jimusyo" />
            <div id="r_c_jimusyo"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_jimusyo}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>道路</label>
            <Select2 v-model="r_m001c.c_doro" :options="doro_list.r" id="r_c_doro_m001c" name="r_c_doro_m001c" :settings="r_m001c_class.c_doro" />
            <div id="r_c_doro"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_doro}}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>ＩＣ(自)</label>
            <Select2 v-model="r_m001c.c_ic_from" :options="ic_from_list.r" id="r_c_ic_from_m001c" name="r_c_ic_from_m001c" :settings="r_m001c_class.c_ic_from" />
            <div id="r_c_ic_from"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_ic_from}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>ＩＣ(至)</label>
            <Select2 v-model="r_m001c.c_ic_to" :options="ic_to_list.r" id="r_c_ic_to_m001c" name="r_c_ic_to_m001c" :settings="r_m001c_class.c_ic_to" />
            <div id="r_c_ic_to"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_ic_to}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <Form.Input label="盛土番号" id="r_morido_no_m001c" name="r_morido_no_m001c" v-model:class="r_m001c_class.morido_no" v-model="r_m001c.morido_no" v-model:message="r_m001c_msg.morido_no" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>上下線区分</label>
            <Select2 v-model="r_m001c.c_jyouge" :options="jyouge_list.r" id="r_c_jyouge_m001c" name="r_c_jyouge_m001c" :settings="r_m001c_class.c_jyouge" />
            <div id="r_c_jyouge"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_jyouge}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>ルート区分</label>
            <Select2 v-model="r_m001c.c_root" :options="root_list.r" id="r_c_root_m001c" name="r_c_root_m001c" :settings="r_m001c_class.c_root" />
            <div id="r_c_root"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_root}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>完成暫定区分</label>
            <Select2 v-model="r_m001c.c_kanseizantei" :options="kanseizantei_list.r" id="r_c_kanseizantei_m001c" name="r_c_kanseizantei_m001c" :settings="r_m001c_class.c_kanseizantei" />
            <div id="r_c_kanseizantei"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_kanseizantei}}
            </div>
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
          <Form.Input label="ＫＰ(自)" id="r_kan_kp_from_m001c" name="r_kan_kp_from_m001c" v-model="r_m001c.kan_kp_from" v-model:class="r_m001c_class.kan_kp_from" v-model:message="r_m001c_msg.kan_kp_from" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ＫＰ(至)" id="r_kan_kp_to_m001c" name="r_kan_kp_to_m001c" v-model="r_m001c.kan_kp_to" v-model:class="r_m001c_class.kan_kp_to" v-model:message="r_m001c_msg.kan_kp_to" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ランプ" id="r_kan_lump_m001c" name="r_kan_lump_m001c" v-model="r_m001c.kan_lump" v-model:class="r_m001c_class.kan_lump" v-model:message="r_m001c_msg.kan_lump" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ＮＯ(自)" id="r_kan_no_from_m001c" name="r_kan_no_from_m001c" v-model="r_m001c.kan_no_from" v-model:class="r_m001c_class.kan_no_from" v-model:message="r_m001c_msg.kan_no_from" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ＮＯ(至)" id="r_kan_no_to_m001c" name="r_kan_no_to_m001c" v-model="r_m001c.kan_no_to" v-model:class="r_m001c_class.kan_no_to" v-model:message="r_m001c_msg.kan_no_to" />
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
          <Form.Input label="ＳＴＡ(自)" id="r_ken_sta_from_m001c" name="r_ken_sta_from_m001c" v-model="r_m001c.ken_sta_from" v-model:class="r_m001c_class.ken_sta_from" v-model:message="r_m001c_msg.ken_sta_from" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ＳＴＡ(至)" id="r_ken_sta_to_m001c" name="r_ken_sta_to_m001c" v-model="r_m001c.ken_sta_to" v-model:class="r_m001c_class.ken_sta_to" v-model:message="r_m001c_msg.ken_sta_to" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ランプ" id="r_ken_lump_m001c" name="r_ken_lump_m001c" v-model="r_m001c.ken_lump" v-model:class="r_m001c_class.ken_lump" v-model:message="r_m001c_msg.ken_lump" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ＮＯ(自)" id="r_ken_no_from_m001c" name="r_ken_no_from_m001c" v-model="r_m001c.ken_no_from" v-model:class="r_m001c_class.ken_no_from" v-model:message="r_m001c_msg.ken_no_from" />
        </div>
        <div class="col-sm-2">
          <Form.Input label="ＮＯ(至)" id="r_ken_no_to_m001c" name="r_ken_no_to_m001c" v-model="r_m001c.ken_no_to" v-model:class="r_m001c_class.ken_no_to" v-model:message="r_m001c_msg.ken_no_to" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group text-sm">
            <label>支社局</label>
            <Select2 v-model="r_m001c.c_ken_shisyakyoku" :options="ken_shisyakyoku_list.r" id="r_c_ken_shisyakyoku_m001c" name="r_c_ken_shisyakyoku_m001c" :settings="r_m001c_class.c_ken_shisyakyoku" />
            <div id="r_c_ken_shisyakyoku"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_ken_shisyakyoku}}
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group text-sm">
            <label>工事事務所</label>
            <Select2 v-model="r_m001c.c_ken_jimusyo" :options="ken_jimusyo_list.r" id="r_c_ken_jimusyo_m001c" name="r_c_ken_jimusyo_m001c" :settings="r_m001c_class.c_ken_jimusyo" />
            <div id="r_c_ken_jimusyo"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_ken_jimusyo}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>設置箇所</label>
            <Select2 v-model="r_m001c.c_setikasyo" :options="setikasyo_list.r" id="r_c_setikasyo_m001c" name="r_c_setikasyo_m001c" :settings="r_m001c_class.c_setikasyo" />
            <div id="r_c_setikasyo"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_setikasyo}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>連絡等施設</label>
            <Select2 v-model="r_m001c.c_icjct" :options="icjct_list.r" id="r_c_icjct_m001c" name="r_c_icjct_m001c" :settings="r_m001c_class.c_icjct" />
            <div id="r_c_icjct"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_icjct}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>休憩施設</label>
            <Select2 v-model="r_m001c.c_sapa" :options="sapa_list.r" id="r_c_sapa_m001c" name="r_c_sapa_m001c" :settings="r_m001c_class.c_sapa" />
            <div id="r_c_sapa"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.c_sapa}}
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group text-sm">
            <label>供用年月日</label>
            <Datepicker v-model="r_m001c.kyouyou" locale="ja" :format="Com.format" :enableTimePicker="false" autoApply hideInputIcon inputClassName="form-control form-control-sm bg-lightcyan" name="r_kyouyou_m001c" uid="r_kyouyou_m001c" />
            <div id="r_kyouyou"/>
            <div class="invalid-feedback">
              {{r_m001c_msg.kyouyou}}
            </div>
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
