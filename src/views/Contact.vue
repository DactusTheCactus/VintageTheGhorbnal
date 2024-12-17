<template>
  <div class="contact-page">
    <h1>Contattateci</h1>
    <div class="contact-content">
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="message">Messaggio</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit">Manda Messaggio</button>
      </form>
      <div class="contact-info">
        <h2>Veniteci a visitare!</h2>
        <p>Piazza Vittorio Veneto, Pinerolo (TO)</p>
        <p>20 - 21 - 23 Dicembre</p>
        <p>Orari: 10:00 - 18:00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.contact-form {
  border: var(--border-simple);
  padding: var(--spacing-md);
  background: var(--color-background);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-family: var(--font-display);
  color: var(--color-primary);
}

input,
textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--color-accent);
  background: var(--color-secondary);
  font-family: var(--font-body);
}

button {
  background: var(--color-accent);
  color: var(--color-secondary);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-display);
  cursor: pointer;
  transition: var(--transition-default);
}

button:hover {
  background: var(--color-primary);
}

.contact-info {
  border: var(--border-ornate);
  padding: var(--spacing-md);
  background: var(--color-background);
}

.contact-info h2 {
  font-family: var(--font-display);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.contact-info p {
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-body);
  color: var(--color-text);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>