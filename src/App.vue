<template>
<body>
    <div class="container-fluid">
        <form>
            <div class="card">
                <div class="card-header bg-success">
                    <!-- Card Header Content -->
                    <h5 class="card-title text-white">登録申込</h5>
                </div>
                <div class="card-body">
                    <form>
                        <label class="text-success">申請者</label>
                        <div class="ml-3">
                            <label>氏名</label>
                            <input type="text" class="form-control" />
                            <label>住所</label>
                            <input type="text" class="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </form>
    </div>
    <script>
    </script>
</body>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex: 1;
}
</style>
