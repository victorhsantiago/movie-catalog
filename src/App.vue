<template>
  <div id="app">
    <Home>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </Home>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: { Home: () => import('@/views/Home') },
  created() {
    this.getMoviesList()
  },
  methods: {
    ...mapActions(['getMoviesList']),
  },
}
</script>

<style>
@import url('./style/style.css');
</style>
