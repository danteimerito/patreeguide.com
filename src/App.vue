
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
}


</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'); */
#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./img/bg_conifer1.jpg');
  background-size: cover;
  z-index: -5;
}
</style>
