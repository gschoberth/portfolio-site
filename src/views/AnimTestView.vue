<script setup>
import { onMounted } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function createTimeline() {
  const panels = gsap.utils.toArray('.box');

  const scrollTrigger = {
    start: 'top 80%',
    end: 'top 40%',
    // pin: true,
    pinSpacing: false,
    scrub: true,
    markers: true,
    // end: 'bottom bottom',
    // end: 'bottom 100%',
  };

  panels.some((panel, index) => {
    ScrollTrigger.create({
      trigger: panel,
      pin: true,
      start: 'top 312px',
      pinSpacing: false,
    });

    if (index < panels.length - 1) {
      gsap.to(panel, {
        scrollTrigger: { trigger: panels[index + 1], ...scrollTrigger },
        blur: '20px',
        opacity: '0',
        scale: 0,
      });
    }
  });
}

onMounted(() => {
  createTimeline();

  // panels.forEach((panel, index) => {
  //   ScrollTrigger.create({
  //     trigger: panel,
  //     start: 'top 312px',
  //     pin: true,
  //     pinSpacing: false
  //   })
  // })
});
</script>

<template>
  <div class="parent">
    <div class="boxcontainer">
      <div class="box" style="background: pink">Test One</div>
      <div class="box" style="background: green">Test One</div>
      <div class="box" style="background: blue">Test One</div>
      <div class="box" style="background: red">Test One</div>
      <div class="box" style="background: orange">Test One</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  height: 300vh;
}

.boxcontainer {
  width: 100%;
  margin-top: 312px;
  box-sizing: border-box;
}

.box {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  // background: orange;
}
</style>
