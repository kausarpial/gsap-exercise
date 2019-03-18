<template>
  <div class="home">
    <BoxAnimation></BoxAnimation>
    <DailyFire></DailyFire>
  </div>
</template>

<script>
  import BoxAnimation from '@/components/BoxAnimation.vue';
  import DailyFire from '@/components/DailyFire.vue';
  export default{
    components: {
      BoxAnimation,
      DailyFire
    }
  }
</script>
