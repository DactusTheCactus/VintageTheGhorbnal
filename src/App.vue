<script setup>
import VintageNavBar from './components/navigation/VintageNavBar.vue';
</script>

<template>
  <div class="vintage-app">
    <VintageNavBar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500&display=swap');
@import './styles/variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.6;
}

.vintage-app {
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>