<template>
    <div class="contain-no-padding">
        <div class="feature-card">
            <h1>Easily Identify Trees in Pennsylvania.</h1>
            <button @click="toggleMenu">Begin the Journey</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import { gtag } from 'vue-gtag';

export default {
  name: 'Intro',
  mounted() {
    this.updateBodyBackground();
  },
  methods: {
    toggleMenu() {
      // Accessing the global gtag instance
      // this.$gtag.event('click_begin_journey', {
      //   event_category: 'Button',
      //   event_label: 'Begin the Journey Button',
      //   value: 'some_value' // Optional: any value you want to pass
      // });

      this.$store.commit('toggleMenu');
    },
    updateBodyBackground() {
      // Assuming the background element exists
      const backgroundElement = document.getElementById("background");
      if (backgroundElement) {
        backgroundElement.style.backgroundImage = 'url(/img/bg_forest3_small_reverse.jpg)';
        this.loadFullImage();
      }
    },
    loadFullImage() {
      const img = new Image();
      img.src = '/img/bg_forest3_reverse.jpg';
      img.onload = () => {
        const backgroundElement = document.getElementById("background");
        if (backgroundElement) {
          backgroundElement.style.backgroundImage = 'url(/img/bg_forest3_reverse.jpg)';
          backgroundElement.classList.add('background-fade-in');
        }
      };
    },
  },
  computed: {
    blurredBackground() {
        // Assuming you have a low-res version of the default background
        const defaultBlurredImageUrl = '/img/bg_forest3_small_reverse.jpg';
        
        return this.tree && this.tree.backgroundSmall ? `/img/${this.tree.backgroundSmall}` : defaultBlurredImageUrl;
    },
    fullBackground() {
        // Your existing logic to determine the URL of the full background
        const defaultImageUrl = '/img/bg_forest3_reverse.jpg';
        return this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;
    },
    isAnyFilterSelected() {
      return [
        this.selectedTypes, 
        this.selectedFoliage,
        this.selectedNeedles, 
        this.selectedLeafTypes, 
        this.selectedLeafAttachments, 
        this.selectedFallColors, 
        this.selectedCompoundStructures, 
        this.selectedClusters
      ].some(array => array && array.length > 0);
    },  
    ...mapState([
        // If you have these as root state properties
        'selectedTypes',
        'selectedFoliage',
        'selectedNeedles',
        'selectedClusters',
        'selectedLeafTypes',
        'selectedCompoundStructures',
        'selectedLeafAttachments',
        'selectedFallColors',
        'isMenuOpen'
    ]),
  },
 
}; 
</script>

<style>
.feature-card {
    text-align:center;
}
.feature-card span {
    font-weight: bold;
    color: chartreuse;
}
.feature-card h1 {
    margin-bottom: 1rem !important;
}
</style>


