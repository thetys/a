import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Documentation from '@/views/Documentation.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation,
      children: [
        {
          path: ':type(characters|places|occurences)/:id',
          name: 'documentation-details'
        }
      ]
    }
  ]
});
