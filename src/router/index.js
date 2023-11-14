import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import TreeDetails from '../components/TreeDetails'
import Family from '../components/Family'

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home
    },
    {
        path: '/about', 
        name: 'About',
        component: About
    },
    {
        path: '/trees/:slug',
        name: 'TreeDetails',
        component: TreeDetails,
        props: true
    },
  //   {
  //     path: '/family/:family',
  //     name: 'Family',
  //     component: Family,
  //     props: true
  // }
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