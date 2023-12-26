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
                    <button type="button" class="form-control btn btn-success shadow-sm  mb-3" data-bs-toggle="modal" data-bs-target="#myModal">登録</button>
                </div>
                <div class="form-group d-grid gap-2 col-10 mx-auto">
                    <button type="button" class="form-control btn btn-secondary shadow-sm" @click="redirectTo('register')">戻る</button>
                </div>
            </div>
        </div>
        <!-- The Modal -->
        <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">お知らせ</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                {{ message }}
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">戻る</button>
            </div>

            </div>
        </div>
        </div>
    </form>
</body>
</template>

<script>
import liff from "@line/liff";

export default {
    methods: {
        redirectTo(routeName) {
            this.$router.push({ name: routeName });
        }
    },
    data() {
        return {
        message: "",
        error: "",
        };
    },
    mounted() {
        liff
        .init({
            liffId: import.meta.env.VITE_LIFF_ID
        })
        .then(() => {
            this.message = "LIFF init succeeded.";
        }).catch((e) => {
            this.message = "LIFF init failed.";
            this.error = `${e}`;
        });
    }
};
</script>

<style scoped>
/* View-specific styles go here */
</style>
