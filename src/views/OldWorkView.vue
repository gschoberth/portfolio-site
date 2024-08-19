<script setup>
import { ref, computed, onMounted, watch, onBeforeMount, nextTick } from 'vue';
import allProjects from '../assets/works/projects.json';
// import CES2023 from '../assets/data/briefs.html?raw'
import briefFiles from '@/assets/data/briefs/index.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const htmlModules = import.meta.glob('@/assets/data/briefs/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
});

console.log(htmlModules);

gsap.registerPlugin(ScrollTrigger);

const displayProjects = ref([]);
// const displayProjects = await getProjectData();
const projects = ref([]);
const animTargetClass = '.project';

const iconAssets = {
  android: new URL('@/assets/svg/icon-android.svg', import.meta.url),
  node: new URL('@/assets/svg/icon-node.svg', import.meta.url),
  sass: new URL('@/assets/svg/icon-sass.svg', import.meta.url),
  vue: new URL('@/assets/svg/icon-vue.svg', import.meta.url),
};

function createProjectsAnim() {
  console.log('Finished');
  // console.log(document.getElementsByClassName('project'));

  const panels = gsap.utils.toArray('.project');
  // console.log(panels);
  // const panels = projects.value;

  panels.forEach((panel, index) => {
    ScrollTrigger.create({
      trigger: panel,
      pin: true,
      start: 'top 312px',
      pinSpacing: false,
    });

    if (index < panels.length - 1) {
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panels[index + 1],
          start: 'top 80%',
          end: 'top 40%',
          pinSpacing: false,
          scrub: true,
          marker: true,
        },
        '--projectBlur': 20,
        opacity: '0',
        scale: 0.4,
      });
    }
  });
}

async function getProjectData() {
  const values = [];
  allProjects.forEach(async (project) => {
    if (project.enabled) {
      const { title, careertitle, company, tech } = project;

      const temp = await briefFiles[project.code]();

      values.push({
        // displayProjects.push({
        //   // displayProjects.value.push({
        title,
        careertitle,
        company,
        tech,
        extended: 'Test Extend',
        summary: temp,
      });
    }
  });

  return values;
}

const strTest = `One Line

Line Two.
`;

onMounted(async () => {});
</script>

<template>
  <section class="section works">
    <h2>
      some notable <span class="highlight">works</span> And
      <span class="highlights">Cool stuff</span> I've <span class="highlight">Done</span> During My
      <span class="highlight">Career</span>
    </h2>
    <div>{{ strTest }}</div>
    <!-- <div
      v-for="(project, index) in displayProjects"
      :key="`project-${index}`"
      :class="['project', `project-${index + 1}`]"
      ref="projects"
    >
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
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.works {
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 312px;
}

.works-content {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

h2 {
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

.project {
  @each $key, $color in $project-colors {
    &-#{$key} {
      background-color: $color;
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 336px;
  }

  &:last-of-type {
    margin-bottom: 64px;
  }

  filter: blur(calc(var(--projectBlur) * 1px));
  max-width: 336px;
  aspect-ratio: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  place-items: flex-start flex-start;

  color: #fff;
  border-radius: 16px;
  box-shadow: 4px 6px 4px 0px #000;
  font-family: 'JOST', sans-serif;

  &-title {
    width: 100%;
    font-size: 16px;
    position: relative;
    margin-bottom: 16px;
    line-height: 100%;
    font-weight: 700;

    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid white;
    }
  }

  &-subtitle {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  &-body {
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
  }

  &-footer {
    width: 100%;
    margin-top: auto;
    display: flex;
    place-items: center flex-start;
    gap: 12px;
    max-height: 32px;

    .icon {
      width: 32px;
    }

    .arrow {
      margin-left: auto;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
// }
</style>
