<script setup>

import ProjectName from "@/components/ProjectName.vue";
import Contacts from "@/components/Contacts.vue";
import {RouterLink} from "vue-router";

let currentYear = new Date(). getFullYear();
</script>

<template>
  <footer class="footer">
    <RouterLink class="footer__title" to="/"><h5 class="footer__title"><ProjectName />, {{currentYear}}</h5></RouterLink>
    <Contacts />
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 48px 31px;
  background: var(--color-background-element);
  align-items: center;
  margin-top: auto;
  margin-bottom: 0;
  flex: 0 0 auto;
}

.footer__title {
  text-decoration: none;
}

@media screen and (max-width: 420px) {
  .footer {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}
</style>
