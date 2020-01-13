<template>
  <nav class="menu" :class="{ 'menu--open': isMenuOpen }">
    <router-link class="menu__link" to="/">
      Filmes não curados
    </router-link>
    <router-link class="menu__link" to="/liked-movies">
      Filmes curtidos
    </router-link>
    <router-link class="menu__link" to="/disliked-movies">
      Filmes não curtidos
    </router-link>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState(['isMenuOpen']),
  },
  methods: {
    ...mapMutations(['toggleMenu']),
  },
}
</script>

<style lang="stylus" scoped>

.menu
  position fixed
  width 0
  height 100vh
  top 0
  left 0
  display flex
  flex-direction column
  justify-content center
  overflow-x hidden
  background-color dark-gray
  transition .3s
  white-space nowrap
  z-index 1
  @media only screen and (min-width 321px)
    position static
    width 100%
    height 120px
    flex-direction row
    align-items center
    background-color transparent
    font-size .8rem

.menu__link
  margin  1rem
  text-transform uppercase
  font-weight $bold
  text-decoration none
  color #fff
  transition 0.3s

.menu--open
  width 75vw
</style>
