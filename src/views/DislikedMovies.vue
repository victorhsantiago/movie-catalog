<template>
  <MoviesList :movies-list="dislikedMovies" />
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: { MoviesList: () => import('@/components/MoviesList.vue') },
  computed: {
    ...mapState(['dislikedMovies']),
  },
}
</script>

<style></style>
