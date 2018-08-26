<template>
<div>
    <top_side_bar></top_side_bar>

    <div>
        <div class="recent-bar">
            <div class="container">
                <h1 class="recent-title">{{actor_name}}</h1>
            </div>
        </div>
        <div class="container">

            <div class="box-movie">
                <div class="movie-wrapper">

                    <div class="movie-card" v-for="film in films">
                        <div class="movie-header"
                             v-bind:style="getBackground(film.image)">
                            <div class="header-icon-container">
                                <a :href="getLink(film)">
                                    <i class="material-icons header-icon"></i>
                                </a>
                            </div>
                            <div class="hd-logo">
                            </div>
                        </div><!--movie-header-->
                        <div class="movie-content">
                            <div class="movie-content-header">
                                <a :href="getLink(film)">
                                    <h3 class="movie-title">{{film.name}}</h3>
                                </a>
                            </div>
                            <div class="movie-info">
                                <div class="info-section">
                                    <label>Length</label>
                                    <span>{{film.length}}</span>
                                </div><!--date,time-->
                                <div class="info-section">
                                    <label>Nation</label>
                                    <span>{{film.nation}}</span>
                                </div><!--row-->
                                <div class="info-section">
                                    <label>Resolution</label>
                                    <span>{{film.resolution}}</span>
                                </div><!--screen-->
                            </div>
                        </div><!--movie-content-->
                    </div><!--movie-card-->

                </div>
                <div class="trending">
                </div>

            </div>
            <div class="clearfix"></div>

        </div>
        <div class="clearfix"></div>

    </div>
</div>
</template>

<script>
  import _ from 'lodash';
  import TopSideBar from '../top_side_bar/TopSideBar';

  export default {

    components: {
      top_side_bar: TopSideBar
    },

    props: ['name'],

    data() {
      return {
        films: null,
        actor_name: null
      }
    },
    created() {
      this.convertName();
      this.getFilms();
    },

    methods: {
      getFilms() {
        let params = {
          actor: this.name
        };
        Request.get('/api/film-by-actor', params).then((response) => {
          this.films = response.data;
        });
      },

      getLink(film) {
        return '/category/' + film.category + '/' + film.slug;
      },

      getBackground(image) {
        let url = 'url("' + image + '")';

        let styleObject = {
          background: url,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };

        return styleObject;
      },

      convertName() {
        this.actor_name = _.upperCase(_.replace(this.name, '-', ' '));
      }
    },

    head: {
      title: function () {
        return {
          inner: this.actor_name + ' PORNO VIDEOS',
          separator: ' ', // Leave empty separator
          complement: ' ' // Leave empty complement
        }
      },
      meta:  function () {
        return [
          { name: 'description', content: 'Uhr all' + this.actor_name + ' porn videos - ONE-XX.de' }
        ]
      }
    }

  }

</script>