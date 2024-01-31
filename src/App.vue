<template>
  <NavbarApp />
  <div class="container">
    <h1 class="fw-bold text-center mt-4">Hello World</h1>
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp,
  }
}
</script>

<style>
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
