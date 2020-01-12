<template>
  <button class="button" @click="dislikeMovie">
    <img src="@/assets/n-curti.png" alt="Não curti!" />
    <span class="button__text">Não curti!</span>
  </button>
</template>

<script>
export default {
  methods: {
    dislikeMovie() {
      this.$emit('dislikeMovie')
    },
  },
}
</script>

<style lang="stylus" scoped>
.button
  border none
  background-color #fff
  width 4rem
  height 4rem
  display flex
  align-items center
  justify-content center
  font-weight 600
  text-transform uppercase
  border-radius 2rem
  cursor pointer

.button__text
  display none
</style>
