<template>
  <div class="list">
    <p class="title">Filmes Não Curtidos</p>
    <NoMovies v-if="dislikedMovies.length === 0" />
    <MoviesList :movies-list="dislikedMovies" />
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
    ...mapState(['dislikedMovies']),
  },
}
</script>

<style lang="stylus" scoped>
.list
  background-color #f4f4f4

.title
  font-size 1.5rem
  font-weight 600
  text-transform uppercase
  padding .5rem
  color #444444
</style>
