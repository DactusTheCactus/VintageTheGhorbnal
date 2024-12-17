<script setup>
const products = [
  {
    id: 1,
    name: 'Antique Typewriter',
    description: 'A beautifully preserved 1920s Underwood typewriter',
    price: '$450',
    image: '/images/typewriter.jpg'
  },
  {
    id: 2,
    name: 'Vintage Camera',
    description: 'Classic Leica M3 from 1954',
    price: '$1,200',
    image: '/images/camera.jpg'
  },
  {
    id: 3,
    name: 'Gramophone',
    description: 'Restored Victor Talking Machine from 1915',
    price: '$850',
    image: '/images/gramophone.jpg'
  }
];
</script>

<template>
  <div class="products-page">
    <h1>Vintage Collection</h1>
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image">
          <img src="/images/placeholder.jpg" :alt="product.name">
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <span class="price">{{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-page {
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

.product-card {
  border: var(--border-simple);
  padding: var(--spacing-md);
  background: var(--color-background);
  transition: var(--transition-default);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-vintage);
}

.product-image {
  aspect-ratio: 1;
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(20%);
}

.product-info h3 {
  font-family: var(--font-display);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.price {
  display: block;
  font-family: var(--font-display);
  color: var(--color-accent);
  font-size: 1.2rem;
  margin-top: var(--spacing-sm);
}
</style>