<template>
  <div id="app">
    <div v-if="!ready">Loading...</div>
    <div v-if="ready">
      <h1>Message From Server: {{msgFromServer}}</h1>
    </div>

    <HelloWorld />
  </div>
</template>

<script>
import { io } from 'socket.io-client'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  mounted() {
    this.setupSocket()
  },
  data: () => ({
    socket: null,
    ready: false,
    msgFromServer: '',
  }),
  methods: {
    setupSocket() {
      const socket = io()

      socket.on('connect', () => {
        console.log('websocket connected')
      })

      socket.on('hello', (data) => {
        console.log(data)
        this.msgFromServer = data.msg
        this.ready = true
      })

      this.socket = socket
    },
  },
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
