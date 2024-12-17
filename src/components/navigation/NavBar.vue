<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import GlassCard from '../ui/GlassCard.vue';

const isScrolled = ref(false);
const links = [
  { name: 'Home', path: '#home' },
  { name: 'Products', path: '#products' },
  { name: 'About', path: '#about' },
  { name: 'Contact', path: '#contact' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <GlassCard>
      <div class="nav-content">
        <div class="logo">Brand</div>
        <div class="nav-links">
          <a v-for="link in links" 
             :key="link.name" 
             :href="link.path"
             class="nav-link">
            {{ link.name }}
          </a>
        </div>
      </div>
    </GlassCard>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-sm);
  transition: var(--transition-default);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-default);
}

.nav-link:hover {
  opacity: 0.7;
}</style>