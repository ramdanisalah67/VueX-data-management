<template>
  <div class="super">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/calcul">calcul</router-link>
    </nav>
    <div class="routes"><router-view /></div>
  </div>
</template>

<style lang="scss">
.super {
  background-color: #2c3e50;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    &.router-link-exact-active {
      background: white;
      padding: 8px;
      color: blue;
      border-radius: 25px;
    }
  }
}
</style>
