<template>
  <NavbarApp />
  <HomeView />
  <FooterApp />
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import FooterApp from './components/FooterApp.vue'
import HomeView from './views/Home.vue'

export default {
  name: 'App',
  components: { NavbarApp, FooterApp, HomeView },
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
