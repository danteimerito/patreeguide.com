import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import TreeDetails from '../components/TreeDetails'
import NotFound from '../views/NotFound'
import store from '../store/store.js' // Adjust the path to your store

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
          document.title = 'PA Tree Guide';
          next();
        }
    },
    {
        path: '/trees/:slug',
        name: 'TreeDetails',
        component: TreeDetails,
        props: true,
        beforeEnter: (to, from, next) => {
          document.title = 'PA Tree Guide';
          next();
        }
    },
    {
      path: '/:catchAll(.*)*', // This will match all routes
      name: 'NotFound',
      component: NotFound,
      beforeEnter: (to, from, next) => {
        document.title = '404 Not found';
        next();
      }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          };
        }
        if (savedPosition) {
          return savedPosition;
        }
        return { top: 0 };
      },
})

export default router