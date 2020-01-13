<template>
  <div class="list">
    <p class="title">Filmes Curtidos</p>
    <NoMovies v-if="likedMovies.length === 0" />
    <MoviesList :movies-list="likedMovies" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    MoviesList: () => import('@/components/MoviesList.vue'),
    NoMovies: () => import('@/components/NoMovies.vue'),
  },
  computed: {
    ...mapState(['likedMovies']),
  },
}
</script>

<style lang="stylus" scoped>
.list
  background-color light-gray
  @media only screen and (min-width 321px)
    padding 0 20%


.title
  font-size 1.5rem
  font-weight $bold
  text-transform uppercase
  padding .5rem
  color dark-gray
</style>
