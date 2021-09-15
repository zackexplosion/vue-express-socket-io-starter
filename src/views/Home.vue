<template>
  <div class="home">
    <!-- <a-space direction="vertical"> -->
    <router-link to="/take">
      <a-button
        block
      >
        <a-icon type="scan" />取酒
      </a-button>
    </router-link>

    <router-link to="/save">
      <a-button
        block
      >
        <a-icon type="save" />存酒
      </a-button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
}
a {
  width: 100%;
  margin-bottom: 5em;
  /* flex: 1; */
  /* display: block; */
}
button {
  font-size: 4em;
  height: 200px;
}
</style>
