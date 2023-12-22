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
        <modal name="confirmation-modal">
            <div slot="header" class="modal-header">
                <h5 class="modal-title">確認</h5>
            </div>
            <div slot="body" class="modal-body">本当に登録しますか？</div>
            <div slot="footer" class="modal-footer">
                <button class="btn btn-secondary" @click="hideConfirmationModal">キャンセル</button>
                <button class="btn btn-success" @click="register">登録</button>
            </div>
        </modal>
</form>
</body>
</template>

<script>

export default {
    methods: {
        redirectTo(routeName) {
            this.$router.push({ name: routeName });
        },
        showConfirmationModal() {
            this.$modal.show('confirmation-modal');
        },
        hideConfirmationModal() {
            this.$modal.hide('confirmation-modal');
        },
        register() {
            // Close the modal
            this.hideConfirmationModal();
        },
    },
};
</script>

<style scoped>
/* View-specific styles go here */
</style>
