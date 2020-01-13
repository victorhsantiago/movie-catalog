<template>
  <transition name="fade">
    <div v-if="isModalOpen" class="modal">
      <div class="movie">
        <button class="modal__button" @click="toggleModal">x</button>
        <div class="stripe" />
        <img
          class="movie__image"
          :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          alt=""
        />
        <p class="description__title">
          {{ movie.original_title }}
        </p>
        <p class="description__subtitle">
          {{ movie.release_date | onlyYear }} -
          <span v-for="(id, i) in movie.genre_ids" :key="i">
            {{ genres(id) }} <span>/</span>
          </span>
        </p>
        <MovieRates
          class="description__rates"
          :movie-rate="movie.vote_average"
        />
        <span class="description__votes">
          ({{ movie.vote_count }} avaliações)
        </span>
        <p class="description__overview">
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    MovieRates: () => import('@/components/MovieRates.vue'),
  },
  props: {
    movie: Object,
  },
  computed: {
    ...mapState(['isModalOpen']),
    ...mapGetters(['getMovieGenre']),
  },
  methods: {
    ...mapMutations(['toggleModal']),
    genres(id) {
      const { name } = this.getMovieGenre(id)
      return name
    },
  },
}
</script>

<style lang="stylus" scoped>
.modal
  width 100%
  height 100%
  position absolute
  top 0
  left 0
  display flex
  justify-content center
  align-items center
  background-color rgba(#333, .8)
  z-index 1

.modal__button
  position absolute
  top 5px
  right 5px
  z-index 1
  border none
  background-color white
  color dark-gray
  font-size 1.5rem
  font-weight $bold
  width 3rem
  height 3rem
  border-radius: 2rem
  cursor pointer
  text-transform uppercase

.movie
  width 90%
  height 90%
  border-radius .5rem
  overflow hidden
  display flex
  flex-direction column
  align-items center
  background-color white
  padding 1.5rem
  position relative
  @media only screen and (min-width 321px)
    width 60%
    height 60%
    padding 1.5rem 3rem

.stripe
  width 100%
  height 120px
  background-color #ff5656
  position absolute
  top 0

.movie__image
  display block
  border-radius .25rem
  width 120px
  height 140px
  object-fit cover
  z-index 1
  margin .5rem 0
  @media only screen and (min-width 321px)
    width 145px
    height 174px

.description__title
  text-transform uppercase
  font-size 1.25rem
  color dark-gray
  font-weight $bold
  margin .5rem 0
  text-align center

.description__subtitle
  text-transform uppercase
  font-weight bold
  color gray
  text-align center
  margin .5rem 0
  > span:last-child span:last-child
    display none

.description__rates
  margin .5rem 0

.description__votes
  font-size .75rem
  font-weight bold
  color gray
  margin .5rem 0

.description__overview
  color dark-gray
  font-weight bold
  letter-spacing .5px
  line-height 1.5rem
  overflow auto
  margin .5rem 0
</style>
