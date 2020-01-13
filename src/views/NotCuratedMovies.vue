<template>
  <div>
    <section v-if="getCurrentMovie">
      <CurrentMovie :current-movie="getCurrentMovie" />
      <section class="buttons_section">
        <DislikeButton @dislikeMovie="dislikeMovie" />
        <SkipButton @skip="skip" />
        <LikeButton @likeMovie="likeMovie" />
      </section>
    </section>
    <NoMovies v-else />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    CurrentMovie: () => import('@/components/CurrentMovie.vue'),
    DislikeButton: () => import('@/components/DislikeButton.vue'),
    SkipButton: () => import('@/components/SkipButton.vue'),
    LikeButton: () => import('@/components/LikeButton.vue'),
    NoMovies: () => import('@/components/NoMovies.vue'),
  },
  computed: {
    ...mapState(['moviesList']),
    ...mapGetters(['getCurrentMovie']),
  },
  methods: {
    ...mapMutations([
      'addLikedMovie',
      'skipMovie',
      'addDislikedMovie',
      'removeCuratedMovie',
    ]),
    likeMovie() {
      this.addLikedMovie(this.getCurrentMovie)
      this.removeCuratedMovie()
    },
    skip() {
      this.skipMovie()
    },
    dislikeMovie() {
      this.addDislikedMovie(this.getCurrentMovie)
      this.removeCuratedMovie()
    },
  },
}
</script>

<style lang="stylus" scoped>
.buttons_section
  display flex
  width 100%
  justify-content space-between
  align-items center
  padding 1rem
  @media only screen and (min-width 321px)
    justify-content center
    margin-top 40px
</style>
