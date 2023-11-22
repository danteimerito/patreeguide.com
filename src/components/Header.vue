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
                                    
                                    <transition name="fade-slide">
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
                                                <img :src="iconMappings[type]" alt="Icon" class="checkbox-icon" />
                                            </label>
                                        </div>
                                    </transition>

                                    <transition name="fade-slide">
                                        <div v-if="this.selectedTypes.includes('conifer') || this.selectedNeedles.length > 0" class="options-set">
                                            <div class="options-set-header">
                                                <h3>Needle Structure</h3>
                                                <!-- <span class="icon-conifer">
                                                    <img src="/img/icons/icon-conifer-300px.png" alt="">
                                                </span> -->
                                            </div>
                                            <label v-for="needle in needleStructures" :key="needle">
                                                <input 
                                                type="checkbox" 
                                                :value="needle" 
                                                v-model="selectedNeedlesComputed" 
                                                />
                                                {{ needle }}
                                                <img :src="iconMappings[needle]" alt="Icon" class="checkbox-icon" />
                                            </label>
                                        </div>
                                    </transition>

                                    <transition name="fade-slide">
                                    <div v-if="this.selectedNeedles.includes('clustered needles') || this.selectedClusters.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Needles per Cluster</h3>
                                            <!-- <span class="icon-conifer">
                                                <img src="/img/icons/icon-conifer-300px.png" alt="">
                                            </span> -->
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
                                    </transition>

                                    <transition name="fade-slide">
                                    <div v-if="this.selectedTypes.includes('deciduous') || this.selectedLeafTypes.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Leaf Type</h3>
                                            <!-- <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span> -->
                                        </div>
                                        <label v-for="leaf in leafTypes" :key="leaf">
                                            <input 
                                            type="checkbox" 
                                            :value="leaf" 
                                            v-model="selectedLeafTypesComputed" 
                                            />
                                            {{ leaf }}
                                            <img :src="iconMappings[leaf]" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                    </transition>

                                    <transition name="fade-slide">
                                    <div v-if="selectedLeafTypes.includes('compound') || selectedCompoundStructures.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Compound Structure</h3>
                                            <!-- <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span> -->
                                        </div>
                                        <label v-for="structure in compoundStructures" :key="structure">
                                            <input 
                                            type="checkbox" 
                                            :value="structure" 
                                            v-model="selectedCompoundStructuresComputed" 
                                            />
                                            {{ structure }}
                                            <img :src="iconMappings[structure]" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                    </transition>

                                    <transition name="fade-slide">
                                    <div v-if="this.selectedTypes.includes('deciduous') || this.selectedLeafAttachments.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Leaf Attachment</h3>
                                            <!-- <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span> -->
                                        </div>
                                        <label v-for="attachment in leafAttachments" :key="attachment">
                                            <input 
                                            type="checkbox" 
                                            :value="attachment" 
                                            v-model="selectedLeafAttachmentsComputed" 
                                            />
                                            {{ attachment }}
                                            <img :src="iconMappings[attachment]" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                    </transition>

                                    
                                    <transition name="fade-slide">
                                    <div v-if="this.selectedTypes.includes('deciduous') || this.selectedFallColors.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Fall Colors</h3>
                                            <!-- <span class="icon-deciduous">
                                                <img src="/img/icons/icon-deciduous_400px.png" alt="">
                                            </span> -->
                                        </div>
                                        <label v-for="color in fallColors" :key="color">
                                            <input type="checkbox" :value="color" v-model="selectedFallColorsComputed" />
                                            {{ color }}
                                        </label>
                                    </div>
                                </transition>

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
            compoundStructures: ['pinnate', 'twice pinnate', 'palmate'],
            leafAttachments: ['opposite', 'alternate'],
            fallColors: ['red','orange','brown','yellow','green','purple'],
            iconMappings: {
                'conifer': '/img/icons/icon-conifer-4.svg',
                'deciduous': '/img/icons/icon-deciduous-11.svg',
                'single needle': '/img/icons/icon-single-needle.svg',
                'clustered needles': '/img/icons/icon-clustered-needles.svg',
                'scaly needles': '/img/icons/icon-scaly-needles.svg',
                'simple': '/img/icons/icon-simple-leaf.svg',
                'lobed': '/img/icons/icon-lobed-leaf.svg',
                'compound': '/img/icons/icon-compound-leaf-horizontal.svg',
                'pinnate': '/img/icons/icon-compound-leaf-horizontal.svg',
                'twice pinnate': '/img/icons/icon-compound-twice.svg',
                'palmate': '/img/icons/icon-compound-palmate.svg',
                'opposite': '/img/icons/icon-attachment-opposite.svg',
                'alternate': '/img/icons/icon-attachment-alternate.svg',
            },

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
        enterAnimationDuration() {
            return 500; // Duration in milliseconds for entering animation
        },
        leaveAnimationDuration() {
            return 300; // Duration in milliseconds for leaving animation
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
/* Enter and leave active */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

/* Enter from and leave to (initial state) */
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px); /* Adjust as needed */
}

/* Enter to and leave from (final state) */
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
