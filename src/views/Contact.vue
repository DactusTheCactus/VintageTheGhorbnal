<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <div class="contact-content">
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div class="contact-info">
        <h2>Visit Our Exhibition</h2>
        <p>123 Vintage Street</p>
        <p>Historic District</p>
        <p>Opening Hours: 10 AM - 6 PM</p>
        <p>Tuesday - Sunday</p>
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