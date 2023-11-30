
<template>
  <div id="background"></div>
    <Header />
      <div class="container">
        <router-view></router-view>  
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


  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  methods: {
    handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        this.forceRerender();
      }
    },
    forceRerender() {
      this.$forceUpdate(); // force the current component to re-render

      // If you have specific data properties to reset, do it here
      // this.myDataProperty = someDefaultValue;
    },
  },




}


</script>

<style>
</style>
