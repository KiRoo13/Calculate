<template>
  <div>
    <CalculateIn></CalculateIn>
    <HelloWorld :mas="massege"></HelloWorld>
  </div>
</template>

<script>

import CalculateIn from './components/CalculateIn.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    CalculateIn,
    HelloWorld
},
data() {
  return {
    massege: 'Component template should contain exactly one root element.'
  }
},
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
