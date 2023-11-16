<template>
    <header>
        <!-- <div @click="toggleMenu" class="mobile-menu-toggle">
            <div>~</div>
        </div> -->

            <div class="topbars">
                <div class="menu-wrap">
                    <div class="menu-topbar" ref="">
                        <div class="logo"><router-link to="/" @click="logoClick">PA TREE GUIDE </router-link></div>
                    </div>

                    <input 
                        type="checkbox" 
                        class="toggler"
                        v-model="isMenuOpen"
                    />
                    <HeaderMatches v-if="isMenuOpen"/>
                    <HeaderMatches v-else-if="homePage && isAnyFilterSelected"/>

                    <div class="hamburger">
                        <div></div>
                    </div>
                    <div class="menu">
                        <div>
                            <div>
                                <div class="options-panel">

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Tree Type</h3>
                                        </div>
                                        <label v-for="type in treeTypes" :key="type">
                                            <input 
                                            type="checkbox" 
                                            :value="type" 
                                            v-model="selectedTypesComputed" 
                                            />
                                            {{ type }}
                                        </label>
                                    </div>

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Needle Structure</h3>
                                            <span class="icon-conifer">
                                                <img src="/img/icons/icon_conifer_300px.png" alt="">
                                            </span>
                                        </div>
                                        <label v-for="needle in needleStructures" :key="needle">
                                            <input 
                                            type="checkbox" 
                                            :value="needle" 
                                            v-model="selectedNeedlesComputed" 
                                            />
                                            {{ needle }}
                                        </label>
                                    </div>

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Needles per Cluster</h3>
                                            <span class="icon-conifer">
                                                <img src="/img/icons/icon_conifer_300px.png" alt="">
                                            </span>
                                        </div>
                                        <label v-for="cluster in needleClusters" :key="cluster">
                                            <input 
                                            type="checkbox" 
                                            :value="cluster" 
                                            v-model="selectedClustersComputed" 
                                            />
                                            {{ cluster }}
                                        </label>
                                    </div>

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Leaf Type</h3>
                                            <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span>
                                        </div>
                                        <label v-for="leaf in leafTypes" :key="leaf">
                                            <input 
                                            type="checkbox" 
                                            :value="leaf" 
                                            v-model="selectedLeafTypesComputed" 
                                            />
                                            {{ leaf }}
                                        </label>
                                    </div>

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Compound Structure</h3>
                                            <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span>
                                        </div>
                                        <label v-for="structure in compoundStructures" :key="structure">
                                            <input 
                                            type="checkbox" 
                                            :value="structure" 
                                            v-model="selectedCompoundStructuresComputed" 
                                            />
                                            {{ structure }}
                                        </label>
                                    </div>

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Leaf Attachment</h3>
                                            <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span>
                                        </div>
                                        <label v-for="attachment in leafAttachments" :key="attachment">
                                            <input 
                                            type="checkbox" 
                                            :value="attachment" 
                                            v-model="selectedLeafAttachmentsComputed" 
                                            />
                                            {{ attachment }}
                                        </label>
                                    </div>

                                    <div class="options-set">
                                        <div class="options-set-header">
                                            <h3>Fall Colors</h3>
                                            <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span>
                                        </div>
                                        <label v-for="color in fallColors" :key="color">
                                            <input type="checkbox" :value="color" v-model="selectedFallColorsComputed" />
                                            {{ color }}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </header>
</template>

<script>

import { mapState } from 'vuex';
import HeaderMatches from './HeaderMatches'

export default {
    data() {
        return {
            treeTypes: ['conifer', 'deciduous'],
            needleStructures: ['single needle', 'clustered needles', 'scaly needles'],
            needleClusters: [2,3,5,"12-30"],
            leafTypes: ['simple', 'lobed', 'compound'],
            compoundStructures: ['single', 'twice', 'palmate'],
            leafAttachments: ['opposite', 'alternate'],
            fallColors: ['red','orange','brown','yellow','green','purple'],

        };
    },
    name: 'Header',
    props: {
        // title: String, 
    },
    components: {
        HeaderMatches
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
        isMenuOpen: {
            get() {
                return this.$store.state.isMenuOpen;
            },
            set(value) {
                this.$store.commit('toggleMenu');
            }
        },
        homePage() {
            if(this.$route.path === "/") {
                return true
            } else {
                return false
            }
        },
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
    }, 
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu');
        },
        closeMenu() {
            this.$store.commit('closeMenu');
        },
        resetAllFilters() {
            this.$store.commit('resetFilters');
        },
        logoClick() {
            this.$store.commit('resetFilters');
            this.$store.commit('closeMenu');
        },
    }
}
</script>

<style scoped>

</style>