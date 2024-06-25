<script setup>
import { onMounted, ref } from 'vue'

const navLeft = ref(null)
const navRight = ref(null)
const pageContent = ref(null)

onMounted(() => {
  const lWidth = navLeft.value ? navLeft.value.offsetWidth : 0
  const rWidth = navRight.value ? navRight.value.offsetWidth : 0

  pageContent.value.style.setProperty(`--leftPadding`, lWidth)
  pageContent.value.style.setProperty(`--rightPadding`, rWidth)
})
</script>

<template>
  <nav class="nav">
    <div class="navbar navbar-left" ref="navLeft"></div>
    <div class="navbar navbar-right" ref="navRight"></div>
  </nav>
  <div class="page-content" ref="pageContent"></div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background-color: #eceaed;
  min-width: 100dvw;
  min-height: 100dvh;
  position: relative;
}

.nav {
  min-width: 100%;
  min-height: 100svh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2.5rem 0;
  box-sizing: border-box;

  .navbar {
    display: block;
    width: 120px;
    box-sizing: border-box;

    &-left {
      border-right: 1px solid black;
    }

    &-right {
      border-left: 1px solid black;
    }
  }
}

.page-content {
  position: static;
  min-height: 100vh;
  padding-left: calc(var(--leftPadding) * 1px);
  padding-right: calc(var(--rightPadding) * 1px);
}
</style>
