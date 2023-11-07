<template>
    <div class="single-tree-contain">
        <div class="bg-green-trans">
            <div class="single-header">
                <button @click="goBackOrHome" class="single-header-back-btn">← Back</button>
                <h1> {{ tree.nameCommon }}</h1>
            </div>

            <div class="single-tree-details">

                <div class="left-sixty">
                    <div v-if="tree.description" v-html="tree.description"></div>
                    <h2 v-else="!tree.description">Description</h2>
                    <div class="tree-image">
                        <img :src="tree.photo1" alt=""/>
                        <img :src="tree.photo2" alt=""/>
                        <img :src="tree.photo3" alt=""/>
                    </div>
                    
                </div>

                <div class="right-thirty">

                    <div v-if="tree.aka && Array.isArray(tree.aka)" class="sidebar-widget-contain">
                        <h2>Alternate names</h2>
                        <div>{{ tree.aka.join(', ') }}</div>
                    </div>

                    <div class="sidebar-widget-contain">
                        <h2>Features</h2>
                        <div class="sidebar-details">

                            <div v-if="tree.type" class="sidebar-detail">
                                <span>Tree Type</span>
                                <button>{{ tree.type }}</button>
                            </div>
                            <div v-if="tree.needleStructure" class="sidebar-detail">
                                <span>Needle Structure</span>
                                <button>{{ tree.needleStructure }}</button>
                            </div>
                            <div v-if="tree.leafType" class="sidebar-detail">
                                <span>Leaf Type</span>
                                <button>{{ tree.leafType }}</button>
                            </div>
                            <div v-if="tree.compoundStructure" class="sidebar-detail">
                                <span>Compound Structure</span>
                                <button>{{ tree.compoundStructure }}</button>
                            </div>
                            <div v-if="tree.leafAttachment" class="sidebar-detail">
                                <span>Leaf Attachment</span>
                                <button>{{ tree.leafAttachment }}</button>
                            </div>

                            <div v-if="tree.fallColor && Array.isArray(tree.fallColor)" class="sidebar-detail">
                                <span>Fall Color</span>
                                <button>
                                    <ul>
                                        <li v-for="(alias, index) in tree.fallColor" :key="index">
                                            {{ alias }}
                                        </li>
                                    </ul>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-widget-contain">
                        <h2>Taxonomy</h2>
                        <div class="sidebar-details">
                            <div v-if="tree.order" class="sidebar-detail">
                                <span>Order</span>
                                <button>{{ tree.order }}</button>
                            </div>
                            <div v-if="tree.family" class="sidebar-detail">
                                <span>Family</span>
                                <button>{{ tree.family }}</button>
                            </div>
                            <div v-if="tree.genus" class="sidebar-detail">
                                <span>Genus</span>
                                <button>{{ tree.genus }}</button>
                            </div>
                            <div v-if="tree.species" class="sidebar-detail">
                                <span>Species</span>
                                <button>{{ tree.species }}</button>
                                {{ tree.species }}
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
        },
        watch: {
            '$route': {
            immediate: true, // This ensures the handler is called right after the component is mounted
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
                // Retrieve the tree data using a Vuex getter
                const treeData = this.$store.getters.getTreeBySlug(this.$route.params.slug);

                // Define a default background image path
                const defaultImageUrl = '/img/bg_forest3.jpg';

                // Construct the background image URL
                // If treeData is defined and has a background, use that, otherwise use the default
                const imageUrl = this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;

                // Set the background image style on the body tag
                document.body.style.backgroundImage = `url(${imageUrl})`;
            }
        },
        beforeDestroy() {
            // When the component is destroyed, reset the body background if needed
            document.body.style.backgroundImage = '';
        }
    }
    
</script>

<style>
</style>

