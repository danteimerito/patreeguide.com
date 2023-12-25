<template>
    <div class="options-panel-topbar">
            <div class="contain-widgets">
                <div class="options-panel-widgets">

                    <div class="left">
                        <button v-if="isAnyFilterSelected && menuIsOpen" @click="resetAllFilters" class="menu-reset">
                            Clear Filters
                        </button>
                    </div>

                    <div class="matches center">
                        <div class="matches-text"> Trees </div>
                        <div v-if="isAnyFilterSelected" class="matches-num">
                            {{ filteredTreeCount }}
                        </div>
                        <div v-else="" class="matches-num">
                            0
                        </div>
                    </div>

                    <div class="right">
                        <router-link to="/">     
                            <button v-if="menuIsOpen & isAnyFilterSelected" @click="toggleMenu" class="button-view-results" >
                                View Results
                            </button>
                            <button v-else-if="!menuIsOpen" @click="toggleMenu" class="button-edit-filters">
                                Edit Filters
                            </button>
                            <button v-else-if="menuIsOpen & !isAnyFilterSelected" @click="toggleMenu" class="button-edit-filters">
                                Home
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
            this.$gtag.event('click_clear_filters', {
                event_category: 'Button',
                event_label: 'Clear Filters Button',
                // value: 'some_value' // Optional: any value you want to pass
            });
            this.$store.commit('resetFilters');
        },
        toggleMenu() {
            this.$store.commit('toggleMenu');
        },
    },
    computed: {
    isAnyFilterSelected() {
      return [
        this.selectedFoliage,
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
        this.selectedFoliage,
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
            'selectedFoliage',
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
            this.selectedFoliage,
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