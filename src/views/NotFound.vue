<!-- src/components/NotFound.vue -->
<template>
    <div class="single-tree-contain">
        <div class="feature-card">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <router-link to="/">Go to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    this.updateBodyBackground();
  },
  methods: {
    updateBodyBackground() {
      // Assuming the background element exists
      const backgroundElement = document.getElementById("background");
      if (backgroundElement) {
        backgroundElement.style.backgroundImage = 'url(/img/bg_pexels4_small.jpg)';
        this.loadFullImage();
      }
    },
    loadFullImage() {
      const img = new Image();
      img.src = '/img/bg_pexels11.jpg';
      img.onload = () => {
        const backgroundElement = document.getElementById("background");
        if (backgroundElement) {
          backgroundElement.style.backgroundImage = 'url(/img/bg_pexels11.jpg)';
          backgroundElement.classList.add('background-fade-in');
        }
      };
    },
  },
}; 
</script>

