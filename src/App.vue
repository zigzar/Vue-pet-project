<template>
    <navbar></navbar>
  <div class="app">
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/UI/Navbar'
export default {
    components: {
        Navbar
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        margin: 0 auto;
        padding: 15px;
        max-width: 1200px;
    }
</style>