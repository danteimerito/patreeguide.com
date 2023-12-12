import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import TreeDetails from '../components/TreeDetails'
import NotFound from '../views/NotFound'

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home
    },
    {
        path: '/trees/:slug',
        name: 'TreeDetails',
        component: TreeDetails,
        props: true
    },
    {
      path: '/:catchAll(.*)*', // This will match all routes
      name: 'NotFound',
      component: NotFound
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