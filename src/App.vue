
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

