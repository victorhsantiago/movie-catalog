<template>
  <section>
    <section class="movie">
      <img
        class="movie__image"
        :src="'https://image.tmdb.org/t/p/w500/' + currentMovie.poster_path"
        alt=""
      />
      <section class="movie__description">
        <p class="description__title">
          {{ currentMovie.original_title }}
        </p>
        <p class="description__subtitle hidden_mobile">
          {{ currentMovie.release_date | onlyYear }} -
          <span v-for="(id, i) in currentMovie.genre_ids" :key="i">
            {{ genres(id) }} <span>/</span>
          </span>
        </p>
        <MovieRates
          class="description__rates"
          :movie-rate="currentMovie.vote_average"
        />
        <span class="description__votes">
          ({{ currentMovie.vote_count }} avaliações)
        </span>
        <p class="description__overview">
          {{ currentMovie.overview }}
        </p>
        <p class="description__sinopse" @click="prepareModal(currentMovie)">
          Ver sinopse
        </p>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    MovieRates: () => import('@/components/MovieRates.vue'),
  },
  props: {
    currentMovie: Object,
  },
  computed: {
    ...mapState(['isMenuOpen']),
    ...mapGetters(['getMovieGenre']),
    upvotes() {
      return Math.round(this.currentMovie.vote_average / 2)
    },
    downvotes() {
      return 5 - this.upvotes
    },
  },
  methods: {
    ...mapActions(['prepareModal']),
    genres(id) {
      const { name } = this.getMovieGenre(id)
      return name
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
  margin auto
  @media only screen and (min-width 321px)
    width 700px
    height 460px
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
  @media only screen and (min-width 321px)
    align-items end
    grid-template-areas "title title title title rate" \
                        "subtitle subtitle subtitle subtitle votes" \
                        "overview overview overview sinopse sinopse"
.description__title
  grid-area title
  margin .5rem 0
  text-transform uppercase
  font-size 1.25rem
  color white
  font-weight $bold
  @media only screen and (min-width 321px)
    font-size 2rem

.description__subtitle
  grid-area subtitle
  text-transform uppercase
  font-weight bold
  color gray
  text-align center
  margin .5rem 0
  > span:last-child span:last-child
    display none
  @media only screen and (min-width 321px)
    text-align left
    color white

.description__rates
  grid-area rate
  margin .5rem 0

.description__votes
  grid-area votes
  margin .5rem 0
  font-size .75rem
  color white

.description__overview
  grid-area overview
  margin .5rem 0
  font-size .75rem
  color white
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.description__sinopse
  grid-area sinopse
  margin .5rem 0
  font-size .75rem
  text-decoration underline
  color #ff5656
  text-align right
  cursor pointer
</style>
