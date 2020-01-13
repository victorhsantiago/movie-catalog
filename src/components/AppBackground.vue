<template>
  <div class="background">
    <img
      v-if="$route.name === 'home' && getCurrentMovie"
      class="background__image"
      :src="'https://image.tmdb.org/t/p/w500/' + getCurrentMovie.poster_path"
      alt=""
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app-background',
  computed: {
    ...mapGetters(['getCurrentMovie']),
  },
}
</script>

<style lang="stylus" scoped>
.background
  width 100vw
  height 100vh
  position fixed
  z-index -1
  background linear-gradient(-60deg, #ff1c1c  0%, #ff5656  100%)
  overflow hidden

.background__image
  width 100%
  height 100%
  object-fit cover
  opacity .1
</style>
