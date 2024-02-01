<template>
  <NavbarApp />
  <BannerApp />
  <div></div>
  <AboutApp />
  <ProjectApp />
  <ContactApp />
  <FooterApp />
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import BannerApp from './components/Home/Banner/BannerApp.vue'
import AboutApp from './components/Home/AboutApp.vue'
import ProjectApp from './components/Home/ProjectApp.vue'
import ContactApp from './components/Home/ContactApp.vue'
import FooterApp from './components/FooterApp.vue'


export default {
  name: 'App',
  components: { NavbarApp, BannerApp, AboutApp, ProjectApp, ContactApp, FooterApp },
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
