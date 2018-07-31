<template>
<div>
    <top_side_bar></top_side_bar>

    <div class="video-player-wrap">
        <div class="video-player">
            <div id="laracasts-video" class="container">
                <div style="">
                    <video-player class="vjs-custom-skin"
                                  :options="playerOptions"
                                  :playsinline="true"
                                  @ready="playerReadied($event)"></video-player>
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
  import TopSideBar from '../top_side_bar/TopSideBar';

  import 'video.js/dist/video-js.css'

  import { videoPlayer } from 'vue-video-player'

  import 'videojs-resolution-switcher'

  export default {

    components: {
      videoPlayer,
      top_side_bar: TopSideBar
    },

    data() {
      return {
        playerOptions: {
          height: '720',
          playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
          sources: [
            {
              src: 'http://test.xxx/storage/video/KK9XCiqKER5b5ec4d866f4f.mp4',
              type: 'video/mp4',
            }
            ],
          poster: "http://test.xxx/storage/img/film/hOH9BIVo8E5b5e85b4369c2.jpg",
          plugins: {
            videoJsResolutionSwitcher: {
              default: 'high',
              dynamicLabel: true
            }
          }
        }
      }
    },

    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },

    methods: {
      playerReadied(player) {

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