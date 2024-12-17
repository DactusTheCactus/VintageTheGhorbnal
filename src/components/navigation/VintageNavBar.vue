<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

const links = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Creators', path: '/creators' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];
</script>

<template>
  <nav class="vintage-nav">
    <div class="nav-border top"></div>
    <div class="nav-content">
      <router-link to="/" class="nav-brand">
        Vintage Exhibition
      </router-link>
      
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div :class="['nav-links', { 'active': isMenuOpen }]">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
    <div class="nav-border bottom"></div>
  </nav>
</template>

<style scoped>
.vintage-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-background);
  z-index: 1000;
}

.nav-border {
  height: 8px;
  background: repeating-linear-gradient(
    45deg,
    var(--color-accent),
    var(--color-accent) 10px,
    var(--color-secondary) 10px,
    var(--color-secondary) 20px
  );
}

.nav-content {
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  font-family: var(--font-body);
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: var(--transition-default);
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.router-link-active {
  border-bottom-color: var(--color-accent);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .menu-toggle span {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--color-accent);
    margin: 5px 0;
    transition: var(--transition-default);
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--color-background);
    padding: var(--spacing-md);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition-default);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}</style>