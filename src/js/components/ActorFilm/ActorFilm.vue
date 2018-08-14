<template>
<div>
    <top_side_bar></top_side_bar>

    <div>
        <div class="recent-bar">
            <div class="container">
                <h4 class="recent-title">Actor > {{name}}</h4>
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

  import TopSideBar from '../top_side_bar/TopSideBar';

  export default {

    components: {
      top_side_bar: TopSideBar
    },

    props: ['name'],

    data() {
      return {
        films: null
      }
    },
    created() {
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
      }
    }

  }

</script>