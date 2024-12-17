import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Creators from '../views/Creators.vue';
import Gallery from '../views/Gallery.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/creators', name: 'Creators', component: Creators },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    { path: '/contact', name: 'Contact', component: Contact }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
})

export default router;