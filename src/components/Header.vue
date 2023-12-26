<template>
    <header>
      
            <div class="topbars">
                <div class="menu-wrap">
                    <div class="menu-topbar" ref="">
                        <div class="logo"><router-link to="/" @click="logoClick">PA TREE GUIDE </router-link></div>
                    </div>

                    <!-- <input 
                        name="toggler"
                        type="checkbox" 
                        class="toggler"
                        v-model="isMenuOpen"
                    /> --> 

                    <input 
                        type="checkbox" 
                        name="toggler"
                        class="toggler"
                        :checked="isMenuOpen" 
                        @change="toggleMenu($event)" 
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
                                                <h3>Foliage</h3>
                                            </div>
                                            <label v-for="foliage in foliage" :key="foliage">
                                                <input 
                                                    type="checkbox" 
                                                    :name="foliage"
                                                    :value="foliage" 
                                                    v-model="selectedFoliageComputed" 
                                                />
                                                {{ foliage }}
                                                <img :src="iconMappings[foliage]" alt="Icon" class="checkbox-icon" />
                                            </label>
                                        </div>
                                    </transition>
                                    
                                    <transition name="fade-slide">
                                        <div v-if="this.selectedFoliage.includes('needles') || this.selectedNeedles.length > 0" class="options-set">
                                            <div class="options-set-header">
                                                <h3>Needle Structure</h3>
                                            </div>
                                            <label v-for="needle in needleStructures" :key="needle">
                                                <input 
                                                type="checkbox" 
                                                :name="needle"
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
                                        </div>
                                        <label v-for="cluster in needleClusters" :key="cluster">
                                            <input 
                                            type="checkbox" 
                                            :name="cluster"
                                            :value="cluster" 
                                            v-model="selectedClustersComputed" 
                                            />
                                            {{ cluster }}
                                        </label>
                                    </div>
                                    </transition>

                                    <transition name="fade-slide">
                                    <div v-if="this.selectedFoliage.includes('leaves') || this.selectedLeafTypes.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Leaf Type</h3>
                                        </div>
                                        <label v-for="leaf in leafTypes" :key="leaf">
                                            <input 
                                            type="checkbox"
                                            :name="leaf" 
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
                                        </div>
                                        <label v-for="structure in compoundStructures" :key="structure">
                                            <input 
                                            type="checkbox" 
                                            :name="structure"
                                            :value="structure" 
                                            v-model="selectedCompoundStructuresComputed" 
                                            />
                                            {{ structure }}
                                            <img :src="iconMappings[structure]" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                    </transition>

                                    <transition name="fade-slide">
                                    <div v-if="this.selectedFoliage.includes('leaves') || this.selectedLeafAttachments.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Leaf Attachment</h3>
                                        </div>
                                        <label v-for="attachment in leafAttachments" :key="attachment">
                                            <input 
                                            type="checkbox" 
                                            :name="attachment"
                                            :value="attachment" 
                                            v-model="selectedLeafAttachmentsComputed" 
                                            />
                                            {{ attachment }}
                                            <img :src="iconMappings[attachment]" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                    </transition>

                                    
                                    <transition name="fade-slide">
                                    <div v-if="this.selectedFoliage.includes('leaves') || this.selectedFallColors.length > 0" class="options-set">
                                        <div class="options-set-header">
                                            <h3>Fall Colors</h3>
                                        </div>
                                        <label v-for="color in fallColors" :key="color">
                                            <input 
                                                type="checkbox" 
                                                name="color"
                                                :value="color" 
                                                v-model="selectedFallColorsComputed" 
                                            />
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
            foliage: ['needles', 'leaves'],
            needleStructures: ['single needle', 'clustered needles', 'scaly needles'],
            needleClusters: [2,3,5,"10-30"],
            leafTypes: ['simple', 'lobed', 'compound'],
            compoundStructures: ['pinnate', 'twice pinnate', 'palmate'],
            leafAttachments: ['opposite', 'alternate'],
            fallColors: ['red','orange','brown','yellow','green','purple'],
            iconMappings: {
                'conifer': '/img/icons/icon-conifer.svg',
                'deciduous': '/img/icons/icon-deciduous.svg',
                'needles': '/img/icons/icon-conifer.svg',
                'leaves': '/img/icons/icon-deciduous.svg',
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

    watch: {
        selectedFoliage(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedFoliageComputed = [...newVal];
            }
        },
        selectedNeedles(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedNeedlesComputed = [...newVal];
            }
        },
        selectedLeafTypes(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedLeafTypesComputed = [...newVal];
            }
        },
        selectedLeafAttachments(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedLeafAttachmentsComputed = [...newVal];
            }
        },
        selectedFallColors(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedFallColorsComputed = [...newVal];
            }
        },
        selectedCompoundStructures(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedCompoundStructuresComputed = [...newVal];
            }
        },
        selectedClusters(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.selectedClustersComputed = [...newVal];
            }
        },
        isMenuOpen(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.isMenuOpenComputed = newVal;
            }
        }
    },

    mounted() {
        // this.checkAndCorrectCheckboxState();
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        this.ensureCheckboxesReflectState();
    },
    beforeUnmount() { // or 'beforeDestroy()' in Vue 2
        // document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    },
    updated() {
        // this.ensureCheckboxesReflectState();
    },
    created() {
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
            this.ensureCheckboxesReflectState();
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
                this.selectedFoliage, 
                this.selectedNeedles, 
                this.selectedLeafTypes, 
                this.selectedLeafAttachments, 
                this.selectedFallColors, 
                this.selectedCompoundStructures, 
                this.selectedClusters
            ].some(array => array && array.length > 0);
        },

        homePage() {
            if(this.$route.path === "/") {
                return true
            } else {
                return false
            }
        },

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
    },     
    methods: {
        handleVisibilityChange() {
            if (document.visibilityState === 'visible') {
            this.ensureCheckboxesReflectState();
            }
        },
        ensureCheckboxesReflectState() {
            // Logic to ensure checkboxes reflect the Vuex state
            this.selectedFoliageComputed = [...this.selectedFoliage];
            this.selectedNeedlesComputed = [...this.selectedNeedles];
            this.selectedLeafTypesComputed = [...this.selectedLeafTypes];
            this.selectedLeafAttachmentsComputed = [...this.selectedLeafAttachments];
            this.selectedFallColorsComputed = [...this.selectedFallColors];
            this.selectedCompoundStructuresComputed = [...this.selectedCompoundStructures];
            this.selectedClustersComputed = [...this.selectedClusters];
            // ... do this for each piece of state that has a corresponding checkbox

            // Check and update the menuIsOpen state
            if (this.isMenuOpenComputed !== this.isMenuOpen) {
            this.isMenuOpenComputed = this.isMenuOpen;
            }
        },
        toggleMenu(event) {
            this.$store.commit('toggleMenu', event.target.checked);
            //test
        },
        closeMenu() {
            this.$store.commit('closeMenu');
        },
        resetAllFilters() {
            this.$store.commit('resetFilters');
        },
        logoClick() {
            this.$gtag.event('click_logo_header', {
                event_category: 'Link',
                event_label: 'Header logo clicked',
                // value: 'some_value' // Optional: any value you want to pass
        });
            this.$store.commit('resetFilters');
            this.$store.commit('closeMenu');
        },



        // checkAndCorrectCheckboxState() {
        //     const statePairs = [
        //         { actual: this.selectedTypes, computed: this.selectedTypesComputed, action: 'updateSelectedTypes' },
        //         { actual: this.selectedFoliage, computed: this.selectedFoliageComputed, action: 'updateSelectedFoliage' },
        //         { actual: this.selectedNeedles, computed: this.selectedNeedlesComputed, action: 'updateSelectedNeedles' },
        //         { actual: this.selectedLeafTypes, computed: this.selectedLeafTypes, action: 'updateSelectedLeafTypes' },
        //         { actual: this.selectedLeafAttachments, computed: this.selectedLeafAttachments, action: 'updateSelectedLeafAttachments' },
        //         { actual: this.selectedFallColors, computed: this.selectedFallColors, action: 'updateSelectedFallColors' },
        //         { actual: this.selectedCompoundStructures, computed: this.selectedCompoundStructures, action: 'updateSelectedCompoundStructures' },
        //         { actual: this.selectedClusters, computed: this.selectedClusters, action: 'updateSelectedClusters' },
        //     ];

            // statePairs.forEach(({ actual, computed, action }) => {
            //     this.correctCheckboxState(actual, computed, action);
            // });
        // },

        // correctCheckboxState(actualState, computedState, updateAction) {
        //     // Determine if there's a discrepancy
        //     const discrepancyExists = actualState.some((item, index) => computedState[index] !== item);

        // // If there's a discrepancy, update the Vuex state to reflect the correct state
        // if (discrepancyExists) {
        //     this.$store.dispatch(updateAction, computedState);
        //     // Optionally, log or handle the discrepancy here
        //     console.log(`Discrepancy corrected for ${updateAction}`);
        // }
        // }
    },
    // watch: {
        // selectedFoliage(newVal) {
            // this.selectedFoliageComputed = [...newVal];
        // },
        // selectedNeedles(newVal) {
            // this.selectedNeedlesComputed = [...newVal];
        // },
        // ... add watchers for other relevant pieces of state ...
    // },
    watch: {
    selectedFoliage(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
            this.selectedFoliageComputed = [...newVal];
        }
    },
    // Repeat for other watchers
},



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
  transform: translateY(20px); /* Adjust as needed */
}

/* Enter to and leave from (final state) */
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
