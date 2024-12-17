<script setup>
import { ref } from 'vue';

const links = [
  { name: 'Home', path: '#home' },
  { name: 'Who We Are', path: '#who-we-are' },
  { name: 'Theme', path: '#theme' }
];
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">City Event 2024</div>
    <div class="nav-links">
      <a v-for="link in links" 
         :key="link.name" 
         :href="link.path"
         class="nav-link">
        {{ link.name }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #42b883;
}
</style>