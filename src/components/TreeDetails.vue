<template>
    <div class="single-tree-contain">
        <div class="bg-green-trans">

            <div class="single-header">
                <button @click="goBackOrHome" class="single-header-back-btn">← Back</button>
                <h1> {{ tree.nameCommon }}</h1>
            </div>

            <div class="single-tree-details">

                <div class="left-sixty">
                    <div v-if="tree.description" v-html="tree.description" class="description"></div>
                    <h2 v-else="!tree.description">Description</h2>
                    <div class="tree-image">

                        <a  target="_blank"
                            title="Cody Hough, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" 
                            href="https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_005.jpg">
                                <img 
                                    width="256" 
                                    alt="Cornus alternifolia 005" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cornus_alternifolia_005.jpg/512px-Cornus_alternifolia_005.jpg"
                                >
                        </a>

                        <a target="_blank" title="Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, and others, Public domain, via Wikimedia Commons" href="https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_range_map_1.png"><img width="256" alt="Cornus alternifolia range map 1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cornus_alternifolia_range_map_1.png/256px-Cornus_alternifolia_range_map_1.png"></a>
                        
                        <a target="_blank" title="Jaknouse, CC BY-SA 3.0 &lt;http://creativecommons.org/licenses/by-sa/3.0/&gt;, via Wikimedia Commons" href="https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Jk-cornus_alternifoliaflower.jpg"><img width="256" alt="Jk-cornus alternifoliaflower" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jk-cornus_alternifoliaflower.jpg/256px-Jk-cornus_alternifoliaflower.jpg"></a>
                        
                    </div>
                    
                </div>

                <div class="right-thirty">

                    <div v-if="tree.aka && Array.isArray(tree.aka)" class="sidebar-widget-contain sidebar-one">
                        <h2>Alternate names</h2>
                        <!-- <div class="result-icon">{{ tree.aka.join(', ') }}</div> -->
                        <div class="multi-wrap">
                            <div v-for="name in tree.aka">
                                <div class="result-icon">{{name}}</div>
                            </div>
                        </div>
                    </div>


                    <div class="sidebar-widget-contain sidebar-two">
                        <h2>Features</h2>
                        <div class="sidebar-details">

                            <div v-if="tree.type" class="sidebar-detail">
                                <span>Tree Type</span>
                                <div class="result-icon">{{ tree.type }}</div>
                            </div>
                            <div v-if="tree.needleStructure" class="sidebar-detail">
                                <span>Needle Structure</span>
                                <div class="result-icon">{{ tree.needleStructure }}</div>
                            </div>
                            <div v-if="tree.needleCluster" class="sidebar-detail">
                                <span>Needles Per Cluster</span>
                                <div v-for="count in tree.needleCluster">
                                    <div class="result-icon">{{ count }}</div>
                                </div>
                            </div>
                            <div v-if="tree.leafType" class="sidebar-detail">
                                <span>Leaf Type</span>
                                <div class="result-icon">{{ tree.leafType }}</div>
                            </div>
                            <div v-if="tree.compoundStructure" class="sidebar-detail">
                                <span>Compound Structure</span>
                                <div class="result-icon">{{ tree.compoundStructure }}</div>
                            </div>
                            <div v-if="tree.leafAttachment" class="sidebar-detail">
                                <span>Leaf Attachment</span>
                                <div class="result-icon">{{ tree.leafAttachment }}</div>
                            </div>

                            <div v-if="tree.fallColor && Array.isArray(tree.fallColor)" class="sidebar-detail">
                                <span>Fall Color</span>
                                <!-- <div class="result-icon">
                                    <ul>
                                        <li v-for="(alias, index) in tree.fallColor" :key="index">
                                            {{ alias }}
                                        </li>
                                    </ul>
                                </div> -->


                                <div class="multi-wrap">
                                    <div v-for="color in tree.fallColor">
                                        <div class="result-icon">{{color}}</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="sidebar-widget-contain sidebar-three">
                        <h2>Taxonomy</h2>
                        <div class="sidebar-details">
                            <div v-if="tree.order" class="sidebar-detail">
                                <span>Order</span>
                                <div class="result-icon">{{ tree.order }}</div>
                            </div>
                            <div v-if="tree.family" class="sidebar-detail">
                                <span>Family</span>
                                <div class="result-icon">{{ tree.family }}</div>
                            </div>
                            <div v-if="tree.genus" class="sidebar-detail">
                                <span>Genus</span>
                                <div class="result-icon">{{ tree.genus }}</div>
                            </div>
                            <div v-if="tree.species" class="sidebar-detail">
                                <span>Species</span>
                                <div class="result-icon">{{ tree.species }}</div>
                                <!-- {{ tree.species }} -->
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 v-if="tree.conservationStatus">Conservation Status</h2>
                    </div>

                </div>
            </div>
   
        </div>
    </div>
</template>

<script>
export default {
    props: ['slug'],
    computed: {
        tree() {
            return this.$store.getters.getTreeBySlug(this.slug);
        },
        blurredBackground() {
            // Assuming you have a low-res version of the default background
            const defaultBlurredImageUrl = '/img/bg_forest3_small.jpg';
            
            return this.tree && this.tree.backgroundSmall ? `/img/${this.tree.backgroundSmall}` : defaultBlurredImageUrl;
        },
        fullBackground() {
            // Your existing logic to determine the URL of the full background
            const defaultImageUrl = '/img/bg_forest3.jpg';
            return this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;
        },
    },
    watch: {
        '$route': {
            immediate: true,
            handler() {
                this.updateBodyBackground();
            }
        }
    },
    methods: {
        goBackOrHome() {
            if (window.history.length > 1) {
                this.$router.go(-1);
            } else {
                this.$router.push({ name: 'Home' });
            }
        },
        updateBodyBackground() {
            // First set the blurred image
            document.body.style.backgroundImage = `url(${this.blurredBackground})`;
            // Then load the full image
            this.loadFullImage();
        },
        loadFullImage() {
            const img = new Image();
            img.src = this.fullBackground;
            img.onload = () => {
                // On image load, set the full background image
                document.body.style.backgroundImage = `url(${img.src})`;
                document.body.classList.add('background-fade-in');
            };
        }
    },
    beforeDestroy() {
        document.body.style.backgroundImage = '';
        document.body.classList.remove('background-fade-in');
    }
}
</script>

<style>
/* This should be in your global CSS */
.background-fade-in {
    transition: background-image 0.5s ease-in-out;
}
</style>


