<template>
<div>
    <div class="video-player-wrap">
        <div class="video-player">
            <div id="laracasts-video" class="container"">
                <div style="">

                    <video-player  class="video-player-box"
                                   ref="videoPlayer"
                                   :options="playerOptions"
                                   :playsinline="true"
                                   customEventName="customstatechangedeventname"

                                   @play="onPlayerPlay($event)"
                                   @pause="onPlayerPause($event)"
                                   @ended="onPlayerEnded($event)"
                                   @waiting="onPlayerWaiting($event)"
                                   @playing="onPlayerPlaying($event)"
                                   @loadeddata="onPlayerLoadeddata($event)"
                                   @timeupdate="onPlayerTimeupdate($event)"
                                   @canplay="onPlayerCanplay($event)"
                                   @canplaythrough="onPlayerCanplaythrough($event)"

                                   @statechanged="playerStateChanged($event)"
                                   @ready="playerReadied">
                    </video-player>


                </div>
            </div>
        </div>
    </div>
    <div class="match-details">
        <div class="container">
            <div class="match">
                <div class="logo">
                    <img src="http://www.bongdatructuyen.us/uploads/team/FC_Basel_1318340839_1329370339.png" alt="" class="img-responsive">
                </div>
                <div class="logo">
                    <img src="http://www.bongdatructuyen.us/uploads/team/Feyenoord_1343100051.png" alt="" class="img-responsive">
                </div>
                <div class="details">
                    <span class="text-bold">Giao huu quoc te</span>
                    <span class="text-bold">Basel - Anh</span>
                    <span class="text-bold">01 : 00</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import 'video.js/dist/video-js.css'

  import { videoPlayer } from 'vue-video-player'

  export default {

    components: {
      videoPlayer
    },

    data() {
      return {
        playerOptions: {
          // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://video.xx.fbcdn.net/v/t42.9040-2/10000000_285376475550902_6430911913063874560_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=962&oh=48a548e018b9c56df913008d86a9b24b&oe=5B5428F2"
          }],
          poster: "https://s3img.vcdn.vn/123phim/2017/04/em-chua-18-14925939804005.jpg",
        }
      }
    },

    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },

    methods: {
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
      }
    }
  }
</script>

<style>
    .video-player-wrap {
        background: #000;
    }
    .match-details {
        padding-top: 10px;
        padding-bottom: 10px;
        background: #4d545d;
        color: #fff;
    }
    .match {
        display: flex;
        justify-content: center;
    }
    .match > .logo {
        padding-right: 10px;
    }
    .match > .logo > img {
        width: 40px;
        height: 40px;
    }
    .details {
        display: flex;
        flex-direction: column;
        margin-left: 25px;
    }
</style>