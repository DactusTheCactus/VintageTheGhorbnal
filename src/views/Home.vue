<script setup>
import VintageSlider from '../components/gallery/VintageSlider.vue';

const heroImages = [
  {
    url: '/images/vintage-1.jpg',
    caption: 'Classic Artifacts Exhibition 2024'
  },
  {
    url: '/images/vintage-2.jpg',
    caption: 'Timeless Treasures'
  },
  {
    url: '/images/vintage-3.jpg',
    caption: 'Historical Collection'
  }
];
</script>

<template>
  <main class="home">
    <section class="hero">
      <VintageSlider :images="heroImages" />
      <div class="hero-content">
        <h1>Vintage Exhibition</h1>
        <p>Step back in time with our curated collection of historical artifacts</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  padding-top: var(--spacing-lg);
}

.hero {
  position: relative;
  min-height: 80vh;
}

.hero-content {
  text-align: center;
  padding: var(--spacing-lg);
}

h1 {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

p {
  font-family: var(--font-body);
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
}</style>