<template>
  <div class="d-md-flex gap-5 mb-md-5 mx-md-5 align-items-center align-items-stretch">
    <div class="col-md-6 col-lg-5 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
      <ModalImage :image="project.image" :imageId="project.id" />
      <img :src="project.image" :alt="project.name" class="img-fluid rounded" data-bs-toggle="modal" :href="'#exampleModalToggle' + project.id">
    </div>
    <div class="px-md-4 col-md-6 d-flex flex-column justify-content-between">
      <div>
        <div class="d-flex align-items-center gap-1 mb-3">
          <h5 class="m-0">
            {{ project.name }}
          </h5>
            <a v-if="project.video" :href="project.video" target="_blank" alt="Video" title="Video" class="text-decoration-none text-reset">
              <span class="">- (voir la démo)</span>
            </a>
        </div>
        <p>{{ project.description }}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex gap-3">
          <span v-html="project.stack[0]"></span>
          <span v-html="project.stack[1]"></span>
        </div>
        <a :href="project.github" target="_blank" alt="Github" title="Github" class="text-decoration-none text-reset">
          <span class="me-2 fw-bold">Code</span>
          <svg xmlns="http://www.w3.org/2000/svg" style="fill:rgb(0, 0, 0)" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ModalImage from './ModalImage.vue'

export default {
  name: 'ProjectCard',
  components: { ModalImage },
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
  img {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .demo {
    padding: 6px;
    font-size: 12px;
    transition: all 0.3s;
  }
</style>
