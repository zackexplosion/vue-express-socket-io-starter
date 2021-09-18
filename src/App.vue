<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="header">
      <router-link to="/">
        <h1>WAVE</h1>
      </router-link>
    </div>

    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  max-width: 768px;
  max-height: 100vh;
  margin: 0 auto;
  height: 100vh;
  padding: 30px;
}

#header {
  height: 50px;
  text-align: center;
}

.selectable-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  .ant-avatar.selected {
    background: rgb(3, 3, 117);
  }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
