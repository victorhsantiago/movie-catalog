<template>
  <section class="movies__list">
    <section class="movie" v-for="(movie, i) in moviesList" :key="i">
      <img
        class="movie__image"
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        alt=""
      />
      <section class="movie__description">
        <p class="description__title">
          {{ movie.original_title }}
        </p>
        <MovieRates class="movie__rates" :movie-rate="movie.vote_average" />
        <span class="movie__votes hidden_mobile">
          ({{ movie.vote_count }} avaliações)
        </span>
        <p class="movie__overview hidden_mobile">
          {{ movie.overview }}
        </p>
        <p class="movie__sinopse hidden_mobile" @click="prepareModal(movie)">
          Ver sinopse
        </p>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
    MovieRates: () => import('@/components/MovieRates.vue'),
  },
  props: { moviesList: Array },
  methods: {
    ...mapActions(['prepareModal']),
    upvotes(movie) {
      return Math.round(movie.vote_average / 2)
    },
    downvotes(movie) {
      return 5 - this.upvotes(movie)
    },
  },
}
</script>

<style lang="stylus" scoped>
.movies__list
  display flex
  flex-wrap wrap

.movie
  width 140px
  height 174px
  border-radius .25rem
  overflow hidden
  position relative
  margin 0 .5rem 1rem .5rem
  @media only screen and (min-width 321px)
    width 294px
    height 350px
    margin 0 1.5rem 3rem 1.5rem

.movie__image
  width 100%
  height 100%
  object-fit cover

.movie__description
  width 100%
  position absolute
  bottom 0
  padding .5rem
  background linear-gradient(0deg, rgba(100,100,100,1) 0%, rgba(255,255,255,0) 100%)
  @media only screen and (min-width 321px)
    display grid
    align-items end
    grid-template-areas "title title title title title" \
                        "rate rate rate votes votes" \
                        "overview overview overview sinopse sinopse"

.description__title
  grid-area title
  margin-bottom .5rem
  font-size .8rem
  text-transform uppercase
  color #FFF
  font-weight $bold
  @media only screen and (min-width 321px)
    font-size 1rem

.movie__rates
  grid-area rate


.movie__votes
  grid-area votes
  margin .5rem 0
  font-size .75rem
  color white

.movie__overview
  grid-area overview
  margin .5rem 0
  font-size .75rem
  color white
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.movie__sinopse
  grid-area sinopse
  margin .5rem 0
  font-size .75rem
  text-decoration underline
  color #ff5656
  text-align right
  cursor pointer
</style>
