import Home from './views/Home.vue';
import Documentation from '@/views/Documentation.vue';

export default [
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
