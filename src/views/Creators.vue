<script setup>
const creators = [
  {
    id: 1,
    name: 'Elizabeth Montgomery',
    role: 'Lead Curator',
    bio: 'With over 20 years of experience in vintage collections',
    image: '/images/curator-1.jpg'
  },
  {
    id: 2,
    name: 'James Harrison',
    role: 'Restoration Expert',
    bio: 'Specializing in early 20th century artifacts',
    image: '/images/curator-2.jpg'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Historical Researcher',
    bio: 'PhD in Historical Preservation and Authentication',
    image: '/images/curator-3.jpg'
  }
];
</script>

<template>
  <div class="creators-page">
    <h1>Meet Our Curators</h1>
    <div class="creators-grid">
      <div v-for="creator in creators" :key="creator.id" class="creator-card">
        <div class="creator-image">
          <img src="/images/placeholder.jpg" :alt="creator.name">
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
  object-fit: cover;
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