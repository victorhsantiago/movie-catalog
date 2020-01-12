<template>
  <div id="app">
    <AppLoader v-if="loadingMovies" />
    <Home v-else>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </Home>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Home: () => import('@/views/Home'),
    AppLoader: () => import('@/components/AppLoader'),
  },
  computed: {
    ...mapState(['loadingMovies']),
  },
  created() {
    this.getMoviesList()
    this.getGenresList()
  },
  methods: {
    ...mapActions(['getMoviesList', 'getGenresList']),
  },
}
</script>

<style lang="stylus">
@import 'style/style.styl'
</style>
