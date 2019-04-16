import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: () => import('@/App')
  },
  {
    path: '/cep',
    component: () => import('@/CepChecker')
  }
];

const router = new Router({
  mode: 'hash',
  routes
});

export default router;
export { routes };
