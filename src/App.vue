<template>
  <div id="app" @mousemove="followMouse($event)" @mouseenter="followMouse($event)">
    <div class="follower" ref="follower"></div>
    <router-view />
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  methods: {
    followMouse(e) {
      console.log(e.clientX+' '+e.clientY);
      const { follower } = this.$refs;
      TweenMax.to(follower, .8, {
          left: e.clientX,
          top: e.clientY,
          ease: Expo.easeOut
      });
    }
  },
}
</script>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $white;
    background: $body_bg;
    min-height: 100vh;
    font-family: $primary_font;
    .follower{
      position: fixed;
      z-index: 100;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
      margin: -5px 0 0 -5px;
      background: $primary_color;
      border-radius: 80%;
      backface-visibility: hidden;
      pointer-events: none;
      &::before{
        position: absolute;
        content: '';
        width: 50px;
        height: 50px;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: 2px solid rgba($color: $white, $alpha: 0.3);
      }
    }
  }
</style>