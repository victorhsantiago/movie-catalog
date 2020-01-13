<template>
  <div class="list">
    <div class="list__wrapper">
      <p class="title">Filmes Curtidos</p>
      <NoMovies v-if="likedMovies.length === 0" />
      <MoviesList v-else :movies-list="likedMovies" />
    </div>
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

.list__wrapper
  @media only screen and (min-width 321px)
    margin auto
    width 75%

.title
  font-size 1.5rem
  font-weight $bold
  text-transform uppercase
  padding 1rem .5rem
  color dark-gray
  @media only screen and (min-width 321px)
    padding 1.5rem
</style>
