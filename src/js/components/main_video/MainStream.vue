<template>
<div>
    <top_side_bar></top_side_bar>

    <div class="video-player-wrap">
        <div class="video">
            <div id="laracasts-video" class="container">
                <video
                        id="my-player"
                        class="video-js vjs-big-play-centered"
                        controls
                        preload="auto"
                        poster="https://cdn.pose.com.vn/assets/2018/08/photo-1-15330475255771709955051.jpg"
                        data-setup='{}'>
                    <source src="http://test.xxx/storage/video/KK9XCiqKER5b5ec4d866f4f.mp4" type="video/mp4"></source>
                </video>
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

  import videojs from "video.js" ;

  export default {

    components: {
      top_side_bar: TopSideBar
    },

    mounted() {
      this.player = videojs('my-player', {
      });

      // this.player.play();
    },

    data() {
      return {
        player: null
      }
    },

    computed: {
      // player() {
      //   return videojs('my-player', {
      //   });
      // }
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