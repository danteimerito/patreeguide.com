import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import TreeDetails from '../components/TreeDetails'
import NotFound from '../views/NotFound'
// import VueGtag from "vue-gtag"
import { nextTick } from 'vue';

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
          document.title = `${to.params.slug} | patreeguide.com`; // Set a dynamic title
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
});

// Google Analytics tracking
// router.afterEach((to, from) => {
//   const gtag = useGtag();
  
//   gtag.pageview({
//     page_path: to.fullPath,
//     page_title: document.title
//   });
// });

router.afterEach((to, from) => {
  nextTick(() => {
    if (window.gtag) {
      window.gtag('config', 'G-8XHB2YVL29', {
        page_path: to.fullPath,
        page_title: document.title
      });
    }
  });
});



// router.afterEach((to, from) => {
//   // Next tick ensures the title has been updated
//   Vue.nextTick(() => {
//     if (window.gtag) { // Check if gtag is available
//       window.gtag('config', 'G-8XHB2YVL29', {
//         page_path: to.fullPath,
//         page_title: document.title
//       });
//     }
//   });
// });



export default router