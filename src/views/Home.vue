<template>
  <div class="home">
    <div class="header" :class="{ 'header--collapsed': toggleMenu }">
      <img
        class="header__menu"
        src="@/assets/menu-lateral.png"
        alt="Botão do menu"
        @click="toggleMenu = !toggleMenu"
      />
      <img
        class="header__logo"
        src="@/assets/logo-viva-decora.png"
        alt="Logo Viva Decora"
      />
    </div>
    <div class="menu" :class="{ 'menu--open': toggleMenu }">
      <router-link class="menu__link" to="/">
        <span @click="toggleMenu = !toggleMenu">Filmes não curados</span>
      </router-link>
      <router-link
        class="menu__link"
        @click="toggleMenu = !toggleMenu"
        to="/liked-movies"
      >
        <span @click="toggleMenu = !toggleMenu">Filmes curtidos</span>
      </router-link>
      <router-link
        class="menu__link"
        @click="toggleMenu = !toggleMenu"
        to="/disliked-movies"
      >
        <span @click="toggleMenu = !toggleMenu">Filmes não curtidos</span>
      </router-link>
    </div>
    <div class="body" :class="{ 'body--collapsed': toggleMenu }">
      <slot />
    </div>
    <div class="background">
      <img
        v-if="$route.name === 'home'"
        class="background__image"
        :src="'https://image.tmdb.org/t/p/w500/' + getCurrentMovie.poster_path"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      toggleMenu: false,
    }
  },
  computed: {
    ...mapGetters(['getCurrentMovie']),
  },
}
</script>

<style lang="stylus" scoped>
.home
  width 100vw
  display flex
  flex-direction column

.header
  position relative
  display flex
  justify-content center
  height 5rem
  width 100vw

.header__menu
  align-self center
  position absolute
  top 2rem
  left 2rem
  cursor pointer


.header__logo
  align-self center

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

.header--collapsed
  margin-left 75vw

.body
  width 100%


.body--collapsed
  margin-left 75vw

.background
  width 100vw
  height 100vh
  position fixed
  z-index -1
  background linear-gradient(60deg, #ff1c1c  0%, #ff5656  100%)

.background__image
  width 100%
  height 100%
  object-fit cover
  opacity .2
</style>
