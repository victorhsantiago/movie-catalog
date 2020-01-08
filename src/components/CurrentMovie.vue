<template>
  <div class="movie">
    <img
      class="movie movie__image"
      :src="'https://image.tmdb.org/t/p/w500/' + currentMovie.poster_path"
      alt=""
    />
    <section class="movie__description">
      <p class="description__title">
        {{ currentMovie.original_title }}
      </p>
      <section class="description__rates">
        <img
          class="rates__rate"
          v-for="(n, i) in upvotes"
          :key="i"
          src="@/assets/favorite.png"
          alt=""
        />
        <img
          class="rates__rate"
          v-for="n in downvotes"
          :key="n + 10"
          src="@/assets/favorite_.png"
          alt=""
        />
      </section>
      <span class="description__votes">
        ({{ currentMovie.vote_count }} avaliações)
      </span>
      <p class="description__overview">
        {{ currentMovie.overview }}
      </p>
      <p class="description__sinopse">
        Ver sinopse
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    currentMovie: Object,
  },
  computed: {
    upvotes() {
      return Math.round(this.currentMovie.vote_average / 2)
    },
    downvotes() {
      return 5 - this.upvotes
    },
  },
}
</script>

<style lang="stylus" scoped>
.movie
  width 294px
  height 350px
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
  display grid
  grid-template-areas "title title title title title" \
                      "rate rate rate votes votes" \
                      "overview overview overview sinopse sinopse"
  background linear-gradient(0deg, rgba(100,100,100,.75) 0%, rgba(255,255,255,0) 100%)

.description__title
  grid-area title
  text-transform uppercase
  font-size 1.25rem
  color #FFF
  font-weight 500

.description__rates
  grid-area rate

.rates__rate
  margin-right .5rem

.description__votes
  grid-area votes
  font-size .75rem
  color #FFF

.description__overview
  grid-area overview
  font-size .75rem
  color #FFF
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.description__sinopse
  grid-area sinopse
  font-size .75rem
  text-decoration underline
  color #ff5656
  text-align right
</style>
