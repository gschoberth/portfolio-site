<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <a class="header-logo" href="/" aria-label="Back to home page">
      <img src="@/assets/svg/logo.svg" />
    </a>
    <nav class="header-nav-links">
      <RouterLink to="/" class="link">Works</RouterLink>
      <RouterLink to="/works">About</RouterLink>
      <RouterLink to="/about">Email Me</RouterLink>
      <div class="disabled">Arcade</div>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  padding: 24px 16px 0;
  box-sizing: border-box;
  mix-blend-mode: difference;
  display: flex;
  justify-content: flex-end;
  transition: all 0.25s ease;
}

.header-logo {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.25s ease;
  width: 32px;
  aspect-ratio: 1;

  & img {
    width: 100%;
  }
}

.header-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 16px;

  font-size: 12px;
  font-family: 'JOST', sans-serif;
  font-weight: 400;
  text-align: right;

  .disabled {
    color: $disabled-color;
  }
}
</style>
