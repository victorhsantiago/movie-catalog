<template>
  <div class="movies__list">
    <div class="movie" v-for="(movie, i) in moviesList" :key="i">
      <img
        class="movie__image"
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        alt=""
      />
      <section class="movie__description">
        <p class="description__title">
          {{ movie.original_title }}
        </p>
        <section class="description__rates">
          <img
            class="rates__rate"
            v-for="(n, i) in upvotes(movie)"
            :key="i"
            src="@/assets/favorite.png"
            alt=""
          />
          <img
            class="rates__rate"
            v-for="n in downvotes(movie)"
            :key="n + 10"
            src="@/assets/favorite_.png"
            alt=""
          />
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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
  background linear-gradient(0deg, rgba(100,100,100,.75) 0%, rgba(255,255,255,0) 100%)

.description__title
  text-transform uppercase
  color #FFF
  font-weight 600

.rates__rate
  margin-right .25rem
</style>
