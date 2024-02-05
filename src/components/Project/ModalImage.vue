<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="project.image" alt="modal image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
  <img :src="project.image" :alt="project.name" class="img-fluid rounded" data-bs-toggle="modal" href="#exampleModalToggle">
</template>

<script>
export default {
  name: 'ModalImage',
  props: {
    project: Object
  }
}
</script>

<style>
  .modal-dialog {
    max-width: 70% !important;
  }
</style>
