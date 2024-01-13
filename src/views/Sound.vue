
<template>
  <div class="contain-flex">
        <div class="feature-card">
            <h1>Sound Page</h1>
            <div>
                <audio ref="audioPlayer" :src="audioSrc" controls autoplay muted></audio>
                <button @click="playAudio">Play</button>
                <button @click="pauseAudio">Pause</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sound',
  mounted() {
    this.updateBodyBackground();
     // Attempt to play the audio when the component mounts
    this.playAudio();
  },
  data() {
    return {
      audioSrc: '/audio/Forest-wind-in-the-trees(chosic.com).mp3' // Replace with your audio file path
    }
  },

  methods: {
    playAudio() {
      const player = this.$refs.audioPlayer;
      player.play().catch(error => {
        console.error("Error attempting to play audio:", error);
      });
    },
    pauseAudio() {
      this.$refs.audioPlayer.pause();
    },
    updateBodyBackground() {
      // Assuming the background element exists
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
  }
}
</script>
