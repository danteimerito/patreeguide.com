<template>
    <div class="results">

        <transition name="results-or-no-results" mode="out-in">    
            <div v-if="filteredTrees.length">
                <transition-group  tag="ul" name="results-transition" class="ul-transition" appear>
                    <li v-for="tree in filteredTrees" :key="tree.slug">
                        <router-link :to="{ name: 'TreeDetails', params: { 
                        slug: tree.slug,
                        }}" class="result-title">
                            <h1>{{ tree.nameCommon }}</h1>
                        </router-link>
                    </li>
                </transition-group>
            </div>
            <div v-else class="feature-card-top">
                <h1>We couldn't find any trees that match those criteria. </h1>
                <button @click="tryAgain">Try Again</button>
            </div>
        </transition>    

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            treeTypes: ['conifer', 'deciduous'],
            foliage: ['needles', 'leaves'],
            needleStructures: ['single needle', 'clustered needles', 'scaly needles'],
            needleClusters: [2,3,5,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            leafTypes: ['simple', 'lobed', 'compound'],
            compoundStructures: ['single', 'twice', 'palmate'],
            leafAttachments: ['opposite', 'alternate'],
            fallColors: ['red','orange','brown','yellow','green','purple'],
        };
    },
    name: 'Trees', 
    computed: {
      ...mapState(['isMenuOpen']),
        isMenuOpenComputed: {
            get() {
                return this.$store.state.menuIsOpen;
            },
            set(value) {
                this.$store.commit('setMenuOpen', value);
            }
        },
        
        ...mapState(['selectedFoliage']),
        selectedFoliageComputed: {
            get() {
            return this.selectedFoliage;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedFoliage = value.find(f => !this.selectedFoliage.includes(f)) 
                || this.selectedFoliage.find(f => !value.includes(f));
            const isSelected = value.includes(changedFoliage);

            // Track the event with a more descriptive label
            this.$gtag.event('foliage_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedFoliage}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });

            // Update Vuex state
            this.$store.dispatch('updateSelectedFoliage', value);
            }
        },
        ...mapState(['selectedNeedles']),
        selectedNeedlesComputed: {
            get() {
            return this.selectedNeedles;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedNeedles = value.find(n => !this.selectedNeedles.includes(n)) 
                || this.selectedNeedles.find(n => !value.includes(n));
            const isSelected = value.includes(changedNeedles);
            // Track the event with a more descriptive label
            this.$gtag.event('needles_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedNeedles}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });
            // Update Vuex state
            this.$store.dispatch('updateSelectedNeedles', value);
            },
        },
        ...mapState(['selectedClusters']),
        selectedClustersComputed: {
            get() {
            return this.selectedClusters;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedClusters = value.find(c => !this.selectedClusters.includes(c)) 
                || this.selectedClusters.find(c => !value.includes(c));
            const isSelected = value.includes(changedClusters);
            // Track the event with a more descriptive label
            this.$gtag.event('clusters_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedClusters}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });
            // Update Vuex state
            this.$store.dispatch('updateSelectedClusters', value);
            },
        },
        ...mapState(['selectedLeafTypes']),
        selectedLeafTypesComputed: {
            get() {
            return this.selectedLeafTypes;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedLeafTypes = value.find(lt => !this.selectedLeafTypes.includes(lt)) 
                || this.selectedLeafTypes.find(lt => !value.includes(lt));
            const isSelected = value.includes(changedLeafTypes);
            // Track the event with a more descriptive label
            this.$gtag.event('leaf-types_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedLeafTypes}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });
            // Update Vuex state
            this.$store.dispatch('updateSelectedLeafTypes', value);
            },
        },
        ...mapState(['selectedCompoundStructures']),
        selectedCompoundStructuresComputed: {
            get() {
            return this.selectedCompoundStructures;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedCompoundStructures = value.find(cs => !this.selectedCompoundStructures.includes(cs)) 
                || this.selectedCompoundStructures.find(cs => !value.includes(cs));
            const isSelected = value.includes(changedCompoundStructures);
            // Track the event with a more descriptive label
            this.$gtag.event('compound-structure_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedCompoundStructures}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });
            // Update Vuex state
            this.$store.dispatch('updateSelectedCompoundStructures', value);
            },
        },
        ...mapState(['selectedLeafAttachments']),
        selectedLeafAttachmentsComputed: {
            get() {
            return this.selectedLeafAttachments;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedLeafAttachments = value.find(la => !this.selectedLeafAttachments.includes(la)) 
                || this.selectedLeafAttachments.find(la => !value.includes(la));
            const isSelected = value.includes(changedLeafAttachments);
            // Track the event with a more descriptive label
            this.$gtag.event('leaf-attachments_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedLeafAttachments}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });
            // Update Vuex state
            this.$store.dispatch('updateSelectedLeafAttachments', value);
            },
        },
        ...mapState(['selectedFallColors']),
        selectedFallColorsComputed: {
            get() {
            return this.selectedFallColors;
            },
            set(value) {
            // Determine the changed item and its new state (selected or deselected)
            const changedFallColors = value.find(fc => !this.selectedFallColors.includes(fc)) 
                || this.selectedFallColors.find(fc => !value.includes(fc));
            const isSelected = value.includes(changedFallColors);
            // Track the event with a more descriptive label
            this.$gtag.event('fall-colors_selection_change', {
                event_category: 'Checkbox Interaction',
                event_label: `${changedFallColors}: ${isSelected ? 'Selected' : 'Deselected'}`,
                event_action: 'change'
            });
            // Update Vuex state
            this.$store.dispatch('updateSelectedFallColors', value);
            },
        },


      trees() {
          return this.$store.state.trees
      },

      filteredTrees() {
          return this.$store.getters.getFilteredTrees(
              this.selectedFoliage,
              this.selectedNeedles,
              this.selectedClusters,
              this.selectedLeafTypes,
              this.selectedCompoundStructures, 
              this.selectedLeafAttachments,
              this.selectedFallColors,
          );
      },

      conifers() {
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
        const defaultImageUrl = '/img/bg_forest3_reverse.jpg';
        // Construct the background image URL
        const imageUrl = this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;

        document.getElementById("background").style.backgroundImage = `url(${imageUrl})`;       
      }       
    },
    beforeDestroy() {
        // When the component is destroyed, reset the body background if needed
        document.getElementById("background").style.backgroundImage = '';
    } 
}
</script>

<style>

.results-transition-enter-from {
    opacity: 0;

    transform: scale(0), translateY(20px); 

    
    
}
.results-transition-enter-to {
    opacity: 1;

    transform: scale(1), translateY(0);

    
}
.results-transition-enter-active {
    transition: all 0.4s ease;
}

.results-transition-leave-from {
    opacity: 1;
    transform: scale(1);
}
.results-transition-leave-to {
    opacity: 0;
    transform: scale(0.6);
}
.results-transition-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* must be added so existing content can transition to new page locations */
}
    .ul-transition { position: relative }

.results-transition-move {
    transition: all 0.3s ease;
}


/* Transitions between tree results or no results found */

.results-or-no-results-enter-from,
.results-or-no-results-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
/* .results-or-no-results-enter-to,
.results-or-no-results-leave-from {
    opacity: 1;
    transform: translateY(0);
} */
.results-or-no-results-enter-active,
.results-or-no-results-leave-active {
    transition: all 0.5s ease;
}

</style>