<template>
  <div>
    <div v-for="(movie, i) in moviesList" :key="i">
      {{ movie.id }}
    </div>
  </div>
</template>

<script>
export default {
  props: { moviesList: Array },
}
</script>

<style scoped></style>
