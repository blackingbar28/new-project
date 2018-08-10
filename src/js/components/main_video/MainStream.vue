<template>
<div>
    <top_side_bar></top_side_bar>

    <div class="video-player-wrap">
        <div class="video">
            <div id="laracasts-video" class="container">
                <div id="player">Loading the player...</div>
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
    <recent :category="category"></recent>
</div>
</template>

<script>
  import TopSideBar from '../top_side_bar/TopSideBar';
  import Recent from '../recent_video_streaming/RecentVideo'
  import './jwplayer.scss'

  export default {

    components: {
      top_side_bar: TopSideBar,
      recent: Recent
    },

    data() {
      return {
        player: null,
        category: this.$route.params.category,
        film_name: this.$route.params.film,
        film: null
      }
    },

    created() {
        this.getFilm();
    },

    mounted() {
      let jwConfig = {
        "aspectratio": "16:9",
        "autostart": false,
        "controls": true,
        "displaydescription": true,
        "displaytitle": false,
        "flashplayer": "/jw2/jwplayer.flash.swf",
        "height": 260,
        "key": "eN7NsKk5NectzmQs30m+OgXazZbEFkjUerHTJXbPGZM=",
        "mute": false,
        "ph": 3,
        "pid": "hDZaZjnc",
        "playbackRateControls": false,
        "playlist": [{
          "title":"One Playlist Item With Multiple Qualities",
          "description":"Two Qualities - One Playlist Item",
          "image": "http://test.xxx/storage/img/film/hOH9BIVo8E5b5e85b4369c2.jpg",
          "sources": [{
            "file": "http://test.xxx/storage/video/KK9XCiqKER5b5ec4d866f4f.mp4",
            "label": "HD"
          },{
            "file": "http://test.xxx/storage/video/KK9XCiqKER5b5ec4d866f4f.mp4",
            "label": "SD"
          }]
        }],
        "preload": "metadata",
        "repeat": false,
        "skin": {
          "controlbar": {
            "background": "rgba(0,0,0,0)",
            "icons": "rgba(255,255,255,0.8)",
            "iconsActive": "#FFFFFF",
            "text": "#F2F2F2"
          },
          "menus": {
            "background": "#333333",
            "text": "rgba(255,255,255,0.8)",
            "textActive": "#FFFFFF"
          },
          "timeslider": {
            "progress": "#F2F2F2",
            "rail": "rgba(255,255,255,0.3)"
          },
          "tooltips": {
            "background": "#FFFFFF",
            "text": "#000000"
          }
        },
        "stagevideo": false,
        "stretching": "uniform",
        "width": "100%"
      };

      this.player = jwplayer('player');
      this.player.setup(jwConfig);
    },

    methods: {
      playerReadied(player) {

      },

      getFilm() {
        let params = {
          name: this.film_name
        };
        Request.get('/api/film', params).then((response) => {
          this.film = response.data;
        });
      }
    }
  }
</script>

<style>

</style>