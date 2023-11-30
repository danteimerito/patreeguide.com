
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
    this.resetAllFilters();
    this.closeMenu();
  },
  methods: {
    resetAllFilters() {
      this.$store.commit('resetFilters');
    },
    closeMenu() {
      this.$store.commit('closeMenu');
    }
  },


}


</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'); */
#background {
  /* div.background must be empty in this approach 
  position: fixed;*/
  /* top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -5;  */

  /* Method 2: 
    div.background must serve as a container for the rest of the content.
  */
  /* background-size: cover;
  background-position: center;
  background-attachment: fixed; */
  
}
</style>
