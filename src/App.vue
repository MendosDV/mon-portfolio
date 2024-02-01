<template>
  <NavbarApp />
  <BannerApp />
  <AboutApp ref="aboutSection" id="about-section" />
  <ProjectApp ref="projectsSection" id="projects-section" />
  <ContactApp ref="contactSection" id="contact-section" />
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
  // mounted() {
  //   this.$refs.aboutSection.$el.scrollIntoView();
  //   window.scrollBy(30, -80);
  // },
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
