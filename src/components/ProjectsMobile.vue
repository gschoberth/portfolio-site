<script setup>
import { defineProps } from 'vue'

const props = defineProps(['projects'])
</script>

<template>
  <div class="project" v-for="(project, index) in props.projects" :key="`project-${index}`">
    <div class="project-title">{{ project.title }}</div>
    <div class="project-subtitle">{{ project.careertitle }}</div>
    <div class="project-body"><span v-html="project.summary"></span></div>
    <div class="project-footer">
      <img
        class="icon"
        v-for="(icon, index) in project.tech"
        :key="`tech-${index}`"
        :src="iconAssets[icon]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
