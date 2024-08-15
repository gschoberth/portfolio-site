<script setup>
import {} from 'vue';
import NavHeader from './components/NavHeader.vue';
import AnimTestView from './views/AnimTestView.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavHeader />
  <div class="container" id="main-content">
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  max-width: 100dvw;
  scrollbar-width: thin;
  overflow: hidden;
}
</style>
