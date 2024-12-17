<script setup>
</script>

<template>
  <section id="who-we-are" class="section">
    <h2>Who We Are</h2>
    <div class="content">
      <p>We are a passionate group of organizers dedicated to bringing the community together through memorable events. Our mission is to create experiences that inspire and connect people.</p>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-avatar"></div>
          <h3>Jane Smith</h3>
          <p>Event Director</p>
        </div>
        <div class="team-member">
          <div class="member-avatar"></div>
          <h3>John Doe</h3>
          <p>Creative Lead</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
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

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  text-align: center;
}

.member-avatar {
  width: 120px;
  height: 120px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
</style>