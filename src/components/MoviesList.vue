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
  display grid
  grid-template-columns repeat(2, 1fr)
  grid-gap .5rem
  justify-items center
  padding .5rem

.movie
  width 100%
  height 175px
  border-radius .25rem
  overflow hidden
  position relative

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
  font-weight 600
</style>
