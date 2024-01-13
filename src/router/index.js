import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import TreeDetails from '../components/TreeDetails'
import NotFound from '../views/NotFound'
import Sound from '../views/Sound'
// import { useGtag } from 'vue-gtag'

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
        // page titles set in component
    },
    {
      path: '/:catchAll(.*)*', // This will match all routes
      name: 'NotFound',
      component: NotFound,
      beforeEnter: (to, from, next) => {
        document.title = '404 Not found';
        next();
      }
    },
    {
      path: '/sound', 
      name: 'Sound',
      component: Sound,
      beforeEnter: (to, from, next) => {
        document.title = 'Sound | PA Tree Guide';
        next();
      }
  },
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
});

// Google Analytics tracking
// router.afterEach((to, from) => {
//   const gtag = useGtag();
  
//   gtag.pageview({
//     page_path: to.fullPath,
//     page_title: document.title
//   });
// });

export default router