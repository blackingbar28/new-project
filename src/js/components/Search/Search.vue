<template>
    <div>
        <top_side_bar></top_side_bar>

        <div>
            <div class="recent-bar">
                <div class="container">
                    <h4 class="recent-title">Search: {{film}}</h4>
                </div>
            </div>
            <div class="container">
                <div v-if="films && !films.length">
                    <h5>No data found.</h5>
                </div>
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

    props: ['film'],

    data() {
      return {
        films: null,
        clone_search: this.film
      }
    },

    created() {
      this.getFilms();
    },

    watch: {
      '$route.params.film': function (val) {
        this.clone_search = val;
        this.getFilms();
      },
    },

    head: {
      title: function () {
        return {
          inner: 'Suche pornos videos',
          separator: ' ', // Leave empty separator
          complement: ' ' // Leave empty complement
        }
      },
      meta: [
        { name: 'description', content: 'Suche pornos videos' }
      ],
      link: [
        { rel: 'canonical', href: 'http://one-xx.de/search' }
      ]
    },

    methods: {
      getFilms() {
        let params = {
          search: this.clone_search
        };
        Request.get('/api/search', params).then((response) => {
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