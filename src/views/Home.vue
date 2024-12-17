<script setup>
import VintageSlider from '../components/gallery/VintageSlider.vue';

const heroImages = [
  {
    url: new URL('..\assets\REader.jpg', import.meta.url).href,
    caption: "Fotocamera di Giolitti"
  },
  {
    url: new URL('..\assets\Datcu.jpg', import.meta.url).href,
    caption: "Lettore Vinili di Karl Marx"
  },
  {
    url: new URL('..\assets\typewriter.jpg', import.meta.url).href,
    caption: "Macchina da scrivere ricreativa di Bovi"
  }
];
</script>

<template>
  <main class="home">
    <section class="hero">
      <VintageSlider :images="heroImages" />
      <div class="hero-content">
        <h1>Fiera Vintage</h1>
        <p>Torna indietro nel tempo con la nostra fiera vintage!</p>
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