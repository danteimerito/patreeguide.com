<template>
      <div class="results">
        <ul>
          <li v-for="tree in filteredTrees" :key="tree.slug">
              <router-link :to="{ name: 'TreeDetails', params: { 
              slug: tree.slug,
              }}" class="result-title">
                  <h1>{{ tree.nameCommon }}</h1>
              </router-link>
          </li>
        </ul>

        <div v-if="filteredTrees.length < 1" class="feature-card">
          <h1>We couldn't find any trees that match those criteria. </h1>
          <button @click="tryAgain">Try Again</button>
        </div>

      </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  data() {
    return {
      treeTypes: ['conifer', 'deciduous'],
      selectedTreeTypes: [],

      needleStructures: ['single needle', 'clustered needles', 'scaly needles'],
      selectedNeedleStructures: [],

      needleClusters: [2,3,5,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      selectedNeedleClusters: [],

      leafTypes: ['simple', 'lobed', 'compound'],
      selectedLeafTypes: [],

      compoundStructures: ['single', 'twice', 'palmate'],
      selectedCompoundStructures: [],

      leafAttachments: ['opposite', 'alternate'],
      selectedLeafAttachments: [],

      fallColors: ['red','orange','brown','yellow','green','purple'],
      selectedFallColors: []
    };
  },
    // data() {
    //     return {
    //         treeTypes: ['conifer', 'deciduous'],
    //         needleStructures: ['single needle', 'clustered needles', 'scaly needles'],
    //         needleClusters: [2,3,5,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    //         leafTypes: ['simple', 'lobed', 'compound'],
    //         compoundStructures: ['single', 'twice', 'palmate'],
    //         leafAttachments: ['opposite', 'alternate'],
    //         fallColors: ['red','orange','brown','yellow','green','purple'],
    //     };
    // },
    name: 'Trees', 
    computed: {
      ...mapState(['selectedTypes']),
      selectedTypesComputed: {
        get() {
          return this.selectedTypes;
        },
        set(value) {
          this.$store.dispatch('updateSelectedTypes', value);
        },
      },

      ...mapState(['selectedNeedles']),
      selectedNeedlesComputed: {
        get() {
          return this.selectedNeedles;
        },
        set(value) {
          this.$store.dispatch('updateSelectedNeedles', value);
        },
      },

      ...mapState(['selectedClusters']),
      selectedClustersComputed: {
        get() {
          return this.selectedClusters;
        },
        set(value) {
          this.$store.dispatch('updateSelectedClusters', value);
        },
      },

      ...mapState(['selectedLeafTypes']),
      selectedLeafTypesComputed: {
        get() {
          return this.selectedLeafTypes;
        },
        set(value) {
          this.$store.dispatch('updateSelectedLeafTypes', value);
        },
      },

      ...mapState(['selectedCompoundStructures']),
      selectedCompoundStructuresComputed: {
        get() {
          return this.selectedCompoundStructures;
        },
        set(value) {
          this.$store.dispatch('updateSelectedCompoundStructures', value);
        },
      },

      ...mapState(['selectedLeafAttachments']),
      selectedLeafAttachmentsComputed: {
        get() {
          return this.selectedLeafAttachments;
        },
        set(value) {
          this.$store.dispatch('updateSelectedLeafAttachments', value);
        },
      },

      ...mapState(['selectedFallColors']),
      selectedFallColorsComputed: {
        get() {
          return this.selectedFallColors;
        },
        set(value) {
          this.$store.dispatch('updateSelectedFallColors', value);
        },
      },


      trees() {
          return this.$store.state.trees
      },

      filteredTrees() {
          return this.$store.getters.getFilteredTrees(
              this.selectedTypes, 
              this.selectedNeedles,
              this.selectedClusters,
              this.selectedLeafTypes,
              this.selectedCompoundStructures, 
              this.selectedLeafAttachments,
              this.selectedFallColors,
          );
      },

      conifers() {
      //     let coniferTrees = this.$store.state.trees.filter(tree => tree.type == 'conifer')
      //     return coniferTrees
      return this.$store.getters.conifers
      },
    },
    watch: {
            '$route': {
            immediate: true, // This ensures the handler is called right after the component is mounted
            handler() {
                this.updateBodyBackground();
            }
            }
        },
    methods: {
      tryAgain() {
          this.$store.commit('toggleMenu');
          this.$store.commit('resetFilters');
      },
      updateBodyBackground() {
        // Retrieve the tree data using a Vuex getter
        const treeData = this.$store.getters.getTreeBySlug(this.$route.params.slug);
        // Define a default background image path
        const defaultImageUrl = '/img/bg_forest3.jpg';
        // Construct the background image URL
        // If treeData is defined and has a background, use that, otherwise use the default
        const imageUrl = this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;
        // Set the background image style on the body tag
        // document.body.style.backgroundImage = `url(${imageUrl})`;
        document.getElementById("background").style.backgroundImage = `url(${imageUrl})`;       
      }       
    },
    beforeDestroy() {
        // When the component is destroyed, reset the body background if needed
        // document.body.style.backgroundImage = '';
        document.getElementById("background").style.backgroundImage = '';
    } 
}
</script>
