// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login.vue';
import Task from '../views/Task.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/dashboard',
    component: Task,
    name: 'dashboard'
  }
];

const router = new VueRouter({
  routes
});

export default router;
