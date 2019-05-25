<template>
  <div class="box-animation section">
    <h2 class="sec-title">Box Animation</h2>
    <div class="box" ref="box"></div>
    <button class="btn" @click="animateBox('fire')" style="margin-right: 5px;">Forward</button>
    <button class="btn" @click="animateBox('reset')">Backward</button>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "BoxAnimation",
  methods: {
    animateBox(val) {
      const { box } = this.$refs;
      console.log(val);
      const timeline = new TimelineMax();
      if ("fire" == val) {
        timeline.to(box, 1, {
          x: "+=80",
          rotation: "+=90",
          ease: Back.easeInOut
        });
      }
      if ("reset" == val) {
        timeline.to(box, 1, {
          x: "-=80",
          rotation: "-=90",
          ease: Back.easeInOut
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 60px;
  width: 60px;
  background: $primary-color;
  border-radius: 4px;
  margin: 0 auto;
}
</style>