<template>
    <div class="options-panel-topbar">
            <div class="contain-widgets">
                <div class="options-panel-widgets">

                    <div class="left">
                        <button v-if="isAnyFilterSelected" @click="resetAllFilters" class="menu-reset">
                            Clear Filters
                        </button>
                    </div>

                    <div class="matches center">
                        <div class="matches-text"> Matches </div>
                        <div class="matches-num">
                            {{ filteredTreeCount }}
                        </div>
                    </div>

                    <div class="right">
                        <router-link to="/">     
                            <button v-if="menuIsOpen" @click="toggleMenu" class="button-view-results" >
                                View Results
                            </button>
                            <button v-else-if="!menuIsOpen" @click="toggleMenu" class="button-edit-filters">
                                Edit Filters
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex';

export default {
    methods: {
        resetAllFilters() {
            this.$store.commit('resetFilters');
        },
        toggleMenu() {
            this.$store.commit('toggleMenu');
        },
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
    areFiltersSelected() {
      return [
        this.selectedTypes, 
        this.selectedNeedles, 
        this.selectedLeafTypes, 
        this.selectedLeafAttachments, 
        this.selectedFallColors, 
        this.selectedCompoundStructures, 
        this.selectedClusters
      ].every(array => array && array.length > 0);
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
        // isMenuOpen: {
        //     get() {
        //         return this.$store.state.isMenuOpen;
        //     },
        // },
        menuIsOpen: {
            get() {
                return this.$store.state.isMenuOpen;
            },
            set(value) {
                this.$store.commit('toggleMenu');
            }
        },
  },
};
</script>