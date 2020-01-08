<template>
  <MoviesList :movies-list="likedMovies" />
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: { MoviesList: () => import('@/components/MoviesList.vue') },
  computed: {
    ...mapState(['likedMovies']),
  },
}
</script>

<style></style>
