<template>
<div class="box-streaming">
    <div class="recent-bar">
        <div class="container">
            <h4 class="recent-title" v-cloak>Hot porno</h4>
        </div>
    </div>
    <div class="container">
        <ul class="list-stream">
            <li class="stream-item" v-for="film in films" @click="redirect(film)">
                <div class="stream-index">
                    <div class="thumb-img">
                        <img :src="getImage(film.image)" :alt="'gratis pornos - ' + film.name" class="img img-responsive">
                    </div>
                </div>
                <div class="stream-details">
                    <div class="title text-bold">
                        {{film.name}}
                    </div>
                    <div class="meta">{{film.length}}</div>
                    <div class="description">{{film.view_number}} views</div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import './recent.scss'

    export default {

      props: ['category'],

      created() {
        this.getFilms();
      },

      watch: {
        '$route.params.category': function(val) {
          this.clone_category = val;
          this.getFilms();
        },
      },

      data() {
        return {
          films: null,
          clone_category: this.category
        }
      },

      methods: {
        getFilms() {
          let params = {
            category: this.$route.name === 'home' ? 'all' : this.clone_category,
            current_film: this.$route.name === 'home' ? '' : this.$route.params.film,
          };
          Request.get('/api/list-hot-films', params).then((response) => {
            this.films = response.data;
          });
        },

        redirect(film) {
          this.$router.push({
            name: 'watch_video',
            params: {category: film.category, film: film.slug}
          })
        },

        getImage(image) {
          return $baseUrl + '/storage/img/film/' + image;
        }
      }
    }
</script>
