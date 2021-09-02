<template>
  <div id="app">
    <Take />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Take from './components/Take/Step1.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Take,
  },
  mounted() {
  },
  data: () => ({
  }),
  methods: {},
};
</script>

<style lang="scss">
#app {
  text-align: left;
  width: 95%;
  max-width:400px;
  margin: 0 auto;
  margin-top: 40px;
}
</style>
