<template>
  <NavbarApp />
  <BannerApp />
  <AboutApp />
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import BannerApp from './components/Home/BannerApp.vue'
import AboutApp from './components/AboutApp.vue'

export default {
  name: 'App',
  components: { NavbarApp, BannerApp, AboutApp },
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
