<script setup lang="ts">
import { ref, computed, onBeforeUnmount, onMounted } from 'vue'

const tagIndex = ref(0)
const tagCount = 4
const interval = ref()

const currIndex = computed(() => tagIndex.value % tagCount)

onMounted(() => {
  interval.value = setInterval(() => {
    tagIndex.value += 1
  }, 10 * 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
</script>

<template>
  <section class="section intro">
    <div class="hero">
      <h1>
        <p>GREGORY</p>
        <p class="shaded">SCHOBERTH</p>
      </h1>

      <div class="hero-tagline">
        <div class="tagline" :class="{ isActive: currIndex === 0 }">
          Is Making <span class="highlight">Cool Stuff</span> For The
          <span class="highlight">Web</span>
        </div>
        <div class="tagline" :class="{ isActive: currIndex === 1 }">
          Is Looking For A <span class="highlight">Job</span>
        </div>
        <div class="tagline" :class="{ isActive: currIndex === 2 }">
          Is Debugging With <span class="highlight">console.log</span>
        </div>
        <div class="tagline" :class="{ isActive: currIndex === 3 }">
          Tests In <span class="highlight">Production</span> Only
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.intro {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 36px;
  font-family: 'Bungee', sans-serif;

  p {
    font-family: 'Bungee', sans-serif;
    margin: 0;
    padding: 0;
  }

  .shaded {
    padding: 0 8px;
    background-color: white;
    color: #1e1e1e;
  }
}

.hero-tagline {
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  font-family: 'JOST', sans-serif;
  font-weight: 500;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 32px;

  .tagline {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    animation-duration: 1s;
    animation-name: tagOut;
    animation-fill-mode: forwards;

    &.isActive {
      animation-name: tagIn;

      // &::before {
      //   content: '';
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      //   border-bottom: 1px solid $disabled-color;
      //   z-index: 99;
      //   opacity: 50%;
      //   animation-name: countdown;
      //   animation-fill-mode: fowards;
      //   animation-duration: 10s;
      //   animation-timing-function: linear;
      // }
    }

    span {
      color: $secondary-color;
    }
  }
}

@keyframes tagOut {
  from {
    display: block;
    top: 0;
  }

  to {
    display: hidden;
    top: -100%;
  }
}

@keyframes tagIn {
  from {
    display: block;
    top: 100%;
  }

  to {
    top: 0;
  }
}

@keyframes countdown {
  from {
    width: 100%;
    margin-left: 0;
  }

  to {
    width: 0;
    margin-left: 100%;
  }
}
</style>
