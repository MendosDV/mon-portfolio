<template>
  <div class="modal fade" :id="'exampleModalToggle' + imageId" aria-hidden="true" :aria-labelledby="'exampleModalToggleLabel' + imageId" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="image" alt="modal image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalImage',
  props: {
    image: String,
    imageId: Number
  }
}
</script>

<style>
  @media screen and (min-width: 768px) {
    .modal-dialog {
      max-width: 70% !important;
    }
  }
</style>
