<template>
<body class="container-sm mt-5">
    <div class="card mt-5">
        <div class="card-header bg-success text-white">
            登録申込
        </div>
        <div class="card-body">
            <div class="card mt-2">
                <div class="card-body">
                    <label class="text-success"> 申込者 </label>
                    <form>
                        <div class="form-group">
                            <label>氏名</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>住所</label>
                            <input type="text" class="form-control">
                        </div>
                    </form>
                </div>
            </div>
            <div class="card mt-2">
                <div class="card-body">
                    <label class="text-success"> 対象物件 </label>
                    <form>
                        <div class="form-group">
                            <button type="button" class="btn btn-success shadow-sm col-sm-6" @click="redirectTo('register')">登録カード入力</button>
                            <button type="button" class="btn btn-secondary shadow-sm col-sm-6">未入力</button>
                        </div>
                    </form>
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
