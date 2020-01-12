<template>
  <nav class="menu" :class="{ 'menu--open': isMenuOpen }">
    <router-link class="menu__link" to="/">
      <span @click="toggleMenu">Filmes não curados</span>
    </router-link>
    <router-link class="menu__link" to="/liked-movies">
      <span @click="toggleMenu">Filmes curtidos</span>
    </router-link>
    <router-link class="menu__link" to="/disliked-movies">
      <span @click="toggleMenu">Filmes não curtidos</span>
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
  background-color #444444
  transition .3s
  white-space nowrap
  z-index 1

.menu__link
  margin  1rem
  text-transform uppercase
  font-weight 600
  text-decoration none
  color #fff
  display block
  transition 0.3s

.menu--open
  width 75vw
</style>
