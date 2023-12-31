import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
