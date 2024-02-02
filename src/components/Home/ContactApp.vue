<template>
  <div class="blue-background-color py-5">
    <div class="container py-4">
      <div class="p-3 px-md-0">
        <div class="mb-5">
          <h3 class="text-white fw-bolder">Send me a message</h3>
          <p class="green-color w-100 w-md-50">Got a question, proposal, or just want to say hello? Interested in working together? Feel free to reach out!</p>
        </div>
        <div class="d-md-flex align-items-center gap-5">
          <div class="d-flex align-items-center gap-2 me-3 mb-4 mb-md-0">
            <div>
              <font-awesome-icon :icon="['fas', 'map']" style="color: #ccf281;" class="border-icon rounded-circle p-3" />
            </div>
            <div>
              <p class="green-color fw-bolder ms-2 m-auto title-icon">Located in</p>
              <p class="text-white ms-2 m-auto ">Montréal, QC</p>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <div>
              <font-awesome-icon :icon="['fas', 'envelope']" style="color: #ccf281;" class="border-icon rounded-circle p-3" />
            </div>
            <div>
              <p class="green-color fw-bolder ms-2 m-auto title-icon">Mail</p>
              <a href="mailto:mickaelriss6@gmail" class="text-white ms-2 m-auto ">mickaelriss6@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactApp'
}
</script>

<style lang="scss" scoped>
  .border-icon {
    border: 1px solid #ccf281;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .title-icon {
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }
</style>
