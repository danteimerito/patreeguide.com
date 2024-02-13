<template>
    <header>
      
            <div class="topbars">
                <div class="menu-wrap">
                    <div class="menu-topbar">
                        <div class="logo"><router-link to="/" @click="logoClick">PA TREE GUIDE </router-link></div>
                            <Sound />
                    </div>

                    <input 
                        type="checkbox" 
                        name="toggler"
                        class="toggler"
                        :checked="isMenuOpen" 
                        @change="toggleMenu($event.target.checked)" 
                    />
                    
                    <HeaderMatches v-if="isMenuOpen"/>
                    <HeaderMatches v-else-if="homePage && isAnyFilterSelected"/>

                    <div class="hamburger">
                        <div></div>
                    </div>

                    <div class="menu">
                        <div>
                            <div>
                                
                                    
                                    <!-- the 'appear' prop fires the transition on component/page load -->
                                    <transition-group tag="div" class="options-panel" name="fade-slide" appear>

                                        <div class="options-set" key="1">
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
                                                <img :src="getIcon(foliage)" alt="Icon" class="checkbox-icon" />
                                            </label>
                                        </div>
                                    
            
                                    

                                        <div v-if="this.selectedFoliage.includes('needles') || this.selectedNeedles.length > 0" class="options-set" key="2">
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
                                                    <img :src="getIcon(needle)" alt="Icon" class="checkbox-icon" />
                                            </label>                                        
                                        </div>
                                    

                                    
                                    <div v-if="this.selectedNeedles.includes('clustered needles') || this.selectedClusters.length > 0" class="options-set" key="3">
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
                                    

                                   
                                    <div v-if="this.selectedFoliage.includes('leaves') || this.selectedLeafTypes.length > 0" class="options-set">
                                        <div class="options-set-header" key="4">
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
                                            <img :src="getIcon(leaf)" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                   

                               
                                    <div v-if="selectedLeafTypes.includes('compound') || selectedCompoundStructures.length > 0" class="options-set" key="5">
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
                                            <img :src="getIcon(structure)" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                                  

                             
                                    <div v-if="this.selectedFoliage.includes('leaves') || this.selectedLeafAttachments.length > 0" class="options-set" key="6">
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
                                            <img :src="getIcon(attachment)" alt="Icon" class="checkbox-icon">
                                        </label>
                                    </div>
                               

                               
                                    <div v-if="this.selectedFoliage.includes('leaves') || this.selectedFallColors.length > 0" class="options-set">
                                        <div class="options-set-header" key="7">
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
                                </transition-group>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </header>
</template>

<script>

import { mapState, useStore } from 'vuex';
import HeaderMatches from './HeaderMatches'
import Sound from './Sound'

const iconMappings = {
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
            }

export default {
    data() {
        return {
            lastActivityTime: new Date(),
            treeTypes: ['conifer', 'deciduous'],
            foliage: ['needles', 'leaves'],
            needleStructures: ['single needle', 'clustered needles', 'scaly needles'],
            needleClusters: [2,3,5,"10-30"],
            leafTypes: ['simple', 'lobed', 'compound'],
            compoundStructures: ['pinnate', 'twice pinnate', 'palmate'],
            leafAttachments: ['opposite', 'alternate'],
            fallColors: ['red','orange','brown','yellow','green','purple'],
        };
    },

    name: 'Header',

    mounted() {
        console.log("COMPONENT MOUNTED")
    },

    components: {
        HeaderMatches,
        Sound
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

        ...mapState([
            'isMenuOpen',
            'selectedFoliage',
            'selectedNeedles',
            'selectedClusters',
            'selectedLeafTypes',
            'selectedLeafAttachments', 
            'selectedCompoundStructures', 
            'selectedFallColors',
        ]),
        
        isMenuOpenComputed: {
            get() {
                return this.$store.state.menuIsOpen;
            },
            set(value) {
                this.$store.dispatch('toggleMenu', value);
            }
        },
        
        selectedFoliageComputed: {
            get() {
                return this.selectedFoliage;
            },
            set(value) {

                // // Determine the changed item and its new state (selected or deselected)
                // const changedFoliage = value.find(f => !this.selectedFoliage.includes(f)) 
                //     || this.selectedFoliage.find(f => !value.includes(f));
                // const isSelected = value.includes(changedFoliage);
                // // Track the event with a more descriptive label
                // this.$gtag.event('foliage_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedFoliage}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });

                // Update Vuex state
                this.$store.dispatch('updateSelectedFoliage', value);
            }
        },

        selectedNeedlesComputed: {
            get() {
                return this.selectedNeedles;
            },
            set(value) {
                // Determine the changed item and its new state (selected or deselected)
                // const changedNeedles = value.find(n => !this.selectedNeedles.includes(n)) 
                //     || this.selectedNeedles.find(n => !value.includes(n));
                // const isSelected = value.includes(changedNeedles);
                // Track the event with a more descriptive label
                // this.$gtag.event('needles_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedNeedles}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });
                // Update Vuex state
                this.$store.dispatch('updateSelectedNeedles', value);
            },
        },

        selectedClustersComputed: {
            get() {
            return this.selectedClusters;
            },
            set(value) {

                // Determine the changed item and its new state (selected or deselected)
                // const changedClusters = value.find(c => !this.selectedClusters.includes(c)) 
                //     || this.selectedClusters.find(c => !value.includes(c));
                // const isSelected = value.includes(changedClusters);
                // Track the event with a more descriptive label
                // this.$gtag.event('clusters_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedClusters}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });

                // Update Vuex state
                this.$store.dispatch('updateSelectedClusters', value);
            },
        },

        selectedLeafTypesComputed: {
            get() {
            return this.selectedLeafTypes;
            },
            set(value) {

                // Determine the changed item and its new state (selected or deselected)
                // const changedLeafTypes = value.find(lt => !this.selectedLeafTypes.includes(lt)) 
                //     || this.selectedLeafTypes.find(lt => !value.includes(lt));
                // const isSelected = value.includes(changedLeafTypes);

                // Track the event with a more descriptive label
                // this.$gtag.event('leaf-types_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedLeafTypes}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });

                // Update Vuex state
                this.$store.dispatch('updateSelectedLeafTypes', value);
            },
        },

        selectedCompoundStructuresComputed: {
            get() {
            return this.selectedCompoundStructures;
            },
            set(value) {
                // Determine the changed item and its new state (selected or deselected)
                // const changedCompoundStructures = value.find(cs => !this.selectedCompoundStructures.includes(cs)) 
                //     || this.selectedCompoundStructures.find(cs => !value.includes(cs));
                // const isSelected = value.includes(changedCompoundStructures);
                // Track the event with a more descriptive label
                // this.$gtag.event('compound-structure_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedCompoundStructures}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });
                // Update Vuex state
                this.$store.dispatch('updateSelectedCompoundStructures', value);
            },
        },

        selectedLeafAttachmentsComputed: {
            get() {
            return this.selectedLeafAttachments;
            },
            set(value) {
                // Determine the changed item and its new state (selected or deselected)
                // const changedLeafAttachments = value.find(la => !this.selectedLeafAttachments.includes(la)) 
                //     || this.selectedLeafAttachments.find(la => !value.includes(la));
                // const isSelected = value.includes(changedLeafAttachments);
                // Track the event with a more descriptive label
                // this.$gtag.event('leaf-attachments_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedLeafAttachments}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });
                // Update Vuex state
                this.$store.dispatch('updateSelectedLeafAttachments', value);
            },
        },
  
        selectedFallColorsComputed: {
            get() {
            return this.selectedFallColors;
            },
            set(value) {
                // Determine the changed item and its new state (selected or deselected)
                // const changedFallColors = value.find(fc => !this.selectedFallColors.includes(fc)) 
                //     || this.selectedFallColors.find(fc => !value.includes(fc));
                // const isSelected = value.includes(changedFallColors);
                // Track the event with a more descriptive label
                // this.$gtag.event('fall-colors_selection_change', {
                //     event_category: 'Checkbox Interaction',
                //     event_label: `${changedFallColors}: ${isSelected ? 'Selected' : 'Deselected'}`,
                //     event_action: 'change'
                // });
                // Update Vuex state
                this.$store.dispatch('updateSelectedFallColors', value);
            },
        },
    },    
     
    methods: {
        // Icon mappings are non-reactive (outide the export default)
        getIcon(type) {
            return iconMappings[type] || '';
        },  
        
        handleVisibilityChange() {
            if (document.visibilityState === 'visible') {
            this.ensureCheckboxesReflectState();
            }
        },
        ensureCheckboxesReflectState() {
            // Logic to ensure checkboxes reflect the Vuex state
            this.isMenuOpenComputed = this.isMenuOpen;
            this.selectedFoliageComputed = [...this.selectedFoliage];
            this.selectedNeedlesComputed = [...this.selectedNeedles];
            this.selectedLeafTypesComputed = [...this.selectedLeafTypes];
            this.selectedLeafAttachmentsComputed = [...this.selectedLeafAttachments];
            this.selectedFallColorsComputed = [...this.selectedFallColors];
            this.selectedCompoundStructuresComputed = [...this.selectedCompoundStructures];
            this.selectedClustersComputed = [...this.selectedClusters];

            console.log("Ensure checkboxes reflect state")
        },
        toggleMenu(isOpen) {
            this.$store.dispatch('toggleMenu', isOpen);
        },
        closeMenu() {
            this.$store.dispatch('closeMenu');
        },
        resetAllFilters() {
            this.$store.dispatch('resetFilters');
        },
        logoClick() {
        //     this.$gtag.event('click_logo_header', {
        //         event_category: 'Link',
        //         event_label: 'Header logo clicked',
        //         // value: 'some_value' // Optional: any value you want to pass
        // });
            this.$store.dispatch('logoClick');
        },
    },
}
</script>

<style scoped>

/* Enter transitions */
.fade-slide-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.fade-slide-enter-to {
  opacity: 1;
}
.fade-slide-enter-active {
  transition: all 0.4s ease;
}

/* Leave transitions */
.fade-slide-leave-from {
  opacity: 1;
}
.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.fade-slide-leave-active {
  transition: all 0.4s ease;
  position:absolute;
}
/* the -move suffix can be used with transition-group. It allows existing elements to be transitioned to their new location as a result of neighboring content changes. */
.fade-slide-move {
    transition: all 0.3s ease;
}
</style>
