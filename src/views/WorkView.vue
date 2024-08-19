<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import projectJSON from '@/assets/works/projects.json';

const htmlImport = import.meta.glob('@/assets/works/html/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const projects = [];
const projectDescription = {};

Object.entries(htmlImport).forEach(([path, module]) => {
  const fileName = path.split('/').pop().replace('.html', '');
  const content = module.replace(/(\r\n|\n|\r)/gm, '');

  projectDescription[fileName] = content;
});

projectJSON.forEach((item, index) => {
  if (item.enabled) {
    const { title, careertitle, company, code, tech } = item;
    const formattedProject = {
      title,
      careertitle,
      company,
      tech,
      short: projectDescription[`${code}_short`] ?? null,
      long: projectDescription[`${code}_long`] ?? null,
    };
    projects.push(formattedProject);
  }
});

onMounted(() => {});
</script>

<template>
  <section class="section-projects">
    <h2 class="projects-header">
      some notable <span class="highlight">works</span> And
      <span class="highlights">Cool stuff</span> I've <span class="highlight">Done</span> During My
      <span class="highlight">Career</span>
    </h2>

    <div class="projects-scrollable">
      <div
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        :class="['project', `project-${index + 1}`]"
      >
        {{ project.title }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects-header {
  position: fixed;
  top: 224px;
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 24px;
  font-family: 'JOST', sans-serif;
  text-transform: capitalize;
  font-weight: 400;

  .highlight {
    color: $secondary-color;
  }
}

.projects-scrollable {
  width: 100%;
  margin-top: 332px;
  display: flex;
  place-items: center flex-start;
  flex-direction: column;
}

.project {
  @each $key, $color in $project-colors {
    &-#{$key} {
      background-color: $color;
    }
  }
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 16px;
  font-family: 'JOST', sans-serif;
}
</style>
