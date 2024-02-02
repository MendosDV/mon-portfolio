<template>
  <div>
    <section id="banner">
      <BannerApp/>
    </section>
    <section id="about">
      <AboutApp/>
    </section>
    <section id="projects">
      <ProjectApp/>
    </section>
    <section id="contact">
      <ContactApp/>
    </section>
  </div>
</template>

<script>
import BannerApp from '@/components/Home/Banner/BannerApp.vue'
import AboutApp from '@/components/Home/AboutApp.vue'
import ProjectApp from '@/components/Home/ProjectApp.vue'
import ContactApp from '@/components/Home/ContactApp.vue'

export default {
  name: 'HomeView',
  components: { BannerApp, AboutApp, ProjectApp, ContactApp },
}
</script>

<style>

</style>
