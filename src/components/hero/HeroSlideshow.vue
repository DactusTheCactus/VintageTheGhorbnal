<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: 'Innovation Redefined',
    subtitle: 'Experience the future of design'
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: 'Crafted with Precision',
    subtitle: 'Every detail matters'
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    title: 'Seamless Integration',
    subtitle: 'Technology that works for you'
  }
];
</script>

<template>
  <div class="hero-slideshow">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :speed="1000"
      :loop="true"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <div class="slide" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.subtitle }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.hero-slideshow {
  height: 100vh;
  width: 100%;
}

.slide {
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--color-white);
  z-index: 2;
}

h1 {
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  animation: slideUp 0.6s ease-out;
}

p {
  font-size: 1.5rem;
  animation: slideUp 0.6s ease-out 0.2s;
  animation-fill-mode: both;
}

.slide::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}</style>