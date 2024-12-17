<script setup>
</script>

<template>
  <section id="home" class="section">
    <h1>Welcome to City Event 2024</h1>
    <p>Join us for an unforgettable experience in the heart of the city</p>
    <button class="cta-button">Register Now</button>
  </section>
</template>

<style scoped>
.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
}

.cta-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #3aa876;
}
</style>