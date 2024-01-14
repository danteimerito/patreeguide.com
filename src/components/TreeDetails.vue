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
                        
                        <div v-if="tree.photo1Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo1Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo1Alt" 
                                    :src="tree.photo1Src"
                                >
                            </a>
                            <div v-html="tree.photo1Credit" class="contain-thumb"></div>
                        </div>


                        <div v-if="tree.photo2Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo2Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo2Alt" 
                                    :src="tree.photo2Src"
                                >
                            </a>
                            <div v-html="tree.photo2Credit" class="contain-thumb"></div>
                        </div>

                        <div v-if="tree.photo3Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo3Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo3Alt" 
                                    :src="tree.photo3Src"
                                >
                            </a>
                            <div v-html="tree.photo3Credit" class="contain-thumb"></div>
                        </div>
                        
                        <div v-if="tree.photo4Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo4Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo4Alt" 
                                    :src="tree.photo4Src"
                                >
                            </a>
                            <div v-html="tree.photo4Credit" class="contain-thumb"></div>
                        </div>

                        <div v-if="tree.photo5Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo5Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo5Alt" 
                                    :src="tree.photo5Src"
                                >
                            </a>
                            <div v-html="tree.photo5Credit" class="contain-thumb"></div>
                        </div>

                        <div v-if="tree.photo6Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo6Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo6Alt" 
                                    :src="tree.photo6Src"
                                >
                            </a>
                            <div v-html="tree.photo6Credit" class="contain-thumb"></div>
                        </div>

                        <div v-if="tree.photo7Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo7Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo7Alt" 
                                    :src="tree.photo7Src"
                                >
                            </a>
                            <div v-html="tree.photo7Credit" class="contain-thumb"></div>
                        </div>

                        <div v-if="tree.photo8Src" class="contain-thumb">
                            <a  target="_blank"
                                rel="noopener noreferrer"
                                
                                :href="tree.photo8Href"
                            >
                                <img 
                                    fetchPriority="low"
                                    width="256" 
                                    :alt="tree.photo8Alt" 
                                    :src="tree.photo8Src"
                                >
                            </a>
                            <div v-html="tree.photo8Credit" class="contain-thumb"></div>
                        </div>

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
        },
        tree(newTree, oldTree) {
            if (newTree) {
                document.title = newTree.nameCommon;
            } else {
                document.title = 'Default Title'; // Fallback title
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
            document.getElementById("background").style.backgroundImage = `url(${this.blurredBackground})`;

            // Then load the full image
            this.loadFullImage();
        },
        loadFullImage() {
            const img = new Image();
            img.src = this.fullBackground;
            img.onload = () => {
                document.getElementById("background").classList.add('background-fade-in');
                document.getElementById("background").style.backgroundImage = `url(${img.src})`;
            };
        }
    },
    beforeUnmount() {
        // document.getElementById("background").style.backgroundImage = '';
    }, 
    mounted() {
        // Set the title when the component is first mounted
        if (this.tree) {
        document.title = this.tree.nameCommon;
        }
    }
}
</script>




