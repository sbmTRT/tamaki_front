<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="header">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" v-on:click.stop.prevent="logout" href="#" role="button" id="alert" data-toggle="tooltip" data-html="true" data-container="body" title="ログアウト">
            <i class="fas fa-power-off"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->
</template>

<script>
export default {
  // Component logic goes here
}
</script>

<style scoped>
/* Component-specific styles go here */
</style>
