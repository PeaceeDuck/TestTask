<script setup>
import { RouterLink } from 'vue-router';
import ProjectName from "@/components/ProjectName.vue";
</script>

<template>
<header class="header">
  <RouterLink class="header__title" to="/"><h1 ><ProjectName /></h1></RouterLink>
</header>
</template>

<style scoped>
.header {
  background: var(--color-background-element);
  padding: 31px 48px;
  position: fixed;
  width: 100vw;
  z-index: 2;
}

.header__title {
  text-decoration: none;
}
</style>