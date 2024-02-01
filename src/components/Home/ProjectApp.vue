<template>
  <div class="bg-white py-5">
    <div class="container p-5 d-flex flex-column justify-content-center align-items-center">
      <div class="m-auto effect-border">
        <h3 class="text-center fw-bolder p-5">Just wait, new projects are coming soon ... 😉</h3>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectApp',
}
</script>

<style lang="scss" scoped>
  .effect-border {
    --color: #446DF6;
    --border: 6px;
    --offset: 30px;
    --gap: 5px;

    --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),var(--color) 0;
    --_o: calc(3*var(--offset));
    padding:
      calc(var(--gap) + var(--border))
      calc(var(--gap) + var(--border) + var(--offset))
      calc(var(--gap) + var(--border) + var(--offset))
      calc(var(--gap) + var(--border));
    background:
      linear-gradient(      var(--_c)) var(--_o) var(--_o),
      linear-gradient(90deg,var(--_c)) var(--_o) var(--_o);
    background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
    background-repeat: no-repeat;
    filter: grayscale(.4);
    transition: .5s ease-out;
  }

  .effect-border:hover {
    --color: #CCF281;
    background-position: 0px 0px;
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
    filter: grayscale(0);
  }
</style>
