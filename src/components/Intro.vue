<template>
    <div class="single-tree-contain">
        <div class="feature-card">
            <h1>Easily Identify Trees in Pennsylvania</h1>
            <h1>How it works:</h1>
            <p><span>Step 1: </span>Find a Tree</p>
            <p><span>Step 2: </span> Open the menu and select the tree's features</p>
            <p><span>Step 3: </span> Click "View Results" to find a listing of possible matches</p>
            <p><span>Step 4: </span> Click on a tree in the list to see more information</p>
            <button @click="toggleMenu">Begin the Journey</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Intro',
        methods: {
                toggleMenu() {
                this.$store.commit('toggleMenu');
            },
        }
        }
        
    
</script>

<style>
.feature-card {
    text-align:center;
}
.feature-card span {
    font-weight: bold;
    color: chartreuse;
}
.feature-card h1 {
    margin-bottom: 1rem !important;
}
</style>