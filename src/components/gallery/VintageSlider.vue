<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="vintage-slider">
    <div class="slider-frame">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :loop="true"
        class="vintage-swiper"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div class="slide-content">
            <img :src="image.url" :alt="image.caption">
            <div class="caption">{{ image.caption }}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.vintage-slider {
  margin: var(--spacing-lg) 0;
}

.slider-frame {
  border: var(--border-ornate);
  padding: var(--spacing-sm);
  background: var(--color-background);
}

.slide-content {
  position: relative;
  aspect-ratio: 16/9;
}

.slide-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(20%);
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(44, 24, 16, 0.8);
  color: var(--color-secondary);
  padding: var(--spacing-sm);
  font-family: var(--font-display);
  text-align: center;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: var(--color-accent);
}

:deep(.swiper-pagination-bullet) {
  background: var(--color-accent);
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--color-primary);
}</style>