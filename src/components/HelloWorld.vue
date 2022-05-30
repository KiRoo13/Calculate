<template>
  <div class="hello">
    <p>{{ mas }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    mas: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
