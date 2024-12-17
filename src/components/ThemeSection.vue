<script setup>
</script>

<template>
  <section id="theme" class="section">
    <h2>Event Theme</h2>
    <div class="content">
      <div class="theme-card">
        <h3>Innovation & Sustainability</h3>
        <p>This year's theme focuses on bringing together innovation and sustainability in our urban environment. We'll explore how technology and environmental consciousness can create a better future for our city.</p>
      </div>
      <div class="highlights">
        <div class="highlight">
          <h4>Interactive Workshops</h4>
          <p>Hands-on learning experiences</p>
        </div>
        <div class="highlight">
          <h4>Expert Speakers</h4>
          <p>Industry leaders sharing insights</p>
        </div>
        <div class="highlight">
          <h4>Networking</h4>
          <p>Connect with like-minded individuals</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background-color: #f8f9fa;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
}

.theme-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.highlight {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #42b883;
  margin-bottom: 1rem;
}

h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
</style>