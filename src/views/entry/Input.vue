<template>
<body class="container-sm mt-5">
    <div class="card mt-5">
        <div class="card-header bg-success text-white">
            登録申込
        </div>
        <div class="card-body">
            <div class="card mt-2">
                <div class="card-body">
                    <label class="text-success ml-1 mt-1"> 申込者 </label>
                    <form>
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
    </div>
</body>
</template>

<script>
export default {
  // View-specific logic goes here
}
</script>

<style scoped>
/* View-specific styles go here */
</style>
