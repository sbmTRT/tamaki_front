<template>
<div class="container-sm mt-5">
    <div class="card mt-5">
        <div class="card-header">
            登録申込
        </div>
        <div class="card-body">
            <form>
                <label class="text-left">申込者</label>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control"
                        placeholder="geeks@example.com">
                </div>
                <div class="form-group mt-2">
                    <label>Example select</label>
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <label>Example textarea</label>
                    <textarea class="form-control"></textarea>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  // View-specific logic goes here
}
</script>

<style scoped>
/* View-specific styles go here */
</style>
