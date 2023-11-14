<template>
    <Intro v-if="!isAnyFilterSelected" />
    <Trees v-if="isAnyFilterSelected"/>
</template>



<script>
import Trees from '../components/Trees'
import Intro from '../components/Intro'

import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Intro,
    Trees,
  },
  watch: {
    '$route': {
      immediate: true,
      handler() {
          this.updateBodyBackground();
      }
    }
  },
  methods: {
    updateBodyBackground() {
      // First set the blurred image
      
      // document.body.style.backgroundImage = `url(${this.blurredBackground})`;
      document.getElementById("background").style.backgroundImage = `url(../img/bg_pexels16_small.jpg)`;

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
          document.getElementById("background").style.backgroundImage = `url(../img/bg_pexels16.jpg)`;
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
    // Using mapState
        ...mapState({
            trees: state => state.trees,
        }),
        // Using mapGetters
        ...mapGetters([
            'getFilteredTrees', // Assuming 'getFilteredTrees' is a getter in your store
        ]),
        ...mapState([
            // If you have these as root state properties
            'selectedTypes',
            'selectedNeedles',
            'selectedClusters',
            'selectedLeafTypes',
            'selectedCompoundStructures',
            'selectedLeafAttachments',
            'selectedFallColors'

            // ... other filter states
        ]),
        filteredTreeCount() {
            return this.$store.getters.getFilteredTreeCount(
            this.selectedTypes,
            this.selectedNeedles,
            this.selectedClusters,
            this.selectedLeafTypes,
            this.selectedCompoundStructures,
            this.selectedLeafAttachments,
            this.selectedFallColors
            );
        },
  },
 
};
</script>