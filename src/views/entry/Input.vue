<template>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
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
