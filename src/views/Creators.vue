<script setup>
const creators = [
  {
    id: 1,
    name: 'Alexandru Datcu',
    role: 'Fondatore - HR',
    bio: 'Specializzazione in Fossili e Macchine fotografiche',
    image: new URL('../assets/Datcu.png', import.meta.url).href
  },
  {
    id: 2,
    name: 'Yasser Ghorbal',
    role: 'Fondatore - Organizzatore',
    bio: "Specializzazione nell'abbigliamento vintage ed era presente alla creazione della costituzione",
    image: new URL('../assets/Ghorbal.png', import.meta.url).href
  },
  {
    id: 3,
    name: 'Favij',
    role: 'PR lead',
    bio: 'Dottorato in realazioni internazionali',
    image: new URL('../assets/Jellam.jpg', import.meta.url).href
  }
];
</script>

<template>
  <div class="creators-page">
    <h1>Incontra il nostro team:</h1>
    <div class="creators-grid">
      <div v-for="creator in creators" :key="creator.id" class="creator-card">
        <div class="creator-image">
          <img :src="creator.image" :alt="creator.name">
        </div>
        <div class="creator-info">
          <h3>{{ creator.name }}</h3>
          <h4>{{ creator.role }}</h4>
          <p>{{ creator.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.creators-page {
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

.creators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.creator-card {
  text-align: center;
  border: var(--border-simple);
  padding: var(--spacing-md);
  background: var(--color-background);
}

.creator-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto var(--spacing-md);
  border: var(--border-simple);
}

.creator-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: sepia(20%);
}


.creator-info h3 {
  font-family: var(--font-display);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.creator-info h4 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-body);
}

.creator-info p {
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.6;
}
</style>