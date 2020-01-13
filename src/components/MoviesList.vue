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
        <MovieRates
          class="description__rates"
          :movie-rate="movie.vote_average"
        />
      </section>
    </section>
  </section>
</template>

<script>
export default {
  components: {
    MovieRates: () => import('@/components/MovieRates.vue'),
  },

  props: { moviesList: Array },
  methods: {
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

.description__title
  margin-bottom .5rem
  font-size .8rem
  text-transform uppercase
  color #FFF
  font-weight $bold
</style>
