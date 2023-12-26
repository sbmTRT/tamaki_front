<template><!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<div class="container-sm">
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
            <div class="form-group mt-4  d-grid gap-2 col-10 mx-auto mb-3">
                <button type="button" class="form-control btn btn-success shadow-sm" @click="redirectTo('application')">登録</button>
            </div>
            <div class="form-group d-grid gap-2 col-10 mx-auto">
                <button type="button" class="form-control btn btn-secondary shadow-sm" @click="redirectTo('register')">戻る</button>
            </div>
        </div>
    </div>
</form>
</div>
</html>

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
