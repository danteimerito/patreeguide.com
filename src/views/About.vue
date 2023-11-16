<template>
    <div class="container">
        <div class="contain-flex">
            <div class="bg-green-trans">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsum doloremque voluptatum odit nihil distinctio deserunt quaerat sit. Numquam provident consequatur doloremque. Fuga a ipsa, repellat sed eius enim dolorem eum sint voluptatibus est natus fugiat. Nobis laborum eveniet reprehenderit vero nulla facere nihil, nam a corrupti accusamus sit itaque!</p>
            </div>
        </div>
    </div>
</template>




<script>
import { onMounted, onBeforeUnmount } from 'vue';
import Trees from '../components/Trees.vue'

export default {
  mounted() {
    this.setBackgroundHeight();
    window.addEventListener('resize', this.setBackgroundHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setBackgroundHeight);
  },
    components: {
        Trees
    },
    setup() {
      const adjustBackground = () => {
        const element = document.getElementById('background-element');
        if (element) {
          element.style.height = `${window.outerHeight}px`;
        }
      };
  
      onMounted(() => {
        adjustBackground();
        window.addEventListener('resize', adjustBackground);
        // The load event listener might not be necessary if the component is mounted after the window is loaded
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('resize', adjustBackground);
      });
  
      return {}; // If you have other reactive properties or methods, they should be returned here
    },
    // watch: {
    //         '$route': {
    //         immediate: true, // This ensures the handler is called right after the component is mounted
    //         handler() {
    //             this.updateBodyBackground();
    //         }
    //         }
    //     },
    methods: {
      setBackgroundHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
      // updateBodyBackground() {
      //   // Retrieve the tree data using a Vuex getter
      //   const treeData = this.$store.getters.getTreeBySlug(this.$route.params.slug);
      //   // Define a default background image path
      //   const defaultImageUrl = '/img/bg_forest3.jpg';
      //   // Construct the background image URL
      //   // If treeData is defined and has a background, use that, otherwise use the default
      //   const imageUrl = this.tree && this.tree.background ? `/img/${this.tree.background}` : defaultImageUrl;
      //   // Set the background image style on the body tag
      //   // document.body.style.backgroundImage = `url(${imageUrl})`;
      //   document.getElementById("background").style.backgroundImage = `url(${imageUrl})`;       
      // }       
    },
    // beforeDestroy() {
    //     // When the component is destroyed, reset the body background if needed
    //     // document.body.style.backgroundImage = '';
    //     document.getElementById("background").style.backgroundImage = '';
    // } 
}
</script>

  

<!-- <script>
import { onMounted, onBeforeUnmount } from 'vue';
import Trees from '../components/Trees.vue'
export default {
  mounted() {
    this.setBackgroundHeight();
    window.addEventListener('resize', this.setBackgroundHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setBackgroundHeight);
  },
  methods: {
    setBackgroundHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }
};
</script> -->

  
