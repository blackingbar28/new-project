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
            <div class="match" v-if="film">
                <div class="logo">
                    <img :src="getLink(film.image)" :alt="film.name" class="img-responsive">
                </div>
                <div class="details">
                    <span class="text-bold">
                        {{film.name}}
                    </span>
                    <span class="text-bold">
                        <span v-for="actor in film.actors" class="name-actor" @click="redirectActor(actor)">
                            {{actor.name}}
                        </span>
                    </span>
                    <span class="text-bold">
                        {{film.view_number}} views
                    </span>
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
        film: null,
        convert_name: null
      }
    },


    watch: {
      '$route.params.film': function (val) {
        this.film_name = val;
        this.getFilm();
      },
    },


    created() {
      this.convertName();
      this.getFilm();
    },

    head: {
      // To use "this" in the component, it is necessary to return the object through a function
      title: function () {
        return {
          inner: this.convert_name,
          separator: ' ', // Leave empty separator
          complement: ' ' // Leave empty complement
        }
      },
      meta:  function () {
        return [
          { name: 'description', content: 'Uhr ' + this.convert_name }
        ]
      }
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
          this.setupPlayer();
        });
      },

      convertName() {
        this.convert_name = _.upperCase(_.replace(this.film_name, '-', ' '));
      },

      setupPlayer() {
        let jwConfig = {
          "aspectratio": "16:9",
          "autostart": false,
          "controls": true,
          "displaydescription": false,
          "displaytitle": false,
          "flashplayer": "/jw2/jwplayer.flash.swf",
          "height": 260,
          "key": "eN7NsKk5NectzmQs30m+OgXazZbEFkjUerHTJXbPGZM=",
          "mute": false,
          "ph": 3,
          "pid": "hDZaZjnc",
          "playbackRateControls": false,
          "playlist": [{
            "title": "",
            "description": "",
            "image": this.getLink(this.film.image),
            "sources": this.film.links
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

      redirectActor(actor) {
        this.$router.push({
          name: 'actor_film',
          params: {name: actor.slug}
        });
      },

      getLink(link) {
        return $baseUrl + '/storage/img/film/' + link;
      }
    }
  }
</script>