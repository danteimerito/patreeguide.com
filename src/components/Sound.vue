
<template>
    <div class="sound-icon">
        <audio ref="audioPlayer" :src="audioSrc" loop></audio>
        <!-- <button v-if="!isPlaying" @click="playAudio">Play</button>
        <button v-else @click="pauseAudio">Pause</button> -->

        <div>
            <div v-if="!isPlaying" @click="playAudio" class="sound-wrap">
              <div class="audio-icon">
                <v-icon  name="gi-round-knob" scale="1.75" fill="chartreuse" flip="horizontal" alt="Sound On"/>
              </div>
              <div>Sound</div>
            </div>
            <div v-else @click="pauseAudio" class="sound-wrap">
              <div class="audio-icon">
                <v-icon  name="gi-round-knob" scale="1.75" fill="white" alt="Sound Off"/>
              </div>
              <div>Sound</div>
            </div>
        </div>
    </div>
</template>
  
<script>
import OhVueIcon from "oh-vue-icons";

  export default {
    name: 'Sound',
    mounted() {
        const player = this.$refs.audioPlayer;
        player.addEventListener('play', () => {
            this.isPlaying = true;
        });
        player.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        player.addEventListener('ended', () => {
            this.isPlaying = false;
        });
    },
    data() {
      return {
        audioSrc: '/audio/Forest-wind-in-the-trees(chosic.com).mp3',
        isPlaying: false,
      }
    },
    components: {
        "v-icon": OhVueIcon
    },
    methods: {
      playAudio() {
        const player = this.$refs.audioPlayer;
        player.play().catch(error => {
          console.error("Error attempting to play audio:", error);
        });
        this.isPlaying = true;
      },
      pauseAudio() {
        this.$refs.audioPlayer.pause();
        this.isPlaying = false;
      },
    }
  }
</script>
  
<style>
  .sound-icon {
    /* margin-right: 1rem; */
    padding-right: 1rem;
    cursor: pointer;
  }
  .sound-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      margin-bottom: 0.5rem;
      color: chartreuse;
  }
  .sound-wrap > div {
      font-size: 0.8rem;
  }
  .audio-icon {
    margin-bottom: -5px;
    margin-top: 5px;
  }
</style>



