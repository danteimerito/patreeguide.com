
<template>
    <div class="sound-icon">
        <audio ref="audioPlayer" :src="audioSrc" loop></audio>
        <!-- <button v-if="!isPlaying" @click="playAudio">Play</button>
        <button v-else @click="pauseAudio">Pause</button> -->

        <div class="sound-contain">
            <div v-if="!isPlaying" @click="playAudio" cursor="pointer" class="sound-wrap">
                <v-icon  name="gi-round-knob" scale="1.75" fill="chartreuse" flip="horizontal" cursor="pointer" alt="Sound On"/>
                <div cursor="pointer">Sound</div>
            </div>
            <div v-else @click="pauseAudio" cursor="pointer" class="sound-wrap">
                <v-icon  name="gi-round-knob" scale="1.75" fill="white" cursor="pointer" alt="Sound Off"/>
                <div cursor="pointer">Sound</div>
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
    .sound-contain {
        cursor: pointer;
    }
    .sound-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        margin-right: 1rem;
        margin-bottom: 0.5rem;
        color: chartreuse;
    }
    .sound-wrap > div {
        /* background-color: navy; */
        /* line-height: 100%; */
        line-height: 0.25rem;
        /* line-height: 0.8rem; */
        font-size: 0.8rem;
    }
</style>



