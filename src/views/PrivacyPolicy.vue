<template>
    <div class="contain-flex">
        <div class="privacy-policy">
            <h1 class="center">Privacy Policy</h1>
            <p class="center">Last updated January 15th, 2024</p>
            <p>By using this site, you agree to the Privacy Policy.</p>
            <p>At patreeguide.com it is our policy to respect your privacy regarding any information that is collected while operating this website.</p>
            <h2>Website Visitors</h2>
            <p>Like most websites, patreeguide.com collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. The purpose in collecting non-personally identifying information is to better understand how visitors use this website. From time to time, we may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of the website.</p>
            <h2>Aggregated Statistics</h2>
            <p>We may collect statistics about the behavior of visitors to this website and we may display this information publicly or provide it to others. However, we do not collect personally-identifying information.</p>
            <h2>Cookies</h2>
            <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. patreeguide.com uses cookies to track visitors, their usage of this website, and their website preferences. patreeguide.com visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using patreeguide.com and related websites, with the drawback that certain features of the website may not function properly without the aid of cookies.</p>
            <h2>Privacy Policy Changes</h2>
            <p>Although most changes are likely to be minor, we may change this Privacy Policy from time to time, and in our sole discretion. We encourage visitors to frequently check this page for any changes to the Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>

          
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
      const backgroundElement = document.getElementById("background");
      if (backgroundElement) {
        backgroundElement.style.backgroundImage = 'url(/img/bg_forest3_reverse.jpg)';
        this.loadFullImage();
      }
    },
    loadFullImage() {
      const img = new Image();
      img.src = '/img/bg_forest3_reverse.jpg';
      img.onload = () => {
        const backgroundElement = document.getElementById("background");
        if (backgroundElement) {
          backgroundElement.style.backgroundImage = 'url(/img/bg_forest3_reverse.jpg)';
          backgroundElement.classList.add('background-fade-in');
        }
      };
    },
  },
}; 
</script>

