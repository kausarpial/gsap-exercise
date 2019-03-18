<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $white;
    background: $body_bg;
    min-height: 100vh;
    font-family: $primary_font;
  }
</style>