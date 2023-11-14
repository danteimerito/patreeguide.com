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

    computed: {
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