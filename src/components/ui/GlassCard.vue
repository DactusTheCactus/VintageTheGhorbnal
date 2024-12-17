<script setup>
defineProps({
  blur: {
    type: String,
    default: '10px'
  }
})
</script>

<template>
  <div class="glass-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(v-bind(blur));
  -webkit-backdrop-filter: blur(v-bind(blur));
  border-radius: var(--radius-default);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--spacing-md);
  transition: var(--transition-default);
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}</style>