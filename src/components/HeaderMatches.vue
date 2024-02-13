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
                    <div v-else class="matches-num">
                        0
                    </div>
                </div>
                <div class="right">
                    <router-link to="/">     
                        <button v-if="menuIsOpen && isAnyFilterSelected" @click="toggleMenu" class="button-view-results" >
                            View Results
                        </button>

                        <button v-else-if="!menuIsOpen" @click="toggleMenu" class="button-edit-filters">
                            Edit Filters
                        </button>

                        <button v-else-if="menuIsOpen && !isAnyFilterSelected" @click="toggleMenu" class="button-edit-filters">
                            Close
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
            this.$store.dispatch('resetFilters');
        },
        toggleMenu() {
            this.$store.dispatch('toggleMenu');
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
        ...mapState({
            trees: state => state.trees,
        }),
        ...mapGetters([
            'getFilteredTrees', 
        ]),

        ...mapState([
            'isMenuOpen',
            'selectedFoliage',
            'selectedNeedles',
            'selectedClusters',
            'selectedLeafTypes',
            'selectedCompoundStructures',
            'selectedLeafAttachments',
            'selectedFallColors'
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
        menuIsOpen: {
            get() {
                return this.$store.state.isMenuOpen;
            },
            set(value) {
                this.$store.dispatch('toggleMenu', value);
            }
        },
  },
};
</script>