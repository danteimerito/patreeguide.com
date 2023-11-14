<template>
    <div class="single-tree-contain">
        <div class="feature-card">
            <h1>Easily Identify Trees in Pennsylvania</h1>
            <h1>How it works:</h1>
            <p><span>Step 1: </span> Open the menu and select the tree's features</p>
            <p><span>Step 2: </span> Click "View Results" to find a listing of possible matches</p>
            <p><span>Step 3: </span> Click on a tree in the list to see more information</p>
            <button @click="toggleMenu">Begin the Journey</button>
        </div>
    </div>
</template>

<script>


import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Intro',
  watch: {
    '$route': {
      immediate: true,
      handler() {
          this.updateBodyBackground();
      }
    }
  },
  methods: {
    toggleMenu() {
                this.$store.commit('toggleMenu');
    },
    updateBodyBackground() {
      // First set the blurred image
      
      // document.body.style.backgroundImage = `url(${this.blurredBackground})`;
      document.getElementById("background").style.backgroundImage = `url(../img/bg_forest3_small.jpg)`;

      // Then load the full image
      this.loadFullImage();
    },
    loadFullImage() {
      const img = new Image();
      img.src = this.fullBackground;
      img.onload = () => {
          // On image load, set the full background image
          // document.body.style.backgroundImage = `url(${img.src})`;
          // document.body.classList.add('background-fade-in');
          document.getElementById("background").style.backgroundImage = `url(../img/bg_forest3.jpg)`;
          document.getElementById("background").classList.add('background-fade-in');
      };
    },
  },
  computed: {
    blurredBackground() {
        // Assuming you have a low-res version of the default background
        const defaultBlurredImageUrl = '/img/bg_forest3_small.jpg';
        
        return this.tree && this.tree.backgroundSmall ? `/img/${this.tree.backgroundSmall}` : defaultBlurredImageUrl;
    },
    fullBackground() {
        // Your existing logic to determine the URL of the full background
        const defaultImageUrl = '/img/bg_forest3.jpg';
        return this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;
    },
    isAnyFilterSelected() {
      return [
        this.selectedTypes, 
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
        'selectedNeedles',
        'selectedClusters',
        'selectedLeafTypes',
        'selectedCompoundStructures',
        'selectedLeafAttachments',
        'selectedFallColors'
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