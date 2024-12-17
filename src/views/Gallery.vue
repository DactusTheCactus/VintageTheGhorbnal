<script setup>
import VintageSlider from '../components/gallery/VintageSlider.vue';

</script>

<template>
  <div class="gallery-page">
    <h1>Exhibition Gallery</h1>
    <VintageSlider :images="galleryImages" />
    <div class="gallery-grid">
      <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
        <img src="/images/placeholder.jpg" :alt="image.caption">
        <div class="caption">{{ image.caption }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-page {
  padding: calc(var(--spacing-lg) * 2) var(--spacing-md);
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: var(--font-display);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.gallery-item {
  position: relative;
  border: var(--border-simple);
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  filter: sepia(20%);
  transition: var(--transition-default);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(44, 24, 16, 0.8);
  color: var(--color-secondary);
  padding: var(--spacing-sm);
  font-family: var(--font-display);
  text-align: center;
}
</style>