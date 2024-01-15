
<template>
  <!-- <div id="background"></div> -->
  <img src="" alt="" id="background" fetchPriority="high"/>
    <Header />
      <div class="container">
        
        <router-view></router-view>

        <!-- <router-view v-slot="{ Component }"> -->
          <!-- <transition name="route" mode="out-in">
            <div>
              <component :is="Component" :key="$route.path"></component>
            </div>
          </transition> -->
        <!-- </router-view>   -->

      </div>
    <Footer />
</template>

<script>
import Header from './components/Header'
import HeaderMatches from './components/HeaderMatches';
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header, 
    HeaderMatches,
    Footer
  },
  computed: {
    homePage() {
        if(this.$route.path === "/") {
            return true
        } else {
            return false
        }
    }
  },
}
</script>

<style>
  /* .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .route-enter-active {
    transition: all 0.3s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .route-leave-active {
    transition: all 0.3s ease-in;
  } */

</style>