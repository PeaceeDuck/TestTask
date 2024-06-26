<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"/>
    </transition>
  </router-view>
  <Footer />
</template>

<style scoped>
.fade-enter-from {
opacity: 0;
}
.fade-enter-active {
transition: all .3s ease-out;
}
.fade-leave-to {
opacity: 0;
}
.fade-leave-active {
  transition: all .3s ease-in;
}
</style>
