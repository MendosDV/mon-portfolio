<template>
    <div v-html="stack.icon" :alt="stack.name"></div>
</template>

<script>
export default {
  name: 'TechStackItem',
  props: {
    stack: Object
  }
}
</script>

<style>

</style>
