<template>
  <section class="description__rates">
    <img
      class="rates"
      v-for="(n, i) in upvotes"
      :key="i"
      src="@/assets/favorite.png"
      alt=""
    />
    <img
      class="rates downvote"
      v-for="n in downvotes"
      :key="n + 10"
      src="@/assets/favorite_.png"
      alt=""
    />
  </section>
</template>

<script>
export default {
  props: {
    movieRate: Number,
  },
  computed: {
    upvotes() {
      return Math.round(this.movieRate / 2)
    },
    downvotes() {
      return 5 - this.upvotes
    },
  },
}
</script>

<style lang="stylus" scoped>

.rates
  margin-right .25rem
  height 1rem

.downvote
  filter contrast(50%)
</style>
