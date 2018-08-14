<template>
<div>
    <top_side_bar></top_side_bar>
    <div>
        <div class="recent-bar">
            <div class="container">
                <h4 class="recent-title">List all actors</h4>
            </div>
        </div>

        <div class="container">
            <div class="card-deck">
                <div class="card my-3 actor-card" v-for="actor in actors" @click="redirectToActorFilm(actor)">
                    <img :src="actor.avatar" class="card-img-top">
                    <div class="card-body">
                        <h4 class="card-title">{{actor.name}}</h4>
                        <p class="card-text">Year: {{actor.born_date}}</p>
                        <p class="card-text">Nation: {{actor.nation}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

  import TopSideBar from '../top_side_bar/TopSideBar';

    export default {

      components: {
        top_side_bar: TopSideBar
      },

      data() {
        return {
          actors: null
        }
      },

      created() {
        this.getActors();
      },

      methods: {
        getActors() {
          Request.get('/api/actor').then((response) => {
            this.actors = response.data;
          });
        },

        redirectToActorFilm(actor) {
          this.$router.push({
            name: 'actor_film',
            params: {name: actor.slug}
          });
        }
      }
    }

</script>

<style lang="scss">
    // Bootstrap 4 breakpoints & gutter
    $grid-breakpoints: (
            xs: 0,
            sm: 576px,
            md: 768px,
            lg: 992px,
            xl: 1200px
    ) !default;

    $grid-gutter-width: 30px !default;

    // number of cards per line for each breakpoint
    $cards-per-line: (
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5
    );

    @each $name, $breakpoint in $grid-breakpoints {
        @media (min-width: $breakpoint) {
            .card-deck .card {
                flex: 0 0 calc(#{100/map-get($cards-per-line, $name)}% - #{$grid-gutter-width});
            }
        }
    }

    .actor-card {
        cursor: pointer;
    }

</style>