<template>
<div>
    <div class="recent-bar">
        <div class="container">
            <h4 class="recent-title">{{title}}</h4>
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
    <div class="clearfix"></div>
    <div class="clearfix"></div>
    <div class="d-flex justify-content-center">
        <pagination :records="total" :per-page="perPage" @paginate="setPage"></pagination>
    </div>
    <div class="clearfix"></div>

</div>
<div class="clearfix"></div>
<recent :category="category_clone"></recent>

</div>
</template>

<script>

  import './main_content.scss'
  import {Pagination} from 'vue-pagination-2';
  import RecentVideo from '../recent_video_streaming/RecentVideo'

  export default {

    components: {
      recent: RecentVideo,
      Pagination
    },

    props: ['category'],

    watch: {
      '$route.params.category': function(val) {
        this.category_clone = val;
        this.getFilms();
        this.getTitle();
      },
    },

    data() {
      return {
        films: null,
        from: 0,
        to: 0,
        total: 0,
        perPage: 6,
        page: 1,
        category_clone: this.category,
        title: ''
      }
    },

    created() {
      this.getFilms();
      this.getTitle();
    },

    methods: {
      getFilms() {
        let params = {
          page: this.page,
          category: this.category_clone
        };
        Request.get('/api/list-films', params).then((response) => {
          this.films = response.data.data;
          this.total = response.data.total;
          this.from = response.data.from;
          this.to = response.data.to;
          this.perPage = response.data.per_page;
        });
      },

      getTitle() {
        switch (this.category_clone) {
          case 'censored':
            this.title = 'Censored';
            break;
          case 'uncensored':
            this.title = 'UnCensored';
            break;
          default:
            this.title = 'Recent films';
            break;
        }
      },

      setPage(page) {
        this.page = page;
        this.getFilms();
      },

      getLink(film) {
        return '/category/' + film.category + '/' + film.slug;
      },

      getBackground(image) {
        let url = 'url("' + $baseUrl + '/storage/img/film/' + image + '")';

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