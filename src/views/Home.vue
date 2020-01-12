<template>
  <section class="home">
    <AppHeader />
    <AppMenu />
    <section class="body" :class="{ 'body--collapsed': isMenuOpen }">
      <slot />
    </section>
    <AppBackground />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    AppHeader: () => import('@/components/AppHeader.vue'),
    AppMenu: () => import('@/components/AppMenu.vue'),
    AppBackground: () => import('@/components/AppBackground.vue'),
  },
  computed: {
    ...mapState(['isMenuOpen']),
  },
  methods: {
    ...mapMutations(['toggleMenu']),
  },
}
</script>

<style lang="stylus" scoped>
.home
  width 100vw
  display flex
  flex-direction column

.body
  width 100%

.body--collapsed
  margin-left 75vw
</style>
