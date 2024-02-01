<template>
  <NavbarApp />
  <BannerApp />
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import BannerApp from './components/Home/BannerApp.vue'

export default {
  name: 'App',
  components: { NavbarApp, BannerApp },
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
