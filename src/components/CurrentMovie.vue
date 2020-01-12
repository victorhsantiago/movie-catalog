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
        <p class="description__sinopse" @click="toggleModal">
          Ver sinopse
        </p>
      </section>
    </section>
    <MovieModal :movie="currentMovie" />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    MovieRates: () => import('@/components/MovieRates.vue'),
    MovieModal: () => import('@/components/MovieModal.vue'),
  },
  props: {
    currentMovie: Object,
  },
  computed: {
    ...mapState(['isMenuOpen']),
    upvotes() {
      return Math.round(this.currentMovie.vote_average / 2)
    },
    downvotes() {
      return 5 - this.upvotes
    },
  },
  methods: {
    ...mapMutations(['toggleModal']),
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
  margin .5rem 0
  text-transform uppercase
  font-size 1.25rem
  color #FFF
  font-weight 600

.description__rates
  grid-area rate
  margin .5rem 0

.description__votes
  grid-area votes
  margin .5rem 0
  font-size .75rem
  color #FFF

.description__overview
  grid-area overview
  margin .5rem 0
  font-size .75rem
  color #FFF
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
</style>
