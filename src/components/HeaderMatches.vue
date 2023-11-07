<template>
    <div class="options-panel-topbar">
            <div class="container">
                <div class="options-panel-widgets">

                    <div>
                        <button @click="resetAllFilters" class="menu-reset">
                            Clear Filters
                        </button>
                    </div>

                    <div class="matches">
                        <div class="matches-text"> Matches </div>
                        <div class="matches-num">
                            {{ filteredTreeCount }}
                        </div>
                    </div>

                    <div>
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