<template>
  <div class="daily-fire section pt-0">
    <h2 class="sec-title">Daily Fire Homepage</h2>
    <div class="bubble-wrapper">
      <div ref="bubble" class="bubble">
        <img class="bubble-image" :src="currentLogo">
      </div>
      <div ref="bubblePulse" class="bubble-pulse"></div>
    </div>
    <button class="btn" @click="playBubble()" style="margin-right: 5px;" v-if="isPaused">Play</button>
    <button class="btn" @click="pauseBubble()" style="margin-right: 5px;" v-if="!isPaused">Pause</button>
    <button class="btn" @click="randomiseLogo()">Random Logo</button>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "DailyFire",
  data() {
    return {
      timeline: null,
      isPaused: true,
      firstTime: true,
      logos: [
        "https://s3.ap-southeast-2.amazonaws.com/daily-fire-assets/slack-white.svg",
        "https://s3.ap-southeast-2.amazonaws.com/daily-fire-assets/discord-white.svg",
        "https://s3.ap-southeast-2.amazonaws.com/daily-fire-assets/messenger-white.png"
      ],
      currentLogo: ""
    };
  },
  mounted() {
    this.randomiseLogo();
    this.timeline = new TimelineMax({
      onComplete: () => this.timeline.restart()
    });
  },
  methods: {
    playBubble() {
      if (this.isPaused && !this.firstTime) {
        this.timeline.play();
        this.isPaused = false;
        return;
      }
      const { bubble, bubblePulse } = this.$refs;
      this.timeline.to(bubble, 0.4, {
        scale: 0.8,
        rotation: 16,
        ease: Back.easeOut.config(1.7)
      });

      this.timeline.to(
        bubblePulse,
        0.8,
        {
          scale: 0.9,
          opacity: 1
        },
        "-=0.6"
      );

      this.timeline.to(bubble, 1.2, {
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(2.5, 0.5)
      });

      this.timeline.to(
        bubblePulse,
        1.1,
        {
          scale: 3,
          opacity: 0,
          ease: Expo.easeOut
        },
        "-=1.2"
      );
      this.firstTime = false;
      this.isPaused = false;
    },
    pauseBubble() {
      this.isPaused = true;
      this.timeline.pause();
    },
    randomiseLogo() {
      const logosToSample = this.logos.filter(
        logo => logo !== this.currentLogo
      );
      this.currentLogo =
        logosToSample[Math.floor(Math.random() * logosToSample.length)];
    }
  }
};
</script>

<style lang="scss" scoped>
.bubble-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.bubble {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #272727;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}
.bubble-image {
  height: 50%;
}
</style>