<template>
  <header class="header" :class="{ 'header--collapsed': isMenuOpen }">
    <img
      class="header__menu"
      src="@/assets/menu-lateral.png"
      alt="Botão do menu"
      @click="toggleMenu"
    />
    <img
      class="header__logo"
      src="@/assets/logo-viva-decora.png"
      alt="Logo Viva Decora"
    />
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app-header',
  computed: {
    ...mapState(['isMenuOpen']),
  },
  methods: {
    ...mapMutations(['toggleMenu']),
  },
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  display flex
  justify-content center
  height 5rem
  width 100vw
  overflow hidden

.header__menu
  align-self center
  position absolute
  top 2rem
  left 2rem
  cursor pointer
  @media only screen and (min-width 321px)
    display none

.header__logo
  align-self center

.header--collapsed
  margin-left 75vw
</style>
